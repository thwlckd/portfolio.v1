'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Home() {
  const homeRef = useRef(null);

  useRefObserver(homeRef);

  return (
    <div id="home" className="min-h-screen bg-blue-100" ref={homeRef}>
      Home 이름애니메이션 배경
    </div>
  );
}
