import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Provider from './provider';
import { cn } from '@/utils';
import Cursor from '@/components/common/Cursor';
import Progressbar from '@/components/common/Progressbar';
import Sidebar from '@/components/common/Sidebar';
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
        <body className={cn(font.className, 'min-h-screen bg-white')}>
          <Cursor />
          <Progressbar />
          <Sidebar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
