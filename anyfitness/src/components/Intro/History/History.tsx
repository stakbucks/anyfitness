import { companyHistory } from '@/objects/history';
import SectionTitle from '../SectionTitle/SectionTitle';
export default function History() {
  return (
    <section className="w-screen xl:h-[950px] h-auto flex justify-center items-center bg-theme-G1">
      <div className="flex xl:w-[800px] w-full h-full xl:p-0 xl:pt-[80px] py-[40px] px-[24px] xl:flex-row flex-col xl:justify-between xl:gap-[0] gap-[20px]">
        <SectionTitle KorTitle="회사연혁" EngTitle="Company History" />
        <ul className="border-t-[2px] border-solid border-theme-G6 xl:w-[560px] w-full">
          {companyHistory.map(({ year, details }, idx) => (
            <li
              key={idx}
              className="w-full xl:py-[12px] py-[8px] h-auto flex border-b border-solid border-theme-G2"
            >
              <p className="text-theme-G6 xl:text-KOR-lg-B4 text-KOR-sm-C5 mr-[24px] w-[44px]">
                {year}
              </p>
              <div className="flex flex-col justify-center xl:gap-[6px] gap-[4px]">
                {details.map(({ month, description, highlight }, idx) => (
                  <div key={idx} className="flex items-start">
                    <p className="text-theme-G6 xl:text-KOR-lg-B5 text-KOR-sm-C5 mr-[28px] w-[24px] ">
                      {month.toString().padStart(2, '0')}
                    </p>
                    <p
                      className={`xl:w-auto w-[220px] truncate text-theme-G6 ${
                        highlight
                          ? 'xl:text-KOR-lg-B4 text-KOR-sm-C5'
                          : 'xl:text-KOR-lg-B1 text-KOR-sm-C1'
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
