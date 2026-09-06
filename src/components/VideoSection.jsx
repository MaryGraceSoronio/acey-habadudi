import { useRef, useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

export default function VideoSection({ video, index }) {
  const [ref, isInView] = useInView({ threshold: 0.25, once: false });
  const videoRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isInView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isInView]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onMeta = () => {
      if (el.videoWidth && el.videoHeight) {
        setDims({ w: el.videoWidth, h: el.videoHeight });
      }
    };

    el.addEventListener('loadedmetadata', onMeta);
    if (el.readyState >= 1) onMeta();

    return () => el.removeEventListener('loadedmetadata', onMeta);
  }, []);

  return (
    <div
      ref={ref}
      className={`video-card ${isInView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="video-frame"
        style={dims.w && dims.h ? { aspectRatio: `${dims.w} / ${dims.h}` } : undefined}
      >
        <div className="video-tape video-tape-top" />
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
