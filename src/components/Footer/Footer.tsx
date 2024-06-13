import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`${styles.footer} ${showFooter ? styles.show : styles.hide}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">
            <img src="./icons/logo.png" alt="logo" />
          </a>
        </div>

        <nav className={styles.nav}>
          <a href="https://github.com/lLiashko" className={styles.item}>
            Github
          </a>
          <Link to="/pagenotfound" className={styles.item}>
            Contacts
          </Link>
          <Link to="/pagenotfound" className={styles.item}>
            Rights
          </Link>
        </nav>

        <div className={styles.navButtons}>
          <button className={styles.button} onClick={scrollToTop}>
            <div>Back to top</div>
            <img src="./icons/arrow-up.png" alt="Back to top" />
          </button>
        </div>
      </div>
    </footer>
  );
}
