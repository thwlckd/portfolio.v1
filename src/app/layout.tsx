import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Children } from 'react';
import Provider from './provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        <body className={(inter.className, 'min-h-screen bg-gray-50')}>
          <Sidebar />
          {children}
        </body>
      </Provider>
    </html>
  );
}

const SECTIONS = ['home', 'about', 'skill', 'project', 'contact'];

const Sidebar = () => {
  return (
    <ul className="fixed top-0 left-10 flex flex-col justify-center items-center gap-10 w-10 h-screen z-50">
      {Children.toArray(
        SECTIONS.map((section) => (
          <li>
            <Link
              id={`${section}-bullet`}
              className={
                'block w-3 h-3 rounded-full bg-gray-500 opacity-50 transition-all duration-300'
              }
              href={`#${section}`}
            ></Link>
          </li>
        )),
      )}
    </ul>
  );
};
