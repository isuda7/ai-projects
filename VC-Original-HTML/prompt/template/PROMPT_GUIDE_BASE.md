# 디자인 시스템 가이드 컴포넌트 생성 마스터 프롬프트

앞으로 새로운 UI 컴포넌트(예: Button, Input, Modal 등)의 가이드 페이지를 생성할 때는, 기존 결과물들을 역으로 추적하여 정립한 아래의 **3가지 핵심 관점(포지션)**을 무조건 준수하여 HTML 코드를 작성해 주세요.

## 🗂️ 1. 메뉴 구성 관점 (Menu Configuration Perspective)
새로운 가이드를 시스템 전체의 숲(메뉴 구조) 안에서 어디에 위치시킬 것인가에 대한 기준입니다.

*   새로운 컴포넌트를 만들면 반드시 `guide/layout/sidebar.html` (또는 가이드용 공통 사이드바) 파일 내 네비게이션 메뉴를 찾아, **`Components` 카테고리(단일 통합 분류)** 아래에 하위 메뉴로 등록해야 합니다.
*   **폼(Form) 관련 네이밍 규칙**: Input, Select, Checkbox, Radio, Textarea, Switch 등 폼과 관련된 컴포넌트는 개별 파일로 생성합니다. 이때 모든 컴포넌트가 `Components` 단일 카테고리로 통합된 상태라면 메뉴명(Label)에 `Form - Input`과 같이 `Form - ` 접두사를 붙여 오름차순 정렬 시 자연스럽게 그룹핑되게 하십시오. (단, 사용자의 지시로 카테고리를 `Forms` 등 세부 분류로 나눌 경우에는 이 접두사를 빼고 본래 이름만 적습니다.)

## 🎨 2. 가이드 템플릿 디자인 관점 (Template Design Perspective)
컴포넌트를 가이드 문서에서 시각적으로 어떻게 보여주고 렌더링할 것인가에 대한 디자인 철학입니다.

*   **스타일 재사용**: `assets/scss/guide/_template.scss` 등에 정의된 `.guide_wrapper`, `.guide_header`, `.guide_preview` 등의 공통 클래스를 반드시 가져와서 일관된 문서 레이아웃을 구성합니다.
*   **오픈형 프리뷰 렌더링 (Open-Rendering)**: 사용자 화면을 시뮬레이션하는 렌더링 영역(`.guide_preview`)은 테두리 박스나 Card 배경 등에 억지로 가두지 않습니다. 컴포넌트가 브라우저 환경에 맞게 자연스럽게(오픈형으로) 렌더링되도록 방치하는 것이 원칙입니다. (단, Form 레이아웃 등 맥락상 구분이 필요한 경우 예외)
    > **⚠️ [절대 금지 사항]**
    > AI는 컴포넌트 프리뷰 렌더링 시, 억지로 `border`, `shadow`, `bg-white`, `card` 컨테이너 등을 사용하여 컴포넌트를 박스 안에 가두지 마십시오. 프리뷰 컨테이너(`.guide_preview`) 내부에는 순수하게 해당 컴포넌트만 렌더링되어야 합니다.
*   **1:1 코드 뷰 매칭**: 모든 `.guide_preview` 영역 바로 아래에는 `<div class="code_block">` 구조를 사용하여 화면에 렌더링된 요소와 정확히 1:1로 매칭되는 마크업 소스를 제공해야 합니다.

## 📝 3. 컴포넌트 기본 가이드 포맷 관점 (Guide Format Perspective)
실제 컴포넌트 페이지(`.html`) 내부의 마크업 구조와 필수 스펙을 어떻게 짜임새 있게 작성할 것인가에 대한 룰입니다.

*   **접기/펼치기 구조**: 페이지 본문의 모든 섹션은 반드시 `<section class="guide_section">` 태그로 감싸 문서를 구조화합니다.
*   **3단계 계층 필수 구성**: 가이드의 본문은 반드시 아래의 3단계 흐름을 따라야 합니다.
    1.  **Overview & Specs**: 컴포넌트의 목적과 핵심 속성(Modifiers/Attributes) 표기.
    2.  **Basic Usage**: 가장 기본적이고 뼈대가 되는 디폴트 렌더링.
    3.  **Variants & States**: 크기, 색상, 비활성화 등 실무에서 쓰이는 다양한 옵션 변화 나열.

---

## 💻 [부록] 가이드 페이지 마스터 뼈대 (Boilerplate)

* **주의**: 전체 HTML 뼈대를 구성할 때, <body> 바로 안쪽에 `<div data-include="/layout/header.html"></div>` 와 `<div class="guide-main-container">` 래퍼를 구성하고 그 안에 `<div data-include="/guide/layout/sidebar.html"></div>` 를 넣어야 합니다. 또한 `</body>` 직전에 `<script src="/assets/js/include.js"></script>` 를 반드시 선언하세요.

