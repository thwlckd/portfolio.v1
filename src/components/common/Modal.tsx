import Image from 'next/image';
import { Children, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SiIfixit } from 'react-icons/si';
import { Project } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        {project.images && (
          <Swiper
            className="w-full h-[30dvh]"
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {Children.toArray(
              project.images.map((image) => (
                <SwiperSlide>
                  <Image src={`/images/project/${image}`} fill alt="image" />
                </SwiperSlide>
              )),
            )}
          </Swiper>
        )}
        {/* 배포링크 */}
        {/* 레포지토리 */}
        {/* 프로젝트소개 */}
        {/* 기술스택 */}
      </motion.main>
    </div>
  );
};
