'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Contact() {
  const contactRef = useRef(null);

  useRefObserver(contactRef);

  return (
    <div id="contact" className="min-h-screen bg-blue-500" ref={contactRef}>
      contact 이메일
    </div>
  );
}
