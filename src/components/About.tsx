'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function About() {
  const aboutRef = useRef(null);

  useRefObserver(aboutRef);

  return (
    <div id="about" className="min-h-screen bg-blue-200" ref={aboutRef}>
      about 사진 자기소개 핵심가치(together, dx, intuitive)
    </div>
  );
}
