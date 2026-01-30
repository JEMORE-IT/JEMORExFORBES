'use client';

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface AtomicCardProps {
  title?: string;
  subtitle?: string;
  description: string;
  immagine?: string;
  iconName?: keyof typeof dynamicIconImports; 
  colorIcon?: string;
  className?: string;
}

export function AtomicCard({
  title,
  subtitle,
  description,
  immagine,
  iconName,
  colorIcon,
  className,
}: AtomicCardProps) {
  const brandColor = colorIcon || "#CCF80C";
  const Icon = iconName ? dynamic(dynamicIconImports[iconName]) : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }} // Feedback tattile su mobile
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full w-full"
    >
      <Card className={cn(
        'h-full bg-[#0a0a0a]/60 backdrop-blur-md overflow-hidden border-zinc-800/40 text-white shadow-2xl flex flex-col',
        className
      )}>
        {/* Immagine Responsive: altezza variabile in base allo schermo */}
        {immagine && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/30 md:aspect-square lg:aspect-video">
            <img src={immagine} alt="" className="h-full w-full object-cover opacity-70" />
          </div>
        )}

        {/* Padding adattivo: p-4 su mobile, p-6 su desktop */}
        <CardHeader className="space-y-3 p-4 md:p-6 text-left flex-none">
          {Icon && (
            <div className="flex flex-col gap-2 md:gap-3">
              <Icon size={20} className="md:w-6 md:h-6" strokeWidth={1.5} color={brandColor} />
              <div 
                className="h-1 w-6 md:h-1.5 md:w-8 rounded-full" 
                style={{ backgroundColor: brandColor }}
              />
            </div>
          )}

          <div className="space-y-1">
            {subtitle && (
              <span 
                className="block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]" 
                style={{ color: brandColor }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                {title}
              </CardTitle>
            )}
          </div>
        </CardHeader>

        <CardContent className="px-4 pb-4 md:px-6 md:pb-6 flex-grow">
          <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}