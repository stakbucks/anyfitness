import Image, { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
  isDiamond: boolean;
};

export default function ExamplePhoto({ img, isDiamond }: Props) {
  const dynamicSizes = {
    xl: `xl:min-w-[556px] xl:max-w-[909px] xl:w-[54.2%] xl:h-[440px]  ${
      isDiamond ? ' xl:rounded-l-[40px]' : 'xl:rounded-r-[40px]'
    }`,
  };
  return (
    <div
      className={` ${dynamicSizes.xl} w-screen min-w-[390px] h-[360px] bg-theme-G1 flex items-center justify-center `}
    >
      <Image alt="대표사진" src={img} width={455} height={360} />
    </div>
  );
}
