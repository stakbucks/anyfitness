import Link from 'next/link';

const SHOPPING_MALL_LINK = 'http://www.anyfitnessmall.co.kr/';

type Props = {
  text: string;
};

export default function GoShoppingBtn({ text }: Props) {
  return (
    <a href={SHOPPING_MALL_LINK}>
      <button className="xl:px-[20px] xl:py-[10px] px-[16px] py-[8px] bg-theme-B rounded-[8px] text-theme-W w-auto h-auto xl:text-KOR-lg-H3  text-KOR-sm-B4">
        {text}
      </button>
    </a>
  );
}
