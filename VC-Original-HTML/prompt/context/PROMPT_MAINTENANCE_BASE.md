# 🛠️ PROMPT_MAINTENANCE_BASE.md (실무 유지보수 퀵 컨텍스트)

본 문서는 초기 세팅 파이프라인이 모두 종료된 후, **실무(실전)에서 단일 컴포넌트를 추가하거나 기존 디자인을 수정할 때** AI가 반드시 숙지해야 할 핵심 절대 규칙을 압축해 둔 "실전용 치트키 프롬프트"입니다.

단위 작업을 수행할 때 다른 여러 문서를 읽을 필요 없이, 이 문서 하나만 튜닝(Context 주입)하면 시스템의 핵심 룰을 위반하지 않고 코드를 작성할 수 있습니다.

---

## 🚨 1. 아키텍처 환경 통제 (Environment Rules)
- **Vanilla + SCSS 100%**: 우리는 React, Vue, Tailwind CSS를 일절 사용하지 않는 순수 Vanilla 웹 프로젝트입니다.
- **프레임워크 찌꺼기 배제**: `className=`, `{...props}`, `.tsx` 등 React나 모던 프레임워크 문법은 절대 금지됩니다.
- **Bootstrap 배제**: 상호작용용 JS 모듈만 허용할 뿐, `d-flex`, `btn-primary` 등 Bootstrap의 고유 유틸리티 및 CSS 클래스는 절대 사용하지 않습니다.

## 🧱 2. 옵션 클래스 통제 (Option Classes Rules)
새로운 SCSS 클래스나 HTML 뼈대를 설계할 때 적용되는 철칙입니다. BEM의 고전적인 방식(Modifiers)을 철저히 금지합니다.
- **접두사 절대 금지**: `size_sm`, `variant_ghost`, `color_primary` 형태의 접두어 네이밍을 쓰지 마십시오.
- **독립 클래스 선호**: `.sm`, `.ghost`, `.primary` 등 의미 단위로 완전히 쪼개진 독립 클래스만을 만들고 조합하여 디자인하십시오. (예: `<button class="btn primary sm ghost">`)

## 🔄 3. 동기화(Sync) 통제 (Synchronization Rules)
하나를 추가/수정했을 때 반드시 연결 고리를 잊지 않고 업데이트해야 합니다.
1. **대시보드 업데이트**: 신규 페이지(가이드 또는 프론트 화면)를 생성했다면, 즉시 루트의 `index.html`을 열고 자바스크립트 데이터 배열(`guideData` 또는 `frontData`)에 새 항목(URL, 날짜, 상태)을 추가하십시오.
2. **사이드바 메뉴 업데이트**: 새로운 컴포넌트(`guide/component/new.html`)를 만들었다면, 즉시 `guide/layout/sidebar.html` 파일에 접근하여 **`Components` 카테고리** 아래에 메뉴 링크(`<a href="...">`)를 꽂아 넣으십시오.
3. **글로벌 SCSS 추가**: 새로운 컴포넌트 스타일(`_new.scss`)을 만들었다면, 즉시 `assets/scss/global.scss` 파일에 `@use 'components/new';` 구문을 추가하십시오.
4. **가이드 화면 반영**: `_colors.scss`에 새로운 컬러를 추가하거나 `_button.scss`에 새로운 상태를 추가했다면, 반드시 관련된 가이드 HTML 파일(`colors.html`, `button.html` 등)의 시연 영역(Preview) 코드를 함께 렌더링(업데이트)하여 변경 사항을 증명하십시오.

---
> **[작업자 지시사항]**
> AI에게 새로운 단위 컴포넌트 생성이나 수정을 지시할 때, 반드시 본 문서(`PROMPT_MAINTENANCE_BASE.md`)와 최종 체크리스트(`PROMPT_CONTEXT_06_CHECKLIST.md`) 두 가지를 기본 프롬프트로 주입한 뒤 지시를 내리십시오.
