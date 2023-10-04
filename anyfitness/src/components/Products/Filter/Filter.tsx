'use client';

import { IFilterItem, productsFilter } from '@/objects/productsFilter';
import FilterItem from './FilterItem/FilterItem';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Filter() {
  const pathname = usePathname();
  const [fixed, setFixed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        // 관찰 대상이 viewport 안에 들어온 경우 'active' 클래스 추가
        if (entry.isIntersecting) {
          setFixed(false);
        } else {
          setFixed(true);
        }
        // 그 외의 경우 'active' 클래스 제거
      });
    }, {});
    const el: Element = ref.current!;
    io.observe(el);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="absolute xl:top-[205px] top-[180px] w-full z-[100]  bg-theme-B  "
      />
      <div
        id="filter"
        className={`w-screen   xl:h-[70px] h-[62px] bg-theme-W flex items-end xl:justify-center  border-y-[1px] border-solid border-theme-G2 ${
          fixed && 'fixed lg:top-[85px] top-[60px] z-[3]'
        }`}
      >
        <ul className="sp:w-[1424px] xl:w-[928px]  w-screen xl:px-0 px-[24px] flex md:justify-start justify-around md:gap-[26px]">
          {productsFilter.map((item: IFilterItem, idx) => (
            <FilterItem
              key={idx}
              item={item}
              isSelected={pathname.includes(item.link)}
            />
          ))}
        </ul>
      </div>

      {/* 고정 시 아래 마진 용도 */}
      {fixed && <div className="xl:mb-[70px] mb-[65px]" />}
    </>
  );
}
