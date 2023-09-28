import { monsterrat } from '../../app/layout';

type Props = {
  className?: string;
};

const dynamicSizes = {
  mobile: `w-[157px] h-[30px]  rounded-[8px] text-ENG-sm-C2 `,
  lg: `lg:w-[201px] lg:h-[47px] lg:rounded-[8px] lg:text-ENG-lg-H4`,
  xl: `xl:w-[218px] xl:h-[50px] xl:rounded-[8px] xl:text-ENG-lg-H3`,
};

export default function DiscoverWhiteBtn({ className }: Props) {
  return (
    <button
      className={` ${monsterrat.className} flex justify-center items-center bg-theme-W  border-[1px] border-solid border-theme-B  ${dynamicSizes.xl} ${dynamicSizes.lg} ${dynamicSizes.mobile}  ${className}`}
    >
      DISCOVER MORE
    </button>
  );
}
