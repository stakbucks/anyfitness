import ExamplePhoto from './Brand/ExamplePhoto/ExamplePhoto';
import BTS from '../../../../public/landing/examples/btsExample.png';
import { StaticImageData } from 'next/image';
import Brand from './Brand/Brand';
import { monsterrat } from '@/app/layout';

const dynamicSizes = {
  mobile: `w-full  pt-[36px]`,
};

export type IBrand = {
  name: string;
  description: string;
  img: StaticImageData;
  link: string;
};

const brands: IBrand[] = [
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
    img: BTS,
    link: '/products/weight/diamond',
  },
  {
    name: '장애인용 A시리즈',
    description:
      '의자이동이 가능하여 휠체어에 탑승한 채 사용 가능합니다. 시각장애인을 위한 점자 블럭이 표시됩니다.',
    img: BTS,
    link: '/products/weight/disabled',
  },
];

export default function Brands() {
  return (
    <section className="lg:pt-[64px] pt-[36px] mb-[30px]">
      <div
        className={`${monsterrat.className} ml-[24px] mb-[36px] flex items-center lg:text-ENG-lg-H1 text-ENG-sm-H0 gap-[20px] `}
      >
        <div className="w-[4px] flex flex-col">
          <div className="w-full h-[4px] bg-theme-RED"></div>
          <div className="w-full h-[24px] bg-theme-B"></div>
        </div>
        <h2>BRANDS</h2>
      </div>
      <ul className="flex flex-col gap-[40px]">
        {brands.map((brand, idx) => (
          <Brand key={idx} brand={brand} />
        ))}
      </ul>
    </section>
  );
}
