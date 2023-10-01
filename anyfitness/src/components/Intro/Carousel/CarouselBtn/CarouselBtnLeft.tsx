import Image from 'next/image';
import leftCarouselBtn from '../../../../../public/intro/leftCarouselBtn.svg';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setOffset: Dispatch<SetStateAction<number>>;
  setDirection: Dispatch<SetStateAction<number>>;
};

export default function CarouselBtnLeft({ setOffset, setDirection }: Props) {
  const handleClick = () => {
    setOffset((prev) => prev - 1);
    setDirection(-1);
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-full absolute top-[40%] left-0 -translate-y-[50%]"
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
