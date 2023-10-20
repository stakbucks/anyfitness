import { IProductSpecification } from '@/interface/product';
import DetailListedSpec from './DetailListedSpec/DetailListedSpec';

type Props = {
  features: string[] | undefined;
  method: string[] | undefined;
  effects: string[] | undefined;
};

export default function ListedSpec({ features, method, effects }: Props) {
  return (
    <>
      {(method || features || effects) && (
        <section className="w-screen py-[40px] h-auto bg-theme-G1 flex flex-col items-center">
          <div className="h-auto sp:w-[1424px] xl:w-[928px] w-screen xl:py-[40px] xl:px-0 py-[20px] px-[24px] flex flex-col gap-[48px]">
            <DetailListedSpec spec={method} name="사용 방법" />
            <DetailListedSpec spec={features} name="특징 요약 정보" />
            <DetailListedSpec spec={effects} name="운동 효과" />
          </div>
        </section>
      )}
    </>
  );
}
