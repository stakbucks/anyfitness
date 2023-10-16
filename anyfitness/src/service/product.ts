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
  try {
    const data = await client.fetch(`*[_id == "${id}"]{${projection}}`);
    return convertProduct(data[0]);
  } catch (err) {
    console.log(err);
  }
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
