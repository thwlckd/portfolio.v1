'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';
import Link from 'next/link';

export default function Home() {
  const homeRef = useRef(null);

  useRefObserver(homeRef);
  return (
    <section
      id="home"
      className="flex justify-center items-center min-h-screen"
      ref={homeRef}
    >
      {/* Home 이름애니메이션 배경 */}
      <Link className="text-6xl font-bold tracking-widest" href={'#about'}>
        <span className="inline-block animate-spin-2">H</span>
        <span>y</span>
        <span>u</span>
        <span className="inline-block animate-bounce">b</span>
      </Link>
    </section>
  );
}
