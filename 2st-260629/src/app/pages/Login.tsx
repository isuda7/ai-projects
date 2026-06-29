import * as React from "react";
import { Link, useNavigate } from "react-router";
import { HardHat } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <HardHat className={styles.logoIcon} />
            <span className={styles.logoText}>BuildCore</span>
          </Link>
          <h2 className={styles.title}>
            로그인
          </h2>
          <p className={styles.subtitle}>
            계정이 없으신가요?{" "}
            <Link to="/signup" className={styles.signupLink}>
              회원가입하기
            </Link>
          </p>
        </div>
        
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              label="이메일 주소"
              placeholder="user@example.com"
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              label="비밀번호"
              placeholder="••••••••"
            />
          </div>

          <div className={styles.options}>
            <div className={styles.rememberMe}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className={styles.checkbox}
              />
              <label htmlFor="remember-me" className={styles.checkboxLabel}>
                로그인 유지
              </label>
            </div>

            <div className={styles.forgotPassword}>
              <a href="#" className={styles.forgotPasswordLink}>
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full" size="lg">
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
