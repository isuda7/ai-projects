# 디자인 시스템 Icon 가이드 생성 프롬프트

> **🚨 [필수 규격] 순수 HTML/SCSS 원칙**
> 이 컴포넌트는 React가 아닌 순수 **HTML5와 SCSS(BEM Snake Case)**를 사용하여 구현해야 합니다. 
> 파일 내에 잔존하는 React(tsx), Tailwind, Props 관련 문법은 모두 무시하고 순수 마크업과 SCSS 클래스 구조로 변환하여 적용하십시오. Bootstrap JS의 `data-bs-*` 속성은 활용 가능하나 Bootstrap CSS는 절대 배제합니다.

- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성 스펙**: 이 컴포넌트만의 고유한 스펙과 시연해야 할 화면 구성(Variants)은 아래의 구조를 반드시 따릅니다.

### 🚨 [핵심] SVG Sprite 아이콘 제어 및 빌드 정책

본 디자인 시스템은 네트워크 깜빡임 방지 및 HTML 경량화를 위해 **SVG Sprite (`<use>` 태그)** 방식과 **`currentColor`** 를 활용합니다.
새로운 아이콘이 필요하면 원본 관리 경로(`/assets/icons/src/`)에 SVG 파일을 추가한 뒤, 터미널에서 `node scripts/build-icons.js` 명령어를 수동으로 실행하여 `/assets/icons/sprite.svg`를 빌드해야 합니다.

모든 아이콘의 ID는 `icon-{이름}` 형태를 가지므로, 사용할 때는 반드시 이름 앞에 `icon-` 접두사를 붙여야 합니다.

#### 1. Color Rollover (단순 색상 호버)
형태 변화 없이 색상만 변하는 경우, 단일 `<svg>` 태그를 사용하며 `color`를 변경합니다.
```html
<span class="icon text-gray-500 hover-primary">
  <svg><use href="/assets/icons/sprite.svg#icon-search"></use></svg>
</span>
```

#### 2. Shape-Shift Rollover (형태 변환 호버)
호버 시 아이콘의 메타포가 바뀌는 경우 (예: 빈 하트 ➔ 꽉 찬 하트), 부모 요소에 `.icon-hover-group`을 선언하고 내부에 두 개의 아이콘을 배치하여 CSS로 스위칭합니다.
이때 라벨 표기는 괄호를 사용하지 않고 상하 두 줄로 명확히 분리합니다.
```html
<button type="button" class="btn ghost icon icon-hover-group">
  <span class="icon icon-normal"><svg><use href="/assets/icons/sprite.svg#icon-heart-outline"></use></svg></span>
  <span class="icon icon-hover text-danger"><svg><use href="/assets/icons/sprite.svg#icon-heart-solid"></use></svg></span>
</button>
<!-- 라벨: heart-outline<br>heart-solid -->
```

#### 3. Sizing (크기 제어)
`.icon` 클래스만 사용하면 기본 24px 크기로 렌더링되며, 추가 클래스(`.icon-12` ~ `.icon-32`)를 결합해 4px 단위로 크기를 조절할 수 있습니다.
- `12px`, `16px`, `20px`, `24px`(기본), `28px`, `32px`

---

### 가이드 페이지 개별 구성 스펙 (guide/component/icon.html)

1. Overview & SVG Sprite 동작 원리
  - 1.1 SVG Sprite 동작 원리 (Master File)
  - 1.2 빌드 실행 방법 (How to Build)
2. Basic Usage
  - 2.1 Standard Color Hover
  - 2.2 Sizes (12px ~ 32px)
  - 2.3 Shape-Shift Hover
3. Icon System
  - ※ 공통 규칙: 실제 ID는 icon-{이름} 형태입니다.
  - 3.1 Directional (방향/네비게이션)
  - 3.2 Action & Status (기능/상태)
  - 3.3 File Formats (파일 형식)
  - 3.4 SNS & Stores (소셜/스토어)
  - 3.5 Shape-Shift (롤호버 전용)
