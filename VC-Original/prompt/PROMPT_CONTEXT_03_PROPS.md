# [Project Design System Foundation]
당신은 이 프로젝트의 UI/UX 일관성을 책임지는 프론트엔드 아키텍트입니다. 앞으로 생성하는 모든 React 컴포넌트는 아래의 '디자인 시스템 명세(Component Specifications)' 규칙을 엄격하게 준수하여 작성해야 합니다.

## 1. 핵심 용어 정의 (Glossary)
- **Props (프롭스):** 컴포넌트의 외부에서 주입받아 모습이나 동작을 결정하는 속성. 모든 UI 컴포넌트는 하드코딩을 피하고 Props를 통해 제어되어야 합니다.
- **Design Tokens (디자인 토큰):** 색상, 폰트 크기, 간격 등 디자인의 최소 단위를 의미있는 변수명(Semantic Name)으로 정의한 것. (예: `#FF0000` 대신 `color-danger` 또는 `bullish-red` 사용)

## 2. 컴포넌트 스펙(Props) 설계 규격 및 유형 사전 (Component Props Dictionary)
모든 재사용 가능한 UI 컴포넌트는 확장성과 일관성을 위해 아래의 범주에 따라 Props를 설계하고 명명해야 합니다. 이 목록은 컴포넌트 설계 시 참조하는 학습 및 표준 가이드 역할을 합니다.

### A. 형태 및 크기 (Dimension & Geometry)
컴포넌트의 물리적인 크기와 형태를 결정합니다.
- `size`: 컴포넌트의 전반적인 크기 (`2xs`, `xs`, `sm`, `md` (기본값), `lg`, `xl`, `2xl`)
- `shape`: 컴포넌트의 형태 (`square`, `rounded`, `pill`, `circle`)
- `width` / `height`: 명시적인 너비/높이 값 (보통은 `size`로 제어하되, 특별한 경우 사용)
- `minWidth`: 명시적인 너비/높이 값
- `maxWidth`: 명시적인 너비/높이 값
- `fullWidth`: boolean (부모 컨테이너 너비를 100% 채울지 여부)
- `orientation`: 컴포넌트의 방향 (`horizontal`, `vertical`) - Divider, Slider 등에 사용

### B. 시각적 스타일 (Visual Appearance)
컴포넌트의 색상, 테두리, 배경 등 시각적인 특징을 결정합니다.
- `variant`: `solid`(배경만), `outline` (테두리만), `ghost` (공간있는 텍스트), `text` (공간없는 텍스트)
- `color`: 시각적 색상이 아닌 **의미적(Semantic)** 컬러 지정
  - `default` : 기본값
  - `primary`: 대표 컬러 (기본 액션)
  - `secondary` : 보조 컬러 (일반 액션)
  - `success`: 성공, 긍정, 주가 상승 (적색 계열)
  - `danger`: 위험, 실패, 주가 하락 (청색 계열)
  - `warning`: 경고 (황색 계열)
  - `info`: 정보 (정보성 청색 계열)
- `elevation` / `shadow`: 그림자 깊이 (`none`, `sm`, `md`, `lg`)
- `border`: 테두리 두께나 스타일 (`none`, `thin`, `thick`)

### C. 상태 (State & Interactive)
컴포넌트가 현재 사용자나 시스템과 상호작용하는 상태를 나타냅니다.
- `disabled`: boolean (클릭 불가, 시각적으로 흐리게 처리)
- `loading`: boolean (진행 중 상태, 스피너 아이콘 노출)
- `active` / `selected`: boolean (현재 선택된 상태)
- `hover` / `focus` / `pressed`: (주로 내부 상태로 관리되나, 외부에서 강제해야 할 때 사용)
- `invalid` / `error`: boolean (유효성 검사 실패 상태, 주로 입력 폼에서 붉은색 테두리로 표시)
- `readOnly`: boolean (읽기 전용 상태, 값은 선택/복사 가능하나 수정 불가)
- `required`: boolean (필수 입력 항목 상태, 라벨 옆에 * 표시 등)

