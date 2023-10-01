import { categories } from '@/objects/productCatgories';
import Category from './Category/Category';

type Props = {
  onMouseEnter(): void;
  onMouseLeave(): void;
};

export default function Categories({ onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute z-[50] bg-theme-W w-auto h-auto top-[55px] left-0  pt-[12px] pb-[20px] grid grid-cols-3 gap-[15.5px]"
    >
      {categories.map((category, idx) => (
        <Category
          key={idx}
          category={category}
          isLast={idx === categories.length - 1}
        />
      ))}
    </div>
  );
}
