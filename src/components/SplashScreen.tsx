import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // iOS/Android standard: 2.5-3 seconds for proper branding
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Smooth fade out
      setTimeout(onFinish, 500);
    }, 2500);

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
        <h1 className="splash-title">AI Coach</h1>
        <p className="splash-subtitle">Master Dutch Driving Theory in 24 hours</p>
      </div>
    </div>
  );
};

