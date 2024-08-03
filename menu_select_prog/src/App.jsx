import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './common/MainPage/MainPage';
import ErrorPage from './common/ErrorPage/ErrorPage';

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
