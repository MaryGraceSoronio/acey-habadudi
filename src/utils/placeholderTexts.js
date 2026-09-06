const placeholders = [
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
  "Your message here ✨",
];

export function getPlaceholder(index) {
  return placeholders[index % placeholders.length];
}

export function getShuffledPlaceholder(index) {
  const seed = index * 2654435761;
  const shuffledIndex = seed % placeholders.length;
  return placeholders[Math.abs(shuffledIndex)];
}

export default placeholders;
