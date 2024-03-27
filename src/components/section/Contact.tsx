'use client';

import { useRef, useState } from 'react';
import useRefObserver from '@/hooks/useRefObserver';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const emailRegEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;

export default function Contact() {
  const contactRef = useRef(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isPendingEmail, setIsPendingEmail] = useState(false);

  useRefObserver(contactRef);

  const handleClickSubmit = async () => {
    if (isPendingEmail) return;

    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    )
      return alert('공란이 없는지 확인해 주세요.');

    if (!emailRegEx.test(emailRef.current.value))
      return alert('이메일 형식을 확인해 주세요.');

    try {
      setIsPendingEmail(true);

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
    } finally {
      setIsPendingEmail(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center py-[100px] pr-[50px] sm:pr-[100px] lg:pr-[200px]"
      ref={contactRef}
    >
      <motion.p
        className="text-lg font-bold sm:text-2xl lg:text-3xl"
        initial={{ x: '30dvw' }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        Have a question?
      </motion.p>
      <motion.p
        className="mt-2 text-lg font-bold sm:text-2xl lg:text-3xl"
        initial={{ x: '-30dvw' }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        Want to work together?
      </motion.p>
      <motion.form
        className="mt-10 flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring' }}
      >
        <input
          className="h-10 w-[280px] rounded-lg border border-indigo-500 px-4 focus:border-2 sm:w-[400px] lg:w-[500px]"
          placeholder="Name"
          ref={nameRef}
        />
        <input
          className="h-10 w-[280px] rounded-lg border border-indigo-500 px-4 focus:border-2 sm:w-[400px] lg:w-[500px]"
          placeholder="Email"
          ref={emailRef}
        />
        <textarea
          className="h-40 w-[280px] rounded-lg border border-indigo-500 px-4 py-2 focus:border-2 sm:w-[400px] lg:w-[500px]"
          placeholder="Message"
          ref={messageRef}
        />
        <button
          type="button"
          className={cn(
            'rounded-lg bg-indigo-500 py-2 text-lg text-white transition-colors hover:bg-indigo-400 active:bg-indigo-600',
            isPendingEmail && 'cursor-progress',
          )}
          onClick={handleClickSubmit}
        >
          SUBMIT
        </button>
      </motion.form>
    </section>
  );
}
