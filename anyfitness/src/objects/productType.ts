// 네비바 '제품소개' 호버시 등장하는 드롭다운 카테고리

export type IFilterItem = {
  name: string;
  shortName: string;
  link: string;
};
export type IProductType = {
  type: string;
  link: string;
  category: IFilterItem[];
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

export const productTypes: IProductType[] = [
  {
    type: '근력운동기구',
    link: '/products/weight/bts',
    category: [
      {
        name: 'BTS',
        shortName: 'BTS',
        link: '/products/weight/bts',
      },
      {
        name: 'DIAMOND',
        shortName: 'DIAMOND',
        link: '/products/weight/diamond',
      },
      {
        name: '프리웨이트',
        shortName: '프리웨이트',
        link: '/products/weight/free',
      },
      {
        name: '장애인용 A',
        shortName: '장애인용 A',
        link: '/products/weight/aseries',
      },
    ],
  },
  {
    type: '유산소운동기구',
    link: '/products/cardio/home',
    category: [
      {
        name: '가정용 런닝머신',
        shortName: '가정용',
        link: '/products/cardio/home',
      },
      {
        name: '클럽용 런닝머신',
        shortName: '클럽용',
        link: '/products/cardio/club',
      },
      {
        name: '헬스자전거',
        shortName: '자전거',
        link: '/products/cardio/cycle',
      },
    ],
  },
  {
    type: '야외운동기구',
    link: '/products/outdoor/400',
    category: [
      {
        name: '400',
        shortName: '400',
        link: '/products/outdoor/400',
      },
      {
        name: '300',
        shortName: '300',
        link: '/products/outdoor/300',
      },
      {
        name: '200',
        shortName: '200',
        link: '/products/outdoor/200',
      },
      {
        name: '600',
        shortName: '600',
        link: '/products/outdoor/600',
      },
    ],
  },
];
