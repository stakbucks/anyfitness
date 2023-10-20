import Footer from '@/components/Footer/Footer';
import Paths from '@/components/Paths/Paths';
import Reference from '@/components/Reference/Reference';
import SeeMore from '@/components/Reference/SeeMore/SeeMore';
import { IDetailReference, ReferenceTypes } from '@/interface/references';
import { convertProductTypeToPath } from '@/utils/matchPath';

type Props = {
  params: {
    slug: [type: ReferenceTypes, id: string];
  };
};

const SERVER_URI = 'https://anyfitness.vercel.app/api';

export default async function ReferencesPage({ params: { slug } }: Props) {
  const [type, id] = slug;
  const reference: IDetailReference = await fetch(
    `${SERVER_URI}/reference/${id}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
  return (
    <>
      <Paths />
      <div className="w-screen h-auto   flex flex-col items-center justify-center">
        <Reference reference={reference} />
      </div>
      <SeeMore id={reference.id} type={type} />
      <Footer />
    </>
  );
}
