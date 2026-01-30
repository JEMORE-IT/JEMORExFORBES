'use client';

import { cn } from '@/lib/utils';
import CardGridProps from './index.types';

export function CardGrid({
  children,
  columns = 3,
  className,
}: CardGridProps) {
  
  const columnWidths = {
    1: 'w-full',
    2: 'w-full sm:w-1/2',
    3: 'w-full sm:w-1/2 lg:w-1/3',
    4: 'w-full sm:w-1/2 lg:w-1/4',
  };

  return (
    <div className="w-full mt-6 md:mt-12">
      {/* px-4 su mobile (16px) 
          md:px-10 su desktop (40px)
      */}
      <div className={cn(
        'flex flex-wrap items-stretch justify-start px-4 md:px-10',
        '-mx-2 md:-mx-4', // Margine negativo per bilanciare il padding delle card
        className
      )}>
        {Array.isArray(children) && children.map((child, index) => (
          <div 
            key={index} 
            className={cn(
              'p-2 md:p-4 flex flex-col', // Gap ridotto a 8px (p-2) su mobile
              columnWidths[columns as keyof typeof columnWidths] || 'lg:w-1/3'
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}