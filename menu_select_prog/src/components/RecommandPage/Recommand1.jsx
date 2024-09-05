import { useContext } from 'react';
import styles from './recommand1.module.css';
import { useNavigate } from 'react-router-dom';
import { SelectedCategoriesContext } from '../Selected/SelectedCategoriesContext';

function Recommand1() {
	const navigate = useNavigate();
	const { selectedCategory, setSelectedCategory } = useContext(
		SelectedCategoriesContext,
	);

	const navigateNextPage = () => {
		navigate('/recommand/page2');
	};

	const handleSelection = (category) => {
		if (selectedCategory.includes(category)) {
			// 이미 선택된 경우, 선택 해제 (단일 선택이라면 의미가 없어짐)
			setSelectedCategory([]);
		} else {
			// 선택되지 않은 경우, 선택 추가 (단일 선택만 가능)
			setSelectedCategory([category]);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.headcontainer}>
				<div className={styles.headTxt}>
					우선, 끌리는 카테고리가 있으신가요 ?
				</div>
			</div>
			<div className={styles.grid}>
				<div
					className={`${styles.koreanFood} ${
						selectedCategory.includes('koreanFood') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('koreanFood')}
				>
					<div className={styles.lableTxt}>한식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div
					className={`${styles.chineseFood} ${
						selectedCategory.includes('chineseFood') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('chineseFood')}
				>
					<div className={styles.lableTxt}>중식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div
					className={`${styles.italianFood} ${
						selectedCategory.includes('italianFood') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('italianFood')}
				>
					<div className={styles.lableTxt}>양식</div>
					<img className={styles.img} src="#" alt="" />
				</div>
				<div
					className={`${styles.japaneseFood} ${
						selectedCategory.includes('japaneseFood') ? styles.selected : ''
					}`}
					onClick={() => handleSelection('japaneseFood')}
				>
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
