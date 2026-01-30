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
          title="Titolo Card"
          description="Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo "
          // PASSAGGI CHIAVE:
          // 1. Passa una stringa, non l'oggetto icona
          iconName="graduation-cap"
          // 2. Passa un HEX, non una classe
          colorIcon="#CCF80C"
        />
        <AtomicCard
          title="Titolo Card"
          description="Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo Testo "
          // PASSAGGI CHIAVE:
          // 1. Passa una stringa, non l'oggetto icona
          iconName="trophy"
          // 2. Passa un HEX, non una classe
          colorIcon="#bb00ff"
        />
      </div>
    </>
  );
}
