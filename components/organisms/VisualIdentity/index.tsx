import { AtomicCard } from '../../../components/molecules/AtomicCard';
import { CardGrid } from '../../../components/molecules/CardGrid';
import TitleC from '../../../components/molecules/TitleC';

import VisualSectionProps from './index.types';

const VisualSection: React.FC<VisualSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start justify-center px-8 py-2">
      <TitleC
        sottotitolo="IL FORMAT"
        colored="Nazionale"
        color="var(--secondary-pink)"
        layout="left"
      >
        Un Framework Nazionale
      </TitleC>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <AtomicCard
            key="card-1"
            title="Next Leaders x JEMORE"
            subtitle="IL FORMAT"
            description="E' un evento editoriale e culturale nato dalla sinergia tra Next Leader e le associazioni studentesche. Ospitato all'interno delle principali università italiane, rappresenta un ponte strategico tra il mondo accademico e quello del lavoro. L'evento segue un framework nazionale condiviso che ne garantisce:"
            immagine="/images/typography.png"
            colorIcon="var(--primary-yellow)"
          />
        </div>

        <div>
          <CardGrid columns={2} fillRow={true}>
            {[
              <AtomicCard
                key="card-2"
                title="Qualità Editoriale"
                subtitle="VALORE"
                description="Contenuti di valore pensati per la community di Next Leader e Forbes Italia."
                colorIcon="var(--secondary-pink)"
              />,

              <AtomicCard
                key="card-3"
                title="Coerenza del Brand"
                subtitle="IMMAGINE"
                description="Unʼimmagine professionale e riconoscibile in tutta Italia."
                colorIcon="var(--tertiary-blue)"
              />,

              <AtomicCard
                key="card-4"
                title="Standard Elevati"
                subtitle="ESPERIENZA"
                description="Un'esperienza curata in ogni dettaglio, dalla selezione dei relatori alla gestione dell'incontro."
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
