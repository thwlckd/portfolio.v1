'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Contact() {
  const contactRef = useRef(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useRefObserver(contactRef);

  const handleSubmitEmail = async () => {
    if (!nameRef.current || !emailRef.current || !messageRef.current) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });
    } catch (error) {
      console.error('메일 전송 실패:', error);
    }
  };

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
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitEmail();
        }}
      >
        <input
          className="h-10 w-[500px] px-4 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Name"
          ref={nameRef}
        />
        <input
          className="h-10 w-[500px] px-4 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Email"
          ref={emailRef}
        />
        <textarea
          className="h-40 w-[500px] px-4 py-2 rounded-lg border focus:border-2 border-indigo-500"
          placeholder="Message"
          ref={messageRef}
        />
        <button className="py-2 text-lg text-white rounded-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 transition-colors">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
