# 🧠 PROMPT_PIPELINE.md (프롬프트 파이프라인 총괄 가이드)

이 문서는 프로젝트 내의 모든 프롬프트 규칙을 관리하고, 새로운 프로젝트(Zero-base) 셋업 시 **AI의 토큰 한계(Token Limits)와 할루시네이션을 방지하기 위해 단계적(Phase)이고 배치(Batch) 단위로 실행하는 최상위 마스터 매뉴얼**입니다. 

절대 모든 프롬프트를 한 번에 실행하지 마시고, 아래의 Phase 1부터 Phase 4까지 순차적으로 AI에게 주입하여 안전하게 코드를 렌더링하세요.

---

## 1. 📂 프롬프트 문서 명명 및 분류 규칙
프로젝트 내 모든 프롬프트 파일(`.md`)은 그 목적과 역할에 따라 명확히 구분되어 있습니다.

*   **`context/` (컨텍스트 및 환경 설정: `*_CONTEXT_*`)**: AI를 학습시키기 위한 기본 환경, 아키텍처 목적, 상황 등의 전반적인 지식 정보. (가장 먼저 주입됨)
*   **`template/` (기본 템플릿: `PROMPT_GUIDE_BASE`)**: 화면을 렌더링하기 위한 표준 양식 및 레이아웃 뼈대 코드.
*   **`foundation/` (파운데이션: `PROMPT_GUIDE_FA_*`)**: 컬러, 타이포그래피 등 디자인 시스템의 기반 공통 토큰.
*   **`component/` (컴포넌트: `PROMPT_GUIDE_CO_*`)**: 개별 UI 컴포넌트(버튼, 인풋, 탭 등) 생성을 위한 지시문.

---

## 2. 🚨 핵심 기술 스택 및 정책 (Tech Stack & Policy)
이 프로젝트는 철저히 Vanilla 웹 환경을 지향하며 아래의 대원칙을 무조건 따릅니다.
*   **Tech Stack:** `HTML5`, `Vanilla JavaScript`, `SCSS` 기반으로만 구성됩니다.
*   **사용 금지:** `React`, `Vue`, `Tailwind CSS`, `Vite`, `TypeScript` 등 모던 프레임워크와 유틸리티 CSS는 일절 배제합니다.
*   **Bootstrap 정책:** 디자인 충돌을 막기 위해 **Bootstrap CSS는 절대 불러오거나 사용하지 않습니다.** (상호작용을 위한 Bootstrap JS만 허용)
*   **옵션 클래스 (Option Classes):** SCSS 클래스 작성 시 BEM의 복잡한 접두사(`variant_`, `size_` 등)를 금지하고, `.btn .primary .sm`과 같이 철저히 독립된 단어들의 조합과 중첩(Nesting)을 통해 설계합니다.

---

## 3. 🔄 체계적인 실행 프로세스 (Batch Execution Manual)

새로운 프로젝트(Zero-base)를 구축할 때, **사용하시는 AI 환경에 따라 두 가지 방식**으로 실행할 수 있습니다.

> **💡 [추천] 🤖 Agent 자동 실행 (자율형 AI IDE 환경)**
> Cursor, Antigravity 등 자율 에이전트(Agent) 기능이 있는 IDE에서는 개발자가 직접 복붙할 필요가 없습니다.
> 채팅창에 **"PROMPT_PIPELINE.md 문서의 Phase 1부터 Phase 4까지 명시된 파일들을 순차적으로 읽고 스스로 전체 프로젝트를 구축해 줘"** 라고 한 줄만 지시하십시오. AI가 스스로 파일을 읽고 단계별로 코드를 생성합니다.

> **📝 수동 실행 (ChatGPT, 웹 Claude 등 일반 챗봇 환경)**
> 파일 접근 권한이 없는 일반 챗봇 환경에서는, 개발자가 아래의 Phase 단위로 프롬프트 파일의 내용들을 직접 복사하여 단계적으로 지시해야 합니다. (한 번에 5~8개 Batch 단위로 끊어서 실행)

---

### 🚀 Phase 1: 아키텍처 및 시스템 초기화 (Architecture & Context)
AI에게 프로젝트의 전반적인 규칙과 코어 룰을 주입하고 빈 디렉토리 뼈대를 셋업하는 단계입니다.
- **주입 프롬프트**: 
  1. `context/PROMPT_CONTEXT_01_SETTINGS.md`
  2. `context/PROMPT_CONTEXT_02_GUIDE_SYSTEM.md`
  3. `context/PROMPT_CONTEXT_05_SCSS.md`
- **AI 지시문**: *"위 3개의 규칙을 숙지하고, 프로젝트의 폴더 구조와 빈 파일(`global.scss`, `_base.scss` 등) 뼈대를 우선 생성해."*

### 🚀 Phase 2: 디자인 시스템 파운데이션 및 템플릿 (Foundation & Template)
기본 레이아웃 템플릿을 렌더링하고, 디자인 토큰을 구축합니다.
- **주입 프롬프트**:
  1. `context/PROMPT_CONTEXT_03_PROPS.md`
  2. `template/PROMPT_GUIDE_BASE.md`
  3. `foundation/PROMPT_GUIDE_FA_COLORS.md` 등 파운데이션 프롬프트
- **AI 지시문**: *"위 규칙을 바탕으로 옵션 클래스 방식을 숙지하고, 가이드 화면의 기본 레이아웃(`layout.html` 등)과 `_colors.scss` 등 파운데이션 코드를 작성해."*

### 🚀 Phase 3: 컴포넌트 배치 단위 구축 (Component Batches)
* batch 1은 기본으로 생성하고, 나머지 배치는 필요에 따라 생성.

