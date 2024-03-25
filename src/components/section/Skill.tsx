'use client';

import { Children, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useRefObserver from '@/hooks/useRefObserver';
import useCursor from '@/hooks/useCursor';
import { cn } from '@/utils';
import { BACK, ETC, FRONT } from '@/constants/skill';

const SKILLS = [
  { field: FRONT, name: 'Front' },
  { field: BACK, name: 'Back' },
  { field: ETC, name: 'Etc' },
];

export default function Skill() {
  const skillRef = useRef(null);
  const [category, setCategory] = useState(FRONT);

  useRefObserver(skillRef);
  useCursor(category);

  return (
    <section
      id="skill"
      className="relative flex min-h-screen flex-col items-center justify-center py-[100px] pr-[50px] sm:pr-[100px] lg:pr-[200px]"
      ref={skillRef}
    >
      <nav className="absolute top-[15dvh] z-10">
        <ul className="flex justify-center gap-10 text-xl font-bold sm:gap-20 sm:text-2xl">
          {Children.toArray(
            SKILLS.map(({ field, name }) => (
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
        className="grid grid-cols-4 gap-5 sm:gap-10 lg:grid-cols-5"
        initial={{ x: '50dvw' }}
        whileInView={{
          x: 0,
        }}
        transition={{ type: 'spring' }}
      >
        {category.map(({ icon, backgroundColor, name, ability }) => (
          <SkillItem
            key={name}
            icon={icon}
            backgroundColor={backgroundColor}
            name={name}
            ability={ability}
          />
        ))}
      </motion.div>
    </section>
  );
}

const SkillItem = ({
  name,
  backgroundColor,
  ability,
  icon,
}: {
  icon: JSX.Element;
  backgroundColor: string;
  name: string;
  ability: string;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: '200%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring' }}
    >
      <a
        className={cn(
          'peer flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full transition-transform duration-1000 hover:rotate-[360deg] sm:h-[70px] sm:w-[70px] lg:h-20 lg:w-20',
          backgroundColor,
          'after:invisible after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-base after:font-bold after:backdrop-blur-sm hover:after:visible after:sm:text-lg',
          ability,
        )}
      >
        {icon}
      </a>
      <p className="mt-2 w-20 text-center text-sm leading-tight sm:text-base">
        {name}
      </p>
      {/* 툴팁 보류
  <Chip className="invisible peer-hover:visible absolute -top-10 text-sm sm:text-base text-nowrap opacity-20 peer-hover:opacity-100 transition-opacity">
    {description}
  </Chip> */}
    </motion.div>
  );
};
