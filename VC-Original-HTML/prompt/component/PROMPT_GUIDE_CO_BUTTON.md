# 디자인 시스템 Button 가이드 문서 규격

> **🚨 [필수 규격] 순수 HTML/SCSS 원칙**
> 이 컴포넌트는 React가 아닌 순수 **HTML5와 SCSS(BEM Snake Case)**를 사용하여 구현해야 합니다. 
> 파일 내에 잔존하는 React(tsx), Tailwind, Props 관련 문법은 모두 무시하고 순수 마크업과 SCSS 클래스 구조로 변환하여 적용하십시오. Bootstrap JS의 `data-bs-*` 속성은 활용 가능하나 Bootstrap CSS는 절대 배제합니다.



Button 컴포넌트에 대한 가이드 문서를 수정하거나 관련 컴포넌트를 확장할 때는 이 문서의 규칙과 스펙을 따릅니다.

## 1. 컴포넌트 정보
- **경로**: `assets/scss/components/_button.scss`
- **스타일**: `src/components/ui/button.module.scss` (Tailwind 및 SCSS Modules 배제, 순수 SCSS BEM 적용)
- **역할**: 사용자의 이벤트를 받아 액션을 트리거하는 가장 기본적이고 범용적인 상호작용 컴포넌트입니다.

## 2. Props 상세 규격 (ButtonProps)
| 속성 (Prop) | 타입 (Type) | 기본값 (Default) | 설명 |
|---|---|---|---|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'text'` | `'solid'` | 버튼의 채움 및 테두리 시각 스타일 |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'default'` | 의미적(Semantic) 색상 테마 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | 버튼의 물리적 크기 |
| `fullWidth` | `boolean` | `false` | 부모 요소 너비의 100% 차지 여부 |
| `loading` | `boolean` | `false` | 로딩 상태 활성화 (로딩 스피너 표시 및 클릭 비활성화) |
| `leftIcon` | `React.ReactNode` | `undefined` | 텍스트 좌측 아이콘 |
| `rightIcon` | `React.ReactNode` | `undefined` | 텍스트 우측 아이콘 |
* 기본 HTML `button` 속성(`onClick`, `disabled` 등)은 모두 상속받습니다.

## 3. CSS/SCSS 클래스 네이밍 규칙
- `.button`: 기본 공통 스타일 (display, padding, transition 등)
- `.variant_solid`, `.btn.outline`: variant에 따른 토글 클래스
- `.color_primary`, `.btn.danger`: color에 따른 토글 클래스
- `.btn.md`, `.btn.lg`: size에 따른 토글 클래스
- `.btn.full_width`, `.btn.is_loading`: 상태/옵션에 따른 유틸리티 클래스

## 4. 컴포넌트 작성 주의사항
1. 웹 접근성(a11y)을 고려하여 시맨틱 태그를 유지합니다.
2. `loading` 상태일 때는 원래 아이콘이나 텍스트 옆에 로더를 보여주는 것이 아니라, 로더를 띄우면서 버튼 자체의 `disabled` 속성을 암시적으로 `true`로 만들어 이중 클릭을 방지합니다.
3. 스타일은 SCSS 유틸리티 클래스 활용합니다.

---

### 가이드 페이지 구조 (guide/component/button.html)
- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 코드(Boilerplate)를 그대로 복사하여 사용합니다. (메뉴 구성, 순수 HTML 레이아웃 사용)
- **컴포넌트 개별 구성 (이 파일의 핵심)**:
  1. **Overview & Specs**: 이 문서에 정의된 Button Props 표를 명시.
  2. **Basic Usage**: 가장 기본 형태의 버튼 렌더링.
  3. **Variants & Colors**: `solid`, `outline`, `ghost` 등의 형태와 컬러 팔레트 교차 조합 렌더링.
  4. **Sizes & States**: `sm`, `md`, `lg` 등 크기 변화와 `disabled`, `loading`, `fullWidth`, 아이콘 탑재 모습 렌더링.

3. Variants & States
  - 3.1. Variants (Solid, Outline, Ghost, Text)
  - 3.2. Colors (Primary, Danger, Secondary 등)
  - 3.3. Sizes (sm, md, lg, icon)
  - 3.4. States (Disabled, Loading)
  - 3.5. Block (Full Width)