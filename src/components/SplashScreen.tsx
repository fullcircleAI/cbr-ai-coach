import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Duolingo-style: Quick splash (1.2 seconds total)
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Quick fade out
      setTimeout(onFinish, 400);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-circle">
          <div className="mascot-container">
            <img src="/images/mascot.png" alt="Mascot" className="mascot-image" />
          </div>
        </div>
        <h1 className="splash-title">Theory Coach AI</h1>
      </div>
    </div>
  );
};

