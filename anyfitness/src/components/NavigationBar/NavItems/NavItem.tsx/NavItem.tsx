'use client';

import Link from 'next/link';
import { INavItem } from '../../NavigationBar';
import useHovered from '@/hooks/useHovered';
import ProductDropdown from './ProductsDropdown/ProductsDropdown';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  item: INavItem;
  setIsProductHovered: Dispatch<SetStateAction<boolean>>;
  dropdownOpen: boolean;
};

export default function NavItem({
  item,
  setIsProductHovered,
  dropdownOpen,
}: Props) {
  const pathname = usePathname();

  const { name, link } = item;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHovered();
  useEffect(() => {
    if (name === '제품소개' && isHovered) setIsProductHovered(true);
    else setIsProductHovered(false);
  }, [name, isHovered]);
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative hover:text-theme-B z-[100] ${
        (pathname.includes(link) || (dropdownOpen && name === '제품소개')) &&
        'text-theme-B'
      }`}
    >
      {/**
       * 쇼핑몰인 경우만 a 태그 처리 (외부 링크)
       */}
      {name === '쇼핑몰' ? (
        <a href={link}>{name}</a>
      ) : (
        <Link href={link}>{name}</Link>
      )}
      {(isHovered ||
        pathname.includes(link) ||
        (dropdownOpen && name === '제품소개')) && (
        <div className="bg-theme-B h-[4px] w-full absolute top-[32px]" />
      )}
    </li>
  );
}
