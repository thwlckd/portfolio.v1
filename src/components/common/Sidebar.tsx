import Link from 'next/link';
import { Children } from 'react';

const SECTIONS = ['home', 'about', 'skill', 'project', 'contact'];

export default function Sidebar() {
  return (
    <ul className="fixed top-0 left-10 flex flex-col justify-center items-center gap-10 w-10 h-screen z-10">
      {Children.toArray(
        SECTIONS.map((section) => (
          <li>
            <Link
              id={`${section}-bullet`}
              className={
                'block w-3 h-3 rounded-full bg-black transition-all duration-300'
              }
              href={`#${section}`}
            ></Link>
          </li>
        )),
      )}
    </ul>
  );
}
