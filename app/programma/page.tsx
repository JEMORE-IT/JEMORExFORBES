import { Metadata } from 'next';

import TimelineSection from '../../components/organisms/TimelineSection';

export const metadata: Metadata = {
  title: 'Programma | JournEy 2026',
  description: "Scopri il programma e la timeline dell'evento JournEy 2026.",
};

const mockEvents = [
  {
    time: '08:30',
    title: 'Accoglienza/Coffee',
    description: 'Accoglienza, Check-in e coffee.',
    color: 'var(--secondary-pink)',
  },
  {
    time: '10:00',
    title: 'Cerimonia di apertura',
    description: "Saluti istituzionali e presentazione ufficiale dell'evento.",
    color: 'var(--secondary-pink)',
  },
  {
    time: '10:30',
    title: 'Speech e Tavola Rotonda',
    description: 'Presentazioni dei speech e un momento di confronto con i partecipanti.',
    color: 'var(--primary-yellow)',
  },
  {
    time: '13:30',
    title: 'Pranzo',
    description: 'Pausa pranzo e Networking.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '15:00',
    title: 'Primo turno Attività',
    description: 'Business Game, Masterclass e Company Fair.',
    color: 'var(--tertiary-blue)',
  },
  {
    time: '16:30',
    title: 'Coffee Break',
    description: 'Pausa caffè prima del secondo turno di attività.',
    color: 'var(--tertiary-gray)',
  },
  {
    time: '16:45',
    title: 'Secondo turno Attività',
    description: 'Business Game, Masterclass e Company Fair.',
    color: 'var(--tertiary-blue)',
  },
  {
    time: '18:15',
    title: 'Cerimonia di chiusura',
    description: 'Conclusioni della giornata e ringraziamenti finali.',
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
