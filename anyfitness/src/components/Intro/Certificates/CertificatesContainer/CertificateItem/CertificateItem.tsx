'use client';
import { ICertificate } from '@/interface/certificate';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  certificate: ICertificate;
};

export default function CertificateItem({ certificate }: Props) {
  const { id, image } = certificate;
  return (
    <motion.div
      key={id}
      layout
      className="xl:min-w-[191px] xl:h-[267px] min-w-[140px] h-[196px]"
    >
      <Image
        alt="인증서"
        src={image}
        priority
        width={191}
        height={267}
        className="xl:w-[191px] xl:h-[267px] min-w-[140px] h-[196px]"
      />
    </motion.div>
  );
}
