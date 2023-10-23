import { client, urlFor } from './sanity';
import { IDetailProduct, ISimpleProduct } from '@/interface/product';

const projection = `
..., 
"id":_id,
"type":_type,
specification{
    ...,
    "targetBodyPartsArr":targetBodyParts[]->{image},
    targetBodyParts->
},
`;

export async function getProductById(id: string) {
  const data = await client.fetch(
    `*[_id == "${id}"]{${projection}}`,
    undefined
  );
  return convertProduct(data[0]);
}
function convertProduct(product: any) {
  return {
    id: product.id,
    type: product.type,
    Category: product.Category,
    name: product.name,
    image: urlFor(product.image),
    specification: {
      ...product.specification,
      targetBodyParts:
        product.specification.targetBodyParts &&
        urlFor(product.specification.targetBodyParts.image!),
      targetBodyPartsArr: product.specification.targetBodyPartsArr?.map(
        (v: any) => urlFor(v.image)
      ),
    },
  };
}
