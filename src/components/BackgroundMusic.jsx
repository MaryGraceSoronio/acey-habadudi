import { useEffect, useRef } from 'react';
import { musicTracks } from '../utils/mediaManifest';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const currentTrack = useRef(0);

  useEffect(() => {
    if (musicTracks.length === 0) return;

    const audio = new Audio();
    audioRef.current = audio;
    audio.loop = false;
    audio.volume = 0;
    audio.preload = 'auto';

    let fadeInterval = null;

    const fadeVolume = () => {
      let vol = 0;
      fadeInterval = setInterval(() => {
        vol += 0.05;
        if (vol >= 0.4) {
          audio.volume = 0.4;
          clearInterval(fadeInterval);
        } else {
          audio.volume = vol;
        }
      }, 50);
    };

    const playTrack = (index) => {
      currentTrack.current = index % musicTracks.length;
      audio.src = musicTracks[currentTrack.current].url;
      audio.load();
      return new Promise((resolve) => {
        const onCanPlay = () => {
          audio.removeEventListener('canplay', onCanPlay);
          audio.play().then(() => {
            fadeVolume();
            resolve(true);
          }).catch((err) => {
            console.log('Music autoplay blocked:', err.message);
            resolve(false);
          });
        };
        audio.addEventListener('canplay', onCanPlay);
      });
    };

    const playNext = () => {
      const next = (currentTrack.current + 1) % musicTracks.length;
      playTrack(next);
    };

    audio.addEventListener('ended', playNext);

    let gestureHandler = null;

    const attachGestureListeners = () => {
      gestureHandler = () => {
        audio.volume = 0;
        audio.play().then(() => {
          fadeVolume();
          document.removeEventListener('click', gestureHandler);
          document.removeEventListener('touchstart', gestureHandler);
          document.removeEventListener('keydown', gestureHandler);
          gestureHandler = null;
        }).catch((err) => {
          console.log('Music play failed on gesture:', err.message);
        });
      };
      document.addEventListener('click', gestureHandler);
      document.addEventListener('touchstart', gestureHandler);
      document.addEventListener('keydown', gestureHandler);
    };

    playTrack(0).then((started) => {
      if (!started) {
        console.log('Music waiting for user gesture...');
        attachGestureListeners();
      }
    });

    return () => {
      audio.removeEventListener('ended', playNext);
      if (fadeInterval) clearInterval(fadeInterval);
      audio.pause();
      audio.src = '';
      if (gestureHandler) {
        document.removeEventListener('click', gestureHandler);
        document.removeEventListener('touchstart', gestureHandler);
        document.removeEventListener('keydown', gestureHandler);
      }
    };
  }, []);

  return null;
}
