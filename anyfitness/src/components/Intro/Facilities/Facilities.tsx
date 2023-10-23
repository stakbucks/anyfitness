import CarouselLayout from '@/components/Carousel/CarouselLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import FacilitiesContainer from './FacilitiesContainer/FacilitiesContainer';
import { getFacilities } from '@/service/facilities';
import { IFacility } from '@/interface/facility';

export const BASE_URL = 'https://anyfitness.vercel.app/';

export default async function Facilities() {
  const facilities: IFacility[] = await getFacilities();
  return (
    <section className="w-screen h-auto bg-theme-G1 flex justify-center items-center">
      <section className="xl:mt-[80px] xl:my-[80px] my-[40px] xl:w-[900px] w-screen   ">
        <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-[16px] xl:mb-[60px] mb-[20px] xl:px-[50px] px-[24px]">
          <SectionTitle KorTitle="시설현황" EngTitle="Manufacturing Facility" />
          <p className="xl:w-[560px] w-auto text-theme-G6 xl:text-KOR-lg-B2 text-KOR-sm-C1">
            애니휘트니스의 기술력과 최고의 시설이 더해져 신뢰할 수 있는 최고의
            제품이 생산됩니다. 좋은제품을 위한 투자는 앞으로도 계속 됩니다.
          </p>
        </div>
        <CarouselLayout length={facilities.length} cols={3}>
          <FacilitiesContainer facilities={facilities} />
        </CarouselLayout>
      </section>
    </section>
  );
}
