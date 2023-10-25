import Image from 'next/image';
import Paths from '@/components/Paths/Paths';
import Banner from '../../../public/products/banner.png';
import Filter from '@/components/Products/Filter/Filter';
import BannerText from '@/components/Products/BannerText/BannerText';

type Props = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: Props) {
  return (
    <div className="w-screen h-auto relative ">
      <Paths />

      {/* 배너 */}
      <div className="relative sp:w-[1920px] xl:w-[1520px] lg:w-[1024px]  w-screen flex flex-col items-center justify-center gap-[20px] xl:h-[240px] h-[195px]">
        <Image
          alt="배너"
          src={Banner}
          fill
          priority
          className="object-cover w-screen h-[240px]"
        />
        <div className=" w-screen flex justify-center items-center">
          <BannerText />
        </div>
      </div>

      {/* 필터 메뉴 */}
      <Filter />

      {children}
    </div>
  );
}
