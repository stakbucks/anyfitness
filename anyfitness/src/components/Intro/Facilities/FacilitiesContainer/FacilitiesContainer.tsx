import { IFacility } from '@/interface/facility';
import FacilityItem from './FacilityItem/FacilityItem';

type Props = {
  facilities: IFacility[];
};

export default function FacilitiesContainer({ facilities }: Props) {
  return (
    <div
      className={`w-screen xl:w-[800px] xl:h-auto xl:pb-[32px] pb-[20px] flex flex-col items-center gap-[25px] `}
    >
      {facilities.map((facility) => (
        <FacilityItem key={facility.id} facility={facility} />
      ))}
    </div>
  );
}