- **AI 지시문 (Batch 실행 공통 프롬프트)**: 
  *"다음 전달하는 [Batch N] 목록의 컴포넌트 프롬프트 스펙들을 읽고, 아래 4가지 작업을 일괄 수행해 줘.
  1. 컴포넌트별 SCSS 파일 생성 (`assets/scss/components/_xxx.scss`)
  2. 컴포넌트별 가이드 HTML 파일 생성 (`guide/component/xxx.html`)
  3. `global.scss`에 생성된 SCSS 파일 임포트 추가
  4. `sidebar.html` 메뉴에 컴포넌트 링크 추가
  5. 최상위 `index.html` (대시보드)의 `guideData` 배열에 컴포넌트 객체 추가
  * (주의: 4번 항목 추가 시 폼(Form) 관련 컴포넌트들은 반드시 사이드바의 `<li><a href="#">Forms</a><ul>` 하위 메뉴 안으로 오름차순 배치할 것. 5번 항목 추가 시에는 폼 관련 컴포넌트 이름 앞에 'Form - ' 접두사를 붙여 오름차순으로 정렬할 것)*"

**[Batch 1: 기본 디스플레이 컴포넌트 (Basic Display)]**
- `PROMPT_GUIDE_CO_BADGE.md`
- `PROMPT_GUIDE_CO_BUTTON.md`
- `PROMPT_GUIDE_CO_CARD.md`
- `PROMPT_GUIDE_CO_PAGINATION.md`
- `PROMPT_GUIDE_CO_TABLE.md`
- `PROMPT_GUIDE_CO_SEPARATOR.md` (구분선)
- `PROMPT_GUIDE_CO_BULLET_LIST.md`

**[Batch 2: 핵심 폼 컴포넌트 (Core Form Inputs)]**
- `PROMPT_GUIDE_CO_INPUT.md`
- `PROMPT_GUIDE_CO_SELECT.md`
- `PROMPT_GUIDE_CO_CHECKBOX.md`
- `PROMPT_GUIDE_CO_RADIO_GROUP.md`
- `PROMPT_GUIDE_CO_TEXTAREA.md`

**[Batch 3: 확장 폼 및 컨트롤 (Advanced Form Controls)]**
- `PROMPT_GUIDE_CO_LABEL.md` (폼 라벨)
- `PROMPT_GUIDE_CO_SWITCH.md`
- `PROMPT_GUIDE_CO_FIELD.md`
- `PROMPT_GUIDE_CO_FORM.md`
- `PROMPT_GUIDE_CO_SLIDER.md`
- `PROMPT_GUIDE_CO_CHIP.md`

**[Batch 4: 메뉴 및 탐색 컴포넌트 (Menus & Navigation)]**
- `PROMPT_GUIDE_CO_ACCORDION.md`
- `PROMPT_GUIDE_CO_TABS.md`
- `PROMPT_GUIDE_CO_COLLAPSIBLE.md`
- `PROMPT_GUIDE_CO_NAVIGATION_MENU.md`
- `PROMPT_GUIDE_CO_DROPDOWN_MENU.md`

**[Batch 5: 레이어 및 팝업 컴포넌트 (Overlays & Popups)]**
- `PROMPT_GUIDE_CO_SONNER.md`
- `PROMPT_GUIDE_CO_DIALOG_ALERT.md`
- `PROMPT_GUIDE_CO_DIALOG.md`
- `PROMPT_GUIDE_CO_POPOVER.md` (팝오버)
- `PROMPT_GUIDE_CO_TOOLTIP.md` (툴팁)

**[Batch 6: 상태 피드백 및 지표 (Status & Feedback)]**
- `PROMPT_GUIDE_CO_AVATAR.md`
- `PROMPT_GUIDE_CO_ALERT.md`
- `PROMPT_GUIDE_CO_BREADCRUMB.md` (경로 네비게이션)
- `PROMPT_GUIDE_CO_SPINNER.md` (로딩 스피너)
- `PROMPT_GUIDE_CO_SKELETON.md`
- `PROMPT_GUIDE_CO_PROGRESS.md`

**[Batch 7: 확장 컴포넌트]**
- `PROMPT_GUIDE_CO_CAROUSEL.md`
- `PROMPT_GUIDE_CO_CALENDAR.md`
- `PROMPT_GUIDE_CO_CHART.md`

**[Batch 8: 기타 컴포넌트]**
- `PROMPT_GUIDE_CO_SHEET.md`
- `PROMPT_GUIDE_CO_HOVER_CARD.md`
- `PROMPT_GUIDE_CO_SCROLL_AREA.md`
- `PROMPT_GUIDE_CO_ASPECT_RATIO.md`
- `PROMPT_GUIDE_CO_RESIZABLE.md`
- `PROMPT_GUIDE_CO_CONTEXT_MENU.md`
- `PROMPT_GUIDE_CO_MENUBAR.md`
- `PROMPT_GUIDE_CO_COMMAND.md`


- **AI 지시문 (공통)**: *"제공한 Batch N의 프롬프트 스펙을 바탕으로, 순수 HTML 가이드 화면과 SCSS 코드를 완벽히 렌더링해."*

### 🚀 Phase 4: 자가 검수 및 마무리 (Final Review)
생성된 모든 코드가 프로젝트의 절대 규칙을 어기지 않았는지 점검합니다.
- **주입 프롬프트**: `context/PROMPT_CONTEXT_06_CHECKLIST.md`
- **AI 지시문**: *"지금까지 렌더링한 모든 코드(SCSS, HTML)를 체크리스트를 기반으로 자체 검수하고, React 잔재나 Bootstrap CSS 유입, 접두사 규칙 위반이 있는지 확인해서 수정해."*
