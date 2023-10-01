import Carousel from '../Carousel/Carousel';
import SectionTitle from '../SectionTitle/SectionTitle';

export default async function Facilities() {
  const facilities = await fetch('http://localhost:3000/api/facilities').then(
    (res) => res.json()
  );
  return (
    <section className="w-screen h-auto bg-theme-G1 flex justify-center items-center">
      <section className="xl:mt-[80px] xl:my-[80px] my-[40px] xl:w-[900px] w-screen xl:px-0 px-[24px]  ">
        <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-[16px] xl:mb-[60px] mb-[20px]">
          <SectionTitle KorTitle="시설현황" EngTitle="Manufacturing Facility" />
          <p className="xl:w-[560px] w-auto text-theme-G6 xl:text-KOR-lg-B2 text-KOR-sm-C1">
            애니휘트니스의 기술력과 최고의 시설이 더해져 신뢰할 수 있는 최고의
            제품이 생산됩니다. 좋은제품을 위한 투자는 앞으로도 계속 됩니다.
          </p>
        </div>

        {/* 데스크탑 */}
        <Carousel type="facility" cols={3} items={facilities} />

        {/* 모바일 */}
        {/* <Slider certificates={certificates} /> */}
      </section>
    </section>
  );
}
