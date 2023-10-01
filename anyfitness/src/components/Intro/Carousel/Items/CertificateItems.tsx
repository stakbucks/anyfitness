import Image from 'next/image';
import { ICertificate } from '@/interface/certificate';

type Props = {
  items: ICertificate[];
};

export default function CertificateItem({ items }: Props) {
  return (
    <>
      {items.map(({ id, image }: ICertificate) => (
        <Image
          key={id}
          alt="인증서"
          src={image}
          width={191}
          height={267}
          priority
          className="xl:w-[191px] xl:h-[267px] w-[140px] h-[196px]"
        />
      ))}
    </>
  );
}
