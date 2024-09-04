import styles from './randommenu.module.css';

function RandomMenu(props) {
	return (
		<div className={styles.container}>
			<div className={styles.foodName}>{props.name}</div>
			<div className={styles.emptybox}></div>
			<div className={styles.img}>
				<img src={props.imgUrl} alt="" />
			</div>
			<div className={styles.description}>
				<div>{props.description}</div>
			</div>
		</div>
	);
}

export default RandomMenu;
