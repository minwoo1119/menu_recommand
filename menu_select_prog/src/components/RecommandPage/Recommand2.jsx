import styles from './recommand2.module.css';
import { useNavigate } from 'react-router-dom';

function Recommand2() {
	const navigate = useNavigate();
	const navigateNextPage = () => {
		navigate('/recommand/page3');
	};
	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>어느정도 매운 게 땡기세요 ?</div>
			</div>
			<div className={styles.grid}>
				<div className={styles.nospicy}>
					<div className={styles.labelTxt}>매운 거 싫어</div>
					<div className={styles.icon}>😋</div>
				</div>
				<div className={styles.littlespicy}>
					<div className={styles.labelTxt}>조금 매콤하면 좋겠어</div>
					<div className={styles.icon}>😝</div>
				</div>
				<div className={styles.prettyspicy}>
					<div className={styles.labelTxt}>매운 음식 좋아!</div>
					<div className={styles.icon}>😡</div>
				</div>
				<div className={styles.amazingspicy}>
					<div className={styles.labelTxt}>매워서 미쳐버리고싶어!!</div>
					<div className={styles.icon}>🥵</div>
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

export default Recommand2;
