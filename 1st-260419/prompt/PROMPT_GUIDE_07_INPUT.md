# 디자인 시스템 Input 가이드 문서 규격

Input 컴포넌트에 대한 가이드 문서를 수정하거나 관련 컴포넌트를 확장할 때는 이 문서의 규칙과 스펙을 따릅니다.

## 1. 컴포넌트 정보
- **경로**: `src/components/ui/input/input.tsx`
- **스타일**: `src/components/ui/input/input.module.scss`
- **역할**: 사용자로부터 짧은 텍스트나 데이터를 입력받는 가장 기본적인 폼(Form) 컴포넌트입니다.

## 2. Props 상세 규격 (InputProps)
| 속성 (Prop) | 타입 (Type) | 기본값 (Default) | 설명 |
|---|---|---|---|
| `inputSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | 인풋 필드의 물리적 높이와 폰트 크기 (`size` 속성은 HTML 기본 속성과 충돌하므로 `inputSize` 사용) |
| `error` | `boolean` | `false` | 유효성 검사 실패 시 에러 상태(적색 테두리 등) 시각화 여부 |
| `fullWidth` | `boolean` | `false` | 부모 요소 너비의 100% 차지 여부 |
| `leftIcon` | `React.ReactNode` | `undefined` | 입력 필드 좌측 내부 아이콘 |
| `rightIcon` | `React.ReactNode` | `undefined` | 입력 필드 우측 내부 아이콘 |
* 기본 HTML `input` 속성(`value`, `onChange`, `disabled`, `placeholder` 등)은 모두 상속받습니다.