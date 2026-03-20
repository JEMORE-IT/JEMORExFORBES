'use client';

import { motion } from 'framer-motion';
import React from 'react';

import TimelineItemProps from './index.types';

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
  color = 'var(--primary-yellow)',
  align = 'left',
}) => {
  const isLeft = align === 'left';
  const animationOffset = 50;

  return (
    <div
      className={`relative mb-16 flex w-full flex-col items-center justify-between md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Centro: Linea e Pallino (visibile su MD o superiore) */}
      <div className="absolute left-8 flex h-full -translate-x-1/2 items-center justify-center md:left-1/2">
        <div className="h-full w-px bg-white/20"></div>
      </div>

      <motion.div
        className="absolute left-8 z-10 hidden h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-background md:left-1/2 md:flex"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.4, type: 'spring' }}
      >
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
      </motion.div>

      {/* Contenuto Reale */}
      <motion.div
        className={`w-full pl-20 pr-4 md:w-5/12 md:px-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
        initial={{
          opacity: 0,
          x: isLeft ? -animationOffset : animationOffset,
          y: 30,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span
          className="font-inter text-sm font-semibold tracking-wider"
          style={{ color }}
        >
          {time}
        </span>
        <h3 className="mt-2 font-inter text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="mt-2 font-opensans leading-relaxed text-white/70">
          {description}
        </p>
      </motion.div>

      {/* Spazio Voto per l'altro lato */}
      <div className="hidden w-5/12 md:block"></div>

      {/* Pallino per Mobile (assoluto a sinistra) */}
      <motion.div
        className="absolute left-8 top-0 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-background md:hidden"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.4, type: 'spring' }}
      >
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </motion.div>
    </div>
  );
};

export default TimelineItem;
