import { useCallback } from 'react';
import useInView from '../hooks/useInView';
import useScrollProgress from '../hooks/useScrollProgress';
import DecorativeElements from './DecorativeElements';

export default function Cover() {
  const [inViewRef, isInView] = useInView({ threshold: 0.3, once: true });
  const [scrollRef, progress] = useScrollProgress();

  const mergedRef = useCallback((el) => {
    inViewRef.current = el;
    scrollRef.current = el;
  }, [inViewRef, scrollRef]);

  const parallaxY = progress * -80;
  const parallaxScale = 1 + progress * 0.05;
  const fadeOut = Math.max(0, 1 - progress * 1.8);

  return (
    <section ref={mergedRef} className="story-section cover-section" id="cover">
      <DecorativeElements variant="cover" />
      <div
        className={`cover-content ${isInView ? 'in-view' : ''}`}
        style={{
          transform: `translateY(${parallaxY}px) scale(${parallaxScale})`,
          opacity: fadeOut,
        }}
      >
        <div className="cover-sparkle-line">✦ ✦ ✦</div>
        <h1 className="cover-title">
          <span className="cover-title-line">For</span>
          <span className="cover-title-line cover-title-name">You</span>
        </h1>
        <p className="cover-subtitle">
          A little journey through our favorite moments
        </p>
        <div className="cover-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
