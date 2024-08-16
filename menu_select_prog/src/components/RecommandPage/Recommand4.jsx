import { useContext } from 'react';
import styles from './recommand4.module.css';
import { useNavigate } from 'react-router-dom';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';

function Recommand4() {
	const navigate = useNavigate();
	const { additionalRequirements, setAdditionalRequirements } = useContext(
		SelectedCategoriesContext,
	);

	const navigateNextPage = () => {
		navigate('/recommand/result');
	};

	const handleInputChange = (e) => {
		setAdditionalRequirements(e.target.value);
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
				<input
					className={styles.input}
					type="text"
					value={additionalRequirements}
					onChange={handleInputChange}
				/>
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
