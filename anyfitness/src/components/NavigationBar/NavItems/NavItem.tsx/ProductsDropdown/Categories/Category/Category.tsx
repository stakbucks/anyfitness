import Link from 'next/link';
import { ICategory } from '../Categories';

type Props = {
  category: ICategory;
  isLast: boolean;
};
export default function Category({ category, isLast }: Props) {
  const { category: categoryName, items } = category;
  return (
    <div
      className={`w-[148px] h-[160px] flex flex-col gap-[8px] ${
        !isLast && 'border-r border-solid border-theme-G2'
      } `}
    >
      <h3 className="text-KOR-lg-B3 text-theme-BLUE">{categoryName}</h3>
      {items.map(({ name, link }, idx) => (
        <Link
          href={link}
          className="z-[50] text-KOR-lg-B4 text-theme-B"
          key={idx}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
