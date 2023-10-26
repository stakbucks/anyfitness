import { IProductType } from '@/objects/productType';
import Link from 'next/link';

type Props = {
  productType: IProductType;
  isLast: boolean;
};
export default function ProductType({ productType, isLast }: Props) {
  const { type: categoryName, category, link } = productType;
  return (
    <div
      className={`w-[148px] h-[160px] flex flex-col gap-[8px] ${
        !isLast && 'border-r border-solid border-theme-G2'
      } `}
    >
      <Link href={link}>
        <h3 className="text-KOR-lg-B3 text-theme-BLUE">{categoryName}</h3>
      </Link>
      {category.map(({ name, link }, idx) => (
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
