import Footer from '@/components/Footer/Footer';
import Banner from '@/components/Landing/Banner/Banner';
import Brands from '@/components/Landing/Brands/Brands';
import GoShopping from '@/components/Landing/GoShopping/GoShopping';
import ProductsIntro from '@/components/Landing/ProductsIntro/ProductsIntro';

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
