import VideoCard from './VideoSection';
import { videos } from '../utils/mediaManifest';
import useInView from '../hooks/useInView';

export default function VideoSection() {
  const [ref, isInView] = useInView({ threshold: 0.08, once: true });

  if (videos.length === 0) return null;

  return (
    <section ref={ref} className="video-section" id="videos">
      <div className={`video-section-header ${isInView ? 'in-view' : ''}`}>
        <div className="video-section-ornament">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.3" />
            <circle cx="20" cy="20" r="10" stroke="var(--purple-accent)" strokeWidth="1" opacity="0.4" />
            <circle cx="20" cy="20" r="3" fill="var(--yellow-primary)" opacity="0.6" />
          </svg>
        </div>
        <p className="video-section-label">And a few moving moments...</p>
        <h2 className="video-section-title">Our Little Films</h2>
      </div>
      <div className="video-gallery">
        {videos.map((video, i) => (
          <VideoCard key={video.filename} video={video} index={i} />
        ))}
      </div>
    </section>
  );
}
