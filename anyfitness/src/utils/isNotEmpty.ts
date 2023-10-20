// 제품 스펙에서
// '.', '없음', '(빈 값)' 'null', 'undefined'
// 모두 존재하지 않는 값으로 처리

export default function isNotEmpty(spec: string | null | undefined | string[]) {
  if (!spec) return false;
  if (spec.length === 0 || spec === '.' || spec === '없음') return false;
  return true;
}
