import ButtonTicket from '@/components/atoms/Button';
import Quote from '@/components/atoms/Quote';
import CompositIcon from '@/components/molecules/CompositIcon';
import TitleC from '@/components/molecules/TitleC';

import TicketSectionProps from './index.types';

const TicketSection: React.FC<TicketSectionProps> = () => {
  return (
    <section className="mx-auto my-10 flex max-w-6xl flex-col items-center justify-center gap-y-8 px-6 py-10 md:my-20">
      <Quote
        content={`The path from knowledge to experience is not a straight line — it's a journey of discovery.`}
        layout="center"
      />

      <div className="md: mt-20 flex flex-col items-center justify-center">
        <TitleC
          sottotitolo="Join the Journey"
          colored="Biglietti"
          color="var(--secondary-pink)"
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
              colorIcon="var(--secondary-pink)"
              title="DATE"
              subtitle="March 15–16, 2026"
            />
          </div>

          <div className="flex-1">
            <CompositIcon
              icon="map"
              colorIcon="var(--primary-yellow)"
              title="LOCATION"
              subtitle="Parco innovazione Reggio Emilia"
            />
          </div>

          <div className="flex-1">
            <CompositIcon
              icon="users"
              colorIcon="var(--tertiary-blue)"
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
  );
};

export default TicketSection;
