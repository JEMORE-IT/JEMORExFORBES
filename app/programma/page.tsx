import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import TimelineSection from '@/components/organisms/TimelineSection';

export const metadata: Metadata = {
  title: 'Programma | JEMORExFORBES',
  description: "Scopri il programma e la timeline dell'evento JEMORE x FORBES.",
};

const mockEvents = [
  {
    time: '09:00',
    title: 'Check-in & Welcome Breakfast',
    description:
      "Accoglienza dei partecipanti, registrazione e colazione di benvenuto per fare rete prima dell'inizio.",
    color: 'var(--primary-yellow)',
  },
  {
    time: '10:00',
    title: 'Opening Ceremony',
    description:
      "Saluti istituzionali e presentazione ufficiale dell'evento e degli ospiti d'eccezione.",
    color: 'var(--secondary-pink)',
  },
  {
    time: '11:30',
    title: "Panel Discussion: Il Futuro dell'Innovazione",
    description:
      'Esperti del settore discutono su tematiche chiave. Interventi interattivi con il pubblico.',
    color: 'var(--tertiary-blue)',
  },
  {
    time: '13:00',
    title: 'Networking Lunch',
    description:
      'Pausa pranzo a buffet con possibilità di confronto diretto con i relatori e gli altri partecipanti.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '14:30',
    title: 'Workshop Paralleli',
    description:
      'Sessioni pratiche su vari tavoli tematici. Scegli il percorso più adatto ai tuoi interessi.',
    color: 'var(--primary-yellow)',
  },
  {
    time: '16:00',
    title: 'Closing Remarks & Aperitivo',
    description:
      'Conclusioni della giornata, ringraziamenti finali e aperitivo di chiusura per festeggiare insieme.',
    color: 'var(--secondary-pink)',
  },
];

export default function Programma() {
  return (
    <>
      <BackgroundCanvas />

      <div className="pt-20">
        <TimelineSection events={mockEvents} />
      </div>
    </>
  );
}
