import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, HardHat, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./Layout.module.scss";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "회사소개", href: "/" },
    { name: "제품소개", href: "/products" },
    { name: "고객지원 (게시판)", href: "/board" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className={styles.layout}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <HardHat className={styles.logoIcon} />
            <span className={styles.logoText}>BuildCore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles['navLink--active'] : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className={styles.desktopAuth}>
            <Link to="/login" className={styles.loginBtn}>
              로그인
            </Link>
            <Link to="/signup" className={styles.signupBtn}>
              회원가입
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={styles.mobileMenuIcon} /> : <Menu className={styles.mobileMenuIcon} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavContainer}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles['mobileNavLink--active'] : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className={styles.mobileAuth}>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileLoginBtn}
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileSignupBtn}
                >
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <Link to="/" className={styles.footerLogo}>
              <HardHat className={styles.footerLogoIcon} />
              <span className={styles.footerLogoText}>BuildCore</span>
            </Link>
            <p className={styles.footerDesc}>
              우리는 더 나은 내일을 위해 견고한 토대를 구축합니다. 최고의 품질과 신뢰를 약속하는 건설 파트너.
            </p>
          </div>
          <div>
            <h3 className={styles.footerColumnTitle}>빠른 링크</h3>
            <ul className={styles.footerList}>
              <li><Link to="/" className={styles.footerLink}>회사소개</Link></li>
              <li><Link to="/products" className={styles.footerLink}>제품소개</Link></li>
              <li><Link to="/board" className={styles.footerLink}>고객지원</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerColumnTitle}>고객센터</h3>
            <ul className={styles.footerList}>
              <li>1588-0000</li>
              <li>contact@buildcore.com</li>
              <li>평일 09:00 - 18:00 (주말/공휴일 휴무)</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerColumnTitle}>본사 위치</h3>
            <address className={styles.footerAddress}>
              서울특별시 강남구 테헤란로 123<br />
              빌드코어 타워 15층<br />
              우편번호: 06123
            </address>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>&copy; {new Date().getFullYear()} BuildCore Construction Co., Ltd. All rights reserved.</span>
          <Link to="/guide" className={styles.guideLink}>
            Design System Guide
          </Link>
        </div>
      </footer>
    </div>
  );
}
