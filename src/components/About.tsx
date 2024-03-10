'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function About() {
  const aboutRef = useRef(null);

  useRefObserver(aboutRef);

  return (
    <section id="about" className="min-h-screen" ref={aboutRef}>
      about 사진 자기소개 핵심가치(together, dx, intuitive)
    </section>
  );
}
