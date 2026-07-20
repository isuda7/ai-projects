# 디자인 시스템 가이드 컴포넌트 생성 마스터 프롬프트

앞으로 새로운 UI 컴포넌트(예: Button, Input, Modal 등)의 가이드 페이지를 생성할 때는, 기존 결과물들을 역으로 추적하여 정립한 아래의 **3가지 핵심 관점(포지션)**을 무조건 준수하여 React 코드를 작성해 주세요.

## 🗂️ 1. 메뉴 구성 관점 (Menu Configuration Perspective)
새로운 가이드를 시스템 전체의 숲(메뉴 구조) 안에서 어디에 위치시킬 것인가에 대한 기준입니다.

*   새로운 컴포넌트를 만들면 반드시 `src/pages/guide/guide-layout.tsx` 파일 내 `GUIDE_MENU` 배열을 찾아, 아래 **5대 상위 카테고리 중 가장 알맞은 1곳**에 하위 메뉴로 등록해야 합니다.
    *   **Elements**: 기초 빌딩 블록 (Button, Badge, Avatar, Skeleton 등)
    *   **Forms**: 사용자 입력 및 폼 구성 요소 (Input, Checkbox, Select, Field 등)
    *   **Navigation**: 이동, 탐색 및 메뉴 요소 (Breadcrumb, Pagination, Menu 등)
    *   **Data Display**: 데이터 및 콘텐츠 시각화 (Table, Card, Accordion 등)
    *   **Feedback & Overlays**: 팝업, 알림, 상태 피드백 (Dialog, Alert, Tooltip, Spinner 등)

## 🎨 2. 가이드 템플릿 디자인 관점 (Template Design Perspective)
컴포넌트를 가이드 문서에서 시각적으로 어떻게 보여주고 렌더링할 것인가에 대한 디자인 철학입니다.

*   **스타일 재사용**: `src/pages/guide/template.module.scss`에 정의된 `.wrapper`, `.header`, `.preview` 등의 공통 클래스를 반드시 가져와서 일관된 문서 레이아웃을 구성합니다.
*   **오픈형 프리뷰 렌더링**: 사용자 화면을 시뮬레이션하는 렌더링 영역(`.preview`)은 특정 테두리 박스나 Card 배경 등에 억지로 가두지 않습니다. 컴포넌트가 브라우저 환경에 맞게 자연스럽게(오픈형으로) 렌더링되도록 방치하는 것이 원칙입니다. (단, Form 레이아웃과 Field 구조의 차이를 보여주는 등 맥락상 구분이 필요한 경우에만 예외적으로 허용합니다.)
*   **1:1 코드 뷰 매칭**: 모든 `.preview` 영역 바로 아래에는 커스텀 컴포넌트인 `<CodeBlock>` (`src/pages/guide/components/code-block.tsx`)을 사용하여, 화면에 렌더링된 요소와 정확히 1:1로 매칭되는 코드를 제공해야 합니다. (더 이상 `div.code_view`를 사용하지 않습니다.)

## 📝 3. 컴포넌트 기본 가이드 포맷 관점 (Guide Format Perspective)
실제 컴포넌트 페이지(`.tsx`) 내부의 마크업 구조와 필수 스펙을 어떻게 짜임새 있게 작성할 것인가에 대한 룰입니다.

*   **컴파일 에러 방지**: 파일의 최상단 1번째 줄에는 반드시 `// @ts-nocheck` 주석을 삽입하여 불필요한 빌드 에러를 사전에 차단합니다.
*   **접기/펼치기 구조**: 페이지 본문의 모든 H2 섹션은 반드시 `<GuideSection>` 컴포넌트로 감싸서 아코디언처럼 접고 펼칠 수 있게 만들어야 합니다.
*   **3단계 계층 필수 구성**: 가이드의 본문은 반드시 아래의 3단계 흐름을 따라야 합니다.
    1.  **Overview & Specs**: 컴포넌트의 목적과 핵심 속성(Props) 표기.
    2.  **Basic Usage**: 가장 기본적이고 뼈대가 되는 디폴트 렌더링.
    3.  **Variants & States**: 크기, 색상, 비활성화 등 실무에서 쓰이는 다양한 옵션 변화 나열.

---

## 💻 [부록] 가이드 페이지 마스터 뼈대 (Boilerplate)

AI는 새로운 컴포넌트 생성 시 위 3가지 관점이 모두 완벽하게 녹아든 아래의 코드를 복사하여, 컴포넌트명과 내용만 교체하여 작성하십시오.

```tsx
// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';

// TODO: 작성할 컴포넌트 import (예: import { Button } from '@/components/ui/button';)

const [ComponentName]GuidePage = () => {
  return (
    <div className={styles.wrapper}>
      {/* 1. 가이드 헤더 영역 (H1) */}
      <header className={styles.header}>
        <h1 className={styles.title_h1}>[Component Name]</h1>
        <p className={styles.description}>
          이곳에 해당 컴포넌트의 역할과 사용 목적을 명확하게 설명합니다. (디자인 관점에 따라 박스 구속 없이 자연스럽게 서술)
        </p>
      </header>

      {/* 2. 컴포넌트 스펙 및 사용법 (H2) - 포맷 관점 (Overview) */}
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
          <CodeBlock>
            <pre>
              <code>
{`import { [ComponentName] } from '@/components/ui/[component-name]';

// Basic usage
<[ComponentName] variant="solid">Action</[ComponentName]>`}
              </code>
            </pre>
          </CodeBlock>
      </GuideSection>

      {/* 3. 대분류 섹션 (H2) - 포맷 관점 (Basic Usage) */}
      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            컴포넌트의 가장 기본적인 형태와 핵심 사용법을 보여줍니다.
          </p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Primary State</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>가장 기본이 되는 디폴트 상태의 렌더링입니다.</p>
          
          <div className={styles.preview}>
            {/* 실제 컴포넌트 오픈형 렌더링 영역 */}
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<[ComponentName]>Action</[ComponentName]>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>

      {/* 4. 대분류 섹션 (H2) - 포맷 관점 (Variants & States) */}
      <GuideSection title="3. Variants & States">
          <p className={styles.description}>크기, 색상, 비활성화 등 다양한 옵션과 상태 변화를 나열합니다.</p>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>3.1. Sizes</h3>
          <p className={styles.description} style={{marginBottom: '12px'}}>컴포넌트의 크기별 변형을 보여줍니다.</p>
          
          <div className={styles.preview}>
            {/* Small 사이즈 등 컴포넌트 변형 렌더링 영역 */}
          </div>
          <CodeBlock>
            <pre>
              <code>
{`<[ComponentName] size="sm">Small</[ComponentName]>`}
              </code>
            </pre>
          </CodeBlock>
        </div>
      </GuideSection>
    </div>
  );
};

export default [ComponentName]GuidePage;
```