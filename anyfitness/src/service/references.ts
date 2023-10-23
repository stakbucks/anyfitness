import { IDetailReference, ISimpleReference } from '@/interface/references';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id
`;

export async function getReferencesByType(type: string) {
  const data = await client.fetch(
    `*[_type == "references" && type == "${type}"]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return convertReferences(data) as ISimpleReference[];
}

export async function getMoreReferencesByType(type: string, id: string) {
  const references = await getReferencesByType(type);
  const currentIdx = references.findIndex(
    (reference: ISimpleReference) => reference.id === id
  )!;
  const lastIdx = references.length - 1;
  // 이전글 없는 경우
  if (currentIdx === 0) return references.slice(1, 4);
  // 이전글 1 + 다음글 2
  if (currentIdx > 0 && currentIdx + 2 <= lastIdx)
    return [
      ...references.slice(currentIdx - 1, currentIdx),
      ...references.slice(currentIdx + 1, currentIdx + 3),
    ];
  // 다음글이 하나 밖에 없는 경우 (이전글 2 + 다음글 1)
  if (currentIdx + 1 === lastIdx)
    return [
      ...references.slice(currentIdx - 2, currentIdx),
      references[lastIdx],
    ];
  // 다음글이 없는 경우
  if (currentIdx === lastIdx) return references.slice(-4, -1);
  return [];
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
  const data = await client.fetch(
    `*[_id == "${id}"][0]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return convertReference(data);
}

function convertReference(reference: IDetailReference) {
  return {
    ...reference,
    images: reference.images.map((image) => urlFor(image)),
  };
}
