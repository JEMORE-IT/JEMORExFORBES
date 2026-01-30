import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';
import { AtomicCard } from '@/components/molecules/AtomicCard';
import { CardGrid } from '@/components/molecules/CardGrid';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <h1 className="relative mt-20 grid place-items-center text-center text-4xl font-bold text-white">
        Benvenuto in JEMORE
      </h1>

     <CardGrid columns={3} >
        <AtomicCard
          title='Titolo 1'
          description='testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo '
          iconName='graduation-cap'
          colorIcon='#FF00FF'
          />
           <AtomicCard
          title='Titolo 2'
          description='testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo '
          iconName='clock'
          colorIcon='#FF00FF'
          />
           <AtomicCard
          title='Titolo 3'
          description='testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo testo '
          iconName='trophy'
          colorIcon='#FF00FF'
          />
      </CardGrid> 
    </>
  );
}
