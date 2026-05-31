import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './guide-layout.module.scss';
import Header from '@/components/layout/header';

interface GuideMenuItem {
  label: string;
  path: string;
}

interface GuideMenuGroup {
  title: string;
  items: GuideMenuItem[];
}

const GUIDE_MENU: GuideMenuGroup[] = [
  {
    title: 'Generals',
    items: [
      { label: 'Colors', path: '/guide/colors' },
      { label: 'Typography', path: '/guide/typography' },
      { label: 'Elevator', path: '/guide/elevator' },
      { label: 'Utilities', path: '/guide/utilities' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Badge', path: '/guide/badge' },
      { label: 'Button', path: '/guide/button' },
      { label: 'Input', path: '/guide/input' },
    ],
  }
];

interface GuideLayoutProps {
  children: React.ReactNode;
}

const GuideLayout = ({ children }: GuideLayoutProps) => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/guide/dashboard');
  
  // 메뉴 토글 상태 관리
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    Generals: true,
    Components: true,
  });

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

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
            {GUIDE_MENU.map((group, groupIdx) => (
              <div key={groupIdx} className={styles.menu_group}>
                <div 
                  className={styles.menu_title_wrapper}
                  onClick={() => toggleGroup(group.title)}
                >
                  <h3 className={styles.menu_title}>{group.title}</h3>
                  {expandedGroups[group.title] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
                {expandedGroups[group.title] && (
                  <ul className={styles.menu_list}>
                    {group.items.map((item) => (
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
                )}
              </div>
            ))}
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
