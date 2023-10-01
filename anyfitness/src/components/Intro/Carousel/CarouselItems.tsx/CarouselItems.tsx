import Image from 'next/image';
import { motion } from 'framer-motion';
import { ICertificate } from '@/interface/certificate';

type Props = {
  items: ICertificate[];
};

export default function CarouselItems({ items }: Props) {
  return (
    <>
      {items.map(({ id, image }: ICertificate) => (
        <Image
          key={id}
          alt="인증서"
          src={image}
          width={191}
          height={267}
          className="w-[191px] h-[267px]"
        />
      ))}
    </>
  );
}
