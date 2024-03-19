'use client';

import useCursor from '@/hooks/useCursor';

export default function Cursor() {
  useCursor();

  return (
    <div
      id="cursor"
      className="fixed left-[-20px] w-4 h-4 rounded-full translate-x-[-50%] translate-y-[-50%] z-50 bg-white mix-blend-difference pointer-events-none transition-[width,height]"
    ></div>
  );
}
