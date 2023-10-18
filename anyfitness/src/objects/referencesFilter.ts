export type IReferenceFilterItem = {
  name: string;
  shortName: string;
  link: string;
};

export const referencesFilter: IReferenceFilterItem[] = [
  {
    name: '웨이트 납품사례',
    shortName: '웨이트',
    link: '/references/weight',
  },
  {
    name: '야외기구 납품사례',
    shortName: '야외기구',
    link: '/references/outdoor',
  },
  {
    name: '전시회',
    shortName: '전시회',
    link: '/references/exhibition',
  },
];