AI는 새로운 컴포넌트 가이드 생성 시 위 3가지 관점이 모두 완벽하게 녹아든 아래의 마크업 코드를 복사하여, 컴포넌트명과 내용만 교체하여 작성하십시오. (전체 HTML 문서 뼈대 안에 아래 내용을 본문 컨텐츠로 삽입)

```html
<!-- 가이드 래퍼 -->
<div class="guide_wrapper">
  
  <!-- 1. 가이드 헤더 영역 (H1) -->
  <header class="guide_header">
    <h1 class="guide_title_h1">[Component Name]</h1>
    <p class="guide_description">
      이곳에 해당 컴포넌트의 역할과 사용 목적을 명확하게 설명합니다. (디자인 관점에 따라 박스 구속 없이 자연스럽게 서술)
    </p>
  </header>

  <!-- 2. 컴포넌트 스펙 및 사용법 (H2) - 포맷 관점 (Overview) -->
  <section class="guide_section">
    <h2 class="guide_title_h2">1. Overview & Specs</h2>
    <p class="guide_description">
      컴포넌트의 핵심 속성(Modifiers/Data Attributes)과 기본 사용법을 안내합니다.
    </p>
    
    <div class="spec_table_wrapper">
      <table class="spec_table">
        <thead>
          <tr>
            <th>Class / Attribute</th>
            <th>Values</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.is_solid</code></td>
            <td><code>.is_solid</code> | <code>.is_outline</code></td>
            <td><code>.is_solid</code></td>
            <td>속성에 대한 명확한 설명을 기재합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="guideline">
      <strong>Guideline:</strong> 컴포넌트 배치, 너비, 상호작용 등에 대한 기본 디자인 규칙과 정책을 작성합니다.
    </div>
  </section>

  <!-- 3. 대분류 섹션 (H2) - 포맷 관점 (Basic Usage) -->
  <section class="guide_section">
    <h2 class="guide_title_h2">2. Basic Usage</h2>
    <p class="guide_description">
      컴포넌트의 가장 기본적인 형태와 핵심 사용법을 보여줍니다.
    </p>

    <div class="guide_sub_section">
      <h3 class="guide_title_h3">2.1. Primary State</h3>
      <p class="guide_description" style="margin-bottom: 12px;">가장 기본이 되는 디폴트 상태의 렌더링입니다.</p>
      
      <!-- ⚠️ 절대 금지: 여기에 Card나 테두리 박스를 씌우지 마세요. 컴포넌트 원형 그대로 오픈형으로 렌더링하세요. -->
      <div class="guide_preview">
        <button type="button" class="btn btn_primary">Action</button>
      </div>
      
      <div class="code_block">
<pre><code>
&lt;button type="button" class="btn btn_primary"&gt;Action&lt;/button&gt;
</code></pre>
      </div>
    </div>
  </section>

  <!-- 4. 대분류 섹션 (H2) - 포맷 관점 (Variants & States) -->
  <section class="guide_section">
    <h2 class="guide_title_h2">3. Variants & States</h2>
    <p class="guide_description">크기, 색상, 비활성화 등 다양한 옵션과 상태 변화를 나열합니다.</p>

    <div class="guide_sub_section">
      <h3 class="guide_title_h3">3.1. Sizes</h3>
      <p class="guide_description" style="margin-bottom: 12px;">컴포넌트의 크기별 변형을 보여줍니다.</p>
      
      <!-- ⚠️ 절대 금지: 여기에 Card나 테두리 박스를 씌우지 마세요. 컴포넌트 원형 그대로 오픈형으로 렌더링하세요. -->
      <div class="guide_preview">
        <button type="button" class="btn btn_primary size_sm">Small</button>
      </div>
      
      <div class="code_block">
<pre><code>
&lt;button type="button" class="btn btn_primary size_sm"&gt;Small&lt;/button&gt;
</code></pre>
      </div>
    </div>
  </section>

</div>
```

## 🎨 [부록] 가이드 공통 SCSS 스타일 명세

AI가 제로베이스에서 프로젝트를 세팅할 때, **가이드 템플릿의 디자인(여백, 폰트 크기, 레이아웃 등)은 절대 임의로 상상해서 만들지 마십시오.** 
아래 제공된 원본 SCSS 코드는 디자인 의도가 완벽하게 반영된 기준 스펙(Spec)입니다. 

아래 SCSS 코드를 한 글자도 빠짐없이 100% 복사하여 `assets/scss/guide/_template.scss` 파일로 생성하고, 프로젝트 빌드 시 가이드 페이지 전용으로 로드되게 구성하십시오. (실제 서비스 화면에는 영향을 주지 않도록 `guide_` 접두사가 붙어있습니다.)

