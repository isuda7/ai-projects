# 디자인 시스템 Button 가이드 문서 규격

Button 컴포넌트에 대한 가이드 문서를 수정하거나 관련 컴포넌트를 확장할 때는 이 문서의 규칙과 스펙을 따릅니다.

## 1. 컴포넌트 정보
- **경로**: `src/components/ui/button.tsx`
- **스타일**: `src/components/ui/button.module.scss` (Tailwind 배제, 100% SCSS Modules)
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
- `.variant_solid`, `.variant_outline`: variant에 따른 토글 클래스
- `.color_primary`, `.color_danger`: color에 따른 토글 클래스
- `.size_md`, `.size_lg`: size에 따른 토글 클래스
- `.full_width`, `.is_loading`: 상태/옵션에 따른 유틸리티 클래스

## 4. 컴포넌트 작성 주의사항
1. `forwardRef`를 사용하여 외부에서 버튼의 DOM 노드에 포커스를 주거나 위치를 계산할 수 있도록 합니다.
2. `loading` 상태일 때는 원래 아이콘이나 텍스트 옆에 로더를 보여주는 것이 아니라, 로더를 띄우면서 버튼 자체의 `disabled` 속성을 암시적으로 `true`로 만들어 이중 클릭을 방지합니다.
3. 스타일은 `clsx`나 `cn` 유틸리티를 활용해 깔끔하게 병합합니다.

---

### 가이드 페이지 구조 (src/pages/guide/button.tsx)
가이드 페이지는 다음의 섹션을 포함해야 합니다:
1. **기본 설명 (H1)**
2. **Variants & Colors (H2)**: `solid`, `outline`, `ghost` 등의 형태와 컬러 팔레트 교차 조합 렌더링.
3. **Sizes & States (H2)**: `sm`, `md`, `lg` 등 크기 변화와 `disabled`, `loading`, `fullWidth`, 아이콘 탑재 모습 렌더링.
* 레이아웃 뼈대는 `PROMPT_GUIDE_01_BASE.md`의 `template.module.scss`를 재사용합니다.