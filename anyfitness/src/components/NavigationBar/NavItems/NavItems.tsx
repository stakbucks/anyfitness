import { navItems } from '../NavigationBar';
import NavItem from './NavItem.tsx/NavItem';

export default function NavItems() {
  return (
    <ul className=" lg:flex lg:gap-[36px] lg:mx-[12px] text-theme-G4 hidden text-KOR-lg-H3">
      {navItems.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </ul>
  );
}
