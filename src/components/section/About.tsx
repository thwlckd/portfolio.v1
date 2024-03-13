'use client';

import Image from 'next/image';
import { Children, useRef } from 'react';
import { motion } from 'framer-motion';
import { GiMoebiusTriangle } from 'react-icons/gi';
import useRefObserver from '@/hooks/useRefObserver';

export default function About() {
  const aboutRef = useRef(null);

  useRefObserver(aboutRef);

  return (
    <motion.section
      id="about"
      className=" grid grid-flow-col grid-cols-2 min-h-screen  transition-all"
      ref={aboutRef}
      initial={{ opacity: 0.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ amount: 0.5 }}
    >
      <Profile />
      <Career />
    </motion.section>
  );
}

const Profile = () => {
  return (
    <article className="flex flex-col justify-center items-center text-lg">
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

const CAREERS = [
  {
    title: '스팩스페이스',
    period: '2023.12 ~ 2024.02',
    description: [
      '앱/웹 개발자 인턴형 프로그램',
      '스팩폴리오 프로젝트 최우수상',
    ],
  },
  {
    title: '영남대학교',
    period: '2017.03 ~ 2024.02',
    description: [
      '정보통신공학과 졸업',
      '객체지향프로그래밍및자료구조 튜터',
      'IT 동아리 HowTo 활동',
      '성적 장학금 5회',
    ],
  },
  {
    title: '엘리스 부트캠프',
    period: '2023.05 ~ 2023.09',
    description: ['SW Engineer Track 5기 수료'],
  },
];

const Career = () => {
  return (
    <article className="flex flex-col justify-center ">
      {Children.toArray(
        CAREERS.map(({ title, period, description }) => (
          <div className="relative">
            <div className="flex justify-center items-center w-fit h-16 bg-white">
              <GiMoebiusTriangle className="inline-block text-3xl hover:text-indigo-500 hover:animate-spin" />
              <p className="ml-4 text-2xl font-semibold">
                {title}
                <span className="ml-2 text-sm">{period}</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 ml-12 mb-10 text-lg before:absolute before:left-3 before:w-[2px] before:h-full before:-z-10 before:bg-indigo-500">
              {Children.toArray(description.map((v) => <p>{v}</p>))}
            </div>
          </div>
        )),
      )}
    </article>
  );
};
