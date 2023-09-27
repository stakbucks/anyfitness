/**
 * 네비바 동작 방식:
 * 1024 보다 작을때: 우측 끝에 햄버거 아이콘 + 클릭시 왼쪽에서 사이드바로 등장
 */

import Image from 'next/image';
import Logo from '../../../public/logo.png';
import HamburgerIcon from '@/UI/Icons/HamburgerIcon';

export default function NavigationBar() {
  return (
    <header className="flex w-[100vw] h-[85px] justify-center">
      <nav className=" sp:w-[1424px] sp:mx-auto lg:w-[928px] lg:mx-[48px] mx-[24px] w-screen  h-full flex justify-between items-center">
        <Image
          alt="logo"
          src={Logo}
          width={152}
          height={56}
          className="w-[152px] h-[56px]"
        />
        <ul className=" lg:flex lg:gap-[36px] lg:mx-[12px] text-theme-G4 hidden  font-KOR-lg-H4">
          <li className="text-theme-G4">회사소개</li>
          <li>제품소개</li>
          <li>납품사례</li>
          <li>자료실</li>
          <li>쇼핑몰</li>
        </ul>
        <button className="lg:hidden">
          <HamburgerIcon />
        </button>
      </nav>
    </header>
  );
}
