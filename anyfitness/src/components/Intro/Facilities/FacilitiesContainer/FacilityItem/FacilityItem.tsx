'use client';
import ModalPortal from '@/components/ModalPortal/ModalPortal';
import { ICertificate } from '@/interface/certificate';
import { IFacility } from '@/interface/facility';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  facility: IFacility;
};

export default function FacilityItem({ facility }: Props) {
  const { id, name, image } = facility;

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setModalOpen(true);
  return (
    <>
      <motion.div
        onClick={handleClick}
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
        <span className="text-theme-G6 xl:text-KOR-lg-B3 text-KOR-sm-C3 text-center">
          {name}
        </span>
      </motion.div>
      {modalOpen && (
        <ModalPortal>
          <div
            onClick={() => setModalOpen(false)}
            className="fixed left-0 top-0 w-screen h-screen bg-theme-ModalBG z-50 flex items-center justify-center"
          >
            <div className="relative w-[60%] h-[60%]">
              <Image alt="확대 이미지" src={image} fill />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