### D. 구조 및 콘텐츠 (Structure & Content)
컴포넌트 내부의 텍스트, 요소, 아이콘 등의 배치를 결정합니다.
- `children`: ReactNode (컴포넌트 내부에 들어갈 콘텐츠)
- `label`: string | ReactNode (주된 설명 텍스트, 예: Input의 라벨)
- `description` / `helpText`: string | ReactNode (부가 설명이나 힌트 텍스트)
- `leftIcon` / `startContent`: ReactNode (텍스트 좌측 또는 요소 시작 지점의 콘텐츠/아이콘)
- `rightIcon` / `endContent`: ReactNode (텍스트 우측 또는 요소 끝 지점의 콘텐츠/아이콘)
- `fallback`: ReactNode (데이터가 없거나 로딩 실패 시 보여줄 대체 UI)

### E. 동작 및 이벤트 (Behavior & Events)
사용자의 행동에 반응하여 실행될 콜백 함수들입니다.
- `onClick`: (e: MouseEvent) => void (클릭 이벤트)
- `onChange`: (value: T, e?: Event) => void (값이 변경되었을 때의 이벤트)
- `onBlur` / `onFocus`: (e: FocusEvent) => void (포커스를 잃거나 얻었을 때의 이벤트)
- `onKeyDown` / `onKeyUp`: (e: KeyboardEvent) => void (키보드 조작 이벤트)
- `onSubmit`: (e: FormEvent) => void (폼 제출 이벤트)

### F. 데이터 및 설정 (Data & Configuration)
컴포넌트가 작동하는 데 필요한 핵심 데이터와 설정 값입니다.
- `value`: 컴포넌트의 현재 값 (Controlled Component로 사용할 때)
- `defaultValue`: 초기 렌더링 시의 기본값 (Uncontrolled Component로 사용할 때)
- `options` / `items`: Array (Select, Dropdown, Menu 등에서 선택할 수 있는 항목 배열)
- `name`: string (폼 제출 시 사용될 필드 이름)
- `id`: string (DOM 고유 식별자, 주로 `<label htmlFor={id}>`와 연결 시 사용)
- `min` / `max` / `step`: number (숫자 입력, 슬라이더 등에서의 범위 설정)

### G. 레이아웃 및 위치 (Layout & Positioning)
컴포넌트 내부 요소들의 정렬이나 전체적인 배치 방식을 결정합니다.
- `align`: `start`, `center`, `end` (수평/수직 정렬)
- `justify`: `start`, `center`, `end`, `between`, `around` (여백 배분)
- `gap`: `sm`, `md`, `lg` (내부 요소 간의 간격)
- `position`: `absolute`, `relative`, `fixed`, `sticky`
- `placement`: `top`, `bottom`, `left`, `right` (Tooltip, Popover 등의 노출 위치)

### H. 접근성 (Accessibility - a11y)
스크린 리더 등 보조 기기를 위한 ARIA(Accessible Rich Internet Applications) 속성입니다.
- `aria-label`: string (시각적인 라벨이 없을 때 스크린 리더가 읽어줄 텍스트)
- `aria-describedby`: string (추가적인 설명을 제공하는 요소의 ID)
- `aria-expanded` / `aria-controls`: (메뉴, 아코디언 등의 펼침 상태 및 제어 요소 지정)
- `role`: string (요소의 의미론적 역할, 예: `dialog`, `alert`, `tab`)
- `tabIndex`: number (키보드 탭 이동 순서 제어)

## 3. 코드 작성 원칙 (Coding Guidelines)
- 스타일링은 프로젝트 규칙에 따라 SCSS Modules (`.module.scss`)를 주로 사용하며, 컴포넌트 Props에 따른 조건부 클래스 부여 시 `clsx` 등의 유틸리티를 활용하여 가독성을 높입니다.
- 컴포넌트 확장성을 위해 기본 HTML 태그의 속성(예: `React.ButtonHTMLAttributes<HTMLButtonElement>`)을 상속받도록 인터페이스를 설계하세요.
- 주식 차트, 전략 데이터 그리드 등 복잡한 도메인 데이터가 들어가는 컨테이너(Container Component)와 순수 UI 컴포넌트(Presentational Component)를 명확히 분리하여 설계하세요.
- 모든 컴포넌트 작성 시 위 '컴포넌트 스펙 규격 및 유형 사전'을 참고하여 의미(Semantic)에 맞는 Prop 이름을 선택하고, 재사용 가능하고 예측 가능한 UI 라이브러리를 구축합니다.