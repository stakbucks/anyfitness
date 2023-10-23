import { client, urlFor } from './sanity';
import { IFacility } from '../interface/facility';

const projection = `
..., 
"id":_id,
`;

export async function getFacilities() {
  const data = await client.fetch(
    `*[_type == "facilities"]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return convertFacilities(data);
}
function convertFacilities(facilities: IFacility[]) {
  return facilities.map((facility: IFacility) => ({
    id: facility.id,
    name: facility.name,
    image: urlFor(facility.image),
  }));
}
