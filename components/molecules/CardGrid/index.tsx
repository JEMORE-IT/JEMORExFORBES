'use client';

import { cn } from '@/lib/utils';

import CardGridProps from './index.types';

export function CardGrid({
  children,
  columns,
  gap = 'small',
  className,
}: CardGridProps) {
  const gridCols = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  const gapSizes = {
    small: 'gap-4',
    medium: 'gap-8 md:gap-10', // Aumentato il gap su desktop
    large: 'gap-8 md:gap-16', // Gap generoso per design "Premium"
  };

  return (
    <div
      className={cn(
        'grid w-full',
        'grid-cols-1 sm:grid-cols-2',
        gridCols[columns as keyof typeof gridCols] || 'lg:grid-cols-3',
        gapSizes[gap],
        'mt-12 px-10 md:mt-12',
        className
      )}
    >
      {children}
    </div>
  );
}
