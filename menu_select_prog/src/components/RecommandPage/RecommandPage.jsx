import styles from './recommandpage.module.css';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RecommandPage() {
	return (
		<div className={styles.container}>
			<div className={styles.sideBar}>
				<SideBar />
			</div>
			<div className={styles.content}>
				<div className={styles.headText}>
					<Link to="/">Let's Choose !</Link>
				</div>
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default RecommandPage;
