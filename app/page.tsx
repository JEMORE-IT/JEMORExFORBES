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

      <h1 className="relative mt-20 text-center text-4xl font-bold text-white">
        Benvenuto in JEMORE
      </h1>

      <div className="mt-10 flex flex-col items-center justify-center gap-8 px-4">
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
      </div>
    </>
  );
}
