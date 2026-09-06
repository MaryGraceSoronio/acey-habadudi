import { useRef, useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function VideoSection({ video, index }) {
  const [ref, isInView] = useInView({ threshold: 0.25, once: false });
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isInView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`video-card ${isInView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="video-frame">
        <video
          ref={videoRef}
          src={video.url}
          className="video-element"
          preload="metadata"
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
