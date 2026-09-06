const placeholders = [
  "A little moment I'll always remember...",
  "This one deserves a special place in my heart.",
  "Look at us. Just look at us.",
  "My heart still skips a beat every time I see this.",
  "This is one of my favorite little memories with you.",
  "I can't help but smile when I think about this day.",
  "You made this moment feel like magic.",
  "This is where I knew you were something special.",
  "I wish I could live in this moment forever.",
  "You and me? Always a good idea.",
  "Every pixel of this holds a piece of my love for you.",
  "This is proof that the best things in life are people.",
  "You have no idea how much this means to me.",
  "My favorite adventures always involve you.",
  "Sometimes a single moment says everything.",
  "This memory is one I'll keep forever.",
  "You make even the ordinary feel extraordinary.",
  "I fall in love with you a little more every time I see this.",
  "This is what happiness looks like.",
  "If I could frame any moment, it would be this one.",
  "You are my favorite notification.",
  "This is our story, and I love every chapter.",
  "Just us, being perfectly us.",
  "I didn't know what love was until this moment.",
  "This one? This one's my whole heart.",
  "You turned a simple moment into a lifelong memory.",
  "Every time I see this, I fall for you all over again.",
  "This is the kind of moment that makes life worth living.",
  "I still get butterflies when I see this picture.",
  "You are the best part of my every day.",
  "This is where our story gets really beautiful.",
  "Some moments are too precious to ever forget.",
  "You + me = my favorite love story.",
  "I never want to stop making memories like this with you.",
  "This is what joy looks like when I'm with you.",
  "I love how we can be completely ourselves together.",
  "You make my heart so full it could burst.",
  "This moment right here? Pure gold.",
  "I would choose you again and again and again.",
  "This is the beginning of everything beautiful.",
  "You are my sunshine on even the cloudiest days.",
  "I want a thousand more moments just like this one.",
  "This is what it feels like when everything is right.",
  "You and me against the world, always.",
  "This memory lives rent-free in my heart.",
  "I knew from this moment you were someone I never wanted to lose.",
  "This is the kind of love story I always dreamed of.",
  "Every love song makes sense when I'm with you.",
  "This is us at our absolute best.",
  "I'm so grateful this moment happened.",
  "You are my today and all of my tomorrows.",
  "This is the kind of beautiful I never knew existed until you.",
  "I still can't believe I get to call you mine.",
  "This picture holds a thousand unspoken words.",
  "You are the chapter I never want to end.",
  "I love how we turn ordinary days into unforgettable memories.",
  "This is my happy place, and it's always wherever you are.",
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
