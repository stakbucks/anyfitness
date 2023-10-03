export type IFilterItem = {
  name: string;
  shortName: string;
  link: string;
};

export const productsFilter: IFilterItem[] = [
  {
    name: 'BTS시리즈',
    shortName: 'BTS',
    link: '/products/weight/bts',
  },
  {
    name: 'DIAMOND시리즈',
    shortName: 'DIAMOND',
    link: '/products/weight/diamond',
  },
  {
    name: '프리웨이트',
    shortName: '프리웨이트',
    link: '/products/weight/free',
  },
  {
    name: '장애인용 A시리즈',
    shortName: '장애인용 A',
    link: '/products/weight/aseries',
  },
];
