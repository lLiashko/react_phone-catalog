import styles from './ShoppingCart.module.scss';

const ShoppingCart = () => (
  <div>
    <h1 className={styles.title}>Shopping Cart</h1>
    <p className={styles.text}>
      Your cart is empty. Please add some products to the shopping cart to see
      it here.
    </p>
    <img src="img/cart-is-empty.png" alt="cart is empty" />
  </div>
);

export default ShoppingCart;
