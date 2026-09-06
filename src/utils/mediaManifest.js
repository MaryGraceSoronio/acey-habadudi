const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,ogg}', { eager: true, as: 'url' });
const musicModules = import.meta.glob('/public/music/*.{mp3,wav,ogg}', { eager: true, as: 'url' });

function extractNumber(filename) {
  const match = filename.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function buildMediaList(modules) {
  return Object.entries(modules)
    .map(([path, url]) => {
      const filename = path.split('/').pop();
      return { filename, path, url, number: extractNumber(filename) };
    })
    .sort((a, b) => a.number - b.number);
}

export const images = buildMediaList(imageModules);
export const videos = buildMediaList(videoModules);
export const musicTracks = buildMediaList(musicModules);
