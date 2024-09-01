import styles from './foodcard.module.css';

function FoodCard(props) {
	return (
		<div className={styles.container}>
			<div className={styles.foodname}>{props.foodName}</div>
			<div className={styles.foodimg}>{props.foodImg}</div>
			<div className={styles.description}>{props.description}</div>
		</div>
	);
}

export default FoodCard;
