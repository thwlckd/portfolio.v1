import Image from 'next/image';
import { Children, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SiGithub, SiIfixit, SiStorybook } from 'react-icons/si';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import useCursor from '@/hooks/useCursor';
import { Project } from '@/types';
import Chip from './Chip';
import 'swiper/css';
import 'swiper/css/navigation';

export interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  project: Project;
}

export interface ProjectModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  project: Project;
}

export const Modal = ({ isOpen, setOpen, project }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ProjectModal setOpen={setOpen} project={project} />,
    document.getElementById('modal') as HTMLDivElement,
  );
};

const ProjectModal = ({ setOpen, project }: ProjectModalProps) => {
  useCursor();

  return (
    <div
      className="absolute top-0 flex flex-col w-full h-full backdrop-blur-md z-10"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.a
        className="sticky top-0 w-full h-[20dvh]"
        initial={{ y: '-50%' }}
        whileHover={{
          y: 0,
        }}
      >
        <SiIfixit className="w-full h-[50%] mt-[10dvh] lg:mt-0 py-6 text-indigo-500" />
      </motion.a>
      <motion.main
        className={
          'sticky top-[10dvh] flex flex-col gap-[50px] w-full h-[90dvh] py-[50px] px-[50px] lg:px-[200px] bg-indigo-50 rounded-t-2xl overflow-y-scroll'
        }
        initial={{ opacity: 0, y: '50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl lg:text-4xl font-bold">{project.name}</h2>
        <div className="text-nowrap">
          <a
            className="flex items-center gap-2 w-fit max-w-full underline overflow-hidden"
            href={project.git}
            target="_blank"
          >
            <SiGithub className="min-w-5 min-h-5" />
            {project.git}
          </a>
          {project.storybook && (
            <>
              <a
                className="flex items-center gap-2 mt-4 w-fit max-w-full underline overflow-hidden"
                href={project.storybook}
                target="_blank"
              >
                <SiStorybook className="min-w-5 min-h-5" />
                {project.storybook}
              </a>
            </>
          )}
          {project.web && (
            <>
              <a
                className="flex items-center gap-2 mt-4 w-fit max-w-full underline overflow-hidden"
                href={project.web}
                target="_blank"
              >
                <FaArrowUpRightFromSquare className="min-w-5 min-h-5" />
                {project.web}
              </a>
              {project.account && (
                <div className="ml-7 text-wrap">
                  <span>[테스트 계정] </span>
                  <span>id: {project.account.id} </span>
                  <span>password: {project.account.password}</span>
                </div>
              )}
            </>
          )}
        </div>
        {project.images && (
          <Swiper
            className="w-full min-h-[30dvh]"
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {Children.toArray(
              project.images.map((image) => (
                <SwiperSlide>
                  <Image
                    className="rounded-xl"
                    src={`/images/project/${image}`}
                    fill
                    alt="image"
                  />
                </SwiperSlide>
              )),
            )}
          </Swiper>
        )}
        <div>
          <h3 className="text-lg lg:text-2xl font-bold">Introduce.</h3>
          <p className="mt-4 whitespace-pre-wrap">{project.description}</p>
        </div>
        <div>
          <h3 className="text-lg lg:text-2xl font-bold">Dev Log.</h3>
          <p className="mt-4 whitespace-pre-wrap">{project.role}</p>
        </div>
        <div>
          {project.tags && (
            <ul className="flex flex-wrap gap-4 mb-4">
              {Children.toArray(
                project.tags.map((tag) => (
                  <li>
                    <Chip className="">#{tag}</Chip>
                  </li>
                )),
              )}
            </ul>
          )}
          <ul className="flex flex-wrap gap-4">
            {Children.toArray(
              project.skills.map((skill) => (
                <li>
                  <Chip type="fill">{skill}</Chip>
                </li>
              )),
            )}
          </ul>
        </div>
      </motion.main>
    </div>
  );
};