```scss
/* Guide Layout Foundation */
body:has(.guide-sidebar) {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  background-color: var(--color-gray-50, #f9fafb);
  overflow: hidden;
}

.guide-main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.guide-sidebar {
  width: 280px;
  background-color: var(--color-white, #ffffff);
  border-right: 1px solid var(--color-gray-200, #e5e7eb);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.02);
  z-index: 10;
}

.guide-nav {
  flex: 1;
  overflow-y: auto;
  padding: 24px;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-200);
    border-radius: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 4px;
  }

  a {
    display: block;
    padding: 10px 12px;
    text-decoration: none;
    color: var(--color-gray-600, #4b5563);
    font-weight: 500;
    font-size: 14px;
    border-radius: var(--radius, 8px);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--color-gray-100, #f3f4f6);
      color: var(--color-gray-900, #111827);
    }

    &[style*="font-weight: 700"] {
      background-color: var(--color-primary-50, #eff6ff);
      color: var(--color-primary-600, #2563eb) !important;
      font-weight: 600 !important;
    }
  }

  .category {
    font-size: 11px;
    font-weight: 700;
    color: var(--color-gray-400, #9ca3af);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 24px 0 12px 12px;
    
    &:first-child {
      margin-top: 8px;
    }
  }
}

.guide-content {
  flex: 1;
  padding: 48px 64px;
  overflow-y: auto;
  background-color: var(--color-white, #ffffff);
  height: 100%;
}

/* Guide Wrapper & Typography (Existing modernized) */
.guide_wrapper {
  max-width: var(--max-width-guide, 1024px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl, 32px);
}

.guide_header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 8px);
}

.guide_title_h1 {
  font-size: var(--font-size-h1, 32px);
  line-height: var(--font-line-height-h1, 1.2);
  font-weight: 800;
  color: var(--color-gray-900, #111827);
}

.guide_title_h2 {
  font-size: var(--font-size-h3, 20px);
  line-height: var(--font-line-height-body, 1.5);
  font-weight: 700;
  color: var(--color-gray-900, #111827);
  transition: color 0.2s ease;
}

.guide_title_h3 {
  font-size: var(--font-size-h4, 18px);
  line-height: var(--font-line-height-body, 1.5);
  font-weight: 500;
  color: var(--color-gray-800, #1f2937);
  margin-bottom: var(--spacing-md, 16px);
}

.guide_description {
  font-size: var(--font-size-body-md, 16px);
  color: var(--color-gray-600, #4b5563);
}

.guide_section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 24px);
  margin-top: 24px;
}

.guide_sub_section {
  display: flex;
  flex-direction: column;
}

.guideline {
  padding: var(--spacing-md, 16px);
  background-color: var(--color-primary-50, #eff6ff);
  border-radius: var(--radius, 8px);
  font-size: var(--font-size-body-sm, 14px);
  color: var(--color-gray-700, #374151);

  strong {
    color: var(--color-primary-600, #2563eb);
    margin-right: var(--spacing-xs, 8px);
  }
}

.guide_preview {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg, 24px);
  width: 100%;
  min-height: 120px;
  padding: var(--spacing-lg, 24px) 0;
  align-items: center;
  justify-content: center;

  > * {
    max-width: 100%;
  }

  > div, > form, > table, > ul {
    flex-shrink: 0;
  }
}

.code_block {
  background-color: var(--color-gray-800, #1f2937);
  padding: var(--spacing-md, 16px) 20px;
  overflow-x: auto;
  border-radius: var(--radius, 8px);
  margin-top: var(--spacing-md, 16px);

  pre,
  code {
    margin: 0;
    padding: 0;
    font-family: monospace;
    font-size: var(--font-size-label-lg, 14px);
    color: var(--color-gray-100, #f3f4f6);
    line-height: 1.6;
  }
}

.spec_table_wrapper {
  overflow-x: auto;
  border-radius: var(--radius, 8px);
  border: 1px solid var(--color-gray-200, #e5e7eb);
}

.spec_table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-body-sm, 14px);
  text-align: left;

  th,
  td {
    padding: var(--spacing-sm, 8px) 16px;
    border-bottom: 1px solid var(--color-gray-200, #e5e7eb);
  }

  th {
    background-color: var(--color-gray-50, #f9fafb);
    font-weight: 600;
    color: var(--color-gray-700, #374151);
  }

  td {
    color: var(--color-gray-600, #4b5563);

    code {
      background-color: var(--color-gray-100, #f3f4f6);
      padding: 2px 6px;
      border-radius: calc(var(--radius, 8px) - 4px);
      font-family: monospace;
      color: var(--color-primary-600, #2563eb);
      font-size: var(--font-size-label-md, 12px);
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
}

```