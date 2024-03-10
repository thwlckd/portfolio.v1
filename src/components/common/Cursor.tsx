'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor') as HTMLDivElement;

    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    };

    const enlargeCursor = () => {
      cursor.classList.add('large-cursor');
    };

    const shrinkCursor = () => {
      cursor.classList.remove('large-cursor');
    };

    const addMouseEventOnATag = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', enlargeCursor);
        el.addEventListener('mouseout', shrinkCursor);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', enlargeCursor);
    document.addEventListener('mouseup', shrinkCursor);

    addMouseEventOnATag();
  }, []);

  return (
    <div
      id="cursor"
      className="fixed left-[-20px] w-4 h-4 rounded-full translate-x-[-50%] translate-y-[-50%] z-50 bg-white mix-blend-difference pointer-events-none transition-[width,height]"
    ></div>
  );
}
