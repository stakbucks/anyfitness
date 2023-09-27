import { pretendard } from './layout';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>this is monsterrat</h1>
      <h1 className={pretendard.className}>this is pretendard</h1>
    </main>
  );
}
