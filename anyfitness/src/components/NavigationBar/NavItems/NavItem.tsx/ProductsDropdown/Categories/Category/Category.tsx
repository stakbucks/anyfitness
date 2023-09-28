import { ICategory } from '../Categories';

type Props = {
  category: ICategory;
  isLast: boolean;
};
export default function Category({ category, isLast }: Props) {
  const { category: categoryName, items } = category;
  return (
    <div className="w-[148px] h-[160px] flex flex-col gap-[8px]">
      <h3 className="text-KOR-lg-B3 text-theme-BLUE">{categoryName}</h3>
    </div>
  );
}
