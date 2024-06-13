import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="./icons/logo.png" alt="logo" />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={styles.item}>
            Home
          </Link>
          <Link to="/phones" className={styles.item}>
            Phones
          </Link>
          <Link to="/tablets" className={styles.item}>
            Tablets
          </Link>
          <Link to="/accessories" className={styles.item}>
            Accessories
          </Link>
        </nav>
      </div>

      <div className={styles.navButtons}>
        <Link to="/likeditems" className={styles.button}>
          <img src="./icons/liked-items.png" alt="liked items" />
        </Link>
        <Link to="/shoppingcart" className={styles.button}>
          <img src="./icons/shopping-cart.png" alt="shopping cart" />
        </Link>
      </div>
    </header>
  );
}
