import styles from './selectedcategoriescontext.module.css';

import { createContext, useState } from 'react';

export const SelectedCategoriesContext = createContext();

export const SelectedCategoriesProvider = ({ children }) => {
	const [selectedCategories, setSelectedCategories] = useState([]);

	return (
		<SelectedCategoriesContext.Provider
			value={{ selectedCategories, setSelectedCategories }}
		>
			{children}
		</SelectedCategoriesContext.Provider>
	);
};
