import Link from 'next/link';
import { Children } from 'react';
import Chip from '../common/Chip';

const SECTIONS = ['home', 'about', 'skill', 'project', 'contact'];

export default function Sidebar() {
  return (
    <ul className="fixed top-0 left-10 flex flex-col justify-center items-center gap-10 w-10 h-screen z-10">
      {Children.toArray(
        SECTIONS.map((section) => (
          <li className="relative">
            <Link
              id={`${section}-bullet`}
              className={
                'block w-2 h-4 rounded-full bg-indigo-500 hover:w-4 transition-all duration-300'
              }
              href={`#${section}`}
            ></Link>
            <Chip
              id={`${section}-tooltip`}
              className="hidden absolute left-[30px] top-[-10px] p-2 uppercase"
            >
              {section}
            </Chip>
          </li>
        )),
      )}
    </ul>
  );
}
