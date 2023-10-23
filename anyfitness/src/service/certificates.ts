import { ICertificate } from '@/interface/certificate';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,
`;

export async function getCertificates() {
  const data = await client.fetch(
    `*[_type == "certificates"]{${projection}}`,
    {},
    { cache: 'force-cache' }
  );
  return convertCertificate(data);
}
function convertCertificate(certificates: ICertificate[]) {
  return certificates.map((certificate: ICertificate) => ({
    id: certificate.id,
    image: urlFor(certificate.image),
  }));
}
