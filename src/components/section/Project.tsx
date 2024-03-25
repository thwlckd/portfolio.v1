'use client';

import Image from 'next/image';
import { Children, HTMLAttributes, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useRefObserver from '@/hooks/useRefObserver';
import { Modal } from '../common/Modal';
import type { Project } from '@/types';
import PROJECTS from '@/constants/project';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Partial<Project>;
}

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
