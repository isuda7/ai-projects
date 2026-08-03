# 디자인 시스템 Tabs 가이드 생성 프롬프트

> **🚨 [필수 규격] 순수 HTML/SCSS 원칙**
> 이 컴포넌트는 React가 아닌 순수 **HTML5와 SCSS(BEM Snake Case)**를 사용하여 구현해야 합니다. 
> 파일 내에 잔존하는 React(tsx), Tailwind, Props 관련 문법은 모두 무시하고 순수 마크업과 SCSS 클래스 구조로 변환하여 적용하십시오. Bootstrap JS의 `data-bs-*` 속성은 활용 가능하나 Bootstrap CSS는 절대 배제합니다.



- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성 스펙**: 이 컴포넌트만의 고유한 스펙과 시연해야 할 화면 구성(Variants)은 아래의 구조를 반드시 따릅니다.

### 가이드 페이지 개별 구성 스펙 (guide/component/tabs.html)

1. Overview & Specs
2. Basic Usage
  - 2.1. Default State
3. Variants & States
  - 3.1. Basic (Underline 스타일)
  - 3.2. Pills (버튼형 스타일)
  - 3.3. Fill / Justified (너비 꽉 채움)
**[추가 지침]**
- 부트스트랩의 `.nav_tabs`를 절대 쓰지 말고, 우리의 규격인 `.tabs_list` 및 `.tab_btn` 클래스를 사용하세요.
- 변형 탭은 `.tabs_list pills` 또는 `.tabs_list fill` 형태로 사용합니다.
- 탭 안의 텍스트를 강제 중앙 정렬하지 마세요.