import { createContext, useState } from 'react';

export const SelectedCategoriesContext = createContext();

export const SelectedCategoriesProvider = ({ children }) => {
	const [selectedCategory, setSelectedCategory] = useState('koreanFood'); // 기본값을 'koreanFood'로 설정
	const [selectedSpicy, setSelectedSpicy] = useState('');
	const [recentFoodInput, setRecentFoodInput] = useState('');
	const [additionalRequirements, setAdditionalRequirements] = useState('');

	return (
		<SelectedCategoriesContext.Provider
			value={{
				selectedCategory,
				setSelectedCategory,
				selectedSpicy,
				setSelectedSpicy,
				recentFoodInput,
				setRecentFoodInput,
				additionalRequirements,
				setAdditionalRequirements,
			}}
		>
			{children}
		</SelectedCategoriesContext.Provider>
	);
};
