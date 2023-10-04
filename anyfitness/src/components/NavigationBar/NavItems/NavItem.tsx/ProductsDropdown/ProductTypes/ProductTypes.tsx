import { productTypes } from '@/objects/productType';
import ProductType from './ProductType/ProductType';

type Props = {
  onMouseEnter(): void;
  onMouseLeave(): void;
};

export default function ProductTypes({ onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute z-[50] bg-theme-W w-auto h-auto top-[55px] left-0  pt-[12px] pb-[20px] grid grid-cols-3 gap-[15.5px]"
    >
      {productTypes.map((productType, idx) => (
        <ProductType
          key={idx}
          productType={productType}
          isLast={idx === productTypes.length - 1}
        />
      ))}
    </div>
  );
}
