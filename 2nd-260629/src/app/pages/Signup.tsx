import * as React from "react";
import { Link, useNavigate } from "react-router";
import { HardHat } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import styles from "./Signup.module.scss";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert("회원가입이 완료되었습니다. (실제 연동 필요)");
    navigate("/login");
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
            회원가입
          </h2>
          <p className={styles.subtitle}>
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className={styles.loginLink}>
              로그인하기
            </Link>
          </p>
        </div>
        
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.inputGroup}>
            <Input
              id="name"
              name="name"
              type="text"
              required
              label="이름 (실명)"
              placeholder="홍길동"
            />
            
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
              autoComplete="new-password"
              required
              label="비밀번호"
              placeholder="••••••••"
              helperText="영문, 숫자, 특수문자 조합 8자 이상"
            />

            <Input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autoComplete="new-password"
              required
              label="비밀번호 확인"
              placeholder="••••••••"
            />
          </div>

          <div className={styles.termsWrapper}>
            <div className={styles.checkboxContainer}>
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className={styles.checkbox}
              />
            </div>
            <div className={styles.labelContainer}>
              <label htmlFor="terms" className={styles.termsLabel}>
                이용약관 및 개인정보처리방침에 동의합니다. <span className={styles.required}>*</span>
              </label>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full" size="lg">
              회원가입 완료
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
