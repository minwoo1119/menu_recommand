import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SelectedCategoriesProvider } from './components/Selected/SelectedCategoriesContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SelectedCategoriesProvider>
			<App />
		</SelectedCategoriesProvider>
	</React.StrictMode>,
);
