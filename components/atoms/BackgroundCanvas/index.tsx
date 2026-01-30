'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const latencyFactor = 0.5;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    // 1. IMPORTANTE: Il percorso deve essere relativo alla cartella public
    img.src = '/images/bg.png'; // Sostituisci con il percorso della tua immagine

    let scrollY = 0;

    const resizeCanvas = () => {
      // Prendiamo le dimensioni effettive della finestra
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Settiamo le dimensioni INTERNE del canvas
      canvas.width = width;
      canvas.height = height;

      // Forziamo il CSS per sicurezza
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const draw = () => {
      if (!img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calcoliamo il fattore di scala per coprire tutto lo schermo
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      // Calcoliamo la posizione centrata
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      // Applichiamo il parallax solo alla Y
      const finalY = y - scrollY * latencyFactor;

      ctx.drawImage(img, x, finalY, img.width * scale, img.height * scale);
    };

    const renderLoop = () => {
      draw();
      requestAnimationFrame(renderLoop);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    // Gestione errori immagine
    img.onerror = () => {
      console.error(
        "Errore: Impossibile caricare l'immagine al percorso:",
        img.src
      );
    };

    img.onload = () => {
      resizeCanvas();
      renderLoop();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full"
      />
      {/* Questo div scurisce lo sfondo per far risaltare il testo */}
      <div className="pointer-events-none fixed left-0 top-0 -z-[9] h-full w-full bg-black/40" />
    </>
  );
}
