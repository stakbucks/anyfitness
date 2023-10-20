import { ISimpleReference, ReferenceTypes } from '@/interface/references';
import ReferenceItem from './RefrenceItem.tsx/ReferenceItem';

const SERVER_URI = 'https://anyfitness.vercel.app/api';

type Props = {
  type: ReferenceTypes;
};

const dynamicSizes = {
  sp: `sp:w-[1424px] sp:grid-cols-4 sp:gap-x-[16px] sp:gap-y-[32px]`,
  xl: `xl:w-[928px] xl:grid-cols-3 xl:gap-x-[16px] xl:gap-y-[32px]`,
};

export default async function References({ type }: Props) {
  const references: ISimpleReference[] = await fetch(
    `${SERVER_URI}/references/${type}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());

  return (
    <ul
      className={`text-theme-B  grid ${dynamicSizes.sp} ${dynamicSizes.xl} w-screen grid-cols-2 gap-x-[4px]  gap-y-[20px]  xl:pt-[40px] pt-[20px] mb-[80px] items-center`}
    >
      {references.map((reference) => (
        <ReferenceItem key={reference.id} reference={reference} />
      ))}
    </ul>
  );
}
