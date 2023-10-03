import { IFilterItem } from '@/objects/productsFilter';
import Link from 'next/link';

type Props = {
  item: IFilterItem;
  isSelected: boolean;
};

export default function FilterItem({ item, isSelected }: Props) {
  const { name, shortName, link } = item;
  return (
    <Link href={link}>
      <li
        className={`w-auto h-[50px] pt-[16px] text-theme-B xl:text-KOR-lg-B5 text-KOR-sm-B4 ${
          isSelected && 'border-b-[4px] border-solid border-theme-B'
        }`}
      >
        <p className="xl:block hidden">{name}</p>
        <span className="xl:hidden block">{shortName}</span>
      </li>
    </Link>
  );
}
