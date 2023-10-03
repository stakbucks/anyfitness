import { matchPath } from '@/utils/matchPath';
import Link from 'next/link';

type Props = {
  path: string;
  isLast: boolean;
};

const lastItemText = `xl:text-KOR-lg-H4 text-KOR-sm-C4`;

export default function Path({ path, isLast }: Props) {
  const link: string = matchPath(path);
  return (
    <div className={`text-theme-G6  flex items-center `}>
      <Link href={link}>
        <span
          className={isLast ? lastItemText : 'xl:text-KOR-lg-H5 text-KOR-sm-C2'}
        >
          {path}
        </span>
      </Link>
      {!isLast && <div className="bg-theme-G6 w-[1px] h-[14px] mx-[12px]" />}
    </div>
  );
}
