const pathMap = new Map();
pathMap
  .set('Home', '/')
  .set('제품소개', '/products/weight/bts')
  .set('BTS시리즈', '/products/weight/bts')
  .set('DIAMOND시리즈', '/products/weight/diamond')
  .set('BTS 시리즈', '/products/weight/bts')
  .set('DIAMOND 시리즈', '/products/weight/diamond')
  .set('프리웨이트', '/products/weight/free')
  .set('장애인용 A시리즈', '/products/weight/aseries')
  .set('장애인용 A 시리즈', '/products/weight/aseries')
  .set('근력운동기구', '/products/weight/bts')
  .set('유산소운동기구', '/products/cardio/home')
  .set('야외운동기구', '/products/outdoor/400')
  .set('400 series', '/products/outdoor/400')
  .set('300 series', '/products/outdoor/300')
  .set('200 series', '/products/outdoor/200')
  .set('600 series', '/products/outdoor/600')
  .set('가정용 런닝머신', '/products/cardio/home')
  .set('클럽용 런닝머신', '/products/cardio/club')
  .set('헬스 자전거', '/products/cardio/cycle')
  .set('웨이트 납품사례', '/references/weight')
  .set('야외기구 납품사례', '/references/outdoor')
  .set('납품사례', '/references/weight')
  .set('전시회', '/references/exhibition')
  .set('weight', 'reference/weight')
  .set('outdoor', 'reference/outdoor')
  .set('exhibition', 'reference/exhibition');

export function matchPath(path: string): string {
  return pathMap.get(path);
}

export function convertProductTypeToPath(type: string): string {
  if (type === 'weightEq') {
    return '근력운동기구';
  }
  if (type === 'cardio') {
    return '유산소운동기구';
  }
  if (type === 'outdoor') {
    return '야외운동기구';
  }
  return '';
}
