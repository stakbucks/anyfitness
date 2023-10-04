import { ISimpleProduct } from '@/interface/product';

type Props = {
  params: {
    id: string;
  };
};

const SERVER_URI = 'https://anyfitness.vercel.app';
const TEST_URI = 'http://localhost:3000';

export default async function ProductPage({ params: { id } }: Props) {
  // 제품 상세 정보 불러오고
  // 해당 제품의 카테고리(분류)를 통해 Path를 정한다
  const product: ISimpleProduct = await fetch(
    `${SERVER_URI}/api/product/${id}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  console.log(product);
  return <div className="xl:mt-[85px] mt-[60px]">{id}</div>;
}
