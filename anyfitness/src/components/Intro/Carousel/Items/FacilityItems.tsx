import Image from 'next/image';
import { IFacility } from '@/interface/facility';
import { ICertificate } from '@/interface/certificate';

type Props = {
  items: IFacility[];
};

export default function FacilityItems({ items }: Props) {
  return (
    <>
      {items.map(({ id, name, image }: IFacility) => (
        <div
          key={id}
          className="xl:w-[258px] xl:h-[207px] flex flex-col gap-[8px] items-center"
        >
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
      ))}
    </>
  );
}
