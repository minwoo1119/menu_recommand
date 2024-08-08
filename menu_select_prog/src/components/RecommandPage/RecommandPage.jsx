import styles from './recommandpage.module.css';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

function RecommandPage() {
	return (
		<div className={styles.container}>
			<div className={styles.sideBar}>
				<SideBar />
			</div>
			<div className={styles.content}>
				<div className={styles.headText}>Let's Choose !</div>
				<div>조금 더 끌리는 걸 선택해주세요!</div>
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default RecommandPage;
