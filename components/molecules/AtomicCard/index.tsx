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
  // Accetta solo il NOME dell'icona (stringa), non l'oggetto icona
  iconName?: keyof typeof dynamicIconImports; 
  colorIcon?: string; // HEX Standard
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

  // Carichiamo il componente icona solo se iconName esiste
  // Questo risolve il problema dei "plain objects" perché passiamo una stringa
  const Icon = iconName ? dynamic(dynamicIconImports[iconName]) : null;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={cn(
        'h-full bg-[#0a0a0a]/60 backdrop-blur-md overflow-hidden border-zinc-800/40 text-white shadow-2xl',
        className
      )}>
        {immagine && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/30">
            <img src={immagine} alt="" className="h-full w-full object-cover opacity-60" />
          </div>
        )}

        <CardHeader className="space-y-3 p-6 text-left">
          {Icon && (
            <div className="flex flex-col gap-3">
              <Icon size={24} strokeWidth={1.5} color={brandColor} />
              <div 
                className="h-1.5 w-8 rounded-full" 
                style={{ backgroundColor: brandColor }}
              />
            </div>
          )}

          <div className="space-y-1">
            {subtitle && (
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: brandColor }}>
                {subtitle}
              </span>
            )}
            {title && <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>}
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-6 text-sm text-zinc-400 italic">
          {description}
        </CardContent>
      </Card>
    </motion.div>
  );
}