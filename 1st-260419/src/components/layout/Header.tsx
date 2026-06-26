import { Link, useLocation } from 'react-router-dom';
import { Home, Search, User } from 'lucide-react';
import styles from './header.module.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <Link to="/" className={styles.home_button}>
          <Home size={18} />
        </Link>
        <nav className={styles.top_nav}>
          <Link to="/guide/colors" className={`${styles.top_nav_link} ${location.pathname.startsWith('/guide') && !location.pathname.startsWith('/guide/dashboard') ? styles.top_nav_link_active : ''}`}>
            GUIDE
          </Link>
          <Link to="/guide/dashboard" className={`${styles.top_nav_link} ${location.pathname.startsWith('/guide/dashboard') ? styles.top_nav_link_active : ''}`}>
            DASHBOARD
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;