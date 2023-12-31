import { ISimpleReference, ReferenceTypes } from '@/interface/references';
import { getMoreReferencesByType } from '@/service/references';
import { convertReferenceTypeToKor } from '@/utils/convertReferenceTypeToKor';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  type: ReferenceTypes;
};

export default async function SeeMore({ id, type }: Props) {
  const references: ISimpleReference[] = await getMoreReferencesByType(
    convertReferenceTypeToKor(type),
    id
  );
  return (
    <section className="bg-theme-G1 w-screen  h-auto flex justify-center">
      <div className="h-auto sp:w-[1424px] xl:w-[928px] w-screen py-[40px]  flex flex-col ">
        <header className="xl:px-0 px-[24px]">
          <h3 className="text-theme-B xl:text-KOR-lg-H1 text-KOR-sm-H3">
            야외기구 납품사례 더보기
          </h3>
          <hr className="my-[20px] text-theme-G2 w-full h-[2px] xl:mr-0 mr-[24px]" />
        </header>
        <div className="w-full h-auto flex xl:gap-[16px] gap-[12px] xl:ml-0 mr-0 ml-[24px] overflow-x-auto scroll">
          {references.map(({ id, image, name, type }) => (
            <Link key={id} href={`/reference/${type}/${id}`}>
              <div className="flex flex-col justify-between items-center sp:min-w-[464px] xl:w-[298px] xl:h-[234px] min-w-[242px] h-[193px]">
                <div className="relative w-full xl:h-[200px] h-[160px]">
                  <Image
                    alt="더 보기"
                    src={image}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-theme-G6 text-KOR-sm-C3">{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
