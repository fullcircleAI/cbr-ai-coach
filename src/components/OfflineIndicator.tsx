import React, { useState, useEffect } from 'react';
import './OfflineIndicator.css';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowIndicator(true);
      
      // Hide "Back online" message after 3 seconds
      setTimeout(() => {
        setShowIndicator(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowIndicator(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show indicator on mount if offline
    if (!navigator.onLine) {
      setShowIndicator(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showIndicator) {
    return null;
  }

  return (
    <div className={`offline-indicator ${isOnline ? 'online' : 'offline'}`}>
      <div className="offline-content">
        <span className="offline-icon">
          {isOnline ? '✅' : '📡'}
        </span>
        <div className="offline-text">
          <strong>{isOnline ? 'Back Online' : 'No Internet Connection'}</strong>
          <span className="offline-subtext">
            {isOnline 
              ? 'Data will sync automatically' 
              : 'You can still practice offline'}
          </span>
        </div>
      </div>
    </div>
  );
};

