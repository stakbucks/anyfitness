import Link from 'next/link';
import { Montserrat } from 'next/font/google';
export const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });
type Props = {
  className?: string;
  to: string;
};

export default function DiscoverWhiteBtn({ className, to }: Props) {
  return (
    <Link href={to} className={className}>
      <button
        className={`${monsterrat.className} flex justify-center items-center bg-theme-W  border-[1px] border-solid border-theme-B w-[157px] h-[37px]  rounded-[8px] text-ENG-sm-C2  `}
      >
        DISCOVER MORE
      </button>
    </Link>
  );
}
