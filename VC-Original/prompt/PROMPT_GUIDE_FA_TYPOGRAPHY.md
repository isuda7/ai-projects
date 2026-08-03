# 디자인 시스템 타이포그래피 가이드 생성 프롬프트

- **공통 뼈대**: 반드시 `PROMPT_GUIDE_01_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성**: 새로운 폰트나 타이포그래피 스케일을 추가/수정하여 가이드 페이지를 작성할 때는 아래의 개별 규칙과 뼈대 구조를 활용합니다.

## 📝 타이포그래피 가이드 작성 규칙
1. **파일 경로**: `src/pages/guide/typography.tsx`
2. **스타일 재사용**: `src/pages/guide/typography.module.scss`에 정의된 공통 클래스들을 그대로 재사용합니다. (`import styles from './typography.module.scss';`)
3. **스케일 계층 준수**: 사용처에 따라 Headline (20~36px), Title (14~18px), Body (14~18px), Label (10~13px) 의 4단계 구조를 명확히 구분하여 나열합니다.
4. **컴포넌트 분리**: 개별 폰트 스타일을 보여주는 행(row)은 파일 상단에 `TypeRow`라는 내부 컴포넌트로 분리하여 재사용합니다.

---

## 💻 타이포그래피 가이드 표준 뼈대 (React Component)

```tsx
import styles from './typography.module.scss';
import GuideSection from './components/guide-section';

// 단일 타이포그래피 스펙 렌더링을 위한 공통 컴포넌트
const TypeRow = ({ name, size, weight, sample }: { name: string; size: number; weight: number; sample: string }) => (
  <div className={styles.row}>
    <div className={styles.meta}>
      <span className={styles.name}>{name}</span>
      <span className={styles.spec}>
        {size}px / W{weight}
      </span>
    </div>
    <div
      className={styles.sample}
      style={{ fontSize: `${size}px`, fontWeight: weight, lineHeight: 1.5 }}
    >
      {sample}
    </div>
  </div>
);

const TypographyGuidePage = () => {
  const sampleText = 'The quick brown fox jumps over the lazy dog. 디자인 시스템 가이드입니다.';

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Typography</h1>
        <p style={{ color: '#6b7280' }}>
          용도별로 세분화된 4단계 타이포그래피 스케일(Headline, Title, Body, Label)을 정의합니다.
        </p>
      </header>

      {/* 1. Headline 영역 */}
      <GuideSection title="1. Headline (20~36px)">
          <TypeRow name="Headline 1" size={36} weight={800} sample={sampleText} />
          {/* 추가 스케일 행 작성 */}
      </GuideSection>
      
      {/* 2. Title, 3. Body, 4. Label 영역도 동일한 형식으로 작성 */}

    </div>
  );
};

export default TypographyGuidePage;
```