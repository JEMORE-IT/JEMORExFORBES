import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import Subtitle from '@/components/atoms/Subtitle';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import Quote from '@/components/atoms/Quote';
import TitleC from '@/components/molecules/TitleC';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <TitleC sottotitolo="ti diamo il" colored="JEMORE" color="var(--secondary-pink)" layout="center">
        Benvenuto in JEMORE
      </TitleC>
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
        <Quote
          content="The path from knowledge to experience is not a straight line — it's a journey of discovery"
          color="var(--secondary-pink)"
          layout="right"
        />
      </div>
    </>
  );
}
