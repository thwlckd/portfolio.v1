'use client';

import { Children, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRecoil,
  SiRedux,
  SiSass,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import useRefObserver from '@/hooks/useRefObserver';
import { cn } from '@/utils';

const FRONT = [
  {
    icon: <SiHtml5 size={50} color="white" />,
    backgroundColor: 'bg-orange-500',
    name: 'HTML5',
  },
  {
    icon: <SiCss3 size={50} color="white" />,
    backgroundColor: 'bg-sky-500',
    name: 'CSS3',
  },
  {
    icon: <SiJavascript size={50} color="white" />,
    backgroundColor: 'bg-yellow-500',
    name: 'JavaScript',
  },
  {
    icon: <SiTypescript size={50} color="white" />,
    backgroundColor: 'bg-blue-500',
    name: 'TypeScript',
  },
  {
    icon: <SiReact size={50} color="white" />,
    backgroundColor: 'bg-cyan-500',
    name: 'React',
  },
  {
    icon: <SiNextdotjs size={50} color="white" />,
    backgroundColor: 'bg-black',
    name: 'Next.js',
  },
  {
    icon: <SiSass size={50} color="white" />,
    backgroundColor: 'bg-pink-500',
    name: 'Sass',
  },
  {
    icon: <SiStyledcomponents size={50} color="white" />,
    backgroundColor: 'bg-fuchsia-500',
    name: 'Styled Components',
  },
  {
    icon: <SiTailwindcss size={50} color="white" />,
    backgroundColor: 'bg-teal-500',
    name: 'Tailwind',
  },
  {
    icon: <SiRecoil size={50} color="white" />,
    backgroundColor: 'bg-blue-500',
    name: 'Recoil',
  },
  {
    icon: <SiRedux size={50} color="white" />,
    backgroundColor: 'bg-violet-500',
    name: 'Redux Toolkit',
  },
  {
    icon: <SiReactquery size={50} color="white" />,
    backgroundColor: 'bg-red-500',
    name: 'React Query',
  },
  {
    icon: <SiStorybook size={50} color="white" />,
    backgroundColor: 'bg-pink-600',
    name: 'Storybook',
  },
];

const BACK = [
  {
    icon: <SiNodedotjs size={50} color="white" />,
    backgroundColor: 'bg-lime-500',
    name: 'Node.js',
  },
  {
    icon: <SiExpress size={50} color="white" />,
    backgroundColor: 'bg-gray-500',
    name: 'Express.js',
  },
];

const ETC = [
  {
    icon: <SiGit size={50} color="white" />,
    backgroundColor: 'bg-orange-600',
    name: 'Git',
  },
];

const FIELD = [
  {
    field: FRONT,
    name: 'Front',
  },
  {
    field: BACK,
    name: 'Back',
  },
  {
    field: ETC,
    name: 'Etc',
  },
];

export default function Skill() {
  const skillRef = useRef(null);
  const [category, setCategory] = useState(FRONT);

  useRefObserver(skillRef);

  return (
    <section
      id="skill"
      className="relative flex flex-col justify-center items-center min-h-screen mr-[200px]"
      ref={skillRef}
    >
      <nav className="absolute top-[15%]">
        <ul className="flex justify-center gap-20 text-2xl font-bold">
          {Children.toArray(
            FIELD.map(({ field, name }) => (
              <li className="relative" onClick={() => setCategory(() => field)}>
                <a
                  className={cn(
                    'underline-hover transition-colors',
                    category === field && 'text-indigo-500',
                  )}
                >
                  {name}
                </a>
              </li>
            )),
          )}
        </ul>
      </nav>
      <motion.div
        className="grid grid-cols-5 gap-10"
        initial={{ x: '50dvw' }}
        whileInView={{
          x: 0,
        }}
        transition={{ type: 'spring' }}
      >
        {category.map(({ icon, backgroundColor, name }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: '200%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring' }}
          >
            <div
              className={cn(
                'flex justify-center items-center w-20 h-20 rounded-full overflow-hidden hover:rotate-[360deg] transition-transform duration-1000',
                backgroundColor,
              )}
            >
              {icon}
            </div>
            <p className="w-20 mt-2 text-center leading-tight">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
