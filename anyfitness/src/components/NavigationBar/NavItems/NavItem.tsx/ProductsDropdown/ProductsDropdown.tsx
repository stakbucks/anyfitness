import useHovered from '@/hooks/useHovered';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Categories from './Categories/Categories';

type Props = {
  setIsDropdownHovered: Dispatch<SetStateAction<boolean>>;
};

export default function ProductDropdown({ setIsDropdownHovered }: Props) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHovered();
  useEffect(() => {
    if (isHovered) setIsDropdownHovered(true);
    else setIsDropdownHovered(false);
  }, [isHovered]);
  console.log(isHovered);
  return (
    <>
      {/* 드롭다운 흰색 배경 */}
      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-screen z-[20] h-[228px] fixed top-[55px] left-0 border-b border-solid border-theme-G3 shadow-[0px_10px_12px_-8px_rgba(51,51,51,0.25)]"
      ></section>

      {/* 제품소개 세부 카테고리 */}
      <Categories />
    </>
  );
}
// 283 - 85 = 198
// 198+30=228
