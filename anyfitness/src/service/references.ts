import { IDetailReference } from '@/interface/references';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,

`;

export async function getReferences() {
  const data = await client.fetch(`*[_type == "references"]{${projection}}`);
  return convertReferences(data);
}

function convertReferences(references: IDetailReference[]) {
  return references.map((reference: IDetailReference) => ({
    id: reference.id,
    name: reference.name,
    image: urlFor(reference.images[0]),
  }));
}

export async function getReferenceById(id: string) {
  const data = await client.fetch(`*[_id == "${id}"][0]{${projection}}`);
  return convertReference(data);
}

function convertReference(reference: IDetailReference) {
  return {
    ...reference,
    images: reference.images.map((image) => urlFor(image)),
  };
}