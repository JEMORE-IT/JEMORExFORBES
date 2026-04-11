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
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
    ],
  },
  {
    title: 'MEDIA SPONSOR',
    color: 'var(--secondary-pink)',
    partners: [
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
    ],
  },
  {
    title: 'BRONZE SPONSOR',
    color: 'var(--tertiary-blue)',
    partners: [
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
    ],
  },
  {
    title: 'PATROCINIO',
    color: 'var(--tertiary-gray)',
    partners: [
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
      { name: 'Coming soon', logo: '/images/partners/placeholder.svg' },
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
                    className="flex h-36 w-44 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition-transform hover:scale-105 md:h-40 md:w-52"
                  >
                    <div className="relative h-16 w-28">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
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
