import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AICoachDashboard } from './components/AICoachDashboard';
import { AICoachAnalysis } from './components/AICoachAnalysis';
import { AICoachRecommendations } from './components/AICoachRecommendations';
import { AICoachProgress } from './components/AICoachProgress';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AICoachDashboard />} />
          <Route path="/analysis" element={<AICoachAnalysis />} />
          <Route path="/recommendations" element={<AICoachRecommendations />} />
          <Route path="/progress" element={<AICoachProgress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;