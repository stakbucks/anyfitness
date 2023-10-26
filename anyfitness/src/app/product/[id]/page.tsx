import Footer from '@/components/Footer/Footer';
import Paths from '@/components/Paths/Paths';
import ListedSpec from '@/components/Product/ListedSpec/ListedSpec';
import ProductImage from '@/components/Product/ProductImage/ProductImage';
import Specification from '@/components/Product/Specification/Specification';
import { IDetailProduct } from '@/interface/product';
import { getProductById } from '@/service/product';
import { getAllProductsId } from '@/service/products';
import { convertProductTypeToPath } from '@/utils/matchPath';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params: { id } }: Props) {
  // 제품 상세 정보 불러오고
  // 해당 제품의 카테고리(분류)를 통해 Path를 정한다
  const product: IDetailProduct = await getProductById(id);
  const { name, type, Category, image, specification } = product;
  const ids: IDetailProduct = await getAllProductsId();
  console.log(ids);

  return (
    <>
      <Paths
        path={`Home, 제품소개, ${convertProductTypeToPath(type)}, ${Category}`}
      />
      <div className=" w-screen h-auto flex flex-col items-center">
        <section className="h-auto sp:w-[1424px] xl:w-[928px] w-screen xl:py-[40px] xl:px-0 py-[20px] px-[24px] flex xl:flex-row flex-col xl:justify-between xl:gap-auto gap-[20px]">
          <ProductImage image={image} />
          <Specification name={name} specification={specification} />
        </section>
        <ListedSpec
          features={specification.features}
          method={specification.method}
          effects={specification.effects}
        />
        <Footer />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const ids: IDetailProduct = await getAllProductsId();
  return ids;
}
