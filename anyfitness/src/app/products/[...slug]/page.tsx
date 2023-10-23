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

const convertType = (type: string) => {
  if (type === 'weight') return 'weightEq';
  else return type;
};

export default async function WeightPage({ params: { slug } }: Props) {
  const [type, category] = slug;
  const products: ISimpleProduct[] = await fetch(
    `${SERVER_URI}/api/products/${convertType(type)}/${getSanityCategoryName(
      category
    )}`
  ).then((res) => res.json());
  return (
    <section className="w-full h-auto bg-theme-W flex items-center xl:justify-center  ">
      <Suspense fallback={<div></div>}>
        <ProductCards products={products} />
      </Suspense>
    </section>
  );
}

// export async function generateStaticParams() {
//   const weightSlugs: ['weight', IWeightCategories][] = [
//     ['weight', 'bts'],
//     ['weight', 'diamond'],
//     ['weight', 'free'],
//     ['weight', 'aseries'],
//   ];
//   const cardioSlugs: ['cardio', ICardioCategories][] = [
//     ['cardio', 'home'],
//     ['cardio', 'club'],
//     ['cardio', 'cycle'],
//   ];
//   const outdoorSlugs: ['outdoor', IOutdoorCategories][] = [
//     ['outdoor', '400'],
//     ['outdoor', '300'],
//     ['outdoor', '200'],
//     ['outdoor', '600'],
//   ];
//   return [...weightSlugs, ...cardioSlugs, ...outdoorSlugs];
// }
