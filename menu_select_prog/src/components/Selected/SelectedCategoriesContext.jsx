import { createContext, useState } from 'react';

export const SelectedCategoriesContext = createContext();

export const SelectedCategoriesProvider = ({ children }) => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [recentFoodInput, setRecentFoodInput] = useState('');
	const [additionalRequirements, setAdditionalRequirements] = useState('');

	return (
		<SelectedCategoriesContext.Provider
			value={{
				selectedCategories,
				setSelectedCategories,
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
