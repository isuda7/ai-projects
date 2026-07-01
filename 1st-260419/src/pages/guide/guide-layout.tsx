import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './guide-layout.module.scss';
import Header from '@/components/layout/Header';

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
      { label: 'Accordion', path: '/guide/accordion' },
      { label: 'Alert', path: '/guide/alert' },
      { label: 'Alert Dialog', path: '/guide/alert-dialog' },
      { label: 'Aspect Ratio', path: '/guide/aspect-ratio' },
      { label: 'Avatar', path: '/guide/avatar' },
      { label: 'Badge', path: '/guide/badge' },
      { label: 'Breadcrumb', path: '/guide/breadcrumb' },
      { label: 'Button', path: '/guide/button' },
      { label: 'Calendar', path: '/guide/calendar' },
      { label: 'Card', path: '/guide/card' },
      { label: 'Carousel', path: '/guide/carousel' },
      { label: 'Chart', path: '/guide/chart' },
      { label: 'Checkbox', path: '/guide/checkbox' },
      { label: 'Collapsible', path: '/guide/collapsible' },
      { label: 'Command', path: '/guide/command' },
      { label: 'Context Menu', path: '/guide/context-menu' },
      { label: 'Dialog', path: '/guide/dialog' },
      { label: 'Drawer', path: '/guide/drawer' },
      { label: 'Dropdown Menu', path: '/guide/dropdown-menu' },
      { label: 'Form', path: '/guide/form' },
      { label: 'Hover Card', path: '/guide/hover-card' },
      { label: 'Input', path: '/guide/input' },
      { label: 'Input Otp', path: '/guide/input-otp' },
      { label: 'Label', path: '/guide/label' },
      { label: 'Menubar', path: '/guide/menubar' },
      { label: 'Navigation Menu', path: '/guide/navigation-menu' },
      { label: 'Pagination', path: '/guide/pagination' },
      { label: 'Popover', path: '/guide/popover' },
      { label: 'Progress', path: '/guide/progress' },
      { label: 'Radio Group', path: '/guide/radio-group' },
      { label: 'Resizable', path: '/guide/resizable' },
      { label: 'Scroll Area', path: '/guide/scroll-area' },
      { label: 'Select', path: '/guide/select' },
      { label: 'Separator', path: '/guide/separator' },
      { label: 'Sheet', path: '/guide/sheet' },
      { label: 'Sidebar', path: '/guide/sidebar' },
      { label: 'Skeleton', path: '/guide/skeleton' },
      { label: 'Slider', path: '/guide/slider' },
      { label: 'Sonner', path: '/guide/sonner' },
      { label: 'Switch', path: '/guide/switch' },
      { label: 'Table', path: '/guide/table' },
      { label: 'Tabs', path: '/guide/tabs' },
      { label: 'Textarea', path: '/guide/textarea' },
      { label: 'Toggle', path: '/guide/toggle' },
      { label: 'Toggle Group', path: '/guide/toggle-group' },
      { label: 'Tooltip', path: '/guide/tooltip' }
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
