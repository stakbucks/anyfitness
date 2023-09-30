import Description from '@/components/Intro/Description/Description';
import IntroBanner from '@/components/Intro/IntroBanner/IntroBanner';
import History from '@/components/Intro/History/History';

export default function IntroPage() {
  return (
    <div className="w-screen lg:pt-[85px] pt-[60px] flex flex-col items-center">
      <IntroBanner />
      <Description />
      <History />
    </div>
  );
}
