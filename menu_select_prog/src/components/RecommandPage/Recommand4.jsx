import styles from './recommand3.module.css';
import { useNavigate } from 'react-router-dom';

function Recommand4() {
	const navigate = useNavigate();
	const navigateNextPage = () => {
		navigate('/recommand/result');
	};
	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>추가적인 요구사항을 입력해주세요!</div>
				<div className={styles.subTxt}>
					ex) 토마토를 못먹어서 토마토는 없었으면 좋겠어
				</div>
			</div>
			<div className={styles.inputArea}>
				<input className={styles.input} type="text" />
			</div>
			<div className={styles.nextPage}>
				<button onClick={navigateNextPage} className={styles.nextBtn}>
					완료
				</button>
			</div>
		</div>
	);
}

export default Recommand4;
