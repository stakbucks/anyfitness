import { IProductsIntroCategory } from '../ProductsIntro';
import Item from './Item/Item';

type Props = {
  categories: IProductsIntroCategory[];
};

export default function Items({ categories }: Props) {
  return (
    <ul
      id="items-slider"
      className="xl:w-full w-screen h-auto xl:pb-[40px] pb-[32px] xl:mt-[40px] mt-[32px] overflow-x-scroll flex sp:gap-[48px] xl:gap-[24px] gap-[12px]"
    >
      {/* 모바일 왼쪽 마진용 */}
      <div className="xl:hidden w-[24px] h-full" />
      <div className="xl:hidden w-[24px] h-full" />
      {categories.map((category, idx) => (
        <Item key={idx} category={category} />
      ))}
    </ul>
  );
}
