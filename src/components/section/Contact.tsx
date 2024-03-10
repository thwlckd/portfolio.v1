'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Contact() {
  const contactRef = useRef(null);

  useRefObserver(contactRef);

  return (
    <section id="contact" className="min-h-screen" ref={contactRef}>
      contact 이메일
    </section>
  );
}
