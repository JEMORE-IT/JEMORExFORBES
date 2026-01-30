import { LucideIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AtomicCardProps {
  title: string;
  subtitle?: string; // Per quel testo "PRIMARY" o "TYPOGRAPHY" in alto
  description: string;
  immagine?: string; // Props facoltativo
  icon?: LucideIcon; // Props facoltativo (passato come componente Lucide)
  colorIcon?: string; // Colore personalizzato per l'icona
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
  return (
    <Card
      className={cn(
        'bg-brand-dark overflow-hidden border-zinc-800 text-white',
        className
      )}
    >
      {/* 1. Logica Immagine Facoltativa */}
      {immagine && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800 sm:aspect-square">
          <img
            src={immagine}
            alt={title}
            className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
      )}

      <CardHeader className="space-y-2 p-6">
        {/* 2. Logica Icona Facoltativa con Standard HEX */}
        {Icon && (
          <div className="mb-2">
            <Icon
              size={24} // Imposta la dimensione (h-6 w-6)
              strokeWidth={1.5}
              // Applica il colore HEX direttamente.
              // Se colorIcon non è passato, usa il colore di fallback (es. verde neon)
              color={colorIcon || '#CCF80C'}
            />
          </div>
        )}

        {/* Subtitle stile Cyberpunk */}
        {subtitle && (
          <span className="text-brand-neon block text-[10px] font-bold uppercase tracking-[0.3em]">
            {subtitle}
          </span>
        )}

        <CardTitle className="text-2xl font-bold tracking-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}
