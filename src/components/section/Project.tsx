'use client';

import Image from 'next/image';
import { Children, HTMLAttributes, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useRefObserver from '@/hooks/useRefObserver';
import { Modal } from '../common/Modal';
import type { Project } from '@/types';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Partial<Project>;
}

const PROJECTS: Project[] = [
  {
    name: 'Plantopia',
    thumbnail: 'plantopia1.png',
    images: [
      'plantopia1.png',
      'plantopia2.png',
      'plantopia3.png',
      'plantopia4.png',
      'plantopia5.png',
      'plantopia6.png',
      'plantopia7.png',
      'plantopia8.png',
    ],
    git: 'https://github.com/thwlckd/plantopia-react',
    web: 'https://plantopia-react.vercel.app',
    account: { id: 'elice@code.com', password: 'elice1234' },
    summary: '반려식물 가이드 및 다이어링 웹 앱 🌱',
    description: '플랜토피아 블라블라\n플랜토피아 블라블라',
    skills: ['React', 'Sass', 'React Query', 'PWA', 'Firebase'],
  },
  {
    name: 'Fragrant',
    thumbnail: 'fragrant1.png',
    images: [
      'fragrant1.png',
      'fragrant2.png',
      'fragrant3.png',
      'fragrant4.png',
      'fragrant5.png',
    ],
    git: 'https://github.com/thwlckd/fragrant-nodejs',
    summary: '향수 온라인 쇼핑몰 🛍️',
    description:
      '프래그란트 블라블라\n프래그란트 블라블라\n프래그란트 블라블라\n프래그란트 블라블라\n프래그란트 블라블라',
    skills: ['VanilaJS', 'Express.js', 'Passport.js', 'MongoDB', 'Mongoose'],
  },
  {
    name: 'Sfaclog',
    thumbnail: 'sfaclog1.png',
    images: [
      'sfaclog1.png',
      'sfaclog2.png',
      'sfaclog3.png',
      'sfaclog4.png',
      'sfaclog5.png',
      'sfaclog6.png',
    ],
    git: 'https://github.com/SFACLOG/sfaclog',
    web: 'https://sfaclog-web.vercel.app',
    account: { id: 'imsi@google.com', password: '123456789!' },
    storybook:
      'https://dev-design-system--65af68a0f0808a50db600133.chromatic.com',
    summary: '개발자 아티클 커뮤니티 🗞️',
    description:
      '스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라\n스팩로그 블라블라',
    skills: [
      'Next.js',
      'Tailwind',
      'React Query',
      'Storybook',
      'PocketBase',
      'TurboRepo',
    ],
  },
  {
    name: '모바일 주차 요금 정산 서비스',
    thumbnail: 'parking-app1.png',
    images: [
      'parking-app1.png',
      'parking-app2.png',
      'parking-app3.png',
      'parking-app4.png',
      'parking-app5.png',
    ],
    git: 'https://github.com/thwlckd/MobileParkingPayment-Python-App',
    summary: '차단기 연동 주차 요금 결제 앱 🚗',
    description: '모바일 주차 요금 정산 서비스 블라블라',
    skills: ['Python', 'OpenCV', 'Java', 'Android Studio', 'PHP', 'MySQL'],
  },
];

export default function Project() {
  const projectRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [project, setProject] = useState<Project>();

  useRefObserver(projectRef);

  return (
    <>
      <motion.section
        id="project"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-10 min-h-screen pr-[50px] sm:pr-[100px] lg:pr-[200px] py-[100px]"
        ref={projectRef}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
      >
        {Children.toArray(
          PROJECTS.map((project, i) => (
            <a className="w-fit mx-auto">
              <ProjectCard
                project={project}
                onClick={() => {
                  setIsOpenModal((prev) => !prev);
                  setProject(() => PROJECTS[i]);
                }}
              />
            </a>
          )),
        )}
      </motion.section>
      {project && (
        <Modal
          isOpen={isOpenModal}
          setOpen={setIsOpenModal}
          project={project}
        />
      )}
    </>
  );
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
    >
      <div className="overflow-hidden rounded-xl shadow-md">
        <Image
          className="aspect-[4/3] hover:scale-110 transition-all"
          src={`/images/project/${project.thumbnail}`}
          width={320}
          height={240}
          alt="thumbnail"
        />
      </div>
      <h2 className="mt-3 text-lg font-bold">{project.name}</h2>
      <p className="max-w-[250px] mt-2 line-clamp-1 whitespace-pre-wrap">
        {project.summary}
      </p>
    </motion.div>
  );
};
