import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
