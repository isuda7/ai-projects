# ✅ 세팅 및 유지보수 마무리 린팅(Linting) 체크리스트

새로운 프로젝트 세팅이 끝났거나(Phase 6), 실무에서 단일 컴포넌트 추가/수정 작업을 완료했을 때, AI는 스스로 이 문서를 읽고 아래 항목들이 100% 준수되었는지 최종 교차 검토(Cross-Validation)해야 합니다. 위반 사항 발견 시 즉시 코드를 자가 수정하십시오.

---

## 1. 🚨 환경 및 아키텍처 절대 규칙 감시
- **순수 SCSS 100% 준수**: 코드 내에 Tailwind CSS 유틸리티 클래스나 인라인 스타일(`style=""`)이 단 하나라도 섞여 들어가지 않았는가?
- **Bootstrap CSS 배제**: 상호작용을 위해 Bootstrap JS는 허용하되, Bootstrap 고유의 클래스(예: `btn-primary`, `d-flex` 등)를 마크업에 사용하지 않았는가?
- **BEM Snake Case 준수**: 모든 SCSS 클래스명과 HTML 속성이 `kebab-case`나 `camelCase`가 아닌 `snake_case`로 작성되었는가?

## 2. 🧱 옵션 클래스 (Option Classes) 규칙 감시
- **접두사 완전 제거**: 사이즈나 변형을 의미하는 클래스에 `size_sm`, `variant_ghost`, `color_primary`와 같이 구시대적인 BEM 접두사를 사용하지 않았는가?
- **독립 클래스 결합**: `.sm`, `.ghost`, `.primary`, `.is_active` 와 같이 완벽히 독립된 클래스들의 조합(Nesting)만으로 스타일이 제어되도록 설계되었는가?

## 3. 🧩 가이드 템플릿(프리뷰) 감시
- **오픈 렌더링(Open-Rendering)**: `.guide_preview` 안에 렌더링된 컴포넌트를 억지로 `.card`나 `border` 박스 등으로 감싸서 가두지 않았는가? (자연스러운 렌더링 필수)
- **강제 중앙 정렬 금지**: 탭(Tabs)이나 리스트 등 프론트엔드의 원래 흐름(Normal flow)을 가져야 하는 요소를 `.guide_preview`에서 강제로 중앙 정렬하지 않았는가?
- **테이블 렌더링 규칙**: Table 가이드 작성 시 `colspan`을 사용할 경우, 반드시 해당 칸 내부의 콘텐츠를 `<div>`로 한 번 더 감싸서 렌더링했는가?

## 4. 🔄 컴포넌트 추가에 따른 동기화(Sync) 감시
새로운 컴포넌트를 만들거나 속성을 추가했을 때, 반드시 아래 연결 고리들이 함께 업데이트되었는지 확인하십시오.
- **대시보드 동기화**: 신규 가이드 문서나 프론트 페이지를 만들었다면, 루트 디렉토리의 `index.html`(퍼블리싱 대시보드) 내부의 자바스크립트 배열(`guideData` 또는 `frontData`)에 해당 페이지의 링크와 상태를 누락 없이 추가했는가?
- **가이드 메뉴 동기화**: 신규 컴포넌트를 만들었다면, `guide/layout/sidebar.html` 파일의 올바른 카테고리(Forms, Elements 등) 하위에 해당 페이지 링킹(`<a href="...">`)이 반드시 추가되었는가?
- **글로벌 SCSS 동기화**: 신규 컴포넌트 SCSS 파일(`_new_component.scss`)을 생성했다면, `global.scss` 파일에 `@use 'components/new_component';` 구문을 누락 없이 추가했는가?
- **파운데이션 교차 검증**: `_colors.scss`에 새로운 컬러 변수(예: `primary_soft`)를 추가했다면, `guide/foundation/colors.html` 스와치 화면에도 해당 컬러를 시연하는 코드를 추가했는가?

---
위 항목들을 스스로 검열하여 통과하지 못한 코드가 발견되면 즉시 리팩토링한 후, 작업자에게 "최종 검수 및 자체 수정 완료" 리포트를 제출하십시오.
