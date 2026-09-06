export default function FinalMessage({ visible }) {
  if (!visible) return null;

  return (
    <div className="final-message-section revealed">
      <div className="final-message-card">
        <div className="final-message-sparkle">✦</div>
        <h2 className="final-message-title">For You, Always</h2>
        <div className="final-message-divider" />
        <p className="final-message-text">
          Your message here ✨
        </p>
        <p className="final-message-text final-message-sign">
          Your message here ✨
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
