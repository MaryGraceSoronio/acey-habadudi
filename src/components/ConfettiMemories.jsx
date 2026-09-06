import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { images, videos } from '../utils/mediaManifest';

export default function ConfettiMemories({ active }) {
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!active || hasTriggered.current) return;
    hasTriggered.current = true;

    const allMedia = [...images, ...videos];
    const thumbs = allMedia.slice(0, 25);

    const imageShapes = thumbs.map((media) => {
      const canvas = document.createElement('canvas');
      canvas.width = 56;
      canvas.height = 56;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = media.url;

      return new Promise((resolve) => {
        img.onload = () => {
          const size = 56;
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, 0, 0, size, size);
          resolve({ type: 'bitmap', data: canvas });
        };
        img.onerror = () => {
          ctx.fillStyle = '#f5c842';
          ctx.beginPath();
          ctx.arc(28, 28, 28, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 18px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('♥', 28, 28);
          resolve({ type: 'bitmap', data: canvas });
        };
      });
    });

    const colors = ['#f5c842', '#9b59b6', '#ffd700', '#e8d44d', '#c39bd3', '#ffeaa7', '#bb8fce'];

    Promise.all(imageShapes).then((shapes) => {
      const centerBurst = (ratio, opts) => {
        confetti({
          origin: { x: 0.5, y: 0.45 },
          shapes: ['circle', ...shapes.slice(0, 12)],
          colors,
          particleCount: Math.floor(180 * ratio),
          spread: 130,
          startVelocity: 50,
          gravity: 0.7,
          scalar: opts?.scalar ?? 1.1,
          ticks: 220,
          zIndex: 9999,
        });
      };

      const sideCannon = (x, angleEnd) => {
        confetti({
          particleCount: 60,
          angle: angleEnd,
          spread: 55,
          origin: { x, y: 0.6 },
          shapes: shapes.slice(0, 8),
          colors,
          startVelocity: 55,
          gravity: 0.9,
          scalar: 0.9,
          ticks: 180,
          zIndex: 9999,
        });
      };

      centerBurst(0.25, { scalar: 1.2 });
      setTimeout(() => centerBurst(0.2, { scalar: 0.9 }), 80);
      setTimeout(() => centerBurst(0.3, { scalar: 1.0 }), 180);
      setTimeout(() => centerBurst(0.15, { scalar: 0.8 }), 300);
      setTimeout(() => centerBurst(0.1, { scalar: 1.1 }), 420);

      setTimeout(() => {
        sideCannon(0.0, 60);
        sideCannon(1.0, 120);
      }, 250);

      setTimeout(() => {
        sideCannon(0.15, 50);
        sideCannon(0.85, 130);
      }, 500);

      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 90,
          spread: 180,
          origin: { x: 0.5, y: 0.3 },
          shapes: ['circle'],
          colors: ['#f5c842', '#ffd700'],
          startVelocity: 15,
          gravity: 0.3,
          scalar: 1.5,
          ticks: 300,
          zIndex: 9999,
        });
      }, 800);

      setTimeout(() => {
        const heartShape = document.createElement('canvas');
        heartShape.width = 40;
        heartShape.height = 40;
        const hCtx = heartShape.getContext('2d');
        hCtx.fillStyle = '#9b59b6';
        hCtx.beginPath();
        hCtx.moveTo(20, 35);
        hCtx.bezierCurveTo(8, 25, 0, 15, 0, 10);
        hCtx.bezierCurveTo(0, 4, 5, 0, 10, 0);
        hCtx.bezierCurveTo(14, 0, 18, 3, 20, 6);
        hCtx.bezierCurveTo(22, 3, 26, 0, 30, 0);
        hCtx.bezierCurveTo(35, 0, 40, 4, 40, 10);
        hCtx.bezierCurveTo(40, 15, 32, 25, 20, 35);
        hCtx.closePath();
        hCtx.fill();

        confetti({
          particleCount: 25,
          spread: 100,
          origin: { x: 0.5, y: 0.5 },
          shapes: [{ type: 'bitmap', data: heartShape }],
          colors: ['#9b59b6'],
          startVelocity: 30,
          gravity: 0.6,
          scalar: 0.8,
          ticks: 200,
          zIndex: 9999,
        });
      }, 1100);
    });
  }, [active]);

  return null;
}
