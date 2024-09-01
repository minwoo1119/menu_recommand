import styles from './result.module.css';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

function Result() {
	const [sentences, setSentences] = useState('');
	const [responseText, setResponseText] = useState('');

	const {
		selectedCategories = [],
		selectedSpicy = [],
		recentFoodInput,
		additionalRequirements,
	} = useContext(SelectedCategoriesContext);

	// 문장을 생성하는 함수
	const makeSentences = () => {
		// selectedCategories와 selectedSpicy가 배열이 아닌 경우를 대비
		const safeSelectedCategories = Array.isArray(selectedCategories)
			? selectedCategories
			: [];
		const safeSelectedSpicy = Array.isArray(selectedSpicy) ? selectedSpicy : [];

		let result = '이러한 음식을 추천해줘\n';

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

		const selectedCategoriesText = safeSelectedCategories
			.map((category) => categoryMap[category])
			.filter(Boolean)
			.join(', ');
		const selectedSpicyText = safeSelectedSpicy
			.map((spicy) => spicyMap[spicy])
			.filter(Boolean)
			.join(', ');

		if (selectedCategoriesText)
			result += `음식 카테고리는 ${selectedCategoriesText}, `;
		if (selectedSpicyText) result += `맵기는 ${selectedSpicyText}, `;
		if (recentFoodInput) result += `${recentFoodInput}는 제외하고, `;
		if (additionalRequirements)
			result += `추가 요구 사항은 ${additionalRequirements}, `;

		// 마지막에 붙은 쉼표와 공백 제거
		result = result.trim().replace(/,$/, '');

		// 문장을 상태에 저장
		setSentences(result);
	};

	// 컴포넌트가 렌더링될 때 문장을 생성
	useEffect(() => {
		makeSentences();
	}, [
		selectedCategories,
		selectedSpicy,
		recentFoodInput,
		additionalRequirements,
	]);

	// ChatGPT API 호출
	useEffect(() => {
		const fetchResponse = async () => {
			if (sentences) {
				try {
					const response = await axios.post(
						'https://api.openai.com/v1/completions',
						{
							model: 'text-davinci-003', // GPT-3.5를 사용하는 경우
							prompt: sentences,
							max_tokens: 100,
							n: 1,
							stop: null,
							temperature: 0.7,
						},
						{
							headers: {
								'Content-Type': 'application/json',
								Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
							},
						},
					);

					setResponseText(response.data.choices[0].text.trim());
				} catch (error) {
					setResponseText('오류가 발생했습니다. 다시 시도해 주세요.');
					console.error('Error:', error);
				}
			}
		};

		fetchResponse();
	}, [sentences]);

	return (
		<div className={styles.container}>
			<div className={styles.heading}>결과</div>
			<div className={styles.subText}>이런 음식들은 어떠세요?</div>
			<h2>요청 결과: {responseText}</h2>
		</div>
	);
}

export default Result;
