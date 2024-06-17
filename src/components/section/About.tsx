'use client';

import Image from 'next/image';
import { Children, useRef } from 'react';
import { motion } from 'framer-motion';
import { GiMoebiusTriangle } from 'react-icons/gi';
import useRefObserver from '@/hooks/useRefObserver';
import Chip from '../common/Chip';
import profile from '@/../public/images/profile.png';

export default function About() {
  const aboutRef = useRef(null);

  useRefObserver(aboutRef);

  return (
    <motion.section
      id="about"
      className="grid min-h-screen grid-cols-1 gap-[50px] py-[100px] pr-[50px] transition-all md:pr-0 lg:grid-cols-2"
      ref={aboutRef}
      initial={{ opacity: 0.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ amount: 0.4 }}
    >
      <Profile />
      <Career />
    </motion.section>
  );
}

const Profile = () => {
  return (
    <article className="flex flex-col items-center justify-center text-base lg:text-lg">
      <div className="h-[200px] w-[200px] overflow-hidden rounded-lg">
        <Image
          className="aspect-square object-cover object-top transition-all hover:scale-110"
          src={profile}
          width={200}
          height={200}
          alt="profile"
          placeholder="blur"
        />
      </div>
      <p className="mt-8">박창협</p>
      <p>Front End Developer</p>
      <div className="mt-4 flex gap-2">
        <Chip className="text-base lg:text-lg">정보처리기사</Chip>
        <Chip className="text-base lg:text-lg">SQLD</Chip>
        <Chip className="text-base lg:text-lg">OPIC IH</Chip>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <p>
          <GiMoebiusTriangle className="mr-2 inline-block hover:animate-spin hover:text-indigo-500" />
          사회의 니즈를 소프트웨어로 풀어내는데 관심이 있습니다.
        </p>
        <p>
          <GiMoebiusTriangle className="mr-2 inline-block hover:animate-spin hover:text-indigo-500" />
          지속 가능한 코드를 지향합니다.
        </p>
        <p>
          <GiMoebiusTriangle className="mr-2 inline-block hover:animate-spin hover:text-indigo-500" />
          맹점을 경계합니다.
        </p>
      </div>
    </article>
  );
};

const CAREERS = [
  {
    title: 'Viva Republica(Toss)',
    period: '2024.05 ~',
    description: ['Frontend Developer Assistant'],
  },
  {
    title: '스팩스페이스',
    period: '2023.12 ~ 2024.02',
    description: [
      '웹/앱 개발자 인턴형 프로그램',
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
    <article className="flex flex-col items-center justify-center lg:items-start">
      {Children.toArray(
        CAREERS.map(({ title, period, description }) => (
          <div className="relative w-[300px] lg:w-auto">
            <div className="flex h-16 w-fit items-center justify-center bg-white">
              <GiMoebiusTriangle className="inline-block text-xl hover:animate-spin hover:text-indigo-500 lg:text-3xl" />
              <p className="ml-4 text-lg font-semibold sm:text-xl lg:text-2xl">
                {title}
                <span className="ml-2 text-xs lg:text-sm">{period}</span>
              </p>
            </div>
            <div className="mb-10 ml-12 flex flex-col gap-3 before:absolute before:left-3 before:-z-10 before:h-full before:w-[2px] before:bg-indigo-500 lg:text-lg">
              {Children.toArray(description.map((v) => <p>{v}</p>))}
            </div>
          </div>
        )),
      )}
    </article>
  );
};
