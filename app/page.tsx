import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import Hero from '@/components/molecules/Hero';
import TitleC from '@/components/molecules/TitleC';

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

      <section  className="mx-auto px-8 py-2 my-14 flex max-w-6xl flex-col items-start justify-center">
        <TitleC
          sottotitolo="VISUAL IDENTITY"
          colored="Underground"
          color="#F133A5"
          layout="left"
        >
          Urban Underground
        </TitleC>

        <CardGrid columns={3}>
        {[
          /* 1️⃣ Card with image (as in your screenshot) */
          <AtomicCard
            key="card-1"
            title="Titolo Card"
            subtitle="TYPOGRAPHY"
            description="Testo Testo Testo Testo Testo Testo Testo Testo"
            immagine="/images/typography.png"
            colorIcon="#CCF80C"
          />,

          /* 2️⃣ Text-only card */
          <AtomicCard
            key="card-2"
            title="Titolo Card"
            subtitle="SECTION"
            description="Testo Testo Testo Testo Testo Testo Testo Testo"
            colorIcon="#F133A5"
          />,

          /* 3️⃣ Text-only card */
          <AtomicCard
            key="card-3"
            title="Titolo Card"
            subtitle="SECTION"
            description="Testo Testo Testo Testo Testo Testo Testo Testo"
            colorIcon="#2D10CA"
          />,
        ]}
      </CardGrid>
      </section>
    </>
  );
}
