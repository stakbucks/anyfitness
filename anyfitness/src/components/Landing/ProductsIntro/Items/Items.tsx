import { IProductsIntroCategory } from '../ProductsIntro';
import Item from './Item/Item';

type Props = {
  categories: IProductsIntroCategory[];
};

export default function Items({ categories }: Props) {
  return (
    <ul
      id="products-info__items"
      className="w-full h-auto pb-[32px] mt-[32px] overflow-x-scroll flex gap-[12px]"
    >
      {categories.map((category, idx) => (
        <Item key={idx} category={category} />
      ))}
    </ul>
  );
}
