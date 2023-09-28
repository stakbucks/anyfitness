import Image from 'next/image';
import Banner from '../../public/landingBanner.png';

export default function Home() {
  return (
    <main className="w-screen z-[1] h-auto pt-[85px] flex flex-col items-center">
      <div className="w-[1920px] h-[300px] relative flex text-center justify-center">
        <Image
          alt="배너"
          src={Banner}
          width={1920}
          height={300}
          className="object-cover w-[100vw] h-[300px]"
        />
      </div>
    </main>
  );
}
