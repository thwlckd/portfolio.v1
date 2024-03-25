import Link from 'next/link';
import { Children } from 'react';
import Chip from '../common/Chip';

const SECTIONS = ['home', 'about', 'skill', 'project', 'contact'];

export default function Navigator() {
  return (
    <ul className="fixed left-[10px] top-0 z-10 flex h-screen w-10 flex-col items-center justify-center gap-10 sm:left-10">
      {Children.toArray(
        SECTIONS.map((section) => (
          <li className="relative">
            <Link
              id={`${section}-bullet`}
              className={
                'block h-4 w-2 rounded-full bg-indigo-500 transition-all duration-300 hover:w-4'
              }
              href={`#${section}`}
            ></Link>
            <Chip
              id={`${section}-tooltip`}
              className="invisible absolute left-[30px] top-[-10px] hidden p-2 uppercase sm:visible"
            >
              {section}
            </Chip>
          </li>
        )),
      )}
    </ul>
  );
}
