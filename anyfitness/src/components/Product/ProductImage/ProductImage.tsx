import Image from 'next/image';

type Props = {
  image: string;
};

export default function ProductImage({ image }: Props) {
  return (
    <div className="relative bg-theme-IMGBG sp:w-[994px] py-auto sp:min-h-[637px] xl:w-[498px] xl:min-h-[500px] w-full xl:h-auto h-[328px] bg-theme-IMGBG flex justify-center items-center">
      <Image
        alt="제품 이미지"
        src={image}
        fill
        className=" sp:h-auto xl:h-[480px] xl:object-contain object-contain h-[328px]"
      />
    </div>
  );
}
