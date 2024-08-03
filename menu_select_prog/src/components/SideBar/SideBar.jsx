import styles from './sidebar.module.css';

function SideBar() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>What the Menu</div>
			<div className={styles.sideTabs}>
				<div>Home</div>
				<div>Settings</div>
				<div>Favorites</div>
			</div>
			<div className={styles.profile}>Profile</div>
		</div>
	);
}

export default SideBar;
