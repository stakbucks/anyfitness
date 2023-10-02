import Image from 'next/image';
import { IFacility } from '@/interface/facility';

type Props = {
  facility: IFacility;
};

export default function FacilityItem({ facility }: Props) {
  const { image, name } = facility;
  return (
    <div className="xl:w-[258px] xl:h-[207px] min-w-[242px] h-[193px] flex flex-col gap-[8px] items-center">
      <Image
        alt="인증서"
        src={image}
        width={258}
        height={170}
        priority
        className="xl:w-[258px] xl:h-[170px] w-[242px] h-[160px]"
      />
      <span className="xl:text-KOR-lg-B3 text-KOR-sm-C3 text-theme-G6">
        {name}
      </span>
    </div>
  );
}
