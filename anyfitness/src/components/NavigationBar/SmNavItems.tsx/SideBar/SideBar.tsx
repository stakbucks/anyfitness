import useModalOff from '@/hooks/useModalOff';
import { Dispatch, SetStateAction, useRef } from 'react';
import Logo from '../../../../../public/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SideBarItems from './SideBarItems/SideBarItems';

type Props = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  const sideBarRef = useRef(null);
  useModalOff(sideBarRef, isSideBarOpen, setIsSideBarOpen);
  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-[2px] z-[100]  bg-[#11111126]">
        <motion.section
          initial={{ opacity: 1, x: -274 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -274 }}
          ref={sideBarRef}
          className="fixed z-[100] top-0 left-0  w-[274px] h-full bg-theme-W pt-[60px] flex flex-col pl-[24px] "
        >
          <Image
            alt="로고"
            src={Logo}
            width={136}
            height={50}
            className="w-[136px] h-[50px] mb-[20px]"
          />
          <SideBarItems setIsSideBarOpen={setIsSideBarOpen} />
        </motion.section>
      </div>
    </>
  );
}
