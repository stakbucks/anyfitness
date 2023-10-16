import { DocTypes, IDoc, IDocs } from '@/interface/doc';

export default async function Docs() {
  //   const docs: IDocs = await fetch('http://localhost:3000/api/docs', {
  //     cache: 'no-store',
  //   })
  //     .then((res) => res.json())
  //     .then((data: IDoc[]) => {
  //       const result: IDocs = { catalog: [], guide: [] };
  //       data.forEach((doc: IDoc) => {
  //         doc.type === DocTypes.CATALOG
  //           ? result.catalog.push(doc)
  //           : result.guide.push(doc);
  //       });
  //       return result;
  //     });
  //   console.log(docs);
  return (
    <section className="sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[48px]">
      <div className="w-full flex flex-col gap-[20px] mt-[40px]">
        <h3 className="text-theme-B xl:text-KOR-lg-H1 text-KOR-sm-H3">
          카다로그
        </h3>
        <div className="border-t-[2px] border-solid border-theme-B ">
          <div className="px-[16px] py-[32px] w-full flex items-center justify-between xl:text-KOR-lg-B5">
            <p>예시 체크중 (Example Checking)</p>
            <a>다운로드</a>
          </div>
        </div>
      </div>
    </section>
  );
}
