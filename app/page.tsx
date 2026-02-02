import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import ButtonTicket from '@/components/atoms/Button';
import Quote from '@/components/atoms/Quote';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import CompositIcon from '@/components/molecules/CompositIcon';
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

      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-10">
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

      <section className="mx-auto mb-16 flex max-w-6xl flex-col items-center justify-center gap-y-8 px-6 py-10">
        <Quote
          content={`The path from knowledge to experience is not a straight line — it's a journey of discovery.`}
          layout="center"
        />

        <div className="md: flex flex-col items-center justify-center">
          <TitleC
            sottotitolo="Join the Journey"
            colored="Biglietti"
            color="#F133A5"
            layout="center"
          >
            Prendi i Tuoi Biglietti
          </TitleC>

          <p className="px-6 py-4 text-center text-xs leading-relaxed text-tertiary-gray md:text-sm">
            Secure your place at this landmark collaboration between Forbes and
            Italy&apos;s leading universities.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl border-y border-white/25">
          <div className="mx-auto flex w-full max-w-5xl flex-col md:flex-row">
            <div className="flex-1">
              <CompositIcon
                icon="calendar"
                colorIcon="#F133A5"
                title="DATE"
                subtitle="March 15–16, 2026"
              />
            </div>

            <div className="flex-1">
              <CompositIcon
                icon="map"
                colorIcon="#CCF80C"
                title="LOCATION"
                subtitle="Parco innovazione Reggio Emilia"
              />
            </div>

            <div className="flex-1">
              <CompositIcon
                icon="users"
                colorIcon="#2D10CA"
                title="CAPIENZA"
                subtitle="120 Persone"
              />
            </div>
          </div>
        </div>

        <p className="px-6 py-2 text-center text-sm leading-relaxed text-tertiary-gray md:text-lg">
          Affrettati a prendere i tuoi biglietti prima che finiscano!
        </p>

        <div className="scale-125 transform">
          <ButtonTicket
            href="/"
            fill="var(--primary-yellow)"
            shadow="var(--secondary-pink)"
            textColor="var(--tertiary-blue)"
          />
        </div>
      </section>
    </>
  );
}
