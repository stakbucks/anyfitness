type Props = {
  onClick(): void;
  selected: boolean;
  name: string;
};

export default function FilterBtn({ onClick, selected, name }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? 'bg-theme-B text-theme-W' : 'bg-theme-G2 text-theme-B'
      } sp:text-KOR-lg-H1 xl:text-KOR-lg-H4 text-KOR-sm-C4 sp:px-[24px] sp:py-[16px] xl:px-[20px] xl:py-[12px] px-[16px] py-[8px] rounded-[30px]`}
    >
      {name}
    </button>
  );
}
