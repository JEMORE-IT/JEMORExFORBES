'use client';

import { motion } from 'framer-motion';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import AtomicCardProps from './index.types';

export function AtomicCard({
  title,
  subtitle,
  description,
  immagine,
  iconName,
  colorIcon,
  className,
}: AtomicCardProps) {
  const brandColor = colorIcon || 'var(--primary-yellow)';
  const Icon = iconName ? dynamic(dynamicIconImports[iconName]) : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }} // Feedback tattile su mobile
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full w-full"
    >
      <Card
        className={cn(
          'flex h-full flex-col overflow-hidden border-none bg-black text-white shadow-2xl backdrop-blur-md',
          className
        )}
      >
        {/* Immagine Responsive: altezza variabile in base allo schermo */}
        {immagine && (
          <div className="relative h-2/3 w-full overflow-hidden">
            <Image
              src={immagine}
              alt={title || 'Card image'}
              fill // Fondamentale: riempie il div 'relative'
              className="object-cover opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority // Carica subito l'immagine per evitare sfarfallii
            />
          </div>
        )}

        {/* Padding adattivo: p-4 su mobile, p-6 su desktop */}
        <CardHeader className="flex-none space-y-3 p-4 text-left md:p-6">
          {Icon && (
            <div className="flex flex-col gap-2 md:gap-3">
              <Icon
                size={20}
                className="md:h-6 md:w-6"
                strokeWidth={1.5}
                color={brandColor}
              />
              <div
                className="h-1 w-6 rounded-full md:h-1.5 md:w-8"
                style={{ backgroundColor: brandColor }}
              />
            </div>
          )}

          <div className="space-y-1">
            {subtitle && (
              <span
                className="block text-[9px] font-bold uppercase tracking-[0.2em] md:text-[10px] md:tracking-[0.3em]"
                style={{ color: brandColor }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <CardTitle className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
                {title}
              </CardTitle>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-end px-4 pb-4 md:px-6 md:pb-6">
          <p className="text-xs leading-relaxed text-tertiary-gray md:text-sm">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
