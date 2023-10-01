import { monsterrat } from '@/UI/Buttons/DiscoverWhiteBtn';

type Props = {
  KorTitle: string;
  EngTitle: string;
};

export default function SectionTitle({ KorTitle, EngTitle }: Props) {
  return (
    <p className="flex flex-col gap-[4px] h-full">
      <span className="text-KOR-lg-H3 text-theme-G6">{KorTitle}</span>
      <span
        className={`${monsterrat.className} xl:text-ENG-lg-C2 text-ENG-sm-C3 text-theme-G4`}
      >
        {EngTitle}
      </span>
    </p>
  );
}
