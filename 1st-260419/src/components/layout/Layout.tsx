import React from 'react';
import Header from './header';
import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      {/* 공통 상단 헤더 */}
      <Header />
      
      {/* Main Content Area */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footer_text}>
           © 2026 Design System Foundation. All rights reserved.
        </div>
        <div className={styles.footer_links}>
           <span className={styles.footer_link}>Changelog</span>
           <span className={styles.footer_link}>Support</span>
           <span className={styles.footer_link}>Figma Source</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
