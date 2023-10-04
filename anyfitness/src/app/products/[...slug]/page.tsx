import ProductCards from '@/components/Products/ProductCards/ProductCards';
import { ISimpleProduct } from '@/interface/product';
import { IWeightCategories } from '@/interface/weight';
import { getSanityCategoryName } from '@/utils/getSanityCategoryName';
import { Suspense } from 'react';

type Props = {
  params: {
    slug: [type: string, category: IWeightCategories];
  };
};

const SERVER_URI = 'https://anyfitness.vercel.app';
const TEST_URI = 'http://localhost:3000';

const convertType = (type: string) => {
  if (type === 'weight') return 'weightEq';
  else return type;
};

export default async function WeightPage({ params: { slug } }: Props) {
  const [type, category] = slug;
  const products: ISimpleProduct[] = await fetch(
    `${SERVER_URI}/api/products/${convertType(type)}/${getSanityCategoryName(
      category
    )}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  return (
    <section className="w-full h-auto bg-theme-W flex items-center xl:justify-center  ">
      <Suspense fallback={<div>testing</div>}>
        <ProductCards products={products} />
      </Suspense>
    </section>
  );
}
