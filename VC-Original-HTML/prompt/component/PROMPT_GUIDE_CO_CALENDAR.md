# 디자인 시스템 Calendar & Scheduler 가이드 생성 프롬프트

> **🚨 [필수 규격] 순수 HTML/SCSS 원칙**
> 이 컴포넌트는 React가 아닌 순수 **HTML5와 SCSS(BEM Snake Case)**를 사용하여 구현해야 합니다. 
> 파일 내에 잔존하는 React(tsx), Tailwind, Props 관련 문법은 모두 무시하고 순수 마크업과 SCSS 클래스 구조로 변환하여 적용하십시오. Bootstrap JS의 `data-bs-*` 속성은 활용 가능하나 Bootstrap CSS는 절대 배제합니다.
> 달력 기능 구현을 위해 **Flatpickr**와 **FullCalendar** 라이브러리를 사용합니다.


- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **스크롤 분리 방지 (Flatpickr)**: 대시보드 뷰에서 스크롤 시 Flatpickr 달력이 인풋창과 분리되는 현상을 막기 위해, 반드시 JS 영역에 `window.addEventListener('scroll', ...)` 이벤트를 통해 `_positionCalendar()`를 호출하는 위치 재계산 코드를 포함해야 합니다.
- **개별 구성 스펙**: 이 컴포넌트만의 고유한 스펙과 시연해야 할 화면 구성(Variants)은 아래의 구조를 반드시 따릅니다.

### 가이드 페이지 개별 구성 스펙 (guide/component/calendar.html)

1. Datepicker (Flatpickr)
  - 1.1. Basic Popup & Range (단일 날짜 선택, 기간 선택)
  - 1.2. Extended Usage (Time Picker, Multiple Dates, Min Date, Month Picker)
2. Scheduler (FullCalendar)
  - 2.1. Month View (월간 일정표, Vibe Theme 적용)
