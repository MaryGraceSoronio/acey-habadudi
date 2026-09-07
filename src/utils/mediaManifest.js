const imageModules = import.meta.glob('/src/media/images/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
const videoModules = import.meta.glob('/src/media/videos/*.{mp4,webm,ogg}', { eager: true, as: 'url' });
const musicModules = import.meta.glob('/src/media/music/*.{mp3,wav,ogg}', { eager: true, as: 'url' });

function extractNumber(filename) {
  const match = filename.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function buildMediaList(modules) {
  return Object.entries(modules)
    .map(([path, urlOrModule]) => {
      const filename = path.split('/').pop();
      const url = (urlOrModule && typeof urlOrModule === 'object' && urlOrModule.default)
        ? urlOrModule.default
        : urlOrModule;
      return { filename, path, url, number: extractNumber(filename) };
    })
    .sort((a, b) => a.number - b.number);
}

export const images = buildMediaList(imageModules);
export const videos = buildMediaList(videoModules);
export const musicTracks = buildMediaList(musicModules);
