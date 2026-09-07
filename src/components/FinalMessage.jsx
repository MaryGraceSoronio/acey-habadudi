export default function FinalMessage({ visible }) {
  if (!visible) return null;

  return (
    <div className="final-message-section revealed">
      <div className="final-message-card">
        <div className="final-message-sparkle">✦</div>
        <h2 className="final-message-title">For You, Always</h2>
        <div className="final-message-divider" />
        <p className="final-message-text">
          Happy birthday to my favorite human and the best roommate I could have ever asked for!
          As I sat down to write this, I realized I'm not just talking to the person sitting across from me today. I'm talking to the little girl you were, the fighter you are right now, and the incredible woman you are still becoming.
          <br /><br />
          <strong>To your past self:</strong>
          {' '}I want to reach back through the years and hug the little girl who had no idea what kind of world she was going to face. Thank you for choosing me back when life was small, simple, and untouched by real worry. Thank you for the innocent laughter, the scraped knees, the childhood daydreams, and the unfiltered joy that built the foundation of who we are. You were so bright and so gentle, completely unaware that years down the line, life would try to test your spirit in ways you couldn't imagine. But even back then, you were planting seeds of loyalty and love that would end up saving my life a thousand times over. Thank you for giving me my earliest memories of what true safety feels like.
          <br /><br />
          <strong>To your present self:</strong>
          {' '}I see you. I see how hard you've been fighting, and I see the invisible weight you carry every single day. This chapter, our cramped dorm room, the academic battles where our brains flatlined, the shifts that drained every ounce of life from your body, has asked so much of you. I will never forget finding you crumpled on our cold bathroom floor, still in your work uniform, completely shattered. Even though I tried to make you laugh just to pull you out of the dark for a second, my heart broke in pieces for you. But it also showed me the absolute honor it is to love you. Dorm life stripped away every filter; we held each other through the breakdowns, stayed up until sunrise talking and laughing, drank and ate in our room while watching MSA when the outside world disappointed us, and devoured whole pizzas and cakes on random weekdays just because we survived another week. Moving out of this room feels like tearing away a piece of my own chest, because coming home to you was the anchor that kept me grounded. You are so resilient, Acey, even on the days you feel completely broken. I am so endlessly proud of the grace with which you endure.
          <br /><br />
          <strong>To your future self:</strong>
          {' '}Wherever you are reading this years from now, I hope life has finally learned to be soft on you. I hope you are resting. I hope you look back on these chaotic, tear-stained, beautiful college years and smile, knowing that the brutal shifts and every sleepless night paved the way for the peace you now have. Please never forget the fierce, tender heart that got you through the trenches. No matter how far our paths take us, no matter what new rooms we sleep in or what new titles we earn, you will never have to face the dark alone. You will always have a home in me. If the world ever gets too loud again, remember that you've survived the bathroom floor, you've survived the impossible deadlines, and you'll always have me to survive through it all.
        </p>
        <p className="final-message-text final-message-sign">
          Thank you for holding my past, anchoring my present, and being a permanent part of my future.
          <br /><br />
          Happy, happy birthday, my favorite person. I love you with everything I have.
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
