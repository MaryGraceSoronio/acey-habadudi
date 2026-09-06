import { useEffect, useMemo, useRef } from 'react';

function Particle({ x, y, delay, color, size }) {
  return (
    <div
      className="particle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FloatingParticles({ count = 20, colors = ['#f5c842', '#9b59b6', '#ffd700', '#e8d44d'] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.display = 'none';
    }
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: seededRandom(i * 3 + 1) * 100,
      y: seededRandom(i * 3 + 2) * 100,
      delay: seededRandom(i * 3 + 3) * 8,
      color: colors[i % colors.length],
      size: 3 + seededRandom(i * 7) * 5,
    })),
    [count, colors]
  );

  return (
    <div ref={containerRef} className="floating-particles" aria-hidden="true">
      {particles.map(p => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
