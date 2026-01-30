'use client';

import { motion } from 'framer-motion';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import AtomicCardProps from './index.types';

export function AtomicCard({ title, subtitle, description, immagine, iconName, colorIcon, className }: AtomicCardProps) {
  const brandColor = colorIcon || '#CCF80C';
  const Icon = iconName ? dynamic(dynamicIconImports[iconName]) : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      // h-full è FONDAMENTALE qui per riempire lo spazio della Grid
      className="h-full w-full" 
    >
      <Card
        className={cn(
          // flex-col e h-full permettono alla card di espandersi verticalmente
          'flex h-full flex-col overflow-hidden border-zinc-800/40 bg-[#0a0a0a]/60 text-white shadow-2xl backdrop-blur-md',
          className
        )}
      >
        {immagine && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/30">
            <Image
              src={immagine}
              alt={title || "Card image"}
              fill
              className="object-cover opacity-70 transition-opacity hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}

        <CardHeader className="flex-none space-y-3 p-6 text-left">
          {Icon && (
            <div className="flex flex-col gap-3">
              <Icon size={24} strokeWidth={1.5} color={brandColor} />
              <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: brandColor }} />
            </div>
          )}
          <div className="space-y-1">
            {subtitle && <span className="block text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: brandColor }}>{subtitle}</span>}
            {title && <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>}
          </div>
        </CardHeader>

        {/* flex-grow permette al contenuto di occupare tutto lo spazio rimanente */}
        <CardContent className="flex-grow px-6 pb-8">
          <p className="text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
