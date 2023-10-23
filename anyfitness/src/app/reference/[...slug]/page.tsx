import Footer from '@/components/Footer/Footer';
import Paths from '@/components/Paths/Paths';
import Reference from '@/components/Reference/Reference';
import SeeMore from '@/components/Reference/SeeMore/SeeMore';
import { IDetailReference, ReferenceTypes } from '@/interface/references';
import { getReferenceById } from '@/service/references';

type Props = {
  params: {
    slug: [type: ReferenceTypes, id: string];
  };
};

export default async function ReferencesPage({ params: { slug } }: Props) {
  const [type, id] = slug;
  const reference: IDetailReference = await getReferenceById(id);
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
