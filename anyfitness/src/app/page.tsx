import Banner from '@/components/Landing/Banner/Banner';
import Brands from '@/components/Landing/Brands/Brands';

export default function Home() {
  return (
    <main className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <Banner />
      <Brands />
    </main>
  );
}
