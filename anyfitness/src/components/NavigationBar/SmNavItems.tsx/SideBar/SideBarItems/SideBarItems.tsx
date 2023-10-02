import Link from 'next/link';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import { navItems } from '@/objects/navItems';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBarItems({ setIsSideBarOpen }: Props) {
  return (
    <ul className="w-[226px] h-auto text-KOR-sm-H3 flex flex-col text-theme-B">
      {navItems.map(({ name, link }, idx) => (
        <li
          key={idx}
          className="py-[20px] border-b border-solid border-theme-G2"
        >
          {name === '제품소개' ? (
            <ProductsCategories setIsSideBarOpen={setIsSideBarOpen} />
          ) : (
            <Link onClick={() => setIsSideBarOpen(false)} href={link}>
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
