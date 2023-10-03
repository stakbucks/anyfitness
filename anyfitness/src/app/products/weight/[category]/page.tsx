import ProductCards from '@/components/Products/ProductCards/ProductCards';
import {
  ISimpleWeight,
  IWeightCategories,
  IWeightCategories_KOR,
} from '@/interface/weight';

type Props = {
  params: {
    category: IWeightCategories;
  };
};

const getKorCategoryName: (
  category: IWeightCategories
) => IWeightCategories_KOR = (category) => {
  switch (category) {
    case 'bts':
      return 'BTS 시리즈';
    case 'diamond':
      return 'DIAMOND 시리즈';
    case 'free':
      return '프리웨이트';
    case 'aseries':
      return '장애인용 A 시리즈';
  }
};

const SERVER_URI = 'https://anyfitness.vercel.app';
const TEST_URI = 'http://localhost:3000';

export default async function WeightPage({ params: { category } }: Props) {
  const products: ISimpleWeight[] = await fetch(
    `${SERVER_URI}/api/products/${getKorCategoryName(category)}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  console.log(products);
  return (
    <section className="w-full h-auto bg-theme-W flex items-center xl:justify-center  ">
      <ProductCards products={products} />
    </section>
  );
}
