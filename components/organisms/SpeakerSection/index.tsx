import React from 'react';

import { CardGrid } from '../../../components/molecules/CardGrid';
import TitleC from '../../../components/molecules/TitleC';
import SpeakerCard from '../../../components/organisms/SpeakerCard';

import SpeakerSectionProps from './index.types';

const mockSpeakers = [
  {
    id: 1,
    name: 'Nome Cognome 1',
    description:
      "Breve descrizione dello speaker, del suo background e dell'argomento che tratterà durante l'evento Next Leaders x JEMORE.",
    color: 'var(--primary-yellow)',
  },
  {
    id: 2,
    name: 'Nome Cognome 2',
    description:
      "Breve descrizione dello speaker, del suo background e dell'argomento che tratterà durante l'evento Next Leaders x JEMORE.",
    color: 'var(--secondary-pink)',
  },
  {
    id: 3,
    name: 'Nome Cognome 3',
    description:
      "Breve descrizione dello speaker, del suo background e dell'argomento che tratterà durante l'evento Next Leaders x JEMORE.",
    color: 'var(--tertiary-blue)',
  },
  {
    id: 4,
    name: 'Nome Cognome 4',
    description:
      "Breve descrizione dello speaker, del suo background e dell'argomento che tratterà durante l'evento Next Leaders x JEMORE.",
    color: 'var(--secondary-pink)',
  },
];

const SpeakerSection: React.FC<SpeakerSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-4 md:py-6">
      <TitleC
        sottotitolo="I PROTAGONISTI"
        colored="Speaker"
        color="var(--secondary-pink)"
        layout="center"
      >
        Gli Speaker dell&apos;evento
      </TitleC>

      <div className="mt-12 w-full">
        <CardGrid columns={2}>
          {mockSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              description={speaker.description}
              color={speaker.color}
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
};

export default SpeakerSection;
