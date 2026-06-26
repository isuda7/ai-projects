# 디자인 시스템 가이드 컴포넌트 생성 프롬프트 (공통/기본 양식)

앞으로 새로운 UI 컴포넌트(예: Button, Input, Modal 등)의 가이드 페이지를 생성할 때는 아래의 규칙과 뼈대(Template) 구조를 준수하여 React 코드를 작성해 주세요.

## 📝 가이드 페이지 작성 규칙
1. **파일 경로**: `src/pages/guide/[component-name].tsx`
2. **스타일 재사용**: `src/pages/guide/template.module.scss`에 정의된 공통 클래스들을 그대로 재사용하여 일관된 레이아웃을 유지합니다. (`import styles from './template.module.scss';`)
3. **계층 구조 및 구성 준수**:
   - `H1`부터 `H4`까지의 위계를 준수합니다.
   - 문서 시작 부분(`H2`)에는 반드시 **Overview & Specs** 섹션을 배치하여 컴포넌트의 기본 스펙(Props 표)과 사용법을 명확히 정리합니다.
   - 모든 H2 섹션은 `src/pages/guide/components/guide-section.tsx`의 `<GuideSection>`을 사용하여 접고 펼칠 수 있도록 감싸야 합니다.
   - 특별히 강조할 주의사항은 `<div className={styles.guideline}>` 내부에 작성합니다.
4. **다양한 상태 렌더링**: 컴포넌트의 Props에 따른 다양한 상태(Variants, Sizes, States)를 시각적으로 잘 나타내야 합니다.
5. **프리뷰 (오픈형)**: 사용자 화면을 그대로 보여주는 렌더링 영역(`.preview`)은 박스에 가두지 않고 오픈형으로 구성합니다.
6. **1:1 코드 뷰 매칭**: Overview의 기본 사용법은 물론, 생성된 **모든 프리뷰(`.preview`) 영역 바로 아래**에는 해당 UI를 렌더링하는 코드 조각(`.code_view`)이 **빠짐없이 1:1로 제공**되어야 합니다.

---

## 💻 가이드 페이지 표준 뼈대 (React Component)

```tsx
import styles from './template.module.scss';
// TODO: 작성할 컴포넌트 import (예: import Button from '@/components/ui/Button';)
import GuideSection from './components/guide-section';

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

      {/* 2. 컴포넌트 스펙 및 사용법 (H2) - Overview & Specs */}
      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            컴포넌트의 핵심 속성(Props)과 기본 사용법을 안내합니다.
          </p>
          <div className={styles.spec_table_wrapper}>
            <table className={styles.spec_table}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>'solid' | 'outline'</code></td>
                  <td><code>'solid'</code></td>
                  <td>속성에 대한 명확한 설명을 기재합니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 컴포넌트 배치, 너비, 상호작용 등에 대한 기본 디자인 규칙과 정책을 작성합니다.
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`import [ComponentName] from '@/components/ui/[component-name]';

// Basic usage
<[ComponentName] variant="solid" color="primary">Action</[ComponentName]>`}
              </code>
            </pre>
          </div>
      </GuideSection>

      {/* 3. 대분류 섹션 (H2) - Basic Usage */}
      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            컴포넌트의 가장 기본적인 형태와 핵심 사용법을 보여줍니다.
          </p>

        {/* 3. 중분류 섹션 (H3) */}
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Primary State</h3>
          <p className={styles.description}>가장 기본이 되는 디폴트 상태의 렌더링입니다.</p>
          
          <div className={styles.preview}>
            {/* 실제 컴포넌트 렌더링 영역 */}
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`// 해당 컴포넌트를 사용하는 예시 코드`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      {/* 4. 대분류 섹션 (H2) - Variants & States */}
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>크기, 색상, 비활성화 등 다양한 옵션과 상태 변화를 나열합니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Sizes</h3>
          <p className={styles.description}>컴포넌트의 크기별 변형을 보여줍니다.</p>
          
          {/* 4. 소분류 섹션 (H4) */}
          <div className={styles.detail_section}>
            <h4 className={styles.title_h4}>Small</h4>
            <div className={styles.preview}>
              {/* Small 사이즈 컴포넌트 */}
            </div>
            <div className={styles.code_view}>
              <pre>
                <code>
{`// Small 사이즈 컴포넌트 사용 예시 코드`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default [ComponentName]GuidePage;
```