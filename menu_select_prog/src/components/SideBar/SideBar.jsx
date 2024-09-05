import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';

function SideBar() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Link to="/">What the Menu</Link>
			</div>
			<div className={styles.profile}>Made by Minwoo</div>
		</div>
	);
}

export default SideBar;
