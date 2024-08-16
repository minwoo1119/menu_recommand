import styles from './foodcard.module.css';

function FoodCard() {
	return (
		<div className={styles.container}>
			<div className={styles.foodname}>음식이름</div>
			<div className={styles.foodimg}>음식 사진</div>
			<div className={styles.description}>음식 설명</div>
		</div>
	);
}

export default FoodCard;
