import { Car, MapPin, ParkingCircle, Plane, Train } from 'lucide-react';
import { Metadata } from 'next';

import Subtitle from '../../components/atoms/Subtitle';

export const metadata: Metadata = {
  title: 'Location | JournEy 2026',
  description: "Scopri la location dell'evento JournEy 2026 a Reggio Emilia.",
};

function SectionIcon({
  icon: Icon,
  label,
}: {
  icon: typeof Car;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={28}
        strokeWidth={1.6}
        style={{ color: 'var(--primary-yellow)' }}
      />
      <h3 className="text-lg font-semibold tracking-[0.15em] text-white md:text-xl">
        {label}
      </h3>
    </div>
  );
}

export default function Location() {
  return (
    <div className="flex flex-col items-center gap-12 px-4 pb-20 pt-28 md:gap-16 md:px-8">
      <Subtitle
        content="LOCATION"
        style={{
          fontSize: '2rem',
          letterSpacing: '0.3em',
          lineHeight: '1.4',
        }}
      />

      {/* Venue info */}
      <div className="flex flex-col items-center gap-3">
        <MapPin
          size={48}
          strokeWidth={1.6}
          style={{ color: 'var(--secondary-pink)' }}
        />
        <Subtitle
          content="CAPANNONE 15C"
          style={{
            color: 'var(--secondary-pink)',
            fontSize: '2rem',
            letterSpacing: '0.3em',
            lineHeight: '1.4',
          }}
        />
        <span className="text-base font-light tracking-[0.3em] text-white/80">
          REGGIANE PARCO INNOVAZIONE — REGGIO EMILIA
        </span>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Reggiane+Parco+Innovazione,Reggio+Emilia,Italy&zoom=16"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Capannone 15C - Reggiane Parco Innovazione, Reggio Emilia"
        />
      </div>

      {/* Come Arrivare */}
      <section className="flex w-full max-w-4xl flex-col gap-10">
        <Subtitle
          content="COME ARRIVARE"
          style={{
            fontSize: '1.5rem',
            letterSpacing: '0.3em',
            lineHeight: '1.4',
          }}
        />

        {/* AUTO */}
        <div className="flex flex-col gap-4">
          <SectionIcon icon={Car} label="AUTO" />
          <div className="space-y-3 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              <strong className="text-white">
                Prendi l&apos;uscita Reggio Emilia
              </strong>
              : Uscendo dall&apos;autostrada, segui le indicazioni per Reggio
              Emilia.
            </p>
            <p>
              <strong className="text-white">
                Segui le indicazioni per il centro città
              </strong>
              : Dopo l&apos;uscita, segui le indicazioni per il centro città e
              la stazione ferroviaria.
            </p>
            <p>
              <strong className="text-white">
                Dirigiti verso Piazzale Europa
              </strong>
              : Il Parco Innovazione si trova a nord-est del centro storico,
              vicino alla stazione ferroviaria storica di Reggio Emilia e al
              Centro Interscambio Mobilità di Piazzale Europa (CIM).
            </p>
          </div>
        </div>

        {/* TRENO REGIONALE */}
        <div className="flex flex-col gap-4">
          <SectionIcon icon={Train} label="TRENO REGIONALE" />
          <div className="space-y-3 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              Il Parco Innovazione si trova vicino alla stazione ferroviaria
              storica di Reggio Emilia.
            </p>
            <p>
              Puoi raggiungerlo a piedi in pochi minuti seguendo le indicazioni
              per Piazzale Europa 34.
            </p>
            <p>
              Puoi prendere un autobus di linea SETA, le linee più utili sono la{' '}
              <strong className="text-white">Linea 5</strong> e la{' '}
              <strong className="text-white">Linea 9</strong>, che collegano la
              stazione ferroviaria con l&apos;area delle Reggiane 12.
            </p>
          </div>
        </div>

        {/* TRENO ALTA VELOCITÀ */}
        <div className="flex flex-col gap-4">
          <SectionIcon icon={Train} label="TRENO ALTA VELOCITÀ" />
          <div className="space-y-3 text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              La stazione Reggio Emilia AV Mediopadana dista circa 4 km dal
              Parco Innovazione. Da lì per raggiungere la destinazione puoi
              prendere:
            </p>
            <p>
              <strong className="text-white">Autobus</strong>: Le linee urbane,
              come la <strong className="text-white">linea 9</strong> e le{' '}
              <strong className="text-white">linee Minibù M e H</strong>,
              collegano direttamente la stazione AV Mediopadana con il Parco
              Innovazione.
            </p>
            <p>
              <strong className="text-white">Taxi</strong>: Si può prendere un
              taxi direttamente dalla stazione AV Mediopadana. Il viaggio dura
              circa 10-15 minuti, a seconda del traffico.
            </p>
            <p>
              <strong className="text-white">Treno</strong>: dalla stazione
              &quot;Mediopadana AV&quot; è possibile prendere un treno alla
              &quot;stazione Mediopadana&quot;
              <strong className="text-white"> fuori dall&apos;AV </strong>per
              andare alla &quot;stazione centrale di Reggio Emilia&quot;.
            </p>
            <p className="text-xs italic text-white/50">
              *Gli autobus SETA svolgono il loro servizio fino circa alle ore
              21:00
            </p>
          </div>
        </div>

        {/* AEROPORTO */}
        <div className="flex flex-col gap-4">
          <SectionIcon icon={Plane} label="AEROPORTO" />
          <div className="space-y-3 text-sm leading-relaxed text-white/70 md:text-base">
            <p className="font-semibold tracking-wide text-white/90">
              Per la tratta Aeroporto Marconi - Bologna Centrale:
            </p>
            <p>
              <strong className="text-white">Marconi Express</strong>: Questo
              treno monorotaia collega direttamente l&apos;aeroporto alla
              stazione centrale in soli 7 minuti. È veloce, frequente (un treno
              ogni 7 minuti nelle ore di punta) e comodo.
            </p>
            <p>
              <strong className="text-white">Aerobus BLQ</strong>: Questo
              autobus navetta parte dall&apos;area arrivi ogni 11 minuti e
              impiega circa 20-25 minuti per arrivare alla stazione centrale. Il
              costo del biglietto è di 6 euro.
            </p>
            <p>
              <strong className="text-white">Taxi</strong>: Puoi prendere un
              taxi direttamente dall&apos;aeroporto. Il viaggio dura circa 15-20
              minuti, a seconda del traffico, ed è più costoso rispetto alle
              altre opzioni.
            </p>

            <p className="mt-2 font-semibold tracking-wide text-white/90">
              Bologna Centrale - Reggio Emilia:
            </p>
            <p>
              <strong className="text-white">Treno</strong>: Puoi prendere un
              treno dalla stazione di Bologna Centrale a Reggio Emilia. Il
              viaggio dura circa 38 minuti e costa tra 12 e 60 euro.
            </p>
            <p>
              <strong className="text-white">Navetta</strong>: Servizi come
              Aerbus offrono collegamenti diretti dall&apos;aeroporto a Reggio
              Emilia. È consigliabile prenotare in anticipo.
            </p>
            <p>
              <strong className="text-white">Autobus</strong>: Alcuni servizi di
              autobus, come GoOpti, offrono collegamenti diretti
              dall&apos;aeroporto a Reggio Emilia. Il viaggio dura circa
              un&apos;ora e i prezzi variano.
            </p>
            <p>
              <strong className="text-white">Taxi</strong>: Puoi prendere un
              taxi o noleggiare un&apos;auto. Il viaggio in auto dura circa 45
              minuti e costa tra 110 e 140 euro.
            </p>

            <p className="mt-2 rounded-lg border border-white/10 bg-white/5 p-4 text-sm italic text-white/80">
              <strong className="not-italic text-white">NB:</strong> È
              consigliato prendere il treno regionale per la tratta Bologna
              centrale - Reggio Emilia centrale.
            </p>
          </div>
        </div>
      </section>

      {/* Dove Parcheggiare */}
      <section className="flex w-full max-w-4xl flex-col gap-6">
        <Subtitle
          content="DOVE PARCHEGGIARE"
          style={{
            fontSize: '1.5rem',
            letterSpacing: '0.3em',
            lineHeight: '1.4',
          }}
        />

        <p className="text-sm leading-relaxed text-white/70 md:text-base">
          <strong className="text-white">Sei in macchina?</strong> Allora puoi
          parcheggiare qui, è il parcheggio davanti alla nostra location!
        </p>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Parcheggio principale */}
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <ParkingCircle
                size={24}
                strokeWidth={1.6}
                style={{ color: 'var(--tertiary-gray)' }}
              />
              <h4 className="font-semibold tracking-wide text-white">
                Parcheggio Piazzale Europa
              </h4>
              <span className="rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-bold tracking-wider text-green-400">
                FREE
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Piazzale Europa, 42124 Reggio Emilia RE
            </p>
          </div>

          {/* Parcheggio alternativo */}
          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <ParkingCircle
                size={24}
                strokeWidth={1.6}
                style={{ color: 'var(--tertiary-gray)' }}
              />
              <h4 className="font-semibold tracking-wide text-white">
                Parcheggio Pzle. Gen. L. Reverberi
              </h4>
              <span className="rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-bold tracking-wider text-green-400">
                FREE
              </span>
            </div>
            <p className="mt-2 text-xs italic text-white/50">
              Se il precedente parcheggio è pieno (15 min a piedi dal Capannone
              15/C)
            </p>
            <p className="mt-2 text-sm text-white/60">
              Piazzale Generale Luigi Reverberi, 42122 Reggio Emilia RE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
