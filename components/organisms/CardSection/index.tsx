import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import TitleC from '@/components/molecules/TitleC';

import CardSectionProps from './index.types';

const CardSection: React.FC<CardSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-10">
      <TitleC
        sottotitolo="THE CONCEPT"
        colored="Journey"
        color="var(--secondary-pink)"
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
            colorIcon="var(--primary-yellow)"
          />,
          <AtomicCard
            key="c2"
            title="Titolo Card"
            description="testo testo testo testo testo testo testo testo testo"
            iconName="graduation-cap"
            colorIcon="var(--secondary-pink)"
          />,
          <AtomicCard
            key="c3"
            title="Titolo Card"
            description="testo testo testo testo testo testo testo testo testo"
            iconName="graduation-cap"
            colorIcon="var(--secondary-pink)"
          />,
          <AtomicCard
            key="c4"
            title="Titolo Card"
            description="testo testo testo testo testo testo testo testo testo"
            iconName="graduation-cap"
            colorIcon="var(--primary-yellow)"
          />,
        ]}
      </CardGrid>
    </section>
  );
};

export default CardSection;
