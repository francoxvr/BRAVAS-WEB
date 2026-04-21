import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-app-header="true"
      className={`${styles.headerSticky} ${
        scrolled ? styles.headerScrolled : ''
      }`}
    >
      <div className={styles.headerContent}>
        <div className={styles.brandRow}>
          <Link href="/" aria-label="Ir al inicio" className={styles.logoLink}>
            <img
              src="/assets/icons/pwa/logo192.png"
              alt="Bravas"
              className={styles.logoImg}
            />
          </Link>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Cambiar tema"
          >
            {darkMode ? (
              <div className={`${styles.themeIconWrapper} ${styles.sunWrapper}`}>
                <Sun size={22} />
              </div>
            ) : (
              <div
                className={`${styles.themeIconWrapper} ${styles.moonWrapper}`}
              >
                <Moon size={20} />
                <span className={`${styles.star} ${styles.star1}`} />
                <span className={`${styles.star} ${styles.star2}`} />
                <span className={`${styles.star} ${styles.star3}`} />
                <span className={`${styles.star} ${styles.star4}`} />
                <span className={`${styles.star} ${styles.star5}`} />
                <span className={`${styles.star} ${styles.star6}`} />
              </div>
            )}
          </button>
        </div>

        <nav className={styles.navMenu} aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navItem}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
