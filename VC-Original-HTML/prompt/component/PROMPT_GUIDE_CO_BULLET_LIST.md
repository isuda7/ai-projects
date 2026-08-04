# Bullet List (불릿 리스트) 컴포넌트 작성 규칙

이 문서는 AI가 Vibe 디자인 시스템의 `Bullet List` 컴포넌트(SCSS 및 HTML)를 렌더링할 때 준수해야 할 명세서입니다.

## 1. 개요 (Overview)
글머리 기호를 사용하여 항목을 나열하는 리스트 컴포넌트입니다.
브라우저 기본 스타일을 Vibe 토큰에 맞게 초기화하며, 커스텀 형태의 리스트(체크마크 등)도 지원합니다.

## 2. 필수 준수 규칙
- `ul`, `ol` 요소에 클래스를 부여하여 제어합니다.
- 유틸리티 클래스(마진, 패딩 등) 사용을 엄격히 금지합니다.
- 들여쓰기(`padding-left`)와 항목 간 간격(`margin-bottom`)을 SCSS에서 제어합니다.

## 3. 클래스 정의 (Class Specifications)

### 3.1. 기본 클래스
- **`.list_bullet`**: 일반적인 `<ul>` 리스트. `list-style-type: disc` 형태의 기본 불릿을 가지되 여백이 조정됩니다.
- **`.list_number`**: 순서가 있는 `<ol>` 리스트. `list-style-type: decimal` 형태입니다.

### 3.2. 변형 (Variants)
- **`.list_check`**: 
  - 기본 불릿 기호를 숨기고(`list-style-type: none;`), 가상 요소(`::before`)를 사용하여 SVG 체크마크(또는 커스텀 기호)를 렌더링합니다.
  - 체크마크 색상은 `var(--color-primary-600)` 등을 활용합니다.
- **`.list_unstyled`**: 
  - 불릿 기호를 완전히 제거(`list-style-type: none`)하고, 들여쓰기 여백(`padding-left: 0`)도 없앤 형태입니다. 
  - 메뉴 리스트 등을 구성할 때 베이스로 활용됩니다.

## 4. 구조 예시 (HTML Structure)

```html
<ul class="list_bullet">
  <li>첫 번째 항목</li>
  <li>두 번째 항목
    <ul class="list_bullet">
      <li>중첩된 항목 1</li>
      <li>중첩된 항목 2</li>
    </ul>
  </li>
</ul>

<ul class="list_check">
  <li>완료된 작업 1</li>
  <li>완료된 작업 2</li>
</ul>
```
