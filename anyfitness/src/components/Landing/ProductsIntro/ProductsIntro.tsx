'use client';

import { useState } from 'react';
import FilterBtn from './FilterBtn/FilterBtn';
import { StaticImageData } from 'next/image';
import HOME from '../../../../public/landing/examples/home_treadmill.png';
import CLUB from '../../../../public/landing/examples/club.png';
import CYCLE from '../../../../public/landing/examples/cycle.png';
import S200 from '../../../../public/landing/examples/200.png';
import S300 from '../../../../public/landing/examples/300.png';
import S400 from '../../../../public/landing/examples/400.png';
import S600 from '../../../../public/landing/examples/600.png';
import Items from './Items/Items';

const DESCRIPTION_TEXT =
  '애니휘트니스는 오랜 시간 축적된 경험과 노하우로 높은 퀄리티의 다양한 제품을 생산하고 있습니다.';

export type IProductsIntroCategory = {
  name: string;
  engName: string;
  img: StaticImageData;
  link: string;
};

const cardioCategories: IProductsIntroCategory[] = [
  {
    name: '가정용 런닝머신',
    engName: 'Home Treadmill',
    img: HOME,
    link: '/products/cardio/home',
  },
  {
    name: '클럽용 런닝머신',
    engName: 'Club Treadmill',
    img: CLUB,
    link: '/products/cardio/club',
  },
  {
    name: '헬스 자전거',
    engName: 'Cycle',
    img: CYCLE,
    link: '/products/cardio/cycle',
  },
];

const outdoorCategories: IProductsIntroCategory[] = [
  {
    name: '200 시리즈',
    engName: '200 Series',
    img: S200,
    link: '/products/outdoor/200',
  },
  {
    name: '300 시리즈',
    engName: '300 Series',
    img: S300,
    link: '/products/outdoor/300',
  },
  {
    name: '400 시리즈',
    engName: '400 Series',
    img: S400,
    link: '/products/outdoor/400',
  },
  {
    name: '600 시리즈',
    engName: '600 Series',
    img: S600,
    link: '/products/outdoor/600',
  },
];

type IFilter = 'cardio' | 'outdoor';

export default function ProductsIntro() {
  const [filter, setFilter] = useState<IFilter>('cardio');
  const handleCardioClick = () => setFilter('cardio');
  const handleOutdoorClick = () => setFilter('outdoor');
  return (
    <section className="w-screen xl:h-auto xl:py-[60px] flex justify-center  bg-theme-G1">
      <div className="w-full sp:w-[1424px] xl:w-[916px] xl:px-[24px] px-0 py-[40px] xl:p-0 h-auto min-h-[587px]">
        <h2 className="xl:px-0 px-[24px] text-theme-B sp:text-KOR-lg-H0 xl:text-KOR-lg-H1 text-KOR-sm-H2">
          제품소개
        </h2>
        <p className="xl:px-0 px-[24px] sp:mt-[12px] mt-[8px] text-theme-G5 sp:text-KOR-lg-H3 xl:text-KOR-lg-H5 text-KOR-sm-B2">
          {DESCRIPTION_TEXT}
        </p>
        <ul className="xl:px-0 px-[24px] flex gap-[12px] sp:mt-[28px] xl:mt-[20px] mt-[16px]">
          <li>
            <FilterBtn
              onClick={handleCardioClick}
              name={'유산소 운동 기구'}
              selected={filter === 'cardio'}
            />
          </li>
          <li>
            <FilterBtn
              onClick={handleOutdoorClick}
              name={'야외 운동 기구'}
              selected={filter === 'outdoor'}
            />
          </li>
        </ul>
        <Items
          categories={
            filter === 'cardio' ? cardioCategories : outdoorCategories
          }
        />
      </div>
    </section>
  );
}
