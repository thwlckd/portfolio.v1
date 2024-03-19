import { Children } from 'react';
import { SiGithub, SiNotion } from 'react-icons/si';
import { cn } from '@/utils';

const SECTIONS = [
  {
    icon: <SiGithub className="text-2xl text-indigo-500" />,
    link: 'https://github.com/thwlckd',
  },
  {
    icon: <SiNotion className="text-2xl text-indigo-500" />,
    link: 'https://www.notion.so/hyub/Hyub-s-Archive-3b98532b074f4d428e65004c29ba9fdf',
  },
];

export default function Social() {
  return (
    <ul className="fixed top-0 right-10 flex flex-col justify-center items-center w-10 h-screen z-10">
      {Children.toArray(
        SECTIONS.map(({ icon, link }, i) => (
          <li
            className={cn(
              'px-2 pb-5 mb-5',
              SECTIONS.length - 1 !== i && ['border-b-[1px] border-indigo-500'],
            )}
          >
            <a href={link} target="_blank">
              {icon}
            </a>
          </li>
        )),
      )}
    </ul>
  );
}
