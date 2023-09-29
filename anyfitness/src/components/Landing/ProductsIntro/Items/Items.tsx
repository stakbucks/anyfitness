import { IProductsIntroCategory } from '../ProductsIntro';
import Item from './Item/Item';

type Props = {
  categories: IProductsIntroCategory[];
};

export default function Items({ categories }: Props) {
  return (
    <ul
      id="products-info__items"
      className="w-full h-auto xl:pb-[40px] pb-[32px] xl:mt-[40px] mt-[32px] overflow-x-scroll flex sp:gap-[48px] xl:gap-[24px] gap-[12px]"
    >
      {categories.map((category, idx) => (
        <Item key={idx} category={category} />
      ))}
    </ul>
  );
}