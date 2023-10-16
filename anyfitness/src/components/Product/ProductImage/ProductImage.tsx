import Image from 'next/image';
import Test from '../../../../public/test.png';

type Props = {
  image: string;
};

export default function ProductImage({ image }: Props) {
  return (
    <div className="relative sp:w-[994px] sp:min-h-[637px] xl:w-[498px] xl:min-h-[500px] w-full xl:h-auto h-[328px] bg-theme-IMGBG flex justify-center items-center">
      <Image
        alt="제품 이미지"
        src={Test}
        className=" sp:h-auto xl:h-[480px] xl:object-cover object-contain h-[328px]"
      />
    </div>
  );
}
