'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
}

const EASE_BEZIER_P1 = 0.25;
const EASE_BEZIER_P2 = 0.1;
const EASE_BEZIER_P3 = 0.25;
const EASE_BEZIER_P4 = 1;
const ANIMATION_DURATION = 0.8;
const INITIAL_Y_OFFSET = 50;

export default function ScrollFadeIn({
  children,
  delay = 0,
}: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: [EASE_BEZIER_P1, EASE_BEZIER_P2, EASE_BEZIER_P3, EASE_BEZIER_P4], // Cubic bezier for soft, elegant motion
        delay,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
