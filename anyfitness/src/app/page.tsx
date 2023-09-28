import Image from 'next/image';
import Banner from '../../public/landingBanner.png';

export default function Home() {
  return (
    <main className="w-screen h-auto pt-[85px] flex flex-col items-center">
      <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] h-[300px] relative flex  justify-center items-center">
        <Image alt="배너" src={Banner} fill className="w-[100vw] h-[300px]" />
      </div>
    </main>
  );
}
