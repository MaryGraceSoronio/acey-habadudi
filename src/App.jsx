import { useState, useEffect, useRef } from 'react';
import { images } from './utils/mediaManifest';
import captions from './utils/captions';
import Cover from './components/Cover';
import StorySection from './components/StorySection';
import VideoSection from './components/VideoSectionIndex';
import GiftBox from './components/GiftBox';
import ConfettiMemories from './components/ConfettiMemories';
import FinalMessage from './components/FinalMessage';
import BackgroundMusic from './components/BackgroundMusic';
import FloatingParticles from './components/FloatingParticles';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [confettiActive, setConfettiActive] = useState(false);
  const [finalRevealed, setFinalRevealed] = useState(false);
  const finalRef = useRef(null);

  const handleGiftOpen = () => {
    setConfettiActive(true);
    setFinalRevealed(true);
    setTimeout(() => {
      finalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--image-count', images.length);
  }, []);

  return (
    <div className="app">
      <ScrollProgress />
      <FloatingParticles count={25} />
      <BackgroundMusic />

      <Cover />

      <div className="story-grid">
        {images.map((image, index) => (
          <StorySection key={image.filename} image={image} index={index} text={captions[index]} />
        ))}
      </div>

      <VideoSection />

      <section className="gift-wrapper">
        <GiftBox onOpen={handleGiftOpen} />
        <ConfettiMemories active={confettiActive} />
        <div ref={finalRef}>
          <FinalMessage visible={finalRevealed} />
        </div>
      </section>
    </div>
  );
}

export default App;
