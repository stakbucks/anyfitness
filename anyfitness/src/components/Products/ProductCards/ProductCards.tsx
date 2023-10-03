/**
 * 1920-1520: 1424안에 4열 그리드 + 한 칸 크기 344 x 314
 * 1520-1024: 928안에 3열 그리드 + 한 칸 크기 298 x 314
 * 1024 ~   : 전체화면 안에 2열 그리드 + 한 칸 내 이미지 크기 고정되며 양쪽 마진만 줄어듦
 */

import { ISimpleWeight } from '@/interface/weight';
import ProductCard from './ProductCard/ProductCard';

type Props = {
  products: ISimpleWeight[];
};

const dynamicSizes = {
  sp: `sp:w-[1424px] sp:grid-cols-4 sp:gap-[16px] `,
  xl: `xl:w-[928px] xl:grid-cols-3 xl:gap-[16px] xl:pt-[40px] `,
};

export default function ProductCards({ products }: Props) {
  return (
    <ul
      className={`${dynamicSizes.sp} ${dynamicSizes.xl} w-screen grid grid-cols-2 gap-[4px] pt-[20px] mb-[100px]`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
