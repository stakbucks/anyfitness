import { ISimpleReference } from '@/interface/references';
import Image from 'next/image';

type Props = {
  reference: ISimpleReference;
};

const dynamicSizes = {
  sp: `sp:w-[344px] sp:h-[200px]`,
  xl: `xl:w-[298px] xl:h-[200px]`,
  md: `w-auto h-[140px]`,
};

export default function ReferenceItem({ reference }: Props) {
  const { image, name } = reference;
  return (
    <li
      className={`place-self-center ${dynamicSizes.sp} ${dynamicSizes.xl} ${dynamicSizes.md} flex flex-col justify-between items-center w-full`}
    >
      <div className="relative w-full xl:h-[200px] h-[140px]">
        <Image
          alt="납품사례 대표사진"
          src={image}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-theme-B xl:text-KOR-lg-B3 text-KOR-sm-C2">{name}</p>
    </li>
  );
}
