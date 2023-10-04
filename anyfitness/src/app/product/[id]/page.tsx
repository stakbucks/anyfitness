import Paths from '@/components/Paths/Paths';
import { IDetailProduct, ISimpleProduct } from '@/interface/product';

type Props = {
  params: {
    id: string;
  };
};

const SERVER_URI = 'https://anyfitness.vercel.app';
const TEST_URI = 'http://localhost:3000';

function convertProductTypeToPath(type: string): string {
  if (type === 'weightEq') {
    return '근력운동기구';
  }
  if (type === 'cardio') {
    return '유산소운동기구';
  }
  if (type === 'outdoor') {
    return '야외운동기구';
  }
  return '';
}

export default async function ProductPage({ params: { id } }: Props) {
  // 제품 상세 정보 불러오고
  // 해당 제품의 카테고리(분류)를 통해 Path를 정한다
  const product: IDetailProduct = await fetch(
    `${SERVER_URI}/api/product/${id}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());

  const { type, Category } = product;

  return (
    <div className="xl:mt-[85px] mt-[60px]">
      <Paths
        path={`HOME, 제품소개, ${convertProductTypeToPath(type)}, ${Category}`}
      />
    </div>
  );
}
