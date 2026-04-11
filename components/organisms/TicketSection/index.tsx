import ButtonTicket from '../../../components/atoms/Button';
import CompositIcon from '../../../components/molecules/CompositIcon';
import TitleC from '../../../components/molecules/TitleC';

import TicketSectionProps from './index.types';

const TicketSection: React.FC<TicketSectionProps> = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-y-6 px-6 py-2">
      <div className="mt-4 flex flex-col items-center justify-center md:mt-4">
        <TitleC
          sottotitolo="Il tuo viaggio inizia qui"
          colored="Ticket"
          color="var(--secondary-pink)"
          layout="center"
        >
          Acquista il Ticket
        </TitleC>
      </div>

      <div className="mx-auto w-full max-w-4xl border-y border-white/25">
        <div className="mx-auto flex w-full flex-col items-start justify-around py-2 md:flex-row md:items-center">
          <div className="flex flex-1 justify-center">
            <CompositIcon
              icon="calendar"
              colorIcon="var(--secondary-pink)"
              title="DATE"
              subtitle="16 Maggio 2026"
            />
          </div>

          <div className="flex flex-1 justify-center">
            <CompositIcon
              icon="map"
              colorIcon="var(--primary-yellow)"
              title="LOCATION"
              subtitle="Capannone 15C Reggiane Parco Innovazione, Reggio Emilia"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 mt-8 scale-125 transform md:mb-10 md:mt-12">
        <ButtonTicket
          href="https://www.gomry.com/event/O4egFY4BQVpPNL6W1QGh"
          fill="var(--primary-yellow)"
          shadow="var(--secondary-pink)"
          textColor="var(--tertiary-blue)"
        />
      </div>
    </section>
  );
};

export default TicketSection;
