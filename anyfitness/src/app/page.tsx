import Footer from '@/components/Footer/Footer';
import Banner from '@/components/Landing/Banner/Banner';
import Brands from '@/components/Landing/Brands/Brands';
import GoShopping from '@/components/Landing/GoShopping/GoShopping';
import ProductsIntro from '@/components/Landing/ProductsIntro/ProductsIntro';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anyfitness | 애니휘트니스',
  description: '애니휘트니스 : Your health starts here',
  openGraph: {
    title: 'Anyfitness | 애니휘트니스',
    description: '애니휘트니스 : Your health starts here',
    url: 'https://anyfitness.co.kr',
    siteName: `Anyfitness`,
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function Home() {
  return (
    <div className="w-screen h-auto lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <Banner />
      <Brands />
      <ProductsIntro />
      <GoShopping />
      <Footer />
    </div>
  );
}
