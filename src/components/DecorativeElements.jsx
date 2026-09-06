import { useEffect, useMemo, useRef } from 'react';

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function FloatingHeart({ style, delay }) {
  return (
    <svg
      className="floating-heart"
      style={{ ...style, animationDelay: `${delay}s` }}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function FloatingStar({ style, delay }) {
  return (
    <svg
      className="floating-star"
      style={{ ...style, animationDelay: `${delay}s` }}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FloatingSparkle({ style, delay }) {
  return (
    <svg
      className="floating-sparkle"
      style={{ ...style, animationDelay: `${delay}s` }}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

export default function DecorativeElements({ variant = 'default' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced && containerRef.current) {
      containerRef.current.style.setProperty('--anim-duration', '0s');
    }
  }, []);

  const hearts = useMemo(() =>
    Array.from({ length: variant === 'cover' ? 8 : 4 }, (_, i) => ({
      id: `heart-${variant}-${i}`,
      style: {
        left: `${10 + seededRandom(i * 4 + 1) * 80}%`,
        top: `${10 + seededRandom(i * 4 + 2) * 80}%`,
        color: i % 3 === 0 ? '#9b59b6' : '#f5c842',
        opacity: 0.3 + seededRandom(i * 4 + 3) * 0.3,
        fontSize: `${10 + seededRandom(i * 4 + 4) * 14}px`,
      },
      delay: seededRandom(i * 5) * 5,
    })),
    [variant]
  );

  const stars = useMemo(() =>
    Array.from({ length: variant === 'cover' ? 10 : 5 }, (_, i) => ({
      id: `star-${variant}-${i}`,
      style: {
        left: `${5 + seededRandom(i * 4 + 20) * 90}%`,
        top: `${5 + seededRandom(i * 4 + 21) * 90}%`,
        color: i % 4 === 0 ? '#9b59b6' : '#f5c842',
        opacity: 0.2 + seededRandom(i * 4 + 22) * 0.4,
        width: `${8 + seededRandom(i * 4 + 23) * 12}px`,
      },
      delay: seededRandom(i * 5 + 10) * 6,
    })),
    [variant]
  );

  const sparkles = useMemo(() =>
    Array.from({ length: variant === 'cover' ? 12 : 6 }, (_, i) => ({
      id: `sparkle-${variant}-${i}`,
      style: {
        left: `${seededRandom(i * 4 + 40) * 100}%`,
        top: `${seededRandom(i * 4 + 41) * 100}%`,
        color: i % 3 === 0 ? '#9b59b6' : '#ffd700',
        opacity: 0.15 + seededRandom(i * 4 + 42) * 0.35,
        width: `${6 + seededRandom(i * 4 + 43) * 8}px`,
      },
      delay: seededRandom(i * 5 + 20) * 4,
    })),
    [variant]
  );

  return (
    <div ref={containerRef} className="decorative-elements" aria-hidden="true">
      {hearts.map(h => (
        <FloatingHeart key={h.id} style={h.style} delay={h.delay} />
      ))}
      {stars.map(s => (
        <FloatingStar key={s.id} style={s.style} delay={s.delay} />
      ))}
      {sparkles.map(s => (
        <FloatingSparkle key={s.id} style={s.style} delay={s.delay} />
      ))}
    </div>
  );
}
