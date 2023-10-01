import { ICertificate } from '@/interface/certificate';
import Items from '../Carousel/Items/Items';

type Props = {
  certificates: ICertificate[];
};

export default function Slider({ certificates }: Props) {
  return (
    <div
      id="mobile-slider"
      className="xl:w-[900px] xl:px-[50px] w-screen pl-[24px] pr-0 pb-[32px] xl:hidden block overflow-x-scroll flex gap-[12px]"
    >
      <Items items={certificates} />
    </div>
  );
}
