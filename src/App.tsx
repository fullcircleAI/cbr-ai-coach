import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { InstallPrompt } from './components/InstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { AICoachDashboard } from './components/AICoachDashboard';
import { AICoachRecommendations } from './components/AICoachRecommendations';
import { TestsPage } from './components/TestsPage';
import { Settings } from './components/Settings';
import { PracticeTest } from './components/PracticeTest';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash on first visit (like Duolingo)
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    return !hasSeenSplash;
  });

  useEffect(() => {
    // Add body class to prevent scrolling during splash
    if (showSplash) {
      document.body.classList.add('splash-active');
    } else {
      document.body.classList.remove('splash-active');
    }
  }, [showSplash]);

  const handleSplashFinish = () => {
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <Router>
      <div className="App">
        {/* Global Components */}
        <InstallPrompt />
        <OfflineIndicator />
        
        <Routes>
          <Route path="/" element={<AICoachDashboard />} />
          <Route path="/recommendations" element={<AICoachRecommendations />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/practice/:testId" element={<PracticeTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
