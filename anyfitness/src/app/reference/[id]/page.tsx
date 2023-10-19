import { IDetailReference } from '@/interface/references';

type Props = {
  params: {
    id: string;
  };
};

const SERVER_URI = 'https://anyfitness.vercel.app/api';

export default async function ReferencesPage({ params: { id } }: Props) {
  const reference: IDetailReference = await fetch(
    `${SERVER_URI}/reference/${id}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  return (
    <div className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center justify-center">
      dd
    </div>
  );
}
