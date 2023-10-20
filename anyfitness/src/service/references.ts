import { IDetailReference } from '@/interface/references';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id
`;

export async function getReferencesByType(type: string) {
  const data = await client.fetch(
    `*[_type == "references" && type == "${type}"]{${projection}}`
  );
  console.log(data);
  return convertReferences(data);
}

const convertTypeToENG = (type: string) => {
  switch (type) {
    case '웨이트':
      return 'weight';
    case '야외기구':
      return 'outdoor';
    case '전시회':
      return 'exhibition';
  }
};

function convertReferences(references: IDetailReference[]) {
  return references.map((reference: IDetailReference) => ({
    id: reference.id,
    name: reference.name,
    type: convertTypeToENG(reference.type),
    date: reference.date,
    image: urlFor(reference.images[0]),
  }));
}

export async function getReferenceById(id: string) {
  const data = await client.fetch(`*[_id == "${id}"][0]{${projection}}`);
  console.log(data);
  return convertReference(data);
}

function convertReference(reference: IDetailReference) {
  return {
    ...reference,
    images: reference.images.map((image) => urlFor(image)),
  };
}
