# 디자인 시스템 가이드 컴포넌트 생성 프롬프트 (공통/기본 양식)

앞으로 새로운 UI 컴포넌트(예: Button, Input, Modal 등)의 가이드 페이지를 생성할 때는 아래의 규칙과 뼈대(Template) 구조를 준수하여 React 코드를 작성해 주세요.

## 📝 가이드 페이지 작성 규칙
1. **파일 경로**: `src/pages/guide/[component-name].tsx`
2. **스타일 재사용**: `src/pages/guide/template.module.scss`에 정의된 공통 클래스들을 그대로 재사용하여 일관된 레이아웃을 유지합니다. (`import styles from './template.module.scss';`)
3. **계층 구조 준수**: `H1`부터 `H4`까지의 위계를 준수하고, 특별히 강조할 주의사항은 `<div className={styles.guideline}>` 내부에 작성합니다.
4. 컴포넌트의 Props에 따른 다양한 상태(Variants, Sizes, States)를 시각적으로 잘 나타내야 합니다.
5. **프리뷰**: 사용자 화면을 그대로 보여주는 영역이므로 가두지 않고 오픈형으로 정리한다.

---

## 💻 가이드 페이지 표준 뼈대 (React Component)

```tsx
import styles from './template.module.scss';
// TODO: 작성할 컴포넌트 import (예: import Button from '@/components/ui/Button';)

const [ComponentName]GuidePage = () => {
  return (
    <div className={styles.wrapper}>
      {/* 1. 가이드 헤더 영역 (H1) */}
      <header className={styles.header}>
        <h1 className={styles.title_h1}>[Component Name]</h1>
        <p className={styles.description}>
          이곳에 해당 컴포넌트의 역할과 사용 목적을 명확하게 설명합니다.
        </p>
      </header>

      {/* 2. 대분류 섹션 (H2) - Basic Usage */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>1. Basic Usage</h2>
          <p className={styles.description}>
            컴포넌트의 가장 기본적인 형태와 핵심 사용법을 보여줍니다.
          </p>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 컴포넌트 사용 시 지켜야 할 디자인 규칙이나 제약 사항을 작성합니다.
          </div>
        </div>

        {/* 3. 중분류 섹션 (H3) */}
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>1.1. Primary State</h3>
          <p className={styles.description}>가장 기본이 되는 디폴트 상태의 렌더링입니다.</p>
          
          <div className={styles.content}>
            {/* 실제 컴포넌트 렌더링 영역 */}
          </div>
        </div>
      </section>

      {/* 2. 대분류 섹션 (H2) - Variants & States */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>2. Variants & States</h2>
          <p className={styles.description}>크기, 색상, 비활성화 등 다양한 옵션과 상태 변화를 나열합니다.</p>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Sizes</h3>
          <p className={styles.description}>컴포넌트의 크기별 변형을 보여줍니다.</p>
          
          {/* 4. 소분류 섹션 (H4) */}
          <div className={styles.detail_section}>
            <h4 className={styles.title_h4}>Small</h4>
            <div className={styles.content}>
              {/* Small 사이즈 컴포넌트 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default [ComponentName]GuidePage;
```