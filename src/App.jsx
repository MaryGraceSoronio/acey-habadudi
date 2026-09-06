import { useState, useEffect } from 'react';
import { images } from './utils/mediaManifest';
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

  const handleGiftOpen = () => {
    setTimeout(() => setConfettiActive(true), 300);
    setTimeout(() => setFinalRevealed(true), 2200);
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
          <StorySection key={image.filename} image={image} index={index} />
        ))}
      </div>

      <VideoSection />

      <section className="gift-wrapper">
        <GiftBox onOpen={handleGiftOpen} />
        <ConfettiMemories active={confettiActive} />
        <FinalMessage visible={finalRevealed} />
      </section>
    </div>
  );
}

export default App;
