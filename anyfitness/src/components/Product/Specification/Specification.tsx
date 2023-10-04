import GoShoppingBtn from '@/UI/Buttons/GoShoppingBtn';
import { IProductSpecification } from '@/interface/product';
import DetailSpec from './DetailSpec/DetailSpec';

type Props = {
  name: string;
  specification: Partial<IProductSpecification>;
};

export default function Specification({ name, specification }: Props) {
  return (
    <div className="xl:w-[390px] w-full h-auto flex flex-col">
      <div className="flex flex-col xl:gap-[12px] gap-[12px]  w-full xl:h-[100px] h-auto pt-[12px]">
        <h2 className="text-[#000000] xl:text-KOR-lg-H0 text-KOR-sm-H0">
          {name}
        </h2>
        <h3 className="text-theme-B xl:text-KOR-lg-H5 text-KOR-sm-H5">
          {specification.targetMuscles}
        </h3>
      </div>
      <GoShoppingBtn
        className="xl:mt-[16px] mt-[12px] mb-[24px]"
        text="쇼핑몰에서 보기"
      />
      <div className="w-full auto border-t border-solid border-theme-G2 pt-[20px]">
        <p className="text-theme-B xl:text-KOR-lg-H3 xl:mb-[20px]">
          제품 상세 스펙
        </p>
        <ul className="w-full flex flex-col gap-[4px] text-theme-G5 text-KOR-lg-B2">
          <DetailSpec spec={specification.size} name="SIZE(mm)" />
          <DetailSpec
            spec={specification.block_deviceWeight}
            name="블럭무게/기기중량"
          />
          <DetailSpec spec={specification.frame} name="프레임" />
          <DetailSpec spec={specification.motor} name="모터" />
          <DetailSpec spec={specification.maxWieght} name="최대하중" />
          <DetailSpec spec={specification.displayInfo} name="디스플레이정보" />
          <DetailSpec spec={specification.incline} name="경사도" />
          <DetailSpec spec={specification.runningArea} name="주행면적" />
          <DetailSpec spec={specification.program} name="프로그램" />
          <DetailSpec
            spec={specification.dualButtonHandle}
            name="손잡이 듀얼버튼"
          />
          <DetailSpec spec={specification.weight} name="중량" />
          <DetailSpec spec={specification.driveSystem} name="구동방식" />
          <DetailSpec spec={specification.intensityLevels} name="운동강도" />
          <DetailSpec spec={specification.cardioSystem} name="심박시스템" />
          <DetailSpec spec={specification.powerSupply} name="전원공급" />
          <DetailSpec spec={specification.maxWeightOfMan} name="허용몸무게" />
          <DetailSpec spec={specification.age} name="사용연령" />
          <DetailSpec spec={specification.method} name="사용방법" />
        </ul>
      </div>
    </div>
  );
}
