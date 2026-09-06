import useInView from '../hooks/useInView';
import useScrollProgress from '../hooks/useScrollProgress';
import { getPlaceholder } from '../utils/placeholderTexts';

const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-0.5deg'];

export default function StorySection({ image, index, text }) {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const [scrollRef, progress] = useScrollProgress();
  const rotation = rotations[index % rotations.length];
  const caption = text || getPlaceholder(index);

  const isEven = index % 2 === 0;

  const cardParallax = (progress - 0.5) * -30;
  const cardScale = 0.92 + Math.sin(progress * Math.PI) * 0.08;

  return (
    <section
      ref={(el) => {
        ref.current = el;
        scrollRef.current = el;
      }}
      className={`story-section ${isInView ? 'in-view' : ''} ${isEven ? 'layout-left' : 'layout-right'}`}
    >
      <div className="story-content">
        <div
          className="memory-card-wrapper"
          style={{
            '--rotation': rotation,
            transform: `translateY(${cardParallax}px) scale(${cardScale}) rotate(${rotation})`,
          }}
        >
          <div className="tape tape-top" />
          <div className="memory-card">
            <img
              src={image.url}
              alt={`Memory ${image.number}`}
              loading="lazy"
              className="memory-image"
            />
          </div>
          <div className="tape tape-bottom" />
        </div>
        <div className="story-text-area">
          <p className="story-text" style={{ transitionDelay: '0.2s' }}>{caption}</p>
          <div className="story-number" style={{ transitionDelay: '0.4s' }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="story-bottom-ornament" aria-hidden="true">
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
          <circle cx="10" cy="6" r="2" fill="var(--yellow-primary)" opacity="0.35" />
          <circle cx="30" cy="6" r="2.5" fill="var(--purple-accent)" opacity="0.25" />
          <circle cx="50" cy="6" r="2" fill="var(--yellow-primary)" opacity="0.35" />
        </svg>
      </div>
    </section>
  );
}
