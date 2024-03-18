'use client';

import Image from 'next/image';
import { Children, useRef, useState } from 'react';
import useRefObserver from '@/hooks/useRefObserver';
import { Modal } from '../common/Modal';
import { Project } from '@/types';

const PROJECTS: Project[] = [
  {
    name: 'Plantopia',
    icon: 'plantopia.png',
    images: ['image.png', 'image.png', 'image.png', 'image.png', 'image.png'],
    git: 'https://github.com/thwlckd/plantopia-react',
    web: 'https://plantopia-react.vercel.app/',
    description: '플랜토피아 블라블라',
    skills: ['React', 'React'],
  },
  {
    name: 'Fragrant',
    icon: 'fragrant.png',
    git: 'https://github.com/thwlckd/fragrant-nodejs',
    web: 'https://plantopia-react.vercel.app/',
    description: '프래그란트 블라블라',
    skills: ['React', 'React'],
  },
  {
    name: 'Sfaclog',
    icon: 'sfaclog.png',
    git: 'https://github.com/thwlckd/',
    web: 'https://plantopia-react.vercel.app/',
    description: '스팩로그 블라블라',
    skills: ['React', 'React'],
  },
];

export default function Project() {
  const projectRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [project, setProject] = useState<Project>();

  useRefObserver(projectRef);

  return (
    <>
      <section
        id="project"
        className="flex justify-center items-center flex-wrap gap-36 min-h-screen py-[20%] mr-20"
        ref={projectRef}
      >
        {Children.toArray(
          PROJECTS.map(({ name, icon }, i) => (
            <a
              className="flex flex-col items-center gap-4 hover:-translate-y-2 duration-300"
              onClick={() => {
                setIsOpenModal((prev) => !prev);
                setProject(() => PROJECTS[i]);
              }}
            >
              <Image
                className="rounded-xl"
                src={`/images/project/${icon}`}
                width={128}
                height={128}
                alt={name}
              />
              <p className="text-lg font-bold">{name}</p>
            </a>
          )),
        )}
      </section>
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
