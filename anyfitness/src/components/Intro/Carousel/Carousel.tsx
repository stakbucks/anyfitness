'use client';

import { useState, useMemo } from 'react';
import { ICertificate } from '@/interface/certificate';
import CarouselBtnLeft from './CarouselBtn/CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtn/CarouselBtnRight';
import { AnimatePresence, motion } from 'framer-motion';
import CertificateItems from './Items/CertificateItems';
import { IFacility } from '@/interface/facility';
import FacilityItems from './Items/FacilityItems';

type Props<T> = {
  type: T;
  items: T extends 'facility' ? IFacility[] : ICertificate[];
  cols: number;
};

export default function Carousel<T>({ type, items, cols }: Props<T>) {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);
  const maxOffset = useMemo(() => {
    return Math.floor(items.length / cols);
  }, [items]);

  const rest = useMemo(() => {
    // 마지막 페이지에서 추가로 더 필요한 아이템 개수
    return cols - (items.length - maxOffset * cols);
  }, [maxOffset]);

  const variants = {
    initial: (direction: number) => {
      return { opacity: 0.85, x: direction > 0 ? 900 : -900 };
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => {
      return { opacity: 0.85, x: direction > 0 ? -900 : 900 };
    },
  };

  return (
    <div
      className={`relative h-[350px] xl:w-[900px] px-[50px] xl:block hidden overflow-hidden`}
    >
      {offset > 0 && (
        <CarouselBtnLeft setDirection={setDirection} setOffset={setOffset} />
      )}
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          id="slider"
          key={offset}
          custom={direction}
          className={`xl:w-[800px] pb-[32px] xl:grid ${
            type === 'certificate' ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
          } overflow-x-scroll`}
          variants={variants}
          initial="initial"
          transition={{ ease: 'linear', duration: 0.5 }}
          animate="animate"
          exit="exit"
        >
          {type === 'certificate' ? (
            <CertificateItems
              items={
                offset === maxOffset
                  ? items.slice(offset * 4 - rest, offset * 4 - rest + 4)
                  : items.slice(offset * 4, offset * 4 + 4)
              }
            />
          ) : (
            <FacilityItems
              items={
                offset === maxOffset
                  ? items.slice(offset * 3 - rest, offset * 3 - rest + 3)
                  : items.slice(offset * 3, offset * 3 + 3)
              }
            />
          )}
        </motion.div>
      </AnimatePresence>
      {offset < maxOffset && (
        <CarouselBtnRight setDirection={setDirection} setOffset={setOffset} />
      )}
    </div>
  );
}
