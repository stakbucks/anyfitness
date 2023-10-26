import NavigationBar from '@/components/NavigationBar/NavigationBar';
import './globals.css';
import localFont from 'next/font/local';

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={pretendard.className}>
        <main>{children}</main>
        <NavigationBar />
        <div id="portal" />
      </body>
    </html>
  );
}
