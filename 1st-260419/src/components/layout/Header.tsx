import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import styles from './header.module.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <Link to="/" className={styles.home_button}>
          <Home size={18} />
          <span>Vibe Design System</span>
        </Link>
        <nav className={styles.top_nav}>
          <Link to="/guide/colors" className={`${styles.top_nav_link} ${location.pathname.startsWith('/guide') && !location.pathname.startsWith('/guide/dashboard') ? styles.top_nav_link_active : ''}`}>
            Design System
          </Link>
          <Link to="/guide/dashboard" className={`${styles.top_nav_link} ${location.pathname.startsWith('/guide/dashboard') ? styles.top_nav_link_active : ''}`}>
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;