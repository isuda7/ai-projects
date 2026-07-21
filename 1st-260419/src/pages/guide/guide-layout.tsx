// @ts-nocheck
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    title: 'Foundations',
    items: [
      { label: 'Colors', path: '/guide/colors' },
      { label: 'Typography', path: '/guide/typography' },
      { label: 'Elevator', path: '/guide/elevator' },
      { label: 'Utilities', path: '/guide/utilities' },
    ],
  },
  {
    title: 'Elements',
    items: [
      { label: 'Aspect Ratio', path: '/guide/aspect-ratio' },
      { label: 'Avatar', path: '/guide/avatar' },
      { label: 'Badge', path: '/guide/badge' },
      { label: 'Button', path: '/guide/button' },
      { label: 'Separator', path: '/guide/separator' },
      { label: 'Skeleton', path: '/guide/skeleton' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { label: 'Checkbox', path: '/guide/checkbox' },
      { label: 'Field', path: '/guide/field' },
      { label: 'Form', path: '/guide/form' },
      { label: 'Input', path: '/guide/input' },
      { label: 'Input Otp', path: '/guide/input-otp' },
      { label: 'Label', path: '/guide/label' },
      { label: 'Radio Group', path: '/guide/radio-group' },
      { label: 'Select', path: '/guide/select' },
      { label: 'Slider', path: '/guide/slider' },
      { label: 'Switch', path: '/guide/switch' },
      { label: 'Textarea', path: '/guide/textarea' },
      { label: 'Toggle', path: '/guide/toggle' },
      { label: 'Toggle Group', path: '/guide/toggle-group' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { label: 'Breadcrumb', path: '/guide/breadcrumb' },
      { label: 'Command', path: '/guide/command' },
      { label: 'Context Menu', path: '/guide/context-menu' },
      { label: 'Dropdown Menu', path: '/guide/dropdown-menu' },
      { label: 'Menubar', path: '/guide/menubar' },
      { label: 'Navigation Menu', path: '/guide/navigation-menu' },
      { label: 'Pagination', path: '/guide/pagination' },
      { label: 'Sidebar', path: '/guide/sidebar' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { label: 'Accordion', path: '/guide/accordion' },
      { label: 'Calendar', path: '/guide/calendar' },
      { label: 'Card', path: '/guide/card' },
      { label: 'Carousel', path: '/guide/carousel' },
      { label: 'Chart', path: '/guide/chart' },
      { label: 'Collapsible', path: '/guide/collapsible' },
      { label: 'Resizable', path: '/guide/resizable' },
      { label: 'Scroll Area', path: '/guide/scroll-area' },
      { label: 'Table', path: '/guide/table' },
      { label: 'Tabs', path: '/guide/tabs' },
    ],
  },
  {
    title: 'Feedback & Overlays',
    items: [
      { label: 'Alert', path: '/guide/alert' },
      { label: 'Alert Dialog', path: '/guide/alert-dialog' },
      { label: 'Dialog', path: '/guide/dialog' },
      { label: 'Drawer', path: '/guide/drawer' },
      { label: 'Hover Card', path: '/guide/hover-card' },
      { label: 'Popover', path: '/guide/popover' },
      { label: 'Progress', path: '/guide/progress' },
      { label: 'Sheet', path: '/guide/sheet' },
      { label: 'Sonner', path: '/guide/sonner' },
      { label: 'Spinner', path: '/guide/spinner' },
      { label: 'Tooltip', path: '/guide/tooltip' },
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
    Foundations: true,
    Elements: true,
    Forms: true,
    Navigation: true,
    'Data Display': true,
    'Feedback & Overlays': true,
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

  // Breadcrumb 데이터 찾기
  let currentGroupTitle = '';
  let currentItemLabel = '';
  
  if (!isDashboard) {
    for (const group of GUIDE_MENU) {
      const activeItem = group.items.find(item => item.path === location.pathname);
      if (activeItem) {
        currentGroupTitle = group.title;
        currentItemLabel = activeItem.label;
        break;
      }
    }
  }

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
      <main className={`${styles.content} ${isDashboard ? styles.content_dashboard : ''}`}>
        <div className={`${isDashboard ? styles.dashboard_inner : styles.content_inner} relative`}>
          {!isDashboard && currentItemLabel && (
            <div 
              className="absolute hidden sm:flex items-center" 
              style={{ top: 'var(--spacing-xl)', right: '32px', height: 'var(--font-line-height-h1, 40px)' }}
            >
              <Breadcrumb>
                <BreadcrumbList className="sm:gap-2 text-xs">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/guide/dashboard" className="flex items-center">
                      <Home className="w-3.5 h-3.5" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-muted-foreground">{currentGroupTitle}</span>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold">{currentItemLabel}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          {children}
        </div>
      </main>
      </div>
    </div>
  );
};

export default GuideLayout;
