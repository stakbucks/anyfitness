type Props = {
  params: {
    id: string;
  };
};

const TEST_URI = 'http://localhost:3000/api';

export default async function ReferencesPage({ params: { id } }: Props) {
  //   const reference = await fetch(`${TEST_URI}/reference/${id}`, {
  //     cache: 'no-store',
  //   }).then((res) => res.json());
  return <></>;
}
