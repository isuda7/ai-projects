# 🎨 SCSS 아키텍처 및 스타일링 컨텍스트 (SCSS Architecture)

이 프로젝트는 Tailwind CSS를 전혀 사용하지 않으며, 전역 스타일 및 모든 컴포넌트의 스타일링을 **100% SCSS (SCSS Modules 포함)**로 진행합니다. 이 문서는 전역 SCSS 설정 및 구조에 대한 원칙을 정의합니다.

## 1. 📂 폴더 구조 (`src/assets/scss/`)
전역적으로 사용되는 기본 설정, 테마 토큰, 믹스인은 컴포넌트 단위가 아닌 전역 폴더에서 관리되며 개별적으로 역할이 분리됩니다.

> **⚠️ [중요] 폴더 및 파일 생성 지시사항**
> AI가 전역 SCSS 파일들을 생성하거나 갱신할 때는 반드시 타겟 경로를 `src/assets/scss/[파일명].scss`로 정확하게 명시하여 코드를 출력해야 합니다. 절대 프로젝트 루트에 파일을 임의로 흩뿌려서는 안 되며, 정확한 경로를 제공해야만 에디터 도구가 폴더가 없을 경우 자동으로 폴더를 생성하고 해당 위치에 파일을 안전하게 작성할 수 있습니다.


- `global.scss`: 프로젝트 전역 SCSS 엔트리 파일 (아래의 설정 파일들을 `@use`로 통합하여 `main.tsx`에서 단일 호출되도록 구성)
- 아래의 import 되는 파일명은 _* (언더바) 를 적용한다.
- `_base.scss`: 브라우저 기본 스타일 초기화 (모든 태그는 상속 형태로 유연하게 적용)
- `_elevator.scss`: UI 깊이감을 표현하는 5단계 그림자 설정 (Elevator 가이드와 연동)
- `_colors.scss`: 시맨틱 컬러 팔레트 (계열당 50~900까지 10단계 스케일)
- `_typography.scss`: 타이포그래피 스케일 및 폰트 크기, 행간 정의
- `_variables.scss`: 전역적으로 사용될 기본 여백, 본문 사이즈 및 각종 유틸리티 변수
- `_mixins.scss`: 프로젝트의 기본이 되는 스타일 세트 (말줄임, 사이드 여백, 디자인 스크롤 등)

## 2. 📝 작성 원칙
- **상속(Inheritance) 중심 초기화**: `_base.scss`에서는 색상과 폰트 크기 등을 강제로 지정하지 않고, `inherit`을 활용해 부모의 스타일을 유연하게 상속받을 수 있도록 구성합니다.
- **CSS 변수(:root) 활용**: 테마(색상, 타이포그래피, 그림자 등)의 변경에 쉽게 대응할 수 있도록 `:root` 수준에서 CSS 변수(`--var`)로 토큰을 정의합니다.
- **모듈식 적용**: 컴포넌트 스타일은 `[name].module.scss` 형태로 만들며, 필요한 경우 `@use '@/assets/scss/mixins';` 처럼 명시적으로 믹스인 파일을 불러와 사용합니다.

## 3. 🎨 디자인 시스템 기본 정책 (Design Tokens)
이 프로젝트의 디자인 시스템(가이드)은 아래 정의된 CSS 변수(`:root`)를 단일 진실 공급원(SSOT)으로 삼아 화면을 구성합니다.

### A. Colors (`_colors.scss`)
모든 시맨틱 컬러는 50부터 900까지 10단계 스케일로 구성되며, 500을 기본 메인 컬러로 사용합니다.
- **Primary**: 기본 액션 대표 컬러 (예: `--color-primary-500: #009688;`)
- **Secondary**: 일반 보조 컬러 (예: `--color-secondary-500: #3f51b5;`)
- **Success**: 상승, 성공 긍정 - 적색 계열 (예: `--color-success-500: #e53935;`)
- **Danger**: 하락, 위험, 실패 - 청색 계열 (예: `--color-danger-500: #2196f3;`)
- **Grayscale**: 무채색 배경 및 텍스트 (예: `--color-gray-500: #6b7280;`, `--color-white`, `--color-black`)

### B. Typography (`_typography.scss`)
폰트 크기와 행간은 용도별 4단계 계층 구조를 갖습니다.
- **Headline (H1~H4)**: 20px ~ 36px / Line-height: 1.2 ~ 1.35
- **Title (Lg/Md/Sm)**: 14px ~ 18px / Line-height: 1.4
- **Body (Lg/Md/Sm)**: 14px ~ 18px / Line-height: 1.5
- **Label (Lg/Md/Sm)**: 10px ~ 13px / Line-height: 1.4

### C. Elevator (`_elevator.scss`)
UI 요소의 Z축 깊이감을 나타내는 그림자(Box-shadow) 스케일입니다.
- **Level 1 (`--elevator-1`)**: 미세한 깊이감 (버튼 등)
- **Level 2 (`--elevator-2`)**: 얕은 그림자 (카드, 드롭다운 등)
- **Level 3 (`--elevator-3`)**: 중간 그림자 (모달 등)
- **Level 4 (`--elevator-4`)**: 깊은 그림자 (팝업, 다이얼로그 등)
- **Level 5 (`--elevator-5`)**: 가장 깊은 그림자 (화면 전체 덮는 레이어 등)