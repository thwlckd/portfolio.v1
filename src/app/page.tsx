'use client';

import Link from 'next/link';
import { Children } from 'react';
import Home from '@/components/Home';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Project from '@/components/Project';
import Contact from '@/components/Contact';

export default function Main() {
  return (
    <>
      <SideBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

const SECTIONS = ['home', 'about', 'skill', 'project', 'contact'];

const SideBar = () => {
  return (
    <ul className="fixed top-0 left-10 flex flex-col justify-center items-center gap-10 w-10 h-screen z-50">
      {Children.toArray(
        SECTIONS.map((section) => (
          <li>
            <Link
              id={`${section}-bullet`}
              className={
                'block w-3 h-3 rounded-full bg-gray-500 opacity-50 transition-all duration-300'
              }
              href={`#${section}`}
            ></Link>
          </li>
        )),
      )}
    </ul>
  );
};
