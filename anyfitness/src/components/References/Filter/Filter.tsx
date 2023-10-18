'use client';

import { referencesFilter } from '@/objects/referencesFilter';
import FilterItem from './FilterItem/FilterItem';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import useIsIntersecting from '@/hooks/useIsIntersecting';
import { IReferenceFilterItem } from '@/objects/referencesFilter';

export default function Filter() {
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement>(null);

  const fixed = useIsIntersecting<HTMLDivElement>(ref);
  return (
    <>
      {/* 스크롤 확인용 */}
      <div
        ref={ref}
        className="absolute xl:top-[305px] top-[180px] w-full z-[100]  bg-theme-B  "
      />

      <div
        id="filter"
        className={`w-screen   xl:h-[70px] h-[62px] bg-theme-W flex items-end xl:justify-center  border-y-[1px] border-solid border-theme-G2 ${
          fixed && 'fixed lg:top-[85px] top-[60px] z-[3]'
        }`}
      >
        <ul className="sp:w-[1424px] xl:w-[928px]  w-screen xl:px-0 px-[24px] flex md:justify-start justify-around md:gap-[26px]">
          {referencesFilter.map((item: IReferenceFilterItem, idx) => (
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
