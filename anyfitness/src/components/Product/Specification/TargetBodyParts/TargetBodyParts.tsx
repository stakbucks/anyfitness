import Image from 'next/image';

type Props = {
  targetBodyParts: string | undefined;
  targetBodyPartsArr: string[] | undefined;
};

export default function TargetBodyParts({
  targetBodyParts,
  targetBodyPartsArr,
}: Props) {
  return (
    <div className="w-full px-[24px] py-[12px] flex flex-col items-center gap-[12px] bg-theme-G1">
      <div className="text-center bg-theme-W w-full h-[26px] text-theme-B5 text-KOR-lg-B4">
        단련부위
      </div>

      {/* targetBodyParts가 존재하거나, targetBodyPartsArr일때는 중앙정렬
        아닌 경우는, 2열 grid 배치
       */}

      {targetBodyParts ? (
        <div className="relative w-[155px] h-[140px]">
          <Image priority alt="단련부위" src={targetBodyParts} fill />
        </div>
      ) : targetBodyPartsArr?.length === 1 ? (
        <div className="relative w-[155px] h-[140px]">
          <Image priority alt="단련부위" src={targetBodyPartsArr?.[0]} fill />
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 gap-[4px]">
          {targetBodyPartsArr?.map((targetBodyPart) => (
            <div className="relative w-[155px] h-[140px]">
              <Image priority alt="단련부위" src={targetBodyPart} fill />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
