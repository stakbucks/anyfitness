import Image from 'next/image';
import Paths from '@/components/Paths/Paths';
import Banner from '../../../public/products/banner.png';
import GoShoppingBtn from '@/UI/Buttons/GoShoppingBtn';
import Filter from '@/components/Products/Filter/Filter';

type Props = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: Props) {
  return (
    <div className="w-screen h-auto">
      <Paths path="HOME, 제품소개, 근력운동기구" />

      {/* 배너 */}
      <div className="relative sp:w-[1920px] xl:w-[1520px] lg:w-[1024px]  w-screen flex flex-col items-center gap-[20px] xl:h-[240px] h-[195px]">
        <Image
          alt="배너"
          src={Banner}
          fill
          priority
          className="object-cover w-screen h-[240px]"
        />
        <div className="absolute top-0 left-0 w-screen flex flex-col items-center gap-[20px]">
          <p className="text-theme-B xl:text-KOR-lg-H text-KOR-sm-H0 xl:mt-[60px] mt-[64px]">
            근력운동기구
          </p>
          <GoShoppingBtn text={'쇼핑몰 바로가기'} />
        </div>
      </div>

      {/* 필터 메뉴 */}
      <Filter />

      {children}
    </div>
  );
}
