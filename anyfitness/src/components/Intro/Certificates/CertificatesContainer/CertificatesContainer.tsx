'use client';

import { ICertificate } from '@/interface/certificate';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CertificateItem from './CertificateItem/CertificateItem';

type Props = {
  page?: number;
  certificates: ICertificate[];
};

const CAROUSEL_WIDTH = 800;
const CERTIFICATE_GAP = 12;

export default function Certificates({ page, certificates }: Props) {
  let slider: null | HTMLElement;

  useEffect(() => {
    slider = document.getElementById('certificate-slider')!;
    slider.scrollLeft = (CAROUSEL_WIDTH + CERTIFICATE_GAP) * page!;
  }, [page, slider!]);

  return (
    <motion.div
      id="certificate-slider"
      className={`w-screen xl:w-[800px] xl:h-auto overflow-x-scroll xl:pb-[32px] pb-[20px] flex gap-[12px] `}
    >
      {/* 모바일 왼쪽 마진 채우기 용 */}
      <div className="xl:hidden w-[24px] h-full" />
      <div className="xl:hidden w-[24px] h-full" />

      {certificates.map((certificate) => (
        <CertificateItem key={certificate.id} certificate={certificate} />
      ))}
    </motion.div>
  );
}
