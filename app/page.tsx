import { Trophy } from 'lucide-react';
import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import { AtomicCard } from '@/components/molecules/AtomicCard';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <h1 className="relative mt-20 grid place-items-center text-center text-4xl font-bold text-white">
        Benvenuto in JEMORE
      </h1>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 px-4">
        <AtomicCard
          title="JEMORE"
          subtitle="PRIMARY"
          description="Un progetto di design e sviluppo per il futuro."
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          title="JEMORE"
          subtitle="Secondary"
          description="Un progetto di design e sviluppo per il futuro."
          icon={Trophy}
          colorIcon="red"
        />
        <AtomicCard
          subtitle="TYPOGRAPHY"
          description="Un progetto di design e sviluppo per il futuro."
          colorIcon="magenta"
          immagine="images\test_card_immage.png"
        />
        <AtomicCard
          subtitle="TYPOGRAPHY"
          description="Un progetto di design e sviluppo per il futuro."
          colorIcon="yellow"
          immagine="images\test_card_immage.png"
        />
      </div>
    </>
  );
}
