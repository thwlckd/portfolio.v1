'use client';

import { Children, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useRefObserver from '@/hooks/useRefObserver';
import useCursor from '@/hooks/useCursor';
import Chip from '../common/Chip';
import { cn } from '@/utils';
import { BACK, ETC, FRONT } from '@/constants/skill';

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
  useCursor(category);

  return (
    <section
      id="skill"
      className="relative flex flex-col justify-center items-center min-h-screen pr-[50px] sm:pr-[100px] lg:pr-[200px] py-[100px]"
      ref={skillRef}
    >
      <nav className="absolute top-[15dvh] z-10">
        <ul className="flex justify-center gap-10 sm:gap-20 text-xl sm:text-2xl font-bold">
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
        className="grid grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-10"
        initial={{ x: '50dvw' }}
        whileInView={{
          x: 0,
        }}
        transition={{ type: 'spring' }}
      >
        {category.map(
          ({ icon, backgroundColor, name, ability, description }) => (
            <motion.div
              className="flex flex-col items-center"
              key={name}
              initial={{ opacity: 0, y: '200%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring' }}
            >
              <a
                className={cn(
                  'peer flex justify-center items-center w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-20 lg:h-20 rounded-full overflow-hidden hover:rotate-[360deg] transition-transform duration-1000',
                  backgroundColor,
                  'after:invisible hover:after:visible after:absolute after:flex after:justify-center after:items-center after:w-full after:h-full after:text-base after:sm:text-lg after:font-bold after:backdrop-blur-sm',
                  ability,
                )}
              >
                {icon}
              </a>
              <p className="w-20 mt-2 text-sm sm:text-base text-center leading-tight">
                {name}
              </p>
              <Chip className="invisible peer-hover:visible absolute -top-10 text-sm sm:text-base text-nowrap opacity-20 peer-hover:opacity-100 transition-opacity">
                {description}
              </Chip>
            </motion.div>
          ),
        )}
      </motion.div>
    </section>
  );
}
