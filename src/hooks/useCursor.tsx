import { useEffect } from 'react';

export default function useCursor() {
  return useEffect(() => {
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
      document
        .querySelectorAll('a,button,.swiper-button-prev,.swiper-button-next')
        .forEach((el) => {
          el.addEventListener('mouseover', enlargeCursor);
          el.addEventListener('mouseout', shrinkCursor);
        });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', enlargeCursor);
    document.addEventListener('mouseup', shrinkCursor);

    addMouseEventOnATag();
  }, []);
}
