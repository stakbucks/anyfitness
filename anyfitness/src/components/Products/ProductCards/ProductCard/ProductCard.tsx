'use client';

// 카드의 높이와 이미지 크기는 1024 기점(xl)으로 한 번만 바뀌고
// 카드 내 양쪽 마진만 바뀐다

import { ISimpleWeight } from '@/interface/weight';
import Image from 'next/image';
import Test from '../../../../../public/test2.png';
import Link from 'next/link';

type Props = {
  product: ISimpleWeight;
  category: string;
};

const dynamicSizes = {
  sp: `sp:w-[344px] sp:h-[314px] `,
  xl: `xl:w-[298px] xl:h-[314px] xl:rounded-[8px] `,
};

export default function ProductCard({ product }: Props) {
  const { id, image, name } = product;
  return (
    <Link href={`/product/${id}`}>
      <li
        className={`${dynamicSizes.sp} ${dynamicSizes.xl} w-auto h-[298px] px-[20px] pt-[20px] bg-theme-IMGBG flex flex-col items-center`}
      >
        <div className="w-full xl:h-[34px] pb-[12px] border-b border-solid border-theme-G2">
          <h3 className="text-theme-B xl:text-KOR-lg-H4 text-KOR-sm-B4">
            {name}
          </h3>
        </div>
        <div className="relative bg-inherit xl:w-[224px] xl:h-[260px] w-[139px] h-[240px]">
          <Image
            id="image-test"
            alt={name}
            src={Test}
            fill
            className="object-cover"
          />
        </div>
      </li>
    </Link>
  );
}
