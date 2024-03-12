'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { GiMoebiusTriangle } from 'react-icons/gi';
import useRefObserver from '@/hooks/useRefObserver';

export default function About() {
  const aboutRef = useRef(null);

  useRefObserver(aboutRef);
  return (
    <section
      id="about"
      className="grid grid-flow-col grid-cols-2 min-h-screen px-[200px]"
      ref={aboutRef}
    >
      <Profile />
      <Career />
    </section>
  );
}

const Profile = () => {
  return (
    <article className="flex flex-col justify-center items-center text-xl">
      <div className="overflow-hidden w-[200px] h-[200px] rounded-lg">
        <Image
          className="aspect-square object-cover hover:scale-110 transition-all"
          src="/images/profile.jpg"
          width={200}
          height={200}
          alt="profile"
        />
      </div>
      <p className="mt-8">박창협</p>
      <p>Front End Developer</p>
      <div className="flex flex-col gap-4 mt-12">
        <p>
          <GiMoebiusTriangle className="inline-block mr-2 hover:text-indigo-500 hover:animate-spin" />
          소프트웨어로 가까이 있는 문제를 해결하는데 관심이 있습니다.
        </p>
        <p>
          <GiMoebiusTriangle className="inline-block mr-2 hover:text-indigo-500 hover:animate-spin" />
          개발자 경험을 향상시키기 위한 고민을 합니다.
        </p>
        <p>
          <GiMoebiusTriangle className="inline-block mr-2 hover:text-indigo-500 hover:animate-spin" />
          같이의 가치를 중요하게 생각합니다.
        </p>
      </div>
    </article>
  );
};

const Career = () => {
  return (
    <article className="flex flex-col justify-center items-center bg-red-50"></article>
  );
};
