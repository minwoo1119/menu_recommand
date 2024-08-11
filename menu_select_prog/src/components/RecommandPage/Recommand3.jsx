import styles from './recommand3.module.css';
import { useNavigate } from 'react-router-dom';

function Recommand3() {
	const navigate = useNavigate();
	const navigateNextPage = () => {
		navigate('/recommand/page3');
	};
	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>최근에 먹은 음식을 알려주세요!</div>
				<div className={styles.subTxt}>
					먹고싶지 않은 음식을 함께 입력해줘도 좋아요 :)
				</div>
			</div>
			<div className={styles.inputArea}>
				<input className={styles.input} type="text" />
			</div>
			<div className={styles.nextPage}>
				<button onClick={navigateNextPage} className={styles.nextBtn}>
					다음
				</button>
			</div>
		</div>
	);
}

export default Recommand3;
