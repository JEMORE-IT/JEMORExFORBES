'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
}: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for soft, elegant motion
        delay,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
