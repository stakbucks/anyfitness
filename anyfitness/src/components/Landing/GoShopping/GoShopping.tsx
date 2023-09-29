import Image from 'next/image';
import Banner from '../../../../public/landing/shoppingMall.png';
import { Montserrat } from 'next/font/google';
export const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function GoShopping() {
  return (
    <section className="relative flex flex-col justify-center items-center justify-center sp:my-[60px] xl:w-[1424px] lg:w-[1024px] lg:h-[286px] w-[768px] h-[200px]">
      <Image
        alt="쇼핑몰가기이미지"
        src={Banner}
        fill
        className="object-cover w-[100vw] h-full z-0 "
      />
      <h2 className="text-theme-W lg:text-KOR-lg-H text-KOR-sm-H1 z-[2]">
        쇼핑몰 바로가기
      </h2>
      <button
        className={`z-[2] ${monsterrat.className} lg:mt-[16px] mt-[12px] bg-theme-W  lg:px-[20px] lg:py-[10px] px-[16px] py-[8px] lg:text-ENG-lg-H4 text-ENG-lg-C2 text-theme-B rounded-[8px]`}
      >
        SHOP NOW
      </button>
    </section>
  );
}
