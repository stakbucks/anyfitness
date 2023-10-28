import Image from 'next/image';
import LandingBanner from '../../../../public/landing/landingBanner.png';
import LetterGroup from '../../../../public/landing/letterGroup.svg';
import DiscoverWhiteBtn from '@/UI/Buttons/DiscoverWhiteBtn';

export default function Banner() {
  return (
    <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] w-[390px] lg:h-[calc(100vh-85px)] h-[240px] relative flex flex-col  justify-center items-center">
      <Image
        alt="배너"
        src={LandingBanner}
        priority
        fill
        className="object-cover w-[100vw] h-full z-0 "
      />
      <Image
        alt="LandingLetter"
        width={258}
        height={81}
        src={LetterGroup}
        priority
        className=" z-0 lg:w-[258px] lg:h-[81px] lg:scale-100 scale-75 mb-[20px]"
      />
      <DiscoverWhiteBtn to="/intro" className="z-0" />
    </div>
  );
}
