import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiMemories({ active }) {
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!active || hasTriggered.current) return;
    hasTriggered.current = true;

    const colors = ['#f5c842', '#9b59b6', '#ffd700', '#e8d44d', '#c39bd3', '#ffeaa7', '#bb8fce'];

    const burst = (origin, count, opts) => {
      confetti({
        particleCount: count,
        spread: opts?.spread ?? 140,
        startVelocity: opts?.velocity ?? 55,
        gravity: opts?.gravity ?? 0.8,
        scalar: opts?.scalar ?? 1,
        ticks: 200,
        zIndex: 9999,
        shapes: ['circle'],
        colors,
        origin,
      });
    };

    burst({ x: 0.5, y: 0.5 }, 300, { velocity: 60, spread: 160, scalar: 1.2 });

    setTimeout(() => {
      burst({ x: 0.0, y: 0.7 }, 80, { velocity: 50, spread: 100 });
      burst({ x: 1.0, y: 0.7 }, 80, { velocity: 50, spread: 100 });
    }, 50);

    setTimeout(() => {
      burst({ x: 0.5, y: 0.0 }, 150, { velocity: 45, gravity: 0.6, spread: 180 });
    }, 150);

    setTimeout(() => {
      burst({ x: 0.5, y: 1.0 }, 100, { velocity: 40, spread: 160 });
    }, 250);

    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        confetti({
          particleCount: 25,
          spread: 120,
          startVelocity: 35,
          gravity: 0.7,
          ticks: 180,
          zIndex: 9999,
          shapes: ['circle'],
          colors,
          origin: { x: Math.random(), y: Math.random() * 0.6 },
        });
      }
    }, 350);
  }, [active]);

  return null;
}
