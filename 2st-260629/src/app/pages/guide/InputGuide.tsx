import { Input } from "../../components/ui/Input";
import { PreviewBlock } from "../../components/guide/PreviewBlock";
import styles from "./GuidePages.module.scss";

export default function InputGuide() {
  const codeDefault = `
<div className="max-w-md">
  <Input label="이름" placeholder="홍길동" />
</div>
`;

  const codeHelper = `
<div className="max-w-md">
  <Input 
    label="비밀번호" 
    type="password" 
    placeholder="••••••••" 
    helperText="영문, 숫자 포함 8자 이상으로 설정해주세요." 
  />
</div>
`;

  const codeError = `
<div className="max-w-md">
  <Input 
    label="이메일" 
    defaultValue="wrong-email" 
    error="올바른 이메일 형식이 아닙니다." 
  />
</div>
`;

  const codeDisabled = `
<div className="max-w-md">
  <Input 
    label="소속 회사" 
    defaultValue="BuildCore" 
    disabled 
  />
</div>
`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Input</h1>
        <p className={styles.description}>사용자로부터 텍스트 형식의 데이터를 입력받는 컴포넌트입니다.</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>1. Input Variants (입력창 종류)</h2>
        </div>
        
        <div className={styles.subSection}>
          <h3 className={styles.subSectionTitle}>1.1. Text Inputs</h3>
          
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>A. Default Input</h4>
            <p className={styles.blockDesc}>가장 기본적인 텍스트 입력창입니다. Label을 함께 제공하여 목적을 명확히 합니다.</p>
            <PreviewBlock code={codeDefault}>
              <div style={{ maxWidth: "448rem" }}>
                <Input label="이름" placeholder="홍길동" />
              </div>
            </PreviewBlock>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>B. With Helper Text</h4>
            <p className={styles.blockDesc}>입력 형식에 대한 부가적인 설명이 필요할 때 Helper Text를 사용합니다.</p>
            <PreviewBlock code={codeHelper}>
              <div style={{ maxWidth: "448rem" }}>
                <Input 
                  label="비밀번호" 
                  type="password" 
                  placeholder="••••••••" 
                  helperText="영문, 숫자 포함 8자 이상으로 설정해주세요." 
                />
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Input States (입력창 상태)</h2>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subSectionTitle}>2.1. Validation & Interactive States</h3>
          
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Error State</h4>
            <p className={styles.blockDesc}>유효성 검사 실패 시 Error 메시지와 함께 붉은색 테두리가 표시됩니다.</p>
            <PreviewBlock code={codeError}>
              <div style={{ maxWidth: "448rem" }}>
                <Input 
                  label="이메일" 
                  defaultValue="wrong-email" 
                  error="올바른 이메일 형식이 아닙니다." 
                />
              </div>
            </PreviewBlock>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Disabled State</h4>
            <p className={styles.blockDesc}>수정이 불가능한 입력창입니다.</p>
            <PreviewBlock code={codeDisabled}>
              <div style={{ maxWidth: "448rem" }}>
                <Input 
                  label="소속 회사" 
                  defaultValue="BuildCore" 
                  disabled 
                />
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}