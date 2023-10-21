'use client';

import { ICertificate } from '@/interface/certificate';
import { IFacility } from '@/interface/facility';
import { useState, useMemo, useEffect } from 'react';
import CarouselBtnLeft from './CarouselBtn/CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtn/CarouselBtnRight';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  length: number;
  cols: number; // 한 페이지에 들어가는 아이템 수
  children: React.ReactElement;
};

const CAROUSEL_WIDTH = 800;
const CERTIFICATE_GAP = 12;

export default function CarouselLayout({ length, cols, children }: Props) {
  const [page, setPage] = useState(0); // 현재 페이지

  const maxPage = useMemo(() => {
    // 최대 페이지 개수
    return Math.floor(length / cols);
  }, [length]);

  return (
    <div
      className={`xl:w-[900px] w-screen h-auto relative pb-[20px] flex justify-center`}
    >
      {page > 0 && <CarouselBtnLeft setPage={setPage} />}
      {React.cloneElement(children, { page })}
      {page < maxPage && <CarouselBtnRight setPage={setPage} />}

      {/* 스크롤 방지용  */}
      {/* <div className="xl:w-[800px] w-0 h-full z-[10] absolute top-0 left-[50px]" /> */}
    </div>
  );
}
