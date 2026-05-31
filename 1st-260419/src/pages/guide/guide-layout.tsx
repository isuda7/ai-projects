import { Link, useLocation } from 'react-router-dom';
import styles from './guide-layout.module.scss';
import Header from '@/components/layout/header';

interface GuideMenuItem {
  label: string;
  path: string;
}

const GUIDE_MENU: GuideMenuItem[] = [
  { label: 'Colors', path: '/guide/colors' },
  { label: 'Typography', path: '/guide/typography' },
  { label: 'Button', path: '/guide/button' },
];

interface GuideLayoutProps {
  children: React.ReactNode;
}

const GuideLayout = ({ children }: GuideLayoutProps) => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/guide/dashboard');

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.layout_wrapper}>
      {/* 공통 상단 헤더 */}
      <Header />

      {/* 사이드바 & 본문 컨테이너 */}
      <div className={styles.guide_container}>
      {!isDashboard && (
        <aside className={styles.sidebar}>
          <nav className={styles.menu}>
            <h3 className={styles.menu_title}>Guide</h3>
            <ul className={styles.menu_list}>
              {GUIDE_MENU.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${styles.menu_item} ${isActive(item.path) ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
      <main className={styles.content}>
        <div className={isDashboard ? styles.dashboard_inner : styles.content_inner}>
          {children}
        </div>
      </main>
      </div>
    </div>
  );
};

export default GuideLayout;
