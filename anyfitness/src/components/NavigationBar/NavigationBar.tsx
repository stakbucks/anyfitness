/**
 * 네비바 동작 방식:
 * 768 보다 작을때: 우측 끝에 햄버거 아이콘 + 클릭시 왼쪽에서 사이드바로 등장 (모바일 버젼)
 */

import Image from 'next/image';
import Logo from '../../../public/logo.png';
import NavItems from './NavItems/NavItems';
import SmNavItems from './SmNavItems.tsx/SmNavItems';
import Link from 'next/link';

export type INavItem = {
  name: string;
  link: string;
};

export const navItems: INavItem[] = [
  { name: '회사소개', link: '/intro' },
  { name: '제품소개', link: '/products' },
  { name: '납품사례', link: '/cases' },
  { name: '자료실', link: '/docs' },
  { name: '쇼핑몰', link: 'http://www.anyfitnessmall.co.kr/' },
];

export default function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 flex w-[100vw] h-[85px] justify-center bg-theme-W">
      <nav className=" sp:w-[1424px] sp:mx-auto lg:w-[928px] lg:mx-[48px] mx-[24px] w-[100vw]  h-full flex justify-between items-center">
        <Link className="z-[100]" href="/">
          <Image
            alt="logo"
            src={Logo}
            width={152}
            height={56}
            className="w-[152px] h-[56px] "
          />
        </Link>

        {/* 컴퓨터 크기 */}
        <NavItems />

        {/* 모바일 (720이하) */}
        <SmNavItems />
      </nav>
    </header>
  );
}
