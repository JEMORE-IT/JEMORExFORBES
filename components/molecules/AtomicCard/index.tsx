import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AtomicCardProps {
  title?: string; // Titolo ora facoltativo
  subtitle?: string;
  description: string;
  immagine?: string;
  icon?: LucideIcon;
  colorIcon?: string; // Standard HEX
  className?: string;
}

export function AtomicCard({
  title,
  subtitle,
  description,
  immagine,
  icon: Icon,
  colorIcon,
  className,
}: AtomicCardProps) {
  const brandColor = colorIcon || '#CCF80C';

  return (
    <Card
      className={cn(
        // Trasparenza con backdrop-blur per l'effetto vetro scuro
        'bg-[#primary]/80 overflow-hidden border-zinc-800/40 text-white shadow-2xl backdrop-blur-md',
        className
      )}
    >
      {/* 1. Immagine Facoltativa */}
      {immagine && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/30 sm:aspect-square">
          <img
            src={immagine}
            alt={title || 'card image'}
            className="h-full w-full"
          />
        </div>
      )}

      <CardHeader className="space-y-3 p-6">
        {/* 2. Icona + Rettangolino Stondato (Pill) */}
        {Icon && (
          <div className="flex flex-col gap-3">
            <Icon size={24} strokeWidth={1.5} color={brandColor} />
          </div>
        )}

        <div className="space-y-1">
          {/* Subtitle */}
          {subtitle && (
            <span
              className="block text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: brandColor }}
            >
              {subtitle}
            </span>
          )}

          {/* Titolo Facoltativo */}
          {title && (
            <CardTitle className="text-2xl font-bold tracking-tight">
              {title}
            </CardTitle>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}
