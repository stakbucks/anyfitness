import Link from 'next/link';
import { Montserrat } from 'next/font/google';
export const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });
type Props = {
  className?: string;
  to: string;
};

const dynamicSizes = {
  sp: 'sp:text-ENG-lg-H3 sp:px-[20px] py-[10px]',
  xl: 'xl:text-ENG-lg-H4 xl:px-[20px] py-[12px]',
};

export default function DiscoverBlackBtn({ className, to }: Props) {
  return (
    <Link href={to}>
      <button
        className={`${monsterrat.className} px-[16px] py-[8px] rounded-[8px] bg-theme-B flex justify-center items-center text-ENG-sm-B1 text-theme-W ${dynamicSizes.sp} ${dynamicSizes.xl} ${className} `}
      >
        <span>DISCOVER MORE</span>
      </button>
    </Link>
  );
}
