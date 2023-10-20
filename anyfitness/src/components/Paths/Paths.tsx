'use client';
import { usePathname } from 'next/navigation';
// 1920-1524 => 1424px + 양쪽 마진 (sp)
// 1524-1024 => 928px + 양쪽 마진 (xl)
// 1024 ~    => full screen + paddingx 24

import Path from './Path/Path';

type Props = {
  path?: string;
  className?: string;
};

export default function Paths({ path, className }: Props) {
  let pathArr: string[] = ['HOME'];
  const pathname = usePathname();

  const matchPathname = (pathname: string) => {
    if (pathname.includes('/products')) {
      pathArr.push('제품소개');
    }
    if (pathname.includes('/products/weight')) {
      pathArr.push('근력운동기구');
    }
    if (pathname.includes('/products/cardio')) {
      pathArr.push('유산소운동기구');
    }
    if (pathname.includes('/products/outdoor')) {
      pathArr.push('야외운동기구');
    }
  };
  matchPathname(pathname);
  if (path) {
    pathArr = path.split(', ');
  }
  return (
    <section
      className={` z-[3] w-screen  xl:h-[60px] h-[45px] bg-theme-W flex items-center xl:justify-center lg:mt-[85px] mt-[60px] border-t-[1px] border-solid border-theme-G2 ${className}`}
    >
      <div className="sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[24px] flex">
        {pathArr.map((path, idx) => (
          <Path key={idx} path={path} isLast={idx === pathArr.length - 1} />
        ))}
      </div>
    </section>
  );
}
