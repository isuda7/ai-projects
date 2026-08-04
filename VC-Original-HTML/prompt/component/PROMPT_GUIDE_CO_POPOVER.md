# 디자인 시스템 Popover 가이드 생성 프롬프트

> **🚨 [필수 규격] 순수 HTML/SCSS 원칙**
> 이 컴포넌트는 React가 아닌 순수 **HTML5와 SCSS(BEM Snake Case)**를 사용하여 구현해야 합니다. 
> 파일 내에 잔존하는 React(tsx), Tailwind, Props 관련 문법은 모두 무시하고 순수 마크업과 SCSS 클래스 구조로 변환하여 적용하십시오. Bootstrap JS의 `data-bs-*` 속성은 활용 가능하나 Bootstrap CSS는 절대 배제합니다.



- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.

> **💡 [핵심 규칙] Popover Dismiss (바닥 클릭 시 닫힘)**
> 팝오버 요소에는 반드시 `data-bs-trigger="focus"` 속성을 포함하여 사용자가 배경(바깥 영역)을 클릭했을 때 자동으로 닫히도록 구성해야 합니다. Overview Spec 테이블에도 이 옵션을 명시하십시오.

- **개별 구성 스펙**: 이 컴포넌트만의 고유한 스펙과 시연해야 할 화면 구성(Variants)은 아래의 구조를 반드시 따릅니다.

### 가이드 페이지 개별 구성 스펙 (guide/component/popover.html)

1. Overview & Specs
2. Basic Usage
  - 2.1. Default State
