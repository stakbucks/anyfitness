'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Text = '근력운동기구' | '유산소운동기구' | '야외운동기구';

export default function BannerText() {
  const pathname = usePathname();

  const [text, setText] = useState<Text>('근력운동기구');

  useEffect(() => {
    if (pathname.includes('weight')) {
      setText('근력운동기구');
    }
    if (pathname.includes('cardio')) {
      setText('유산소운동기구');
    }
    if (pathname.includes('outdoor')) {
      setText('야외운동기구');
    }
  }, [pathname]);

  return (
    <p className="text-theme-B xl:text-KOR-lg-H text-KOR-sm-H0 xl:mt-[60px] mt-[64px]">
      {text}
    </p>
  );
}
