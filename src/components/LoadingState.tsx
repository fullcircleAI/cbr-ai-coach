import React from 'react';
import './LoadingState.css';

interface LoadingStateProps {
  type?: 'spinner' | 'skeleton' | 'dots';
  text?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingStateProps> = ({ 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  return (
    <div className={`loading-container ${fullScreen ? 'fullscreen' : ''}`}>
      <div className="loading-spinner">
        <div className="spinner"></div>
        {text && <p className="loading-text">{text}</p>}
      </div>
    </div>
  );
};

export const LoadingDots: React.FC<LoadingStateProps> = ({ 
  text = 'Loading' 
}) => {
  return (
    <div className="loading-dots-container">
      <p className="loading-text">
        {text}
        <span className="dots">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
      </p>
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text short"></div>
    </div>
  );
};

export const SkeletonTestCard: React.FC = () => {
  return (
    <div className="skeleton-test-card">
      <div className="skeleton skeleton-icon"></div>
      <div className="skeleton-content">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    </div>
  );
};

export const SkeletonInsightCard: React.FC = () => {
  return (
    <div className="skeleton-insight-card">
      <div className="skeleton skeleton-badge"></div>
      <div className="skeleton skeleton-text"></div>
    </div>
  );
};

