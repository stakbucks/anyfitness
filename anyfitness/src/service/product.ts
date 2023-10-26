import { client, urlFor } from './sanity';

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
    {},
    { cache: 'force-cache' }
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
