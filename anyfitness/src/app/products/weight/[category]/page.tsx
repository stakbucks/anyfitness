import { IWeightCategories, IWeightCategories_KOR } from '@/interface/weight';

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

export default async function WeightPage({ params: { category } }: Props) {
  const products = await fetch(
    `http://localhost:3000/api/products/${getKorCategoryName(category)}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  console.log(products);
  return (
    <section className="w-screen  xl:h-[60px] h-[45px] bg-theme-W flex items-center xl:justify-center  ">
      <div className="sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[24px] flex"></div>
    </section>
  );
}
