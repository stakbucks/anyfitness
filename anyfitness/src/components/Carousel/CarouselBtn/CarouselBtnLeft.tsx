import Image from 'next/image';
import leftCarouselBtn from '../../../../public/intro/leftCarouselBtn.svg';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function CarouselBtnLeft({ setPage }: Props) {
  const handleClick = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-full xl:w-auto w-0 absolute top-[35%] left-0 -translate-y-[50%]"
    >
      <Image
        alt="왼쪽 버튼"
        src={leftCarouselBtn}
        width={30}
        height={30}
        className="rounded-full"
      />
    </button>
  );
}
