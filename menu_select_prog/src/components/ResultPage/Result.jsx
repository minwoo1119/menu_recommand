import styles from './result.module.css';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

function Result() {
	const [messages, setMessages] = useState([]);
	const [responseText, setResponseText] = useState('');
	const [loading, setLoading] = useState(false); // 로딩 상태 추가

	const {
		selectedCategories = [],
		selectedSpicy = [],
		recentFoodInput,
		additionalRequirements,
	} = useContext(SelectedCategoriesContext);

	// 문장을 생성하는 함수
	const makeMessages = () => {
		// selectedCategories와 selectedSpicy가 배열이 아닌 경우를 대비
		const safeSelectedCategories = Array.isArray(selectedCategories)
			? selectedCategories
			: [];
		const safeSelectedSpicy = Array.isArray(selectedSpicy) ? selectedSpicy : [];

		let userMessage =
			'이러한 음식을 추천해줘, 음식이름만 콤마를 사용해서 구분하여 출력해줘\n';

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
			userMessage += `음식 카테고리는 ${selectedCategoriesText}, `;
		if (selectedSpicyText) userMessage += `맵기는 ${selectedSpicyText}, `;
		if (recentFoodInput) userMessage += `${recentFoodInput}는 제외하고, `;
		if (additionalRequirements)
			userMessage += `추가 요구 사항은 ${additionalRequirements}, `;

		// 마지막에 붙은 쉼표와 공백 제거
		userMessage = userMessage.trim().replace(/,$/, '');

		// messages 배열로 상태에 저장
		setMessages([
			{ role: 'system', content: 'You are a helpful assistant.' },
			{ role: 'user', content: userMessage },
		]);
	};

	// 컴포넌트가 렌더링될 때 메시지를 생성
	useEffect(() => {
		makeMessages();
	}, [
		selectedCategories,
		selectedSpicy,
		recentFoodInput,
		additionalRequirements,
	]);

	// ChatGPT API 호출
	const fetchResponse = async (retryCount = 0) => {
		if (messages.length > 0) {
			setLoading(true); // 로딩 상태 시작
			try {
				// 일정 시간 지연 추가 (1초)
				await new Promise((resolve) => setTimeout(resolve, 1000));

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

				setResponseText(response.data.choices[0].message.content.trim());
			} catch (error) {
				if (error.response && error.response.status === 429) {
					// 429 오류 발생 시 백오프 전략 적용
					const delay = Math.pow(2, retryCount) * 1000; // 지연 시간 계산 (2의 제곱으로 증가)
					console.warn(`429 오류 발생, ${delay / 1000}초 후 재시도`);
					setTimeout(() => fetchResponse(retryCount + 1), delay);
				} else {
					setResponseText('오류가 발생했습니다. 다시 시도해 주세요.');
					console.error('Error:', error);
				}
			} finally {
				setLoading(false); // 로딩 상태 종료
			}
		}
	};

	// messages가 변경될 때 fetchResponse 호출
	useEffect(() => {
		fetchResponse();
	}, [messages]);

	return (
		<div className={styles.container}>
			<div className={styles.heading}>결과</div>
			<div className={styles.subText}>이런 음식들은 어떠세요?</div>
			{loading ? (
				<CircularProgress /> // 로딩 상태일 때 CircularProgress 표시
			) : (
				<h2>요청 결과: {responseText}</h2>
			)}
		</div>
	);
}

export default Result;
