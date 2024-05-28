import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">
            <img src="/icons/logo.png" alt="logo" />
          </a>
        </div>

        <nav className={styles.nav}>
          <a href="#home" className={styles.item}>
            Home
          </a>
          <a href="#phone" className={styles.item}>
            Phones
          </a>
          <a href="#tablets" className={styles.item}>
            Tablets
          </a>
          <a href="#accessories" className={styles.item}>
            Accessories
          </a>
        </nav>
      </div>

      <div className={styles.navButtons}>
        <button className={styles.button}>
          <img src="/icons/liked-items.png" alt="liked items" />
        </button>
        <button className={styles.button}>
          <img src="/icons/shopping-cart.png" alt="shopping cart" />
        </button>
      </div>
    </header>
  );
}
