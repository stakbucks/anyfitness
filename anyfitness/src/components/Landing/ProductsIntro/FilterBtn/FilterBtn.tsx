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
      } text-KOR-sm-C4 px-[16px] py-[8px] rounded-[30px]`}
    >
      {name}
    </button>
  );
}
