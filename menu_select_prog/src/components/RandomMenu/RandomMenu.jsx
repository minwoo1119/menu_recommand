import styles from './randommenu.module.css';

function RandomMenu(props) {
	return (
		<div className={styles.container}>
			<div className={styles.foodName}>음식 이름{props.name}</div>
			<div className={styles.img}>
				<img src={props.imgUrl} alt="" />
			</div>
			<div className={styles.review}>
				<div className={styles.likeBtn}>
					<input type="radio" id="like" name="like" value="like" checked />
					<label htmlFor="like">좋다</label>
				</div>
				<div className={styles.dislikeBtn}>
					<input type="radio" id="dislike" name="dislike" value="dislike" />
					<label htmlFor="dislike">별로다</label>
				</div>
			</div>
		</div>
	);
}

export default RandomMenu;
