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
    <li className="min-w-[216px] h-[320px] p-[8px] bg-theme-W rounded-[20px] ">
      <Link href={link} className="flex flex-col items-center">
        <Image alt="대표사진" src={img} width={200} height={200} priority />
        <div className="w-[184px] h-[2px] bg-theme-G3 my-[12px]"></div>
        <div className="flex flex-col py-[12px] px-[16px] w-full h-[69px]">
          <h3 className="text-theme-B text-KOR-sm-H4">{name}</h3>
          <p className={`${monsterrat.className} text-theme-G5 text-ENG-sm-C3`}>
            {engName}
          </p>
        </div>
      </Link>
    </li>
  );
}
