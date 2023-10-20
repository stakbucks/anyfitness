import { DocTypes, IDoc, IDocs } from '@/interface/doc';
import Doc from './Doc/Doc';

const SERVER_URI = 'https://anyfitness.vercel.app/api';

export default async function Docs() {
  const { catalog, guide }: IDocs = await fetch(`${SERVER_URI}/documents`, {
    cache: 'no-cache',
  })
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
  );
}
