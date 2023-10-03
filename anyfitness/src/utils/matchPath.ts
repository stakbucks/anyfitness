const pathMap = new Map();
pathMap
  .set('HOME', '/')
  .set('제품소개', '/products/weight/bts')
  .set('근력운동기구', '/products/weight/bts')
  .set('BTS시리즈', '/products/weight/bts')
  .set('DIAMOND시리즈', '/products/weight/diamond')
  .set('프리웨이트', '/products/weight/free')
  .set('장애인용 A시리즈', '/products/weight/aseries');

export function matchPath(path: string): string {
  return pathMap.get(path);
}
