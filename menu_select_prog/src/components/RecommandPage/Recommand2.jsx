import { useContext } from 'react';
import styles from './recommand2.module.css';
import { useNavigate } from 'react-router-dom';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';

function Recommand2() {
	const navigate = useNavigate();
	const { selectedCategories, setSelectedCategories } = useContext(
		SelectedCategoriesContext,
	);

	const navigateNextPage = () => {
		navigate('/recommand/page3');
	};

	const handleSelection = (spiceLevel) => {
		// 선택된 항목이 이미 배열에 있는지 확인
		if (selectedCategories.includes(spiceLevel)) {
			// 이미 선택된 경우 선택 해제 (선택 해제하려면 아래 코드 추가)
			setSelectedCategories(
				selectedCategories.filter((category) => category !== spiceLevel),
			);
		} else {
			// 기존 선택을 유지하면서 새로운 선택 추가
			setSelectedCategories([...selectedCategories, spiceLevel]);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>어느정도 매운 게 땡기세요 ?</div>
			</div>
			<div className={styles.grid}>
				<div
					className={`${styles.nospicy} ${
						selectedCategories.includes('nospicy') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('nospicy')}
				>
					<div className={styles.labelTxt}>매운 거 싫어</div>
					<div className={styles.icon}>😋</div>
				</div>
				<div
					className={`${styles.littlespicy} ${
						selectedCategories.includes('littlespicy') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('littlespicy')}
				>
					<div className={styles.labelTxt}>조금 매콤하면 좋겠어</div>
					<div className={styles.icon}>😝</div>
				</div>
				<div
					className={`${styles.prettyspicy} ${
						selectedCategories.includes('prettyspicy') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('prettyspicy')}
				>
					<div className={styles.labelTxt}>매운 음식 좋아!</div>
					<div className={styles.icon}>😡</div>
				</div>
				<div
					className={`${styles.amazingspicy} ${
						selectedCategories.includes('amazingspicy') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('amazingspicy')}
				>
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
