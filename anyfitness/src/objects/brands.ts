import { StaticImageData } from 'next/image';
import BTS from '../../public/landing/examples/bts_big.png';
import DIAMOND from '../../public/landing/examples/diamond_big.png';
import ASERIES from '../../public/landing/examples/aseries_big.png';

export type IBrand = {
  name: string;
  description: string;
  img: StaticImageData;
  link: string;
};

export const brands: IBrand[] = [
  {
    name: 'BTS',
    description:
      '클럽용 최고급 웨이트 헬스기구로 내구성이 우수하고 디자인이 수려합니다. 각으로 이루어진 부드럽고 아름다운 다지인이 완성되었습니다.',
    img: BTS,
    link: '/products/weight/bts',
  },
  {
    name: 'DIAMOND',
    description:
      '한국인의 체형에 적합한 인체공학적 설계로 관절에 무리가 없고 적잘한 부하가 걸리도록 설계되었습니다.',
    img: DIAMOND,
    link: '/products/weight/diamond',
  },
  {
    name: '장애인용 A시리즈',
    description:
      '의자이동이 가능하여 휠체어에 탑승한 채 사용 가능합니다. 시각장애인을 위한 점자 블럭이 표시됩니다.',
    img: ASERIES,
    link: '/products/weight/aseries',
  },
];
