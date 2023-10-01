import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import RightCarouselBtn from '../../../../public/intro/rightCarouselBtn.svg';
import leftCarouselBtn from '../../../../public/intro/leftCarouselBtn.svg';
import { urlFor } from '@/service/sanity';

export default async function Certificates() {
  const certificates = await fetch(
    'http://localhost:3000/api/certificates'
  ).then((res) => res.json());
  console.log(certificates);
  return (
    <section className="xl:mt-[80px] xl:my-[80px] my-[40px] xl:w-[900px] w-screen xl:px-0 px-[24px] ">
      <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-[16px] xl:mb-[60px] mb-[20px]">
        <SectionTitle KorTitle="인증현황" EngTitle="Certificate and Patent" />
        <p className="xl:w-[560px] w-auto text-theme-G6 xl:text-KOR-lg-B2 text-KOR-sm-C1">
          애니휘트니스의 기술력은 수상실적과 각종 인증으로 증명합니다.
          <br className="xl:block hidden" />
          모든 애니휘트니스 제품은 국내 ISO9001, 조달청 우수제품계약사, CE
          (유럽), 산자부 선정 Good Design 업체 등 국내외 공인된 제품 안전규격을
          준수하여 더욱 신뢰받고 있습니다.
        </p>
      </div>

      {/** 카루셀 구현
       * 한 페이지에 4개씩
       */}
      <div className="relative xl:w-full px-[50px] pb-[32px] grid grid-cols-4 overflow-x-scroll">
        <button className="rounded-full absolute top-[50%] left-0 -translate-y-[50%]">
          <Image
            alt="왼쪽 버튼"
            src={leftCarouselBtn}
            width={30}
            height={30}
            className="rounded-full"
          />
        </button>
        <button className="rounded-full absolute top-[50%] right-0 -translate-y-[50%]">
          <Image
            alt="오른쪽 버튼"
            src={RightCarouselBtn}
            width={30}
            height={30}
            className="rounded-full"
          />
        </button>
      </div>
    </section>
  );
}
