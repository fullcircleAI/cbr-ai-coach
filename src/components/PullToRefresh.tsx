import React, { useState, useEffect, useRef } from 'react';
import './PullToRefresh.css';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const threshold = 80; // Distance needed to trigger refresh

  const handleTouchStart = (e: TouchEvent) => {
    const scrollTop = containerRef.current?.scrollTop || 0;
    if (scrollTop === 0) {
      startY.current = e.touches[0].clientY;
      setIsPulling(true);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isPulling || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, currentY - startY.current);

    if (distance > 0) {
      e.preventDefault();
      // Apply resistance curve
      const resistedDistance = Math.min(distance * 0.5, threshold + 40);
      setPullDistance(resistedDistance);
    }
  };

  const handleTouchEnd = async () => {
    if (!isPulling) return;

    setIsPulling(false);

    if (pullDistance >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      setPullDistance(threshold);
      
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      setPullDistance(0);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPulling, pullDistance, isRefreshing]);

  const getStatusText = () => {
    if (isRefreshing) return 'Refreshing...';
    if (pullDistance >= threshold) return 'Release to refresh';
    if (pullDistance > 0) return 'Pull to refresh';
    return '';
  };

  const rotation = Math.min((pullDistance / threshold) * 360, 360);

  return (
    <div className="pull-to-refresh-container" ref={containerRef}>
      <div 
        className={`pull-to-refresh-indicator ${isRefreshing ? 'refreshing' : ''}`}
        style={{ 
          height: `${pullDistance}px`,
          opacity: pullDistance > 0 ? 1 : 0 
        }}
      >
        <div 
          className="refresh-icon"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {isRefreshing ? '⏳' : '🔄'}
        </div>
        <span className="refresh-text">{getStatusText()}</span>
      </div>
      <div className="pull-to-refresh-content">
        {children}
      </div>
    </div>
  );
};

