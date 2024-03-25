'use client';

import { motion, useScroll } from 'framer-motion';

export default function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-2 w-screen origin-left rounded-r-full bg-gradient-to-r from-indigo-200 to-indigo-700"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
