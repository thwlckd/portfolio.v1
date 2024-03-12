'use client';

import Link from 'next/link';
import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Home() {
  const homeRef = useRef(null);

  useRefObserver(homeRef);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white z-10"
      ref={homeRef}
    >
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-9xl font-bold tracking-widest transition-colors">
        <span className="inline-block animate-spin-2">H</span>
        <span>y</span>
        <span>u</span>
        <span className="inline-block animate-bounce">b</span>
      </div>
      <nav className="max-h-screen max-w-screen overflow-hidden text-[250px] break-all leading-none text-white font-bold uppercase">
        <Link
          className="hover:text-red-500 transition-colors text-indigo-50"
          href={'#about'}
        >
          about
        </Link>
        <Link
          className="hover:text-orange-500 transition-colors text-indigo-50"
          href={'#skill'}
        >
          skill
        </Link>
        <Link
          className="hover:text-green-500 transition-colors text-indigo-50"
          href={'#project'}
        >
          project
        </Link>
        <Link
          className="hover:text-blue-500 transition-colors text-indigo-50"
          href={'#contact'}
        >
          contact
        </Link>
        <Link
          className="hover:text-red-500 transition-colors text-indigo-50"
          href={'#about'}
        >
          about
        </Link>
        <Link
          className="hover:text-orange-500 transition-colors text-indigo-50"
          href={'#skill'}
        >
          skill
        </Link>
        <Link
          className="hover:text-green-500 transition-colors text-indigo-50"
          href={'#project'}
        >
          project
        </Link>
        <Link
          className="hover:text-blue-500 transition-colors text-indigo-50"
          href={'#contact'}
        >
          contact
        </Link>
        <Link
          className="hover:text-red-500 transition-colors text-indigo-50"
          href={'#about'}
        >
          about
        </Link>
        <Link
          className="hover:text-orange-500 transition-colors text-indigo-50"
          href={'#skill'}
        >
          skill
        </Link>
        <Link
          className="hover:text-green-500 transition-colors text-indigo-50"
          href={'#project'}
        >
          project
        </Link>
        <Link
          className="hover:text-blue-500 transition-colors text-indigo-50"
          href={'#contact'}
        >
          contact
        </Link>
      </nav>
    </section>
  );
}
