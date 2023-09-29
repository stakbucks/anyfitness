import Image from 'next/image';
import Banner from '../../../public/intro/introBanner.png';
import { monsterrat } from '@/components/Landing/Brands/Brands';

export default function IntroPage() {
  return (
    <div className="w-screen lg:pt-[80px] pt-[60px]">
      <section className="relative w-screen h-[300px] flex justify-center items-center ">
        <Image
          alt="배너"
          src={Banner}
          fill
          priority
          className="object-cover w-screen h-[300px]"
        />
        <div className="relative sp:w-[1440px] xl:w-[928px] w-screen  h-full flex justify-center items-center">
          <h2 className="text-theme-W lg:text-KOR-lg-H text-KOR-sm-H0 z-[2]">
            회사 소개
          </h2>
          <div className="absolute xl:top-[36px] xl:top-[24px] top-[20px] xl:left-0 left-[24px] flex items-center">
            <span
              className={`text-theme-G3 lg:text-KOR-lg-H5 lg:text-KOR-sm-C2 `}
            >
              Home
            </span>
            <div className="lg:w-[1.5px] w-[1px] lg:h-[18px] h-[14px] bg-theme-G3 mx-[12px]" />
            <span className="text-theme-W lg:text-KOR-lg-H4 text-KOR-sm-C4">
              회사 소개
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
