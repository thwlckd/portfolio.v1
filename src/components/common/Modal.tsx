import Image from 'next/image';
import { Children, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SiGithub, SiIfixit } from 'react-icons/si';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Project } from '@/types';
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
        <SiIfixit className="w-full h-[50%] py-6 text-indigo-500" />
      </motion.a>
      <motion.main
        className={
          'sticky top-[10dvh] flex flex-col gap-[50px] w-full h-[90dvh] pt-[50px] px-[200px] bg-indigo-50 rounded-t-2xl overflow-y-scroll'
        }
        initial={{ opacity: 0, y: '50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <div>
          <a
            className="flex items-center gap-2 w-fit underline"
            href={project.git}
            target="_blank"
          >
            <SiGithub size={20} />
            {project.git}
          </a>
          <a
            className="flex items-center gap-2 w-fit mt-4 underline"
            href={project.web}
            target="_blank"
          >
            <FaArrowUpRightFromSquare size={20} />
            {project.web}
          </a>
        </div>
        {project.images && (
          <Swiper
            className="w-full h-[30dvh]"
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
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
        <p className="whitespace-pre-wrap">{project.description}</p>
        <ul className="flex gap-4">
          {Children.toArray(
            project.skills.map((skill) => (
              <li className="py-1 px-2 rounded-md bg-indigo-500 text-white">
                {skill}
              </li>
            )),
          )}
        </ul>
      </motion.main>
    </div>
  );
};
