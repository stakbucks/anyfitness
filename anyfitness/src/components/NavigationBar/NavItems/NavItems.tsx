'use client';

import { useEffect, useState } from 'react';
import { navItems } from '../NavigationBar';
import NavItem from './NavItem.tsx/NavItem';
import ProductDropdown from './NavItem.tsx/ProductsDropdown/ProductsDropdown';

export default function NavItems() {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    if (isProductHovered || isDropdownHovered) setDropdownOpen(true);
    else setDropdownOpen(false);
  }, [isProductHovered, isDropdownHovered]);
  return (
    <ul className=" relative lg:flex lg:gap-[36px] lg:mx-[12px] text-theme-G4 hidden text-KOR-lg-H3">
      {navItems.map((item, idx) => (
        <NavItem
          key={idx}
          item={item}
          setIsProductHovered={setIsProductHovered}
        />
      ))}
      {dropdownOpen && (
        <ProductDropdown setIsDropdownHovered={setIsDropdownHovered} />
      )}
    </ul>
  );
}
