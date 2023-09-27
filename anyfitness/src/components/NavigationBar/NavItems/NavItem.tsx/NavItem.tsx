'use client';

import Link from 'next/link';
import { INavItem } from '../../NavigationBar';
import useHovered from '@/hooks/useHovered';

type Props = {
  item: INavItem;
};

export default function NavItem({ item }: Props) {
  const { name, link } = item;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHovered();
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative hover:text-theme-B  "
    >
      {/**
       * 쇼핑몰인 경우만 a 태그 처리 (외부 링크)
       */}{' '}
      {name === '쇼핑몰' ? (
        <a href={link}>{name}</a>
      ) : (
        <Link href={link}>{name}</Link>
      )}
      {isHovered && (
        <div className="bg-theme-B h-[4px] w-full absolute top-[32px] " />
      )}
    </li>
  );
}
