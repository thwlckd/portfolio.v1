'use client';

import { Children, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import useRefObserver from '@/hooks/useRefObserver';
import useCursor from '@/hooks/useCursor';
import { cn } from '@/utils';
import { BACK, ETC, FRONT } from '@/constants/skill';
import Chip from '../common/Chip';

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
        <ul className="relative flex justify-center gap-10 text-xl font-bold sm:gap-20 sm:text-2xl">
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
          <a className="group absolute -right-10 top-[50%] -translate-y-1/2 sm:-right-14 lg:-right-[120px]">
            <AiOutlineQuestionCircle className="text-base sm:text-lg" />
            <Chip className="invisible absolute -top-20 right-0 whitespace-pre-wrap text-nowrap text-start text-xs font-normal opacity-20 transition-opacity group-hover:visible group-hover:opacity-100 sm:text-sm">
              {`1~3: 스닛펫을 참고하여 프로젝트에 사용\n4~6: 동작 메커니즘의 이해를 기반으로 프로젝트에 사용\n7~9: 능숙하게 프로젝트에 사용`}
            </Chip>
          </a>
        </ul>
      </nav>
      <motion.div
        className="relative grid grid-cols-4 gap-5 sm:gap-10 lg:grid-cols-5"
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
