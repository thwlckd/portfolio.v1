'use client';

import { motion, useScroll } from 'framer-motion';

export default function Progressbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 origin-left h-2 w-screen bg-gradient-to-r from-indigo-100 to-indigo-900 rounded-r-full"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
