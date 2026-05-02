import React from 'react';

import TitleC from '../../../components/molecules/TitleC';
import SpeakerCard from '../../../components/organisms/SpeakerCard';

import SpeakerSectionProps from './index.types';

const mockSpeakers = [
  {
    id: 1,
    name: 'Luca Bellei',
    tagline: 'La passione può diventare un lavoro?',
    description:
      "Luca Bellei racconterà il suo percorso nel mondo della comunicazione digitale: dalla nascita di iPork alla costruzione di un progetto capace di raggiungere milioni di utenti.",
    color: 'var(--primary-yellow)',
    image: '/images/luca-bellei.png',
    imageClassName: 'scale-[1.8] object-top translate-y-10',
  },
  {
    id: 2,
    name: 'Matteo Massaroli',
    tagline: 'E se bastasse solo iniziare?',
    description:
      "Matteo Massaroli porterà un intervento tra innovazione, intelligenza artificiale e costruzione concreta, per raccontare come da intuizioni, errori e scelte quotidiane possano nascere nuove opportunità.",
    color: 'var(--secondary-pink)',
    image: '/images/matteo.jpg',
    imageClassName: 'scale-[1.1]',
  },
  {
    id: 3,
    name: 'Arianna Primavera',
    tagline: "Quanto può crescere un'idea vissuta davvero?",
    description:
      "Arianna Primavera porterà la sua esperienza tra università e imprenditoria, raccontando come una passione per l'organizzazione, la motivazione e la crescita personale si sia trasformata in un brand riconoscibile e in una community capace di coinvolgere migliaia di persone.",
    color: 'var(--tertiary-blue)',
    image: '/images/arianna.jpg',
    imageClassName: 'scale-[1.5] object-top -translate-y-8',
  },
];

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-8 py-4 md:py-6">
      <TitleC
        sottotitolo="I PROTAGONISTI"
        colored="Speaker"
        color="var(--secondary-pink)"
        layout="center"
      >
        Gli Speaker dell&apos;evento
      </TitleC>

      <div className="mt-12 w-full">
        {/* Top row: first 2 speakers side by side */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {mockSpeakers.slice(0, 2).map((speaker) => (
            <div key={speaker.id} className="flex-1">
              <SpeakerCard
                name={speaker.name}
                tagline={speaker.tagline}
                description={speaker.description}
                color={speaker.color}
                image={speaker.image}
                imageClassName={speaker.imageClassName}
              />
            </div>
          ))}
        </div>
        {/* Bottom row: remaining speakers centered */}
        {mockSpeakers.length > 2 && (
          <div className="mt-6 flex justify-center">
            <div className="w-full lg:w-1/2 lg:pr-3">
              {mockSpeakers.slice(2).map((speaker) => (
                <SpeakerCard
                  key={speaker.id}
                  name={speaker.name}
                  tagline={speaker.tagline}
                  description={speaker.description}
                  color={speaker.color}
                  image={speaker.image}
                  imageClassName={speaker.imageClassName}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeakerSection;
