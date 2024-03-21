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
      className="relative min-h-screen bg-white z-10"
      ref={homeRef}
    >
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-5xl sm:text-8xl lg:text-9xl font-extrabold sm:font-bold tracking-widest transition-colors">
        <span className="inline-block animate-spin-2">H</span>
        <span>y</span>
        <span>u</span>
        <span className="inline-block animate-bounce">b</span>
      </div>
      <nav className="max-h-screen max-w-screen overflow-hidden text-[120px] sm:text-[200px] lg:text-[250px] break-all leading-none text-white font-bold uppercase text-center ">
        {Children.toArray(
          Array.from({ length: 3 }).map(() =>
            NAVIGATORS.map(({ name, color, hover }) => (
              <Link
                className={cn(
                  'transition-colors text-indigo-50 lg:text-indigo-50',
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
