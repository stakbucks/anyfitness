import { ICertificate } from '@/interface/certificate';
import Items from '../Carousel/Items/CertificateItems';
import { IFacility } from '@/interface/facility';
import FacilityItems from '../Carousel/Items/FacilityItems';

type Props<T> = {
  type: T;
  items: T extends 'facility' ? IFacility[] : ICertificate[];
};

export default function Slider<T>({ type, items }: Props<T>) {
  return (
    <div
      id="mobile-slider"
      className="xl:w-[900px] xl:px-[50px] w-screen pl-[24px] pr-0 pb-[32px] xl:hidden block overflow-x-scroll flex gap-[12px]"
    >
      {type === 'certificate' ? (
        <Items items={items} />
      ) : (
        <FacilityItems items={items} />
      )}
    </div>
  );
}
