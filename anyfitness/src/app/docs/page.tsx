import Footer from '@/components/Footer/Footer';
import LandingBanner from '../../../public/landing/landingBanner.png';
import Image from 'next/image';
import Doc from '@/components/Docs/Doc/Doc';
import { IDocs, IDoc, DocTypes } from '@/interface/doc';

const SERVER_URI = 'https://anyfitness.vercel.app';
const TEST_URI = 'http://localhost:3000/api';

export const revalidate = 0;

export default async function DocsPage() {
  const { catalog, guide }: IDocs = await fetch(`${SERVER_URI}/api/documents`)
    .then((res) => res.json())
    .then((data: IDoc[]) => {
      const result: IDocs = { catalog: [], guide: [] };
      data.forEach((doc: IDoc) => {
        doc.type === DocTypes.CATALOG
          ? result.catalog.push(doc)
          : result.guide.push(doc);
      });
      return result;
    });
  return (
    <div className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <div className="xl:w-[1920px] lg:w-[1024px] md:w-[768px] w-[390px] lg:h-[300px] h-[240px] relative flex flex-col  justify-center items-center">
        <Image
          alt="배너"
          src={LandingBanner}
          priority
          fill
          className="object-cover w-[100vw] h-full z-0 "
        />
        <div className="relative sp:w-[1440px] xl:w-[928px] w-screen  h-full flex justify-center items-center">
          <h2 className="text-theme-W lg:text-KOR-lg-H text-KOR-sm-H0 z-[2]">
            자료실
          </h2>
          <div className="absolute xl:top-[36px] xl:top-[24px] top-[20px] xl:left-0 left-[24px] flex items-center">
            <span
              className={`text-theme-G3 lg:text-KOR-lg-H5 lg:text-KOR-sm-C2 `}
            >
              Home
            </span>
            <div className="lg:w-[1.5px] w-[1px] lg:h-[18px] h-[14px] bg-theme-G3 mx-[12px]" />
            <span className="text-theme-W lg:text-KOR-lg-H4 text-KOR-sm-C4">
              회사 소개
            </span>
          </div>
        </div>
      </div>
      <section className="text-theme-B sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[24px] mb-[80px]">
        <div className="w-full flex flex-col gap-[20px] mt-[40px]">
          <h3 className=" xl:text-KOR-lg-H1 text-KOR-sm-H3">카다로그</h3>
          <div className="border-t-[2px] border-solid border-theme-B ">
            {catalog.map((doc) => (
              <Doc key={doc.id} doc={doc} />
            ))}
          </div>
          <h3 className="mt-[40px] xl:text-KOR-lg-H1 text-KOR-sm-H3">
            사용설명서
          </h3>
          <div className="border-t-[2px] border-solid border-theme-B ">
            {guide.map((doc) => (
              <Doc key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
