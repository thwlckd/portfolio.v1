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
  title: "Hyub's portfolio",
  description: "Hi, I'm Hyub2.",
  openGraph: {
    title: "Hyub's portfolio",
    description: "Hi, I'm Hyub2.",
    url: 'https://hyub.xyz',
    siteName: "Hyub's portfolio website",
    images: [
      {
        url: 'https://hyub.xyz/og.jpeg',
        width: 1080,
        height: 540,
        alt: '협',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <Navigator />
          <Social />
          <Home />
          <main className="pl-[50px] sm:pl-[100px] lg:pl-[200px] overflow-hidden">
            {children}
          </main>
          <Progressbar />
          <Footer />
          <div id="modal"></div>
        </body>
      </Provider>
    </html>
  );
}
