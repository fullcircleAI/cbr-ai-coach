import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash for 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove splash after fade animation
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
        <h1 className="splash-title">Theory Coach AI</h1>
        <p className="splash-subtitle">Master Dutch Driving Theory in 24 hours</p>
        <div className="splash-loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  );
};

