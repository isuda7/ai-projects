# 디자인 시스템 컬러 가이드 생성 프롬프트

- **공통 뼈대**: 반드시 `PROMPT_GUIDE_01_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성**: 새로운 색상 테마나 컬러 팔레트를 추가/수정하여 가이드 페이지를 작성할 때는 아래의 개별 규칙과 뼈대 구조를 활용합니다.

## 📝 컬러 가이드 작성 규칙
1. **파일 경로**: `src/pages/guide/colors.tsx`
2. **스타일 재사용**: `src/pages/guide/colors.module.scss`에 정의된 공통 클래스들을 그대로 재사용합니다. (`import styles from './colors.module.scss';`)
3. **명도 스케일 준수**: 모든 핵심 시맨틱 컬러(Primary, Secondary, Success, Danger, Warning 등)는 `50`부터 `900`까지 10단계의 명도 스케일로 구성하여 일관성을 유지합니다.
4. **컴포넌트 분리**: 컬러 블록 하나를 렌더링하는 요소는 파일 상단에 `ColorBlock`이라는 내부 컴포넌트로 분리하여 재사용합니다. 메인 컬러는 `main` prop을 전달해 시각적으로 강조합니다.

---

## 💻 컬러 가이드 표준 뼈대 (React Component)

```tsx
import styles from './colors.module.scss';
import GuideSection from './components/guide-section';

// 단일 컬러 블록 렌더링을 위한 공통 컴포넌트
const ColorBlock = ({ label, hex, main }: { label: string; hex: string; main?: boolean }) => (
  <div className={styles.color_block}>
    <div className={styles.box} style={{ backgroundColor: hex }}>
      {main && (
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 2px rgba(0,0,0,0.5)',
          }}
        />
      )}
    </div>
    <div>
      <p className={styles.label}>
        {label} {main && <span style={{ color: hex }}>*</span>}
      </p>
      <p className={styles.hex}>{hex}</p>
    </div>
  </div>
);

const ColorsGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Colors</h1>
        <p style={{ color: '#6b7280' }}>
          디자인 시스템에서 사용되는 시맨틱 색상 팔레트입니다. 모든 핵심 컬러는 50부터 900까지 10단계 명도 스케일로 구성됩니다.
        </p>
      </header>

      <GuideSection title="Brand & Semantic Colors">

        {/* 컬러 그룹 렌더링 영역 */}
        <div className={styles.color_group}>
          <h3 className={styles.group_title}>[Color Group Name] (예: Primary)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#[HexCode]" />
            <ColorBlock label="100" hex="#[HexCode]" />
            <ColorBlock label="200" hex="#[HexCode]" />
            <ColorBlock label="300" hex="#[HexCode]" />
            <ColorBlock label="400" hex="#[HexCode]" />
            <ColorBlock label="500" hex="#[HexCode]" main /> {/* 기준 메인 컬러 */}
            <ColorBlock label="600" hex="#[HexCode]" />
            <ColorBlock label="700" hex="#[HexCode]" />
            <ColorBlock label="800" hex="#[HexCode]" />
            <ColorBlock label="900" hex="#[HexCode]" />
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default ColorsGuidePage;
```