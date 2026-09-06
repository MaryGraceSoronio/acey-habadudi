import { useState, useRef } from 'react';
import useInView from '../hooks/useInView';

export default function GiftBox({ onOpen }) {
  const [ref, isInView] = useInView({ threshold: 0.4, once: true });
  const [isShaking, setIsShaking] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const giftRef = useRef(null);

  const handleClick = () => {
    if (isOpen || isShaking || isOpening) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpening(true);
      setTimeout(() => {
        setIsOpen(true);
        onOpen();
      }, 800);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div ref={ref} className={`gift-section ${isInView ? 'in-view' : ''}`}>
      <div className="gift-preamble">
        <p className="gift-preamble-text">One last thing...</p>
      </div>
      <div
        ref={giftRef}
        className={`gift-box ${isShaking ? 'shaking' : ''} ${isOpening ? 'opening' : ''} ${isOpen ? 'opened' : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={isOpen ? 'Gift opened' : 'Open the gift'}
        aria-expanded={isOpen}
      >
        <div className="gift-box-body">
          <div className="gift-box-lid">
            <div className="gift-ribbon" />
            <div className="gift-bow">
              <div className="bow-left" />
              <div className="bow-right" />
              <div className="bow-center" />
            </div>
          </div>
          <div className="gift-box-bottom" />
        </div>
        <div className="gift-glow" />
        <div className="gift-hearts">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="gift-heart" style={{ '--i': i }}>
              ♥
            </span>
          ))}
        </div>
      </div>
      {!isOpen && (
        <p className="gift-instruction">Tap me!</p>
      )}
    </div>
  );
}
