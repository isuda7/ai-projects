# 디자인 시스템 Drawer 가이드 생성 프롬프트

- **공통 뼈대**: 반드시 `PROMPT_GUIDE_01_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성 스펙**: 이 컴포넌트만의 고유한 스펙과 시연해야 할 화면 구성(Variants)은 아래의 구조를 반드시 따릅니다.

### 가이드 페이지 개별 구성 스펙 (src/pages/guide/drawer.tsx)

1. Overview & Specs
2. Basic Usage
  - 2.1. Default State
