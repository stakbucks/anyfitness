import Image from 'next/image';
import LandingBanner from '../../../../public/landing/landingBanner.png';
import AnyfitnessText from '../../../../public/landing/anyfitnessLetter.svg';
import LandingLetter from '../../../../public/landing/landingLetter.svg';
import DiscoverWhiteBtn from '@/UI/Buttons/DiscoverWhiteBtn';

export default function Banner() {
  return (
    <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] w-[390px] lg:h-[300px] h-[240px] relative flex flex-col  justify-center items-center">
      <Image
        alt="배너"
        src={LandingBanner}
        fill
        className="object-cover w-[100vw] h-full z-0 "
      />
      <Image
        alt="anyfitnessText"
        width={169}
        height={33}
        src={AnyfitnessText}
        className="z-0"
      />
      <Image
        alt="LandingLetter"
        width={172}
        height={14}
        src={LandingLetter}
        className=" z-0 lg:w-[172px] lg:h-[14px]   mt-[15px] mb-[20px]"
      />
      <DiscoverWhiteBtn to="/intro" className="z-0" />
    </div>
  );
}
