import Carousel from '../Carousel/Carousel';
import SectionTitle from '../SectionTitle/SectionTitle';

import { ICertificate } from '@/interface/certificate';
import Slider from '../Slider/Slider';

export default async function Certificates() {
  const certificates: ICertificate[] = await fetch(
    'http://localhost:3000/api/certificates'
  ).then((res) => res.json());

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

      {/* 데스크탑 */}
      <Carousel type="certificate" items={certificates} cols={4} />

      {/* 모바일 */}
      <Slider type="certificate" items={certificates} />
    </section>
  );
}
