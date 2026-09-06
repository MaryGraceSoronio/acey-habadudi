import useInView from '../hooks/useInView';
import useScrollProgress from '../hooks/useScrollProgress';
import { getPlaceholder } from '../utils/placeholderTexts';

const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-0.5deg'];

const entranceAnims = [
  'anim-fade-up', 'anim-fade-left', 'anim-fade-right', 'anim-fade-down',
  'anim-scale-in', 'anim-rotate-in', 'anim-flip-in', 'anim-blur-in',
  'anim-bounce-in', 'anim-slide-rotate',
];

const cuteAnims = [
  'cute-float-hearts', 'cute-sparkle', 'cute-tape-wiggle', 'cute-card-pulse',
  'cute-bg-dots', 'cute-float-stars', 'cute-image-breathe', 'cute-text-shimmer',
  'cute-heart-pop', 'cute-rotate-deco', 'cute-bounce-dot', 'cute-glow-ring',
  'cute-float-butterfly', 'cute-confetti-drip', 'cute-wave-line',
];

const fillers = [
  'filler-corner-dots', 'filler-wavy-line', 'filler-big-number',
  'filler-quote-marks', 'filler-side-line', 'filler-triangle',
  'filler-scatter-stars', 'filler-heart-cluster', 'filler-circle-ring',
  'filler-dotted-arc',
];

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function pickCute(index, count) {
  const picked = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(seededRandom(index * 7 + i * 13) * cuteAnims.length);
    const anim = cuteAnims[idx];
    if (!picked.includes(anim)) picked.push(anim);
  }
  return picked;
}

export default function StorySection({ image, index, text }) {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const [scrollRef, progress] = useScrollProgress();
  const rotation = rotations[index % rotations.length];
  const caption = text || getPlaceholder(index);

  const isEven = index % 2 === 0;
  const entrance = entranceAnims[index % entranceAnims.length];
  const decos = pickCute(index, 3);
  const filler = fillers[index % fillers.length];

  const cardParallax = (progress - 0.5) * -30;
  const cardScale = 0.92 + Math.sin(progress * Math.PI) * 0.08;

  return (
    <section
      ref={(el) => {
        ref.current = el;
        scrollRef.current = el;
      }}
      className={`story-section ${isInView ? 'in-view' : ''} ${isEven ? 'layout-left' : 'layout-right'} ${entrance}`}
    >
      <div className={`story-filler ${filler}`} aria-hidden="true" data-number={String(index + 1).padStart(2, '0')} />
      <div className="story-cute-decorations" aria-hidden="true">
        {decos.map((d) => (
          <div key={d} className={`cute-deco ${d}`} />
        ))}
      </div>
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
