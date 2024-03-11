'use client';

import { motion, useScroll } from 'framer-motion';

export default function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 origin-left h-2 w-screen z-50 bg-gradient-to-r from-indigo-200 to-indigo-700 rounded-r-full"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
