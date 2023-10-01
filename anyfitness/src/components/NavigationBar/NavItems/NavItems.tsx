'use client';

import { useEffect, useState } from 'react';
import NavItem from './NavItem.tsx/NavItem';
import ProductDropdown from './NavItem.tsx/ProductsDropdown/ProductsDropdown';
import { navItems } from '@/objects/navItems';

export default function NavItems() {
  const [isProductHovered, setIsProductHovered] = useState(false); // 제품소개 호버 여부
  const [isDropdownHovered, setIsDropdownHovered] = useState(false); // 드롭다운 호버 여부
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 열렸는지 여부

  useEffect(() => {
    if (isProductHovered || isDropdownHovered) setDropdownOpen(true);
    else setDropdownOpen(false);
  }, [isProductHovered, isDropdownHovered, setDropdownOpen]);

  return (
    <ul className=" relative lg:flex lg:gap-[36px] lg:mx-[12px] text-theme-G4 hidden text-KOR-lg-H3">
      {navItems.map((item, idx) => (
        <NavItem
          key={idx}
          item={item}
          setIsProductHovered={setIsProductHovered}
          dropdownOpen={dropdownOpen}
        />
      ))}
      {dropdownOpen && (
        <ProductDropdown setIsDropdownHovered={setIsDropdownHovered} />
      )}
    </ul>
  );
}
