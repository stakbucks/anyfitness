import { brands } from '@/objects/brands';
import Brand from './Brand/Brand';
import { Montserrat } from 'next/font/google';
export const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function Brands() {
  return (
    <>
      <div
        className={`${monsterrat.className} sp:mt-[85px] xl:mt-[64px] mt-[36px] sp:w-[1420px] sp:ml-0 xl:w-[916px] xl:ml-0 w-screen ml-[24px]  mb-[36px] flex items-center gap-[20px] `}
      >
        <div className="xl:w-[8px] w-[4px] flex flex-col">
          <div className="w-full sp:h-[10px] xl:h-[9px] h-[4px] bg-theme-RED" />
          <div className="w-full sp:h-[46px] xl:h-[35px] h-[24px] bg-theme-B" />
        </div>
        <h2 className="sp:text-ENG-lg-H1 xl:text-ENG-lg-H1 text-ENG-sm-H0 ">
          BRANDS
        </h2>
      </div>
      <section className=" sp:mb-[120px] xl:mb-[64px] mb-[30px] mx-auto ">
        <ul className="flex flex-col xl:gap-[56px] gap-[40px]">
          {brands.map((brand, idx) => (
            <Brand key={idx} brand={brand} />
          ))}
        </ul>
      </section>
    </>
  );
}
