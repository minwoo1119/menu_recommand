import FoodCard from '../../common/foodCard/FoodCard';
import styles from './result.module.css';

function Result() {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>결과</div>
			<div className={styles.subText}>이런 음식들은 어떠세요 ?</div>
			<div className={styles.recommands}>
				<FoodCard />
				<FoodCard />
				<FoodCard />
			</div>
		</div>
	);
}

export default Result;
