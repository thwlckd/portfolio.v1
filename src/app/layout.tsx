import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Provider from './provider';
import { cn } from '@/utils';
import Cursor from '@/components/common/Cursor';
import Progressbar from '@/components/layout/Progressbar';
import Navigator from '@/components/layout/Navigator';
import Social from '@/components/layout/Social';
import Home from '@/components/section/Home';
import Footer from '@/components/layout/Footer';
import './globals.css';

const font = Nunito({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: '프론트엔드 박창협 포트폴리오',
  description: '프론트엔드 박창협 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Provider>
        <body className={cn(font.className, 'relative min-h-screen bg-white')}>
          <Cursor />
          <Progressbar />
          <Navigator />
          <Social />
          <Home />
          <main className="ml-[50px] sm:ml-[100px] lg:ml-[200px]">
            {children}
          </main>
          <Footer />
          <div id="modal"></div>
        </body>
      </Provider>
    </html>
  );
}
