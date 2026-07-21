# 범용 데모 사이트 & 바이브 코딩 학습 프로젝트

이 프로젝트는 특정 주제에 국한되지 않고 다양한 주제의 웹 프로젝트에 대응하기 위한 범용 데모 포털입니다. 또한, '바이브 코딩'을 단계별로 학습하며 그 과정의 프롬프트를 자동으로 기록하고 자산화하는 것을 목표로 합니다.

## 🛠️ 기술 스택 (Universal Stack)
- **Framework**: React 19 (Vite 기반)
- **Language**: TypeScript
- **UI Library**: **shadcn/ui (Radix UI 기반)** - 표준적이고 세련된 UI 컴포넌트 시스템 구축.
- **Styling**: Tailwind CSS 기반으로 스타일링을 적용한다.
- **Routing**: `react-router-dom` + `vite-plugin-pages` (파일 기반 자동 라우팅).
- **State Management**: Zustand (클라이언트/퍼시스트), React Query (서버 데이터).
- **Animation**: Framer Motion.

## 📂 주요 디렉토리 및 파일
- `src/pages/`: 자동으로 라우팅되는 페이지들.
  - `index.tsx`: 포털 홈 (퍼블리싱 목록 및 자동 프롬프트 히스토리 뷰).
  - `guide.tsx`: 디자인 시스템 및 컴포넌트 가이드.
- `src/components/ui/`: shadcn/ui 스타일의 공통 컴포넌트 (Button, Card 등).
- `src/components/layout/`: 전역 레이아웃 및 사이드바 내비게이션.
- `src/store/`: Zustand 스토어 (특히 `usePromptStore`를 통한 프롬프트 자동 기록).
- `src/utils/`: 공통 유틸리티 (`cn` 클래스 병합 등).

## 📊 라우팅 및 폴더/레이아웃 관리 규칙 (Routing & Layout Strategy)
프로젝트의 라우팅과 레이아웃은 폴더 구조를 기반으로 역할을 명확히 분리하여 관리합니다.

1. **가이드와 사용자 화면(Front)의 완벽한 분리**
   - **가이드 영역 (`/guide/*`)**: 디자인 시스템, 컴포넌트 문서, 퍼블리싱 대시보드 등을 포함합니다. 독립된 가이드 전용 레이아웃(`guide-layout`)을 사용하여 좌측 사이드바와 본문 영역을 구성합니다.
   - **사용자 화면 영역**: 실제 서비스되는 프론트 화면으로, 범용 공통 레이아웃(`layout`)을 사용합니다.
2. **사용자 화면의 인증 상태별 폴더 분리**
   - **로그인 전 (`/unauthenticated/*`)**: 인증되지 않은 사용자가 접근하는 화면 (예: 로그인, 회원가입, 랜딩 페이지). 비인증 전용 레이아웃(`unauthenticated-layout`)을 적용하여 중앙 집중형 폼 구조 등을 사용합니다.
   - **로그인 후 (`/authenticated/*` 또는 기능 도메인별 폴더)**: 인증된 사용자만 접근할 수 있는 서비스 메인 화면들입니다.
3. **자동 라우팅과 레이아웃 래핑**
   - `vite-plugin-pages`를 활용한 파일 기반 라우팅 규칙에 따라, 각 최상위 라우트 파일(`guide.tsx`, `unauthenticated.tsx` 등)에서 하위 `Outlet`을 해당 폴더 성격에 맞는 레이아웃 컴포넌트로 감싸(Wrapping) 일관성을 강제합니다.

## 🛠️ 작업 및 확장 가이드
- **컴포넌트 추가**: `src/components/ui`에 shadcn 스타일의 컴포넌트를 추가하고, `guide.tsx`에 문서화하십시오.
- **프롬프트 로깅**: 새로운 기능을 구현하거나 중요한 아키텍처 변경 시 `addPrompt` 훅을 호출하여 기록을 남기십시오.
- **명명 규칙**: 컴포넌트 파일명은 `kebab-case`, CSS/SCSS 모듈의 클래스명은 `snake_case`를 엄격히 준수합니다.