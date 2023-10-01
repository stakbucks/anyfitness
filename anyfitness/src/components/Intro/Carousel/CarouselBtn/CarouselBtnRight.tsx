import Image from 'next/image';
import RightCarouselBtn from '../../../../../public/intro/rightCarouselBtn.svg';
import { Dispatch,SetStateAction } from 'react';

type Props = {
  setOffset: Dispatch<SetStateAction<number>>;
  setDirection: Dispatch<SetStateAction<number>>;
};

export default function CarouselBtnRight({setOffset,setDirection}:Props) {
  const handleClick = () => {
    setOffset((prev) => prev + 1);
    setDirection(1);
  };
  return (
    <button className="rounded-full absolute top-[40%] right-0 -translate-y-[50%]">
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
