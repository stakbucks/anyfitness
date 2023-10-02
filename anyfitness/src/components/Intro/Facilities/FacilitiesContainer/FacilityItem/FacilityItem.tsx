'use client';
import { ICertificate } from '@/interface/certificate';
import { IFacility } from '@/interface/facility';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  facility: IFacility;
};

export default function FacilityItem({ facility }: Props) {
  const { id, name, image } = facility;
  return (
    <motion.div
      key={id}
      layout
      className="xl:min-w-[258px] xl:h-[207px] min-w-[243px] h-[193px] flex flex-col gap-[8px]"
    >
      <Image
        alt="인증서"
        src={image}
        priority
        width={191}
        height={267}
        className="xl:w-[258px] xl:h-[170px] min-w-[243px] h-[160px]"
      />
      <span className="text-theme-G6 xl:text-KOR-lg-B3 text-KOR-sm-C3">
        {name}
      </span>
    </motion.div>
  );
}
