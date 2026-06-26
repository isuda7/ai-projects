// 간단한 조건부 클래스 병합 유틸리티
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}