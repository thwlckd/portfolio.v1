import { useRef } from 'react';
import useRefObserver from '@/hooks/useRefObserver';

export default function Skill() {
  const skillRef = useRef(null);

  useRefObserver(skillRef);

  return (
    <div id="skill" className="min-h-screen bg-blue-300" ref={skillRef}>
      skill 기술스택 이미지 → 애니메이션
    </div>
  );
}
