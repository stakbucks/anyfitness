import { ICertificate } from '@/interface/certificate';
import Image from 'next/image';

type Props = {
  certificate: ICertificate;
};

export default function CertificateItem({ certificate }: Props) {
  const { id, image } = certificate;
  return (
    <div
      key={id}
      className="relative xl:min-w-[191px] xl:h-[267px] min-w-[140px] h-[196px]"
    >
      <Image
        alt="인증서"
        src={image}
        priority
        fill
        className="object-contain"
      />
    </div>
  );
}
