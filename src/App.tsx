import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { SplashScreen } from './components/SplashScreen';
import { LanguageSelection } from './components/LanguageSelection';
import { InstallPrompt } from './components/InstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { AICoachDashboard } from './components/AICoachDashboard';
import { AICoachRecommendations } from './components/AICoachRecommendations';
import { TestsPage } from './components/TestsPage';
import { Settings } from './components/Settings';
import { PracticeTest } from './components/PracticeTest';
import { MockExamSelection } from './components/MockExamSelection';
import { MockExam } from './components/MockExam';
import { MockExamResults } from './components/MockExamResults';
import './App.css';

// AppContent component that checks for language selection
function AppContent() {
  const { currentLanguage } = useLanguage();
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

  useEffect(() => {
    // Add RTL support for Arabic
    if (currentLanguage === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', currentLanguage || 'en');
    }
  }, [currentLanguage]);

  const handleSplashFinish = () => {
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  // LANGUAGE SELECTION FIRST - User must choose language before seeing app
  if (!currentLanguage) {
    return <LanguageSelection />;
  }

  // Then show splash screen (if first visit)
  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // Finally show the main app
  return (
    <div className="App">
      {/* Global Components */}
      <InstallPrompt />
      <OfflineIndicator />
      
      <Routes>
        <Route path="/" element={<AICoachDashboard />} />
        <Route path="/recommendations" element={<AICoachRecommendations />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/mock-exam" element={<MockExamSelection />} />
        <Route path="/mock-exam/results" element={<MockExamResults />} />
        <Route path="/mock-exam/:examId" element={<MockExam />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/practice/:testId" element={<PracticeTest />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
