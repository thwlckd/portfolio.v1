'use client';

import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

const emailRegEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;

export default function Contact() {
  const contactRef = useRef(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useRefObserver(contactRef);

  const handleSubmitEmail = async () => {
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    )
      return alert('공란이 없는지 확인해 주세요.');

    if (!emailRegEx.test(emailRef.current.value))
      return alert('이메일 형식을 확인해 주세요.');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/mail`, {
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

      if (res.ok) return alert('메일 전송 완료!');
    } catch (error) {
      console.error('메일 전송 실패:', error);

      return alert('메일 전송 실패!');
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
