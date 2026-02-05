import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';
import TitleC from '@/components/molecules/TitleC';

import VisualSectionProps from './index.types';

const VisualSection: React.FC<VisualSectionProps> = () => {
  return (
    <section className="mx-auto my-14 flex max-w-6xl flex-col items-start justify-center px-8 py-2">
      <TitleC
        sottotitolo="VISUAL IDENTITY"
        colored="Underground"
        color="var(--secondary-pink)"
        layout="left"
      >
        Urban Underground
      </TitleC>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <AtomicCard
            key="card-1"
            title="Titolo Card"
            subtitle="TYPOGRAPHY"
            description="Testo Testo Testo Testo Testo Testo Testo Testo"
            immagine="/images/typography.png"
            colorIcon="var(--primary-yellow)"
          />
        </div>

        <div>
          <CardGrid columns={2} fillRow={true}>
            {[
              <AtomicCard
                key="card-2"
                title="Titolo Card"
                subtitle="SECTION"
                description="Testo Testo Testo Testo Testo Testo Testo Testo"
                colorIcon="var(--secondary-pink)"
              />,

              <AtomicCard
                key="card-3"
                title="Titolo Card"
                subtitle="SECTION"
                description="Testo Testo Testo Testo Testo Testo Testo Testo"
                colorIcon="var(--tertiary-blue)"
              />,

              <AtomicCard
                key="card-4"
                title="Titolo Card"
                subtitle="SECTION"
                description="Testo Testo Testo Testo Testo Testo Testo Testo "
                colorIcon="var(--tertiary-blue)"
              />,
            ]}
          </CardGrid>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
