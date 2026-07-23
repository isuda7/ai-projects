# 🧩 컴포넌트 아키텍처 및 상세 스펙 컨텍스트 (Component Architecture & Specs)

이 문서는 프로젝트 내 모든 React 컴포넌트의 분류, 외부 라이브러리 활용 방식, 폴더 구조 및 작성 규칙을 정의하는 마스터 가이드입니다. 새로운 컴포넌트를 생성하거나 기존 컴포넌트를 리팩토링할 때 이 문서를 기준으로 삼아야 합니다.

## 1. 🗂️ 컴포넌트 분류 (Component Categories)
컴포넌트는 그 복잡도와 역할에 따라 다음 단계로 분류하여 설계합니다.

*   **Core / Base Components (원시 컴포넌트)**: 다른 컴포넌트의 기본 빌딩 블록이 되는 단순한 컴포넌트입니다. (예: `Button`, `Input`, `Badge`, `Icon`)
*   **Compound Components (복합 컴포넌트)**: 여러 원시 컴포넌트를 조합하여 독립적인 기능을 수행하는 UI 조각입니다. (예: `Card`, `Modal`, `Accordion`, `FormField`)
*   **Layout Components (레이아웃 컴포넌트)**: 화면의 구조와 배치를 담당합니다. (예: `Header`, `Sidebar`, `Grid`, `Container`)
*   **Smart / Domain Components (도메인 컨테이너)**: 전역 상태(Zustand)를 구독하거나 데이터 페칭(React Query), 복잡한 비즈니스 로직을 포함하는 컴포넌트입니다. 순수 UI 컴포넌트와 철저히 분리되어야 합니다.

## 2. 📦 외부 라이브러리 활용 원칙 (Library Usage)
*   **UI 철학 (shadcn/ui & Radix UI)**: 접근성(a11y)과 키보드 내비게이션, 상태 머신은 Radix UI와 같은 Headless UI의 철학을 차용합니다. 단, Tailwind CSS는 사용하지 않으므로 **스타일링은 100% SCSS Modules로 구현**해야 합니다.
*   **스타일 병합 (`clsx`, `tailwind-merge`)**: `src/utils/cn` (또는 유사한 유틸리티)를 활용하여 조건부 클래스와 외부 주입 클래스(`className` prop)를 안전하게 병합합니다.
*   **아이콘 (lucide-react)**: 일관된 획 굵기와 스타일을 제공하는 `lucide-react`를 프로젝트 표준 아이콘 라이브러리로 사용합니다. 
*   **애니메이션 (framer-motion)**: 복잡한 트랜지션, 모달 팝업, 드롭다운 애니메이션 등은 `framer-motion`을 사용하여 부드럽게 처리합니다.

## 3. 📂 디렉토리 구조 및 네이밍 규칙 (Directory & Naming)
*   **위치**: 
    *   범용 UI 컴포넌트: `src/components/ui/`
    *   레이아웃 요소: `src/components/layout/`
    *   도메인 종속 컴포넌트: `src/components/domain/` 또는 특정 피처 폴더
*   **파일 네이밍**: `kebab-case`를 엄격하게 적용합니다. (예: `button.tsx`, `date-picker.tsx`)
*   **스타일 파일**: `[component-name].module.scss` 포맷을 사용하며, SCSS 내부의 클래스명은 `snake_case`로 작성합니다. (예: `.button_wrapper`, `.is_active`)

## 4. 📝 컴포넌트 작성 표준 스펙 (Implementation Specs)
모든 범용 컴포넌트는 다음의 구현 표준을 따릅니다.

1.  **Props 인터페이스 선언**: `PROMPT_CONTEXT_03_PROPS.md` 문서의 규격을 참조하여 `[ComponentName]Props` 인터페이스를 작성하고, 기본 HTML 속성을 확장(`extends React.[Element]HTMLAttributes<HTML[Element]Element>`)합니다.
2.  **Forward Ref 적용**: 부모 컴포넌트에서 DOM 노드에 직접 접근할 수 있도록 `React.forwardRef`를 기본적으로 적용합니다.
3.  **명시적 Display Name**: 디버깅을 위해 컴포넌트 하단에 `[ComponentName].displayName = "[ComponentName]";`을 명시합니다.
4.  **스타일 분리**: 인라인 스타일(`style={{...}}`)은 동적 렌더링이 필수적인 값(예: 진행률 막대의 width 등)에만 사용하고, 그 외의 모든 시각적 제어는 SCSS 모듈의 클래스 토글을 통해 구현합니다.

---

### 💡 컴포넌트 기본 뼈대 예시 (Base Template)
```tsx
import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import styles from './[component-name].module.scss';

// 1. Props 정의 (PROMPT_CONTEXT_03_PROPS.md 참조)
export interface [ComponentName]Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  // ...
}

// 2. Forward Ref 및 컴포넌트 구현
const [ComponentName] = forwardRef<HTMLButtonElement, [ComponentName]Props>(
  ({ className, size = 'md', variant = 'solid', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(styles.wrapper, styles[`size_${size}`], styles[`variant_${variant}`], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// 3. Display Name 명시
[ComponentName].displayName = '[ComponentName]';

export default [ComponentName];
```