import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './mainpage.module.css';
import RandomMenu from '../RandomMenu/RandomMenu';
import { useNavigate } from 'react-router-dom';
import exampleData from '../../assets/db/dummydata.json';

function MainPage() {
	const navigate = useNavigate();

	const [randomMenus, setRandomMenus] = useState([]);

	useEffect(() => {
		const getRandomMenus = () => {
			const shuffled = [...exampleData].sort(() => 0.5 - Math.random());
			return shuffled.slice(0, 3);
		};
		setRandomMenus(getRandomMenus());
	}, []);

	const navigateMenuRecommand = () => {
		navigate('/recommand');
	};

	return (
		<div className={styles.container}>
			<div className={styles.sideBar}>
				<SideBar />
			</div>
			<div className={styles.content}>
				<div className={styles.randomRecommand}>
					{randomMenus.map((menu, index) => (
						<RandomMenu
							key={index}
							name={menu.foodName}
							imgUrl={menu.foodImg}
							description={menu.description}
						/>
					))}
				</div>
				<div className={styles.goRecommand}>
					<div className={styles.contentTxt}>
						마음에 드는 메뉴가 없으신가요?
					</div>
					<button
						onClick={navigateMenuRecommand}
						className={styles.goRecommandBtn}
					>
						맞춤 메뉴 추천받기
					</button>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
