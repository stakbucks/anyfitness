import Image from 'next/image';
import Banner from '../../public/landing/landingBanner.png';
import AnyfitnessText from '../../public/landing/anyfitnessLetter.png';
import LandingLetter from '../../public/landing/landingLetter.png';
import DiscoverWhiteBtn from '@/UI/Buttons/DiscoverWhiteBtn';

export default function Home() {
  return (
    <main className="w-screen h-auto pt-[85px] flex flex-col items-center">
      <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] h-[300px] relative flex flex-col  justify-center items-center">
        <Image
          alt="배너"
          src={Banner}
          fill
          className="w-[100vw] h-[300px] z-[1]"
        />
        <Image
          alt="anyfitnessText"
          width={384}
          height={72}
          src={AnyfitnessText}
          className="lg:w-[384px] z-[2] lg:h-[72px] w-[299px] h-[56px]"
        />
        <Image
          alt="LandingLetter"
          width={384}
          height={72}
          src={LandingLetter}
          className=" z-[2] lg:w-[393px] lg:h-[32px] w-[295px] h-[24px]  mt-[15px] mb-[20px]"
        />
        <DiscoverWhiteBtn className="z-[2]" />
      </div>
    </main>
  );
}
