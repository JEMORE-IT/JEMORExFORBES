export default interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  color?: string; // Colore per il pallino e magari parte del testo (es. var(--primary-yellow))
  align?: 'left' | 'right';
}
