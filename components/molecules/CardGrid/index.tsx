'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import CardGridProps from './index.types';

export function CardGrid({
  children,
  columns,
  className,
  fillRow,
}: CardGridProps) {
  const columnWidths = {
    1: 'w-full',
    2: 'w-full sm:w-1/2',
    3: 'w-full sm:w-1/2 lg:w-1/3',
    4: 'w-full sm:w-1/2 lg:w-1/4',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-6 w-full md:mt-12">
      {/* px-4 su mobile (16px) 
          md:px-10 su desktop (40px)
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          'flex flex-wrap items-stretch justify-start px-4 md:px-10',
          '-mx-2 md:-mx-4', // Margine negativo per bilanciare il padding delle card
          className
        )}
      >
        {Array.isArray(children) &&
          children.map((child, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={cn(
                'flex flex-col p-2 md:p-4', // Gap ridotto a 8px (p-2) su mobile
                columnWidths[columns as keyof typeof columnWidths] ||
                  'lg:w-1/3',
                fillRow && 'grow' // Se fillRow è true, la card si espande per riempire lo spazio
              )}
            >
              {child}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
