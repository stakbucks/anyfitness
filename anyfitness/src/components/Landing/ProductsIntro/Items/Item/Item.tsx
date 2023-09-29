import Image from 'next/image';
import { IProductsIntroCategory } from '../../ProductsIntro';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

type Props = {
  category: IProductsIntroCategory;
};

const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function Item({ category }: Props) {
  const { name, engName, img, link } = category;
  return (
    <li className="sp:min-w-[320px] min-w-[216px] xl:h-[344px] sp:h-[424px] h-[320px] xl:px-[20px] xl:py-[16px] sp:px-[20px] sp:py-[16px] p-[8px] bg-theme-W rounded-[20px] ">
      <Link href={link} className="flex flex-col items-center">
        <Image
          alt="대표사진"
          src={img}
          width={293}
          height={293}
          priority
          className="sp:w-[293px] w-[200px]"
        />
        <div className="sp:w-[256px] w-[184px] h-[2px] bg-theme-G3 my-[12px] sp:mt-[6px]" />
        <div className="flex flex-col py-[12px] sp:p-[12px] sp:px-[16px] px-[16px] w-full h-[69px]">
          <h3 className="text-theme-B sp:text-KOR-lg-H1 xl:text-KOR-lg-H2 text-KOR-sm-H4">
            {name}
          </h3>
          <p
            className={`${monsterrat.className} text-theme-G4 sp:text-ENG-lg-H4 xl:text-ENG-lg-B1 text-ENG-sm-C3`}
          >
            {engName}
          </p>
        </div>
      </Link>
    </li>
  );
}
