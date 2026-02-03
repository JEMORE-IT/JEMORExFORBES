import { ReactNode } from 'react';

export default interface CardGridProps {
  children: ReactNode;
  columns?: number; // Valore intero per definire le colonne
  className?: string;
  gap?: 'small' | 'medium' | 'large';
  fillRow?: boolean;
}
