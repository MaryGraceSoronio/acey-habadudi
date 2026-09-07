import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const raw = (windowHeight - rect.top) / (windowHeight + rect.height);
        setProgress(Math.min(Math.max(raw, 0), 1));
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return [ref, progress];
}

export default useScrollProgress;
