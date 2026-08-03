# 🧩 컴포넌트 아키텍처 및 상세 스펙 컨텍스트 (Component Architecture & Specs)

이 문서는 프로젝트 내 모든 UI 컴포넌트의 분류, 폴더 구조 및 작성 규칙을 정의하는 마스터 가이드입니다. 새로운 컴포넌트를 생성할 때 이 문서를 기준으로 삼아야 합니다.

## 🚨 [최우선 원칙] React 프롬프트 Override(무시) 규칙
이 프로젝트 내의 개별 컴포넌트 스펙 문서들(`prompt/component/PROMPT_GUIDE_CO_*.md`)은 본래 React/Tailwind 환경을 가정하고 작성된 내용(예: `.tsx`, `cn()`, `Props` 등)이 포함되어 있을 수 있습니다.
**AI는 어떠한 경우에도 해당 React 문법에 휘둘려서는 안 되며, 개별 컴포넌트 프롬프트 내용을 100% "순수 HTML5 + SCSS (BEM Snake Case)" 구조로 강제 번역(Override)하여 구현해야 합니다.**

## 1. 🗂️ 컴포넌트 분류 (Component Categories)
컴포넌트는 그 복잡도와 역할에 따라 다음 단계로 분류하여 설계합니다.

*   **Core / Base Components (원시 컴포넌트)**: 다른 컴포넌트의 기본 빌딩 블록이 되는 단순한 UI 요소입니다. (예: `Button`, `Input`, `Badge`)
*   **Compound Components (복합 컴포넌트)**: 여러 원시 요소를 조합하여 덩어리를 이루는 UI 조각입니다. (예: `Card`, `Table`, `Tabs`)
*   **Feedback & Overlays (피드백/팝업)**: Bootstrap JS의 힘을 빌려 상호작용하는 레이어입니다. (예: `Dialog`, `Alert`, `Tooltip`)

## 2. 📂 디렉토리 구조 및 네이밍 규칙 (Directory & Naming)
*   **위치**: 
    *   모든 컴포넌트 스타일 파일: `assets/scss/components/` 하위에 위치.
    *   가이드 HTML 문서: `guide/component/` 하위에 위치.
*   **파일 네이밍**: `kebab-case`를 엄격하게 적용합니다. (예: `button.html`, `_date-picker.scss`)
*   **스타일 규칙 (CSS Classes)**: SCSS 내부의 클래스명은 철저하게 `snake_case` (BEM 방식 유사)로 작성합니다. (예: `.btn_primary`, `.input_field`, `.is_active`, `.has_error`)

## 3. 📝 컴포넌트 작성 표준 스펙 (Implementation Specs)
1.  **순수 마크업 (Semantic HTML)**: 접근성(a11y)을 고려하여 의미에 맞는 태그(`button`, `nav`, `dialog` 등)를 최우선으로 사용합니다.
2.  **독립적 SCSS**: 컴포넌트의 뼈대와 형태(Variants), 크기(Sizes), 상태(States)를 SCSS 클래스로 철저히 분리하여 캡슐화합니다.
3.  **Bootstrap JS 연동**: 탭(Tabs), 모달(Modal) 등 자바스크립트 토글이 필요한 기능은 Bootstrap JS의 `data-bs-*` 속성을 HTML에 삽입하여 구동시키되, 시각적 디자인은 커스텀 SCSS 클래스로 덮어씌웁니다.

## 4. ⚠️ 예외적인 레이아웃 강제 규칙 (Special Constraints)
*   **테이블 병합 (Colspan) 규칙**: `<table>`에서 `colspan`을 사용할 경우 브라우저 렌더링 엔진에 의해 레이아웃이 깨지거나 넓이가 무시되는 현상이 있습니다. 이를 방지하기 위해 **colspan이 적용된 `<td>` 내부의 텍스트나 컨텐츠는 반드시 `<div>` 태그로 한 번 더 감싸서 렌더링**해야 합니다.
    - ❌ 잘못된 예: `<td colspan="2">통합 내용</td>`
    - ⭕ 올바른 예: `<td colspan="2"><div class="colspan_inner">통합 내용</div></td>`