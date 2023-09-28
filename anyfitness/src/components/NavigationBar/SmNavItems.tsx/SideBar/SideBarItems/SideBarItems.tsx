import { navItems } from '@/components/NavigationBar/NavigationBar';
import Link from 'next/link';
import ProductsCategories from './ProductsCategories/ProductsCategories';

export default function SideBarItems() {
  return (
    <ul className="w-[226px] h-auto text-KOR-sm-H3 flex flex-col text-theme-B">
      {navItems.map(({ name, link }, idx) => (
        <li
          key={idx}
          className="py-[20px] border-b border-solid border-theme-G2"
        >
          {name === '제품소개' ? (
            <ProductsCategories />
          ) : (
            <Link href={link}>{name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
