import styles from './Footer.module.scss';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">
            <img src="/icons/logo.png" alt="logo" />
          </a>
        </div>

        <nav className={styles.nav}>
          <a href="https://github.com/lLiashko" className={styles.item}>
            Github
          </a>
          <a href="#contacts" className={styles.item}>
            Contacts
          </a>
          <a href="#rights" className={styles.item}>
            Rights
          </a>
        </nav>

        <div className={styles.navButtons}>
          <button className={styles.button} onClick={scrollToTop}>
            <div>Back to top</div>
            <img src="/icons/arrow-up.png" alt="Back to top" />
          </button>
        </div>
      </div>
    </footer>
  );
}
