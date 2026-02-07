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
    // Proviamo con .jpg per evitare problemi di cache o corruzione del .png
    img.src = '/images/bg.jpg';

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      draw();
    };

    const draw = () => {
      if (!ctx) return;

      // NUCLEAR DEBUG: Force Red background
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      console.log('NUCLEAR DEBUG: Canvas filled with RED');

      if (!img.complete) return;

      // Draw image over red if loaded
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    img.onload = () => {
      resizeCanvas();
    };

    img.onerror = (e) => {
      console.error('Error loading background image, using fallback color:', e);
      // Forziamo il redraw per applicare il colore di fallback
      draw();
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
        // NUCLEAR DEBUG: z-100 to be on top of everything
        className="pointer-events-none fixed left-0 top-0 z-[100] h-full w-full"
      />
      {/* Overlay scuro per migliorare la leggibilità delle card trasparenti */}
      <div className="pointer-events-none fixed left-0 top-0 z-[1] h-full w-full bg-black/60" />
    </>
  );
}
