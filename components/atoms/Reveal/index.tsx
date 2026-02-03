'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import RevealProps from './index.types';

const DELAY = 0.25;
const DIRECTION_UP = 75;
const DIRECTION_DOWN = 75;
const DIRECTION_LEFT = -75;
const DIRECTION_RIGHT = -75;

export const Reveal = ({
  children,
  width = 'fit-content',
  delay = DELAY, // Default delay
  direction = 'up',
  className = '',
  overflow = 'hidden',
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: {
      opacity: 0,
      y:
        direction === 'up'
          ? DIRECTION_UP
          : direction === 'down'
            ? DIRECTION_DOWN
            : 0,
      x:
        direction === 'left'
          ? DIRECTION_LEFT
          : direction === 'right'
            ? DIRECTION_RIGHT
            : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow }}
      className={className}
    >
      <motion.div variants={variants} initial="hidden" animate={mainControls}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
