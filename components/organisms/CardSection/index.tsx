import { AtomicCard } from '../../../components/molecules/AtomicCard';
import { CardGrid } from '../../../components/molecules/CardGrid';
import TitleC from '../../../components/molecules/TitleC';

import CardSectionProps from './index.types';

const CardSection: React.FC<CardSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-4 md:py-6">
      <TitleC
        sottotitolo="IL CONCEPT"
        colored="Futuro"
        color="var(--secondary-pink)"
        layout="center"
      >
        Costruire il Futuro
      </TitleC>

      <CardGrid columns={2}>
        {[
          <AtomicCard
            key="c1"
            title="L'Evento"
            description="JEMORE compie 10 anni. Per celebrare questo importante anniversario, ti invitiamo a un evento esclusivo in collaborazione con Next Leaders powered by Forbes Italia, dedicato ai protagonisti del domani."
            colorIcon="var(--primary-yellow)"
          />,
          <AtomicCard
            key="c2"
            title="Il Dibattito"
            description="Lʼiniziativa fa parte del format nazionale Forbes che coinvolge le eccellenze accademiche italiane, portando nelle università il dibattito sul futuro della leadership e del business."
            colorIcon="var(--secondary-pink)"
          />,
          <AtomicCard
            key="c3"
            title="Il Tema: JournEy"
            description="Il viaggio verso il mondo del lavoro non è mai una linea retta. È un percorso fatto di entusiasmo e sfide, di scelte coraggiose e di crescita continua."
            colorIcon="var(--secondary-pink)"
          />,
          <AtomicCard
            key="c4"
            title="La Narrazione"
            description="Oggi molti giovani percepiscono l'ingresso nelle aziende come una fase complessa. JournEy nasce con l'obiettivo di trasformare la paura in prospettiva e l'incertezza in una visione chiara del domani."
            colorIcon="var(--primary-yellow)"
          />,
        ]}
      </CardGrid>
    </section>
  );
};

export default CardSection;
