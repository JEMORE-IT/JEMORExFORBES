import { Metadata } from 'next';

import TimelineSection from '../../components/organisms/TimelineSection';

export const metadata: Metadata = {
  title: 'Programma | JEMORExFORBES',
  description: "Scopri il programma e la timeline dell'evento JEMORE x FORBES.",
};

const mockEvents = [
  {
    time: '09:00',
    title: 'Accoglienza e accreditamento',
    description:
      'Accoglienza dei partecipanti, registrazione e accreditamento.',
    color: 'var(--secondary-pink)',
  },
  {
    time: '10:00',
    title: 'Cerimonia di apertura',
    description:
      "Saluti istituzionali e presentazione ufficiale dell'evento.",
    color: 'var(--secondary-pink)',
  },
  {
    time: '10:30',
    title: 'Prima parte Speech',
    description:
      'Interventi e presentazioni della prima sessione di speech.',
    color: 'var(--primary-yellow)',
  },
  {
    time: '11:00',
    title: 'Coffee Break',
    description:
      'Pausa caffè per ricaricare le energie e fare networking informale.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '11:15',
    title: 'Seconda parte Speech e Tavola Rotonda',
    description:
      'Proseguimento degli interventi con tavola rotonda e confronto tra relatori.',
    color: 'var(--primary-yellow)',
  },
  {
    time: '13:30',
    title: 'Pranzo',
    description:
      'Pausa pranzo con possibilità di networking tra i partecipanti.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '15:00',
    title: 'Primo turno Attività',
    description:
      'Business Game, Masterclass e Company Fair.',
    color: 'var(--tertiary-blue)',
  },
  {
    time: '16:30',
    title: 'Coffee Break',
    description:
      'Pausa caffè prima del secondo turno di attività.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '16:45',
    title: 'Secondo turno Attività',
    description:
      'Business Game, Masterclass e Company Fair.',
    color: 'var(--tertiary-blue)',
  },
  {
    time: '18:15',
    title: 'Cerimonia di chiusura',
    description:
      'Conclusioni della giornata e ringraziamenti finali.',
    color: 'var(--secondary-pink)',
  },
];

export default function Programma() {
  return (
    <>
      <div className="pt-20">
        <TimelineSection events={mockEvents} />
      </div>
    </>
  );
}
