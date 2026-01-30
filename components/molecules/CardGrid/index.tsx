'use client';

import { cn } from '@/lib/utils';

import CardGridProps from './index.types';

export function CardGrid({ children, columns = 3, className }: CardGridProps) {
  // Mappatura per gestire le colonne su desktop mantenendo la responsività su mobile
  const gridCols = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid w-full gap-6',
        // Default: 1 colonna su mobile, 2 su tablet
        'grid-cols-1 sm:grid-cols-2',
        // Dinamico: colonne definite dal prop su schermi grandi
        gridCols[columns as keyof typeof gridCols] || 'lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}
