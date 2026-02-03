import { ReactNode } from 'react';

export default interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string; // Allow custom classes
  overflow?: 'hidden' | 'visible';
}
