import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import Hero from '@/components/molecules/Hero';
import TitleC from '@/components/molecules/TitleC';
import VisualSection from '@/components/organisms/VisualIdentity';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <Hero />

      <section className="mx-auto my-14 flex max-w-6xl flex-col items-center justify-center">
        <TitleC
          sottotitolo="THE CONCEPT"
          colored="Journey"
          color="#F133A5"
          layout="center"
        >
          University as a Journey
        </TitleC>

        <CardGrid columns={2}>
          {[
            <AtomicCard
              key="c1"
              title="Titolo Card"
              description="testo testo testo testo testo testo testo testo testo"
              iconName="graduation-cap"
              colorIcon="#CCF80C"
            />,
            <AtomicCard
              key="c2"
              title="Titolo Card"
              description="testo testo testo testo testo testo testo testo testo"
              iconName="graduation-cap"
              colorIcon="#F133A5"
            />,
            <AtomicCard
              key="c3"
              title="Titolo Card"
              description="testo testo testo testo testo testo testo testo testo"
              iconName="graduation-cap"
              colorIcon="#F133A5"
            />,
            <AtomicCard
              key="c4"
              title="Titolo Card"
              description="testo testo testo testo testo testo testo testo testo"
              iconName="graduation-cap"
              colorIcon="#CCF80C"
            />,
          ]}
        </CardGrid>
      </section>

      <VisualSection />
    </>
  );
}
