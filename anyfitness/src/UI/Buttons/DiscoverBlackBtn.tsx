import Link from 'next/link';
import { monsterrat } from '../../app/layout';
type Props = {
  className?: string;
  to: string;
};

export default function DiscoverBlackBtn({ className, to }: Props) {
  return (
    <Link href={to}>
      <button
        className={`${monsterrat.className} w-[174px] h-[38px] rounded-[8px] bg-theme-B flex justify-center items-center text-ENG-sm-B1 text-theme-W ${className}`}
      >
        DISCOVER MORE
      </button>
    </Link>
  );
}
