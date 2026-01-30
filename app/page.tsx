import { Metadata } from 'next';

import BackgroundCanvas from '@/components/atoms/BackgroundCanvas';

export const metadata: Metadata = {
  title: 'JEMORE ti vuole bene',
  description: 'anche se non ti paga',
};

export default function Home() {
  return (
    <>
      <BackgroundCanvas />

      <h1 className="relative mt-20 text-center text-4xl font-bold text-white">
        Benvenuto in JEMORE
      </h1>
    </>
  );
}
