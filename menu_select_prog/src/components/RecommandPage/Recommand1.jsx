import styles from './recommand1.module.css';
import { useNavigate } from 'react-router-dom';

function Recommand1() {
	const navigate = useNavigate();
	const navigateNextPage = () => {
		navigate('/recommand/page2');
	};
	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>
					우선, 끌리는 카테고리가 있으신가요 ?
				</div>
			</div>
			<div className={styles.grid}>
				<div className={styles.koreanFood}>
					<div className={styles.lableTxt}>한식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div className={styles.chineseFood}>
					<div className={styles.lableTxt}>중식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div className={styles.italianFood}>
					<div className={styles.lableTxt}>양식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div className={styles.japaneseFood}>
					<div className={styles.lableTxt}>일식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
			</div>
			<div className={styles.nextPage}>
				<button onClick={navigateNextPage} className={styles.nextBtn}>
					다음
				</button>
			</div>
		</div>
	);
}

export default Recommand1;
