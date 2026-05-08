import { Metadata } from 'next';
import Image from 'next/image';

import Subtitle from '../../components/atoms/Subtitle';

export const metadata: Metadata = {
  title: 'Partner | JournEy 2026',
  description: 'I partner e sponsor di JournEy 2026.',
};

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

interface SponsorTier {
  title: string;
  color: string;
  partners: Partner[];
}

const sponsorTiers: SponsorTier[] = [
  {
    title: 'TECHNICAL SPONSOR',
    color: 'var(--primary-yellow)',
    partners: [
      { name: 'Learnn', logo: '/images/partners/logo_learnn.png' },
      { name: 'coop', logo: '/images/partners/logo_coop.jpg' },
      { name: 'Antimessico', logo: '/images/partners/logo_antimessico.jpg' },
    ],
  },
  {
    title: 'MEDIA SPONSOR',
    color: 'var(--secondary-pink)',
    partners: [
      { name: 'Consorzio Nord', logo: '/images/partners/logo_edilnord.png' },
    ],
  },
  {
    title: 'SILVER SPONSOR',
    color: '#e2e8f0',
    partners: [
      { name: 'SGB Innovation', logo: '/images/partners/logo_sgb_innovation.jpg' },
      { name: 'Blinks', logo: '/images/partners/logo_blinks.jpg' },
    ],
  },
  {
    title: 'BRONZE SPONSOR',
    color: 'var(--tertiary-blue)',
    partners: [
      { name: 'Affittochiaro', logo: '/images/partners/logo_affittochiaro.jpg' },
    ],
  },
  {
    title: 'PATRONCINI',
    color: 'var(--tertiary-gray)',
    partners: [
      { name: 'Università di Modena e Reggio Emilia', logo: '/images/partners/logo_unimore.png' },
      { name: 'Confindustria Giovani', logo: '/images/partners/logo_confidustria.png' },
      { name: 'Confindustria Reggio Emilia', logo: '/images/partners/logo_confidreg.jpg' },
      { name: 'Provincia di Reggio Emilia', logo: '/images/partners/logo_reggio.jpg' },
      { name: 'Comune di Reggio Emilia', logo: '/images/partners/logo_comune_reggio.jpg' },
    ],
  },
];

export default function Partner() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 pt-28 pb-20 md:gap-20 md:px-8">
      <Subtitle
        content="PARTNER"
        style={{
          fontSize: '2rem',
          letterSpacing: '0.3em',
          lineHeight: '1.4',
        }}
      />

      <div className="flex w-full max-w-5xl flex-col gap-16">
        {sponsorTiers.map((tier) => (
          <section key={tier.title} className="flex flex-col items-center gap-8">
            <Subtitle
              content={tier.title}
              style={{ color: tier.color, letterSpacing: '0.3em' }}
            />

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {tier.partners.map((partner, i) => {
                const card = (
                  <div
                    key={i}
                    className="flex h-44 w-56 flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-transform hover:scale-105 md:h-56 md:w-72"
                  >
                    <div className="flex h-20 w-36 items-center justify-center md:h-24 md:w-44">
                      <div className="relative h-20 w-36 md:h-24 md:w-44">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain object-center"
                        />
                      </div>
                    </div>
                    <span className="text-center text-xs font-medium tracking-wider text-white/70">
                      {partner.name.toUpperCase()}
                    </span>
                  </div>
                );

                if (partner.url) {
                  return (
                    <a
                      key={i}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card}
                    </a>
                  );
                }

                return card;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
