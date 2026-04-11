import { AtomicCard } from '../../../components/molecules/AtomicCard';
import { CardGrid } from '../../../components/molecules/CardGrid';
import TitleC from '../../../components/molecules/TitleC';

import VisualSectionProps from './index.types';

const VisualSection: React.FC<VisualSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-8 py-2">
      <TitleC
        sottotitolo="IL FORMAT"
        colored="Nazionale"
        color="var(--secondary-pink)"
        layout="center"
      >
        Un Framework Nazionale
      </TitleC>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <AtomicCard
            key="card-1"
            title="Next Leaders x JEMORE"
            subtitle="IL FORMAT"
            description="E' un evento editoriale e culturale nato dalla sinergia tra Next Leaders e le associazioni studentesche. Ospitato all'interno delle principali università italiane, rappresenta un ponte strategico tra il mondo accademico e quello del lavoro. L'evento segue un framework nazionale condiviso che ne garantisce:"
            immagine="/images/next_leaders.jpg"
            colorIcon="var(--primary-yellow)"
          />
        </div>

        <div>
          <CardGrid columns={2} fillRow={true}>
            {[
              <AtomicCard
                key="v-card-2"
                title="Studenti"
                subtitle="FORMAZIONE"
                description="Acquisiscono le competenze chiave per affrontare le carriere di domani."
                colorIcon="var(--secondary-pink)"
              />,

              <AtomicCard
                key="v-card-4"
                title="Community"
                subtitle="ISPIRAZIONE"
                description="Genera contenuti editoriali capaci di ispirare la nuova generazione di professionisti italiani."
                colorIcon="var(--primary-yellow)"
              />,
            ]}
          </CardGrid>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
