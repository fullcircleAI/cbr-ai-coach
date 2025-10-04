import React from 'react';

// Define allowed moods
export type MascotMood = 'neutral' | 'happy' | 'sad' | 'excited' | 'thinking';

const mascotImages: Record<MascotMood, string> = {
  neutral: '/images/mascot.png',
  happy: '/images/mascot.png',
  sad: '/images/mascot.png',
  excited: '/images/mascot.png',
  thinking: '/images/mascot.png',
};

export function Mascot({ size = 120, mood = 'neutral' }: { size?: number; mood?: MascotMood }) {
  // Pick animation class based on mood
  let animationClass = 'mascot-img mascot-wave';
  if (mood === 'excited' || mood === 'happy') animationClass = 'mascot-img mascot-bounce';
  if (mood === 'sad') animationClass = 'mascot-img mascot-sad';
  if (mood === 'thinking') animationClass = 'mascot-img mascot-thinking';

  return (
    <div className="mascot-spotlight" style={{ width: size + 32, height: size + 32 }}>
      <img
        src={mascotImages[mood]}
        alt="Mascot"
        className={animationClass}
        style={{ width: size, height: size, objectFit: 'contain', aspectRatio: '1 / 1', maxWidth: '200px', maxHeight: '200px' }}
      />
    </div>
  );
} 