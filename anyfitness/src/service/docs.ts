import { IDoc } from '@/interface/doc';
import { client } from './sanity';

const projection = `
..., 
"id":_id,
"url": file.asset->url
`;

export async function getDocuments() {
  const data = await client.fetch(`*[_type == "docs"]{${projection}}`);
  return convertDocs(data);
}

function convertDocs(docs: IDoc[]) {
  return docs.map((doc: IDoc) => ({
    id: doc.id,
    title: doc.title,
    type: doc.type,
    url: doc.url,
  }));
}
