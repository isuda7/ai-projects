import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const LoginBeforePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.badge}>Welcome Back</p>
        <h1 className={styles.title}>로그인 전 사용자 화면</h1>
        <p className={styles.description}>
          로그인 전 화면 템플릿입니다. 여기에 로그인 버튼, 설명 메시지, 또는 접근 제한 안내를 추가하세요.
        </p>
      </div>

      <div className={styles.actions}>
        <Link to="/guide/dashboard" className={styles.primary_button}>
          로그인 완료 후 대시보드로 이동
        </Link>
        <Link to="/guide" className={styles.secondary_button}>
          가이드 보기
        </Link>
      </div>
    </div>
  );
};

export default LoginBeforePage;
