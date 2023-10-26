import Footer from '@/components/Footer/Footer';
import LandingBanner from '../../../public/landing/landingBanner.png';
import Image from 'next/image';
import Docs from '@/components/Docs/Docs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anyfitness | 애니휘트니스',
  description: '애니휘트니스 | 자료실',
  openGraph: {
    title: 'Anyfitness | 애니휘트니스',
    description: '애니휘트니스 | 자료실',
    url: 'https://anyfitness.co.kr/docs',
    siteName: `Anyfitness`,
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function DocsPage() {
  return (
    <div className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] w-[390px] lg:h-[300px] h-[240px] relative flex flex-col  justify-center items-center">
        <Image
          alt="배너"
          src={LandingBanner}
          priority
          fill
          className="object-cover w-[100vw] h-full z-0 "
        />
        <div className="relative sp:w-[1440px] xl:w-[928px] w-screen  h-full flex justify-center items-center">
          <div className="absolute xl:top-[36px] xl:top-[24px] top-[20px] xl:left-0 left-[24px] flex items-center">
            <span
              className={`text-theme-G3 lg:text-KOR-lg-H5 lg:text-KOR-sm-C2 `}
            >
              Home
            </span>
            <div className="lg:w-[1.5px] w-[1px] lg:h-[18px] h-[14px] bg-theme-G3 mx-[12px]" />
            <span className="text-theme-W lg:text-KOR-lg-H4 text-KOR-sm-C4">
              자료실
            </span>
          </div>
        </div>
      </div>
      <Docs />
      <Footer />
    </div>
  );
}
