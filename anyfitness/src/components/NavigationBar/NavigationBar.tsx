/**
 * 네비바 동작 방식:
 * 768 보다 작을때: 우측 끝에 햄버거 아이콘 + 클릭시 왼쪽에서 사이드바로 등장 (모바일 버젼)
 */

import Image from 'next/image';
import Logo from '../../../public/logo.png';
import NavItems from './NavItems/NavItems';
import SmNavItems from './SmNavItems.tsx/SmNavItems';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <header className=" fixed top-0 left-0 flex w-[100vw] lg:h-[85px] h-[60px]  justify-center bg-theme-W z-[3]">
      <nav className=" sp:w-[1424px] sp:mx-auto lg:w-[928px] lg:mx-[48px] mx-[24px] w-[100vw]  flex justify-between items-center">
        <Link className="z-[100]" href="/">
          <Image
            alt="logo"
            src={Logo}
            width={152}
            height={56}
            priority
            className="lg:w-[152px] lg:h-[56px] w-[99px] h-[36px]"
          />
        </Link>

        {/* 데스크탑 */}
        <NavItems />

        {/* 모바일 (720이하) */}
        <SmNavItems />
      </nav>
    </header>
  );
}
