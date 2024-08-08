import styles from './recommand1.module.css';

function Recommand1() {
	return (
		<div className={styles.container}>
			<div className={styles.headTxt}>우선, 끌리는 카테고리가 있으신가요 ?</div>
			<div>
				<div className={styles.koreanFood}>
					<div className={styles.lableTxt}>한식</div>
					<img src="#" alt="" />
				</div>
				<div className={styles.chineseFood}>
					<div className={styles.labelTxt}>중식</div>
					<img src="#" alt="" />
				</div>
				<div className={styles.italianFood}>
					<div className={styles.lableTxt}>양식</div>
					<img src="#" alt="" />
				</div>
				<div className={styles.japaneseFood}>
					<div className={styles.labelTxt}>일식</div>
					<img src="#" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Recommand1;
