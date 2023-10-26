import { ICertificate } from '@/interface/certificate';
import CertificateItem from './CertificateItem/CertificateItem';

type Props = {
  certificates: ICertificate[];
};

export default function Certificates({ certificates }: Props) {
  return (
    <div
      className={`w-screen xl:w-[800px] xl:h-auto xl:pb-[32px] xl:px-0 px-[24px] pb-[20px] grid lg:grid-cols-4 grid-cols-2 place-items-center gap-[12px] `}
    >
      {certificates.map((certificate) => (
        <CertificateItem key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
}
