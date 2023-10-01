import { ICertificate } from '@/interface/certificate';
import { client, urlFor } from './sanity';

const projection = `
..., 
"id":_id,
`;

export async function getCertificates() {
  const data = await client.fetch(`*[_type == "certificates"]{${projection}}`);
  return convertCertificate(data);
}
function convertCertificate(certificates: any) {
  return certificates.map((certificate: any) => {
    return certificate.image.asset
      ? { ...certificate, image: urlFor(certificate.image) }
      : { ...certificate, image: certificate.image._upload.previewImage };
  });
}
