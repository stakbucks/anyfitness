import Footer from '@/components/Footer/Footer';
import Reference from '@/components/Reference/Reference';
import SeeMore from '@/components/Reference/SeeMore/SeeMore';
import { IDetailReference, ReferenceTypes } from '@/interface/references';

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
      <div className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center justify-center">
        <Reference reference={reference} />
      </div>
      <SeeMore id={reference.id} type={type} />
      <Footer />
    </>
  );
}
