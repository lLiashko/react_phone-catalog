import styles from './LikedItems.module.scss';

const LikedItems = () => (
  <div>
    <h1 className={styles.title}>Liked Items</h1>
    <p className={styles.text}>
      Your liked items list is empty. Please press some little hearts on the
      products to see it here.
    </p>
    <img
      className={styles.img}
      src="./img/product-not-found.png"
      alt="liked list is empty"
    />
  </div>
);

export default LikedItems;
