import NavigationBar from '@/components/NavigationBar/NavigationBar';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const metadata: Metadata = {
  title: 'Anyfitness',
  description: '애니휘트니스',
};

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        {children}
        <NavigationBar />
        <div id="portal" />
      </body>
    </html>
  );
}
