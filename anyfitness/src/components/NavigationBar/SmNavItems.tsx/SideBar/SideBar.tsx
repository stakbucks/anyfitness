import useModalOff from '@/hooks/useModalOff';
import { Dispatch, SetStateAction, useRef } from 'react';

type Props = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};
export default function SideBar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  const sideBarRef = useRef(null);
  useModalOff(sideBarRef, isSideBarOpen, setIsSideBarOpen);
  return (
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-[2px] bg-[#11111126]">
        <section
          ref={sideBarRef}
          className="fixed z-100 top-0 left-0  w-[274px] h-full bg-theme-W"
        ></section>
      </div>
    </>
  );
}
