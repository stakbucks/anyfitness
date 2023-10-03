'use client';

import { IFilterItem, productsFilter } from '@/objects/productsFilter';
import FilterItem from './FilterItem/FilterItem';
import { usePathname } from 'next/navigation';

export default function Filter() {
  const pathname = usePathname();
    return (
      <section className="w-screen  xl:h-[70px] h-[62px] bg-theme-W flex items-end xl:justify-center  border-y-[1px] border-solid border-theme-G2">
        <ul className="sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[24px] flex gap-[26px]">
          {productsFilter.map((item: IFilterItem) => (
            <FilterItem item={item} isSelected={pathname.includes(item.link)} />
          ))}
        </ul>
      </section>
    );
}
