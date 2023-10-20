import { IDetailReference, ISimpleReference } from '@/interface/references';
import Image from 'next/image';

type Props = {
  reference: IDetailReference;
};

export default function Reference({ reference }: Props) {
  const { id, name, type, date, images } = reference;

  return (
    <section className="h-auto sp:w-[1424px] xl:w-[928px] w-screen xl:py-[40px] xl:px-0 py-[20px] px-[24px] flex flex-col items-center gap-[28px] ">
      <header className="flex flex-col gap-[8px] items-center">
        <h2 className="text-theme-B xl:text-KOR-lg-H0 text-KOR-sm-H0">
          {name}
        </h2>
        <h3 className="text-theme-G4 xl:text-KOR-lg-H5 text-KOR-sm-H5">
          {date}
        </h3>
      </header>
      <ul className="flex flex-col items-center gap-[28px]">
        {images.map((image, idx) => (
          <li key={idx}>
            <Image alt="납품사례 사진" width={600} height={600} src={image} />
          </li>
        ))}
      </ul>
    </section>
  );
}
