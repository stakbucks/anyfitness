import { ISimpleWeight } from '@/interface/weight';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,
`;

export async function getProductsByCategory(type: string, category: string) {
  const data = await client.fetch(
    `*[_type == "${type}" && Category == "${category}"]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return convertProducts(data);
}
function convertProducts(products: ISimpleWeight[]) {
  return products.map(({ id, name, image }: ISimpleWeight) => ({
    id,
    name,
    image: urlFor(image),
  }));
}

// 해당 카테고리의 모든 제품 id들 리턴
export async function getAllProductsId() {
  const data = await client.fetch(
    `*[_type in ["weightEq", "cardio", "outdoor"] ]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return data.map(({ id }: ISimpleWeight) => id);
}
