'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollExpandInProps {
  children: ReactNode;
  delay?: number;
}

const EASE_BEZIER_P1 = 0.25;
const EASE_BEZIER_P2 = 0.1;
const EASE_BEZIER_P3 = 0.25;
const EASE_BEZIER_P4 = 1;
const ANIMATION_DURATION = 0.8;
const INITIAL_SCALE = 0.85;

export default function ScrollExpandIn({
  children,
  delay = 0,
}: ScrollExpandInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: INITIAL_SCALE }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: [EASE_BEZIER_P1, EASE_BEZIER_P2, EASE_BEZIER_P3, EASE_BEZIER_P4],
        delay,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
