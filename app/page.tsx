import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import Subtitle from '@/components/atoms/Subtitle';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';

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
      <Subtitle content="Benvenuto in JEMORE" />
      <div className="/* Limite massimo larghezza (Desktop) */ /* Centra il contenuto */ /* Margine dai bordi su Mobile */ /* Margine dai bordi su Desktop (molto respiro) */ /* Spazio sopra/sotto su Mobile */ /* Spazio sopra/sotto su Desktop */ mx-auto max-w-[1440px] px-[24px] py-[60px] md:px-[80px] md:py-[120px]">
        <CardGrid columns={4} gap="small" className="px-10">
          <AtomicCard
            title="Titolo 2"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="clock"
            colorIcon="var(--primary-yellow)"
          />
          <AtomicCard
            title="Titolo 3"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="trophy"
            colorIcon="var(--tertiary-blue)"
          />
          <AtomicCard
            title="Titolo 1"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="graduation-cap"
            colorIcon="var(--secondary-pink)"
          />
          <AtomicCard
            title="Titolo 2"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="clock"
            colorIcon="var(--primary-yellow)"
          />
          <AtomicCard
            title="Titolo 3"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="trophy"
            colorIcon="var(--tertiary-blue)"
          />
          <AtomicCard
            title="Titolo 1"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="graduation-cap"
            colorIcon="var(--secondary-pink)"
          />
          <AtomicCard
            title="Titolo 2"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="clock"
            colorIcon="var(--primary-yellow)"
          />
          <AtomicCard
            title="Titolo 3"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="trophy"
            colorIcon="var(--tertiary-blue)"
          />
          <AtomicCard
            title="Titolo 1"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="graduation-cap"
            colorIcon="var(--secondary-pink)"
          />
          <AtomicCard
            title="Titolo 2"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="clock"
            colorIcon="var(--primary-yellow)"
          />
          <AtomicCard
            title="Titolo 3"
            description="testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo "
            iconName="trophy"
            colorIcon="var(--tertiary-blue)"
          />
        </CardGrid>
      </div>
    </>
  );
}
