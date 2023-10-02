import Image from 'next/image';
import RightCarouselBtn from '../../../../public/intro/rightCarouselBtn.svg';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function CarouselBtnRight({ setPage }: Props) {
  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <button className="rounded-full xl:w-auto w-0 absolute top-[35%] right-0 -translate-y-[50%]">
      <Image
        onClick={handleClick}
        alt="오른쪽 버튼"
        src={RightCarouselBtn}
        width={30}
        height={30}
        className="rounded-full"
      />
    </button>
  );
}
