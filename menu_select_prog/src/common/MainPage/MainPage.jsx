import SideBar from '../SideBar/SideBar';
import styles from './mainpage.module.css';
import Header from '../Header/Header';

function MainPage() {
	return (
		<div className={styles.container}>
			<SideBar />
			<Header />
		</div>
	);
}

export default MainPage;
