'use client';

import HamburgerIcon from '@/UI/Icons/HamburgerIcon';
import { useState } from 'react';
import SideBar from './SideBar/SideBar';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { AnimatePresence } from 'framer-motion';

export default function SmNavItems() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleClick = () => setIsSideBarOpen(true);
  return (
    <>
      <button className="lg:hidden">
        <HamburgerIcon onClick={handleClick} />
      </button>
      <AnimatePresence>
        {isSideBarOpen && (
          <ModalPortal>
            <SideBar
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
}
