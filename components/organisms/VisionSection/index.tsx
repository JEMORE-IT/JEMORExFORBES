import { AtomicCard } from '../../../components/molecules/AtomicCard';
import { CardGrid } from '../../../components/molecules/CardGrid';
import TitleC from '../../../components/molecules/TitleC';

import VisionSectionProps from './index.types';

const VisionSection: React.FC<VisionSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start justify-center px-8 py-2">
      <TitleC
        sottotitolo="LA VISIONE"
        colored="Leadership"
        color="var(--secondary-pink)"
        layout="left"
      >
        Dare voce alla Leadership
      </TitleC>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <AtomicCard
            key="card-1"
            title="Next Leaders x JEMORE"
            subtitle="L'OBIETTIVO"
            description="L'obiettivo di Next Leaders x JEMORE è creare uno spazio di contaminazione reale. Non è una semplice conferenza, ma un ecosistema dove:"
            colorIcon="var(--primary-yellow)"
          />
        </div>

        <div>
          <CardGrid columns={2} fillRow={true}>
            {[
              <AtomicCard
                key="card-2"
                title="Studenti"
                subtitle="FORMAZIONE"
                description="Acquisiscono le competenze chiave per affrontare le carriere di domani."
                colorIcon="var(--secondary-pink)"
              />,

              <AtomicCard
                key="card-4"
                title="La Community"
                subtitle="ISPIRAZIONE"
                description="Genera contenuti editoriali capaci di ispirare la nuova generazione di professionisti italiani."
                colorIcon="var(--tertiary-blue)"
              />,
            ]}
          </CardGrid>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
