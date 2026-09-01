# 범용 데모 사이트 & 바이브 코딩 학습 프로젝트 (HTML/SCSS 환경)

이 프로젝트는 특정 주제에 국한되지 않고 다양한 주제의 웹 프로젝트에 대응하기 위한 범용 데모 포털입니다. 또한, '바이브 코딩'을 단계별로 학습하며 그 과정의 프롬프트를 자동으로 기록하고 자산화하는 것을 목표로 합니다.

## 🏷️ 프로젝트 기본 정보 (Project Info)
- **Project Name**: `Vibe Design System` (작업 시 프로젝트 성격에 맞게 이곳의 이름을 변경하십시오.)
- 이 프로젝트 이름은 가이드 시스템 및 대시보드의 **헤더 좌측 상단 로고(Logo) 텍스트**로 전역적으로 사용되어야 합니다.

## 🛠️ 기술 스택 및 핵심 정책 (Universal Stack & Policy)
이 프로젝트는 순수 웹 표준(Vanilla) 환경을 엄격히 준수합니다.
- **Language**: HTML5, Vanilla JavaScript
- **Styling**: SCSS (CSS 프리프로세서 활용, `_base.scss`, `_utilities.scss` 등 체계적인 모듈식 구조 유지)
- **UI Interaction**: Bootstrap JS (모달, 드롭다운, 툴팁, 탭 등 기능 구현 목적에 한해 허용)
- **사용 금지 기술**: React, Vue, Tailwind CSS, Vite, TypeScript, Bootstrap CSS
- **Bootstrap 정책**: 디자인 겹침 방지를 위해 Bootstrap CSS는 완전히 배제하며, JS 작동에 필수적인 최소한의 CSS 뼈대는 `_bs-functional.scss`를 통해 제공합니다.

## 📂 주요 디렉토리 및 폴더 분류 (Directory Structure)
프로젝트 루트에서 역할에 따라 다음 3개의 최상위 폴더로 완벽히 분리하여 관리합니다.

1. **`assets/` (자산화 영역)**: 정적 리소스 및 디자인 공통 자산 관리 폴더.
2. **`front/` (프론트 페이지 영역)**: 사용자 화면(Front) HTML 페이지. **[중요] `front` 하위에 별도의 `pages` 폴더를 두지 않으며, `front` 폴더 자체가 페이지의 루트 역할을 합니다.**
3. **`guide/` (가이드 페이지 영역)**: 디자인 시스템 및 퍼블리싱 대시보드를 위한 HTML 페이지.

## 📊 레이아웃 및 환경 관리 규칙 (Layout Strategy)
이 프로젝트는 정적 HTML 기반이므로, 환경과 레이아웃의 구분을 폴더 구조(`front/` vs `guide/`)로 명확히 관리합니다.

1. **프론트 화면과 가이드 문서의 레이아웃 분리**
   - **사용자 화면 영역 (`front/`)**: 범용 프로덕트 레이아웃(일반적인 헤더, 풋터 등)을 사용합니다.
   - **가이드 영역 (`guide/`)**: 디자인 시스템과 컴포넌트를 보여주기 위해 좌측 사이드바와 우측 컨텐츠 영역으로 나뉘는 독립된 '가이드 전용 레이아웃 템플릿'을 적용합니다.
2. **로그인 유무 등 상태별 레이아웃 구분**
   - 로그인 전/후 등 글로벌 네비게이션 구조가 다를 경우, HTML 파일의 기본 뼈대 코드(Boilerplate)를 명확히 구분하여 작성하고 혼용되지 않도록 주의합니다.

## 🛠️ 작업 및 확장 가이드
- **스타일 작성 원칙**: 부트스트랩의 기본 유틸리티 클래스 의존성을 최소화하고, 가이드에 정의된 SCSS 디자인 토큰(Color, Typography 등) 기반으로 컴포넌트 단위 스타일링을 적용합니다. 
- **JS 인터랙션**: 모달이나 드롭다운 등 복잡한 인터랙션이 필요한 UI는 Bootstrap의 Data Attributes(`data-bs-toggle`, `data-bs-target` 등)나 제공되는 JS API를 적극 활용하여 하드코딩 부담을 줄입니다.

## 📝 명명 규칙 (Naming Conventions)
프로젝트 내의 일관성과 유지보수성을 위해 다음의 네이밍 표기법을 엄격히 준수합니다.

1. **폴더명 및 페이지(HTML 파일)**: `kebab-case`
   - 예: `front/`, `admin-dashboard/`, `user-profile.html`
   - 영문 소문자와 하이픈(-)만을 사용하여 파일 경로에서의 오류를 방지합니다.
2. **이미지 및 리소스 파일(Assets)**: `snake_case`
   - 예: `icon_search.svg`, `bg_main_banner.png`
   - 파일의 종류나 용도를 명확히 식별할 수 있도록 단어를 언더스코어(_)로 연결합니다.
3. **CSS/SCSS 클래스명 (Class)**: `snake_case`
   - 예: `.btn_primary`, `.card_wrapper`, `.nav_menu`
   - 디자인 시스템 및 컴포넌트 스타일링 목적의 클래스명은 모두 언더스코어를 사용합니다.
4. **HTML 아이디 (ID)**: `camelCase`
   - 예: `id="userEmailInput"`, `id="submitBtn"`
   - 주로 JavaScript에서 요소를 선택하거나 DOM을 제어할 때 식별자로 쓰이므로, JS 변수 네이밍(Camel)과 통일합니다.
5. **SCSS 변수 및 믹스인 (Variables & Mixins)**: `kebab-case`
   - 예: `$primary-color`, `@mixin flex-center`
   - 일반적인 CSS 커스텀 속성(`--var-name`)과의 일관성을 위해 하이픈을 사용합니다.