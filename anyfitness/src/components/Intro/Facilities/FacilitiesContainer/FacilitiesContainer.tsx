'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { IFacility } from '@/interface/facility';
import FacilityItem from './FacilityItem/FacilityItem';

type Props = {
  page?: number;
  facilities: IFacility[];
};

const CAROUSEL_WIDTH = 800;
const FACILITIES_GAP = 12;

export default function FacilitiesContainer({ page, facilities }: Props) {
  let slider: null | HTMLElement;

  useEffect(() => {
    slider = document.getElementById('facility-slider')!;
    slider.scrollLeft = (CAROUSEL_WIDTH + FACILITIES_GAP) * page!;
  }, [page, slider!]);
  return (
    <motion.div
      id="facility-slider"
      className={`w-screen xl:w-[800px] xl:h-auto overflow-x-scroll xl:pb-[32px] pb-[20px] flex gap-[12px] `}
    >
      {/* 모바일 왼쪽 마진 채우기 용 */}
      <div className="xl:hidden w-[24px] h-full" />
      <div className="xl:hidden w-[24px] h-full" />

      {facilities.map((facility) => (
        <FacilityItem key={facility.id} facility={facility} />
      ))}
    </motion.div>
  );
}
