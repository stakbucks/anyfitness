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
  return <></>;
}
