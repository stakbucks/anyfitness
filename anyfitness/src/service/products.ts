import { ISimpleWeight } from '@/interface/weight';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,
`;

export async function getProductsByCategory(category: string) {
  try {
    const data = await client.fetch(
      `*[_type == "weightEq" && Category == "${category}"]{${projection}}`
    );
    return convertProducts(data);
  } catch (err) {
    console.log(err);
  }
}
function convertProducts(products: ISimpleWeight[]) {
  return products.map(({ id, name, image }: ISimpleWeight) => ({
    id,
    name,
    image: urlFor(image),
  }));
}
