'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/images/bg.png'; 

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      
      // Riddisegniamo subito dopo il resize per evitare sfarfallii
      draw();
    };

    const draw = () => {
      if (!img.complete || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Logica "Cover": calcoliamo la scala per riempire sempre il canvas
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      // Centriamo l'immagine nel canvas
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      // RIMOSSO IL PARALLAX: usiamo 'y' fisso invece di 'finalY'
      // L'immagine rimarrà ancorata al centro del viewport
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    img.onload = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', resizeCanvas);

    // Poiché l'immagine è fissa, non serve un renderLoop a 60fps (requestAnimationFrame)
    // Basta disegnarla una volta all'onload e ad ogni resize.
    // Questo risparmia batteria e CPU.

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        // Il -z-10 e fixed la tengono dietro a tutto
        className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full"
      />
      {/* Overlay scuro per migliorare la leggibilità delle card trasparenti */}
      <div className="pointer-events-none fixed left-0 top-0 -z-[9] h-full w-full bg-black/60" />
    </>
  );
}