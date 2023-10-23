import { ISimpleWeight } from '@/interface/weight';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,
`;

export async function getProductsByCategory(type: string, category: string) {
  const data = await client.fetch(
    `*[_type == "${type}" && Category == "${category}"]{${projection}}`
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
