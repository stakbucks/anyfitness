'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { ICertificate } from '@/interface/certificate';
import CarouselBtnLeft from './CarouselBtn/CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtn/CarouselBtnRight';
import { AnimatePresence, motion } from 'framer-motion';
import CarouselItems from './CarouselItems.tsx/CarouselItems';

type Props = {
  certificates: ICertificate[];
};

export default function Carousel({ certificates }: Props) {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);

  const maxOffset = useMemo(() => {
    return Math.floor(certificates.length / 4);
  }, [certificates]);

  const rest = useMemo(() => {
    // 마지막 페이지에서 추가로 더 필요한 아이템 개수
    return 4 - (certificates.length - maxOffset * 4);
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
    <div className="relative h-[350px] xl:w-[900px] px-[50px] xl:block hidden overflow-hidden">
      {offset > 0 && (
        <CarouselBtnLeft setDirection={setDirection} setOffset={setOffset} />
      )}
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          id="slider"
          key={offset}
          custom={direction}
          className="xl:w-[800px] pb-[32px] xl:grid xl:grid-cols-4 overflow-x-scroll"
          variants={variants}
          initial="initial"
          transition={{ ease: 'linear', duration: 0.5 }}
          animate="animate"
          exit="exit"
        >
          <CarouselItems
            items={
              offset === maxOffset
                ? certificates.slice(offset * 4 - rest, offset * 4 - rest + 4)
                : certificates.slice(offset * 4, offset * 4 + 4)
            }
          />
        </motion.div>
      </AnimatePresence>
      {offset < maxOffset && (
        <CarouselBtnRight setDirection={setDirection} setOffset={setOffset} />
      )}
    </div>
  );
}
