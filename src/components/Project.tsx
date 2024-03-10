import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Project() {
  const projectRef = useRef(null);

  useRefObserver(projectRef);

  return (
    <div id="project" className="min-h-screen bg-blue-400" ref={projectRef}>
      project 프로젝트카드 모달
    </div>
  );
}
