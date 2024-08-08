import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import RecommandPage from './components/RecommandPage/RecommandPage';
import Recommand1 from './components/RecommandPage/Recommand1';
import Recommand2 from './components/RecommandPage/Recommand2';
import Recommand3 from './components/RecommandPage/Recommand3';

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="/recommand" element={<RecommandPage />}>
							<Route path="/recommand" element={<Recommand1 />}></Route>
							<Route path="/recommand/page2" element={<Recommand2 />}></Route>
							<Route path="/recommand/page3" element={<Recommand3 />}></Route>
						</Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
