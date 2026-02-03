'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import RevealProps from './index.types';

export const Reveal = ({
  children,
  width = 'fit-content',
  delay = 0.25, // Default delay
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
      y: direction === 'up' ? 75 : direction === 'down' ? -75 : 0,
      x: direction === 'left' ? 75 : direction === 'right' ? -75 : 0,
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
