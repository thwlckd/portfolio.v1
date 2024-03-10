'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Home() {
  const homeRef = useRef(null);

  useRefObserver(homeRef);

  return (
    <section id="home" className="min-h-screen" ref={homeRef}>
      Home 이름애니메이션 배경
    </section>
  );
}
