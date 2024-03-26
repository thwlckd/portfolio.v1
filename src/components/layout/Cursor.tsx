'use client';

import useCursor from '@/hooks/useCursor';

export default function Cursor() {
  useCursor();

  return (
    <div
      id="cursor"
      className="pointer-events-none fixed left-[-20px] z-50 h-4 w-4 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white mix-blend-difference transition-[width,height]"
    ></div>
  );
}
