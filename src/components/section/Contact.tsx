'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Contact() {
  const contactRef = useRef(null);

  useRefObserver(contactRef);

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center pr-[200px] min-h-screen"
      ref={contactRef}
    >
      <p className="text-3xl font-bold">Have a question?</p>
      <p className="mt-2 text-3xl font-bold">Want to work together?</p>
      <form
        className="flex flex-col gap-4 mt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="h-10 w-[500px] px-4 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Name"
        />
        <input
          className="h-10 w-[500px] px-4 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Email"
        />
        <textarea
          className="h-40 w-[500px] px-4 py-2 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Message"
        />
        <button className="py-2 text-lg text-white rounded-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 transition-colors">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
