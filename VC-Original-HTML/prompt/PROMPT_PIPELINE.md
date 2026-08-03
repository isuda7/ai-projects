# 🧠 PROMPT_PIPELINE.md (프롬프트 파이프라인 총괄 가이드)

이 문서는 프로젝트 내의 모든 프롬프트 규칙을 관리하고, 실행 순서를 총괄하는 **최상위 마스터 문서**입니다. 무작정 프롬프트를 실행하여 코드를 생성하는 것이 아니라, 본 문서에 정의된 체계적인 프로세스와 명명 규칙에 따라 단계적으로 프로젝트를 구축해야 합니다.

## 1. 📂 프롬프트 문서 명명 및 분류 규칙
프로젝트 내 모든 프롬프트 파일(`.md`)은 그 목적과 역할에 따라 폴더를 명확히 구분하여 관리합니다.

*   **`context/` (컨텍스트 및 환경 설정: `*_CONTEXT_*`)**
    *   **목적:** AI를 학습시키기 위한 기본 환경, 아키텍처 목적, 상황 등의 전반적인 지식 정보.
    *   **활용:** 코드 생성 전 AI의 배경지식(Context)을 동기화할 때 참조용으로 사용합니다. (예: `context/PROMPT_CONTEXT_SETTINGS.md`, `context/PROMPT_CONTEXT_COMPONENT.md`)

*   **`template/` (기본 템플릿: `PROMPT_GUIDE_BASE`, `PROMPT_DASHBOARD`)**
    *   **목적:** 대시보드 화면이나 가이드 페이지를 생성하기 위한 표준 양식 및 뼈대 코드.
    *   **활용:** 전체적인 레이아웃 및 뼈대를 잡기 위한 템플릿으로 활용합니다.

*   **`foundation/` (파운데이션 가이드: `PROMPT_GUIDE_FA_*`)**
    *   **목적:** 컬러, 타이포그래피, 그림자 등 디자인 시스템의 기반(Foundation) 요소들을 가이드하는 문서.
    *   **활용:** 공통 스타일 시스템을 정립하고 자산화할 때 사용합니다.

*   **`component/` (컴포넌트 가이드: `PROMPT_GUIDE_CO_*`)**
    *   **목적:** 개별 UI 컴포넌트(버튼, 인풋, 모달 등)의 가이드 페이지를 생성하기 위한 지시문.
    *   **활용:** 새로운 UI 컴포넌트를 설계하고 추가할 때 복사하여 코드를 생성하는 직접적인 지시문으로 사용합니다. (예: `PROMPT_GUIDE_CO_[컴포넌트명].md`)

---

## 2. 🚨 핵심 기술 스택 및 정책 (Tech Stack & Policy)
이 프로젝트는 철저히 Vanilla 웹 환경을 지향하며 아래의 대원칙을 무조건 따릅니다.
*   **Tech Stack:** `HTML5`, `Vanilla JavaScript`, `SCSS` 기반으로만 구성됩니다.
*   **사용 금지:** `React`, `Vue`, `Tailwind CSS`, `Vite`, `TypeScript` 등 모던 프레임워크와 유틸리티 CSS는 일절 배제합니다.
*   **Bootstrap 정책:** 
    *   디자인 충돌을 막기 위해 **Bootstrap CSS는 절대 불러오거나 사용하지 않습니다.**
    *   대신 상호작용(탭, 모달 등)을 위한 **Bootstrap JS는 허용**하며, 이를 위한 최소한의 뼈대 스타일은 `_bs-functional.scss`에 직접 커스텀하여 운영합니다.
*   **명명 규칙:** 파일명은 `kebab-case`, CSS/SCSS 클래스명은 `snake_case` (BEM 기반)를 엄격히 준수합니다.

---

## 3. 🔄 체계적인 실행 프로세스 (Execution Process)
프로젝트의 안정적인 아키텍처 구성을 위해 아래의 순서대로 프롬프트를 실행하고 개발을 진행합니다.

1.  **환경 설정 (Environment Setup):** Vanilla HTML, SCSS 컴파일 환경 구성 및 레이아웃 폴더 구조 세팅.
2.  **레이아웃 설정 (Layout Setup):** 전역 공통 헤더/푸터 및 기본 템플릿 영역 렌더링 세팅.
3.  **가이드와 프론트의 구분 (Separation of Guide and Front):** 사용자 화면(프론트)과 디자인 시스템(가이드) 영역의 메뉴/라우팅 완벽 분리.
4.  **대시보드와 가이드 템플릿 (Dashboard & Guide Template):** 가이드 메인 진입점(Dashboard)과 가이드 문서 작성을 위한 표준 양식(`template/PROMPT_GUIDE_BASE.md`) 확립.
5.  **가이드 파운데이션 스켈레톤 추가 (Batch Guide Addition):** 타이포그래피, 컬러, 유틸리티(`_utilities.scss`) 등 파운데이션 요소를 정립.
6.  **전체 컴포넌트 가이드 일괄 생성 (Batch Generation of Component Guides):** `PROMPT_GUIDE_CO_*` 시리즈를 기반으로 핵심 컴포넌트(Button, Input, Select, Checkbox, Radio, Table, Card, Tabs, Pagination, Dialog, Badge, Alert)들을 **순수 HTML + SCSS** 규격으로 재해석하여 구현.
7.  **마무리 검수 (Final Review & Checklist):** 프리뷰 오픈형 강제 여부, SCSS 규칙, `colspan` 시 `div` 감싸기 여부 등을 스스로 최종 점검.

---

## 3. 📐 가이드 규칙 관리 (Guide Rules Management)

*   **단일 진실 공급원 (SSOT):** 코드 템플릿이나 컴포넌트 스펙 설계 규칙이 변경될 경우, 코드를 먼저 수정하지 말고 반드시 해당 `PROMPT_*.md` 문서를 먼저 업데이트하여 AI와 작업자의 기준을 일치시켜야 합니다.
*   **표기법 강제 준수:** 파일명은 `kebab-case`, CSS/SCSS 클래스명은 `snake_case` 등의 전역 코드 작성 규칙은 모든 템플릿 프롬프트 내에 고정으로 명시되어 일관성을 유지해야 합니다.
*   **점진적 자산화:** 새로운 유형의 가이드나 복잡한 패턴이 발견되면 기존 프롬프트 문서들을 참고하여 `PROMPT_GUIDE_05_*.md` 등 번호를 매겨 추가 생성하여 프로젝트의 자산으로 관리합니다.