'use client';

import Link from 'next/link';
import { Children, useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';
import { cn } from '@/utils';

const NAVIGATORS = [
  {
    name: 'about',
    color: 'text-red-300',
    hover: 'hover:text-red-500',
  },
  {
    name: 'skill',
    color: 'text-orange-300',
    hover: 'hover:text-orange-500',
  },
  {
    name: 'project',
    color: 'text-green-300',
    hover: 'hover:text-green-500',
  },
  {
    name: 'contact',
    color: 'text-blue-300',
    hover: 'hover:text-blue-500',
  },
];

export default function Home() {
  const homeRef = useRef(null);

  useRefObserver(homeRef);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen bg-white"
      ref={homeRef}
    >
      <div className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-5xl font-extrabold tracking-widest transition-colors sm:text-8xl sm:font-bold lg:text-9xl">
        <span className="inline-block animate-spin-2">H</span>
        <span>y</span>
        <span>u</span>
        <span className="inline-block animate-bounce">b</span>
      </div>
      <nav className="max-w-screen max-h-screen overflow-hidden break-all text-center text-[120px] font-bold uppercase leading-none text-white sm:text-[200px] lg:text-[250px] ">
        {Children.toArray(
          Array.from({ length: 3 }).map(() =>
            NAVIGATORS.map(({ name, color, hover }) => (
              <Link
                className={cn(
                  'text-indigo-50 transition-colors lg:text-indigo-50',
                  color,
                  hover,
                )}
                href={`#${name}`}
              >
                {name}
              </Link>
            )),
          ),
        )}
      </nav>
    </section>
  );
}
