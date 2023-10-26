import Description from '@/components/Intro/Description/Description';
import IntroBanner from '@/components/Intro/IntroBanner/IntroBanner';
import History from '@/components/Intro/History/History';
import Certificates from '@/components/Intro/Certificates/Certificates';
import Facilities from '@/components/Intro/Facilities/Facilities';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '애니휘트니스 | 회사소개',
  description: '애니휘트니스 | 회사소개',
  openGraph: {
    title: '애니휘트니스 | 회사소개',
    description: '애니휘트니스 | 회사소개',
    url: 'https://anyfitness.co.kr/intro',
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

export default function IntroPage() {
  return (
    <div className="w-screen lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <IntroBanner />
      <Description />
      <History />
      <Certificates />
      <Facilities />
      <Footer />
    </div>
  );
}
