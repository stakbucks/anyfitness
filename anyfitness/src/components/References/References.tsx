import { ISimpleReference, ReferenceTypes } from '@/interface/references';

const SERVER_URI = 'https://anyfitness.vercel.app/api';
const TEST_URI = 'http://localhost:3000/api';

type Props = {
  type: ReferenceTypes;
};

export default async function References({ type }: Props) {
  // const references: ISimpleReference[] = await fetch(
  //   `${TEST_URI}/references/${type}`,
  //   {
  //     cache: 'no-store',
  //   }
  // ).then((res) => res.json());
  // console.log(references);

  return (
    <section className="text-theme-B sp:w-[1424px] xl:w-[928px] w-screen xl:px-0 px-[24px] mb-[80px]"></section>
  );
}
