import { IFacility } from '@/interface/facility';
import Image from 'next/image';

type Props = {
  facility: IFacility;
};

export default function FacilityItem({ facility }: Props) {
  const { id, name, image } = facility;

  return (
    <div
      key={id}
      className=" xl:w-[700px] xl:h-[525px] w-full h-[300px] flex flex-col gap-[8px] cursor-pointer"
    >
      <div className="relative w-full h-[505px]">
        <Image
          alt="인증서"
          src={image}
          priority
          fill
          className="object-contain"
        />
      </div>
      <span className="text-theme-G6 xl:text-KOR-lg-B3 text-KOR-sm-C3 text-center">
        {name}
      </span>
    </div>
  );
}
