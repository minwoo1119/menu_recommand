import styles from './result.module.css';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import FoodCard from '../../common/foodCard/FoodCard';

function Result() {
	const [responseText, setResponseText] = useState('');
	const [loading, setLoading] = useState(false); // 로딩 상태 추가
	const [resultFoods, setResultFoods] = useState([]); // 결과 음식 배열

	const {
		selectedCategory,
		selectedSpicy,
		recentFoodInput,
		additionalRequirements,
	} = useContext(SelectedCategoriesContext);

	const createMessage = () => {
		const safeSelectedSpicy = Array.isArray(selectedSpicy)
			? selectedSpicy
			: ['nospicy']; // 기본값 설정

		let userMessage =
			'다음 조건에 해당하는 음식이름을 알려줘. 음식 이름만 볶음밥, 닭갈비, 불고기 처럼 출력해주면 돼. 콤마를 사용해서 구분하여 3개만 출력해줘\n';

		const categoryMap = {
			chineseFood: '중식',
			koreanFood: '한식',
			japaneseFood: '일식',
			italianFood: '양식',
		};

		const spicyMap = {
			nospicy: '하나도 맵지 않은 정도',
			littlespicy: '조금 매운 정도',
			prettyspicy: '꽤 매운 정도',
			amazingspicy: '엄청나게 매운 정도',
		};

		const selectedCategoryText = categoryMap[selectedCategory]; // 단일 카테고리 선택
		const selectedSpicyText = safeSelectedSpicy
			.map((spicy) => spicyMap[spicy])
			.filter(Boolean)
			.join(', ');

		if (selectedCategoryText)
			userMessage += `음식 카테고리는 ${selectedCategoryText}, `;
		if (selectedSpicyText) userMessage += `맵기는 ${selectedSpicyText}, `;
		if (recentFoodInput) userMessage += `${recentFoodInput}는 제외하고, `;
		if (additionalRequirements)
			userMessage += `추가 요구 사항은 ${additionalRequirements}, `;

		userMessage = userMessage.trim().replace(/,$/, '');

		return [
			{ role: 'system', content: 'You are a helpful assistant.' },
			{ role: 'user', content: userMessage },
		];
	};

	const fetchResponse = async () => {
		const messages = createMessage();
		setLoading(true);

		try {
			const response = await axios.post(
				'https://api.openai.com/v1/chat/completions',
				{
					model: 'gpt-3.5-turbo',
					messages: messages,
					max_tokens: 150,
					temperature: 0.7,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
					},
				},
			);

			const responseText = response.data.choices[0].message.content.trim();
			setResponseText(responseText);

			// ','로 구분하고 공백을 없애서 배열에 저장
			const foodsArray = responseText.split(',').map((food) => food.trim());
			setResultFoods(foodsArray);
		} catch (error) {
			if (error.response && error.response.status === 429) {
				setResponseText(
					'너무 많은 요청이 발생했습니다. 나중에 다시 시도해 주세요.',
				);
			} else {
				setResponseText('오류가 발생했습니다. 다시 시도해 주세요.');
			}
			console.error('Error:', error);
		} finally {
			setLoading(false);
		}
	};

	// 컴포넌트가 처음 렌더링될 때와 selectedCategory가 변경될 때 요청 실행
	useEffect(() => {
		fetchResponse();
	}, [
		selectedCategory,
		selectedSpicy,
		recentFoodInput,
		additionalRequirements,
	]);

	return (
		<div className={styles.container}>
			<div className={styles.heading}>결과</div>
			<div className={styles.subText}>이런 음식들은 어떠세요?</div>
			{loading ? (
				<CircularProgress />
			) : (
				<div className={styles.outputs}>
					{/* <h2>문장 : {userMessage}</h2> */}
					{/* <h2>요청 결과: {responseText}</h2> */}
					<div className={styles.foodcarts}>
						{resultFoods.map((food, index) => (
							<FoodCard key={index} foodName={food} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Result;
