import useInView from '../hooks/useInView';

export default function FinalMessage({ visible }) {
  const [ref, isInView] = useInView({ threshold: 0.3, once: true });

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className={`final-message-section ${isInView ? 'revealed' : ''}`}
    >
      <div className="final-message-card">
        <div className="final-message-sparkle">✦</div>
        <h2 className="final-message-title">For You, Always</h2>
        <div className="final-message-divider" />
        <p className="final-message-text">
          Every moment with you is a treasure I hold close to my heart.
          This is just a small piece of how much you mean to me.
          You are my sunshine, my joy, my everything.
        </p>
        <p className="final-message-text final-message-sign">
          Forever yours, always ♥
        </p>
        <div className="final-message-hearts">
          <span>♥</span>
          <span className="heart-purple">♥</span>
          <span>♥</span>
        </div>
      </div>
    </div>
  );
}
