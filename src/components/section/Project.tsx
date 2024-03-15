'use client';

import { Children, useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';
import Image from 'next/image';

const PROJECTS = [
  {
    name: 'Plantopia',
    image: 'plantopia.png',
  },
  {
    name: 'Fragrant',
    image: 'fragrant.png',
  },
  {
    name: 'Sfaclog',
    image: 'sfaclog.png',
  },
];

export default function Project() {
  const projectRef = useRef(null);

  useRefObserver(projectRef);

  return (
    <section
      id="project"
      className="flex justify-center items-center flex-wrap gap-36 min-h-screen py-[20%] mr-20"
      ref={projectRef}
    >
      {Children.toArray(
        PROJECTS.map(({ name, image }) => (
          <a className="flex flex-col items-center gap-4 hover:-translate-y-2 duration-300">
            <Image
              className="rounded-xl"
              src={`/images/project/${image}`}
              width={128}
              height={128}
              alt={name}
            />
            <p className="text-lg font-bold">{name}</p>
          </a>
        )),
      )}
    </section>
  );
}
