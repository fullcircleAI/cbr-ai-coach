import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Mascot } from './Mascot';
import './AICoachDashboard.css';

interface UserProgress {
  averageScore: number;
  totalQuestions: number;
  correctAnswers: number;
  studyTime: number;
  weakAreas: string[];
  strongAreas: string[];
}

interface AIInsight {
  type: 'mistake' | 'strength' | 'recommendation';
  message: string;
  priority: 'high' | 'medium' | 'low';
}

export const AICoachDashboard: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    averageScore: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    studyTime: 0,
    weakAreas: [],
    strongAreas: []
  });

  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);

  useEffect(() => {
    // Simulate loading user data
    const mockData: UserProgress = {
      averageScore: 75,
      totalQuestions: 120,
      correctAnswers: 90,
      studyTime: 8.5,
      weakAreas: ['Traffic Lights', 'Priority Rules', 'Roundabouts'],
      strongAreas: ['Speed Limits', 'Parking Rules']
    };

    const mockInsights: AIInsight[] = [
      {
        type: 'mistake',
        message: "You're confusing red and amber signals 4 times in Traffic Lights",
        priority: 'high'
      },
      {
        type: 'recommendation',
        message: "Focus on Traffic Lights for 2 hours - you're 60% ready",
        priority: 'high'
      },
      {
        type: 'strength',
        message: "You've mastered Speed Limits - great progress!",
        priority: 'medium'
      }
    ];

    setUserProgress(mockData);
    setAiInsights(mockInsights);
  }, []);

  const getScoreColor = (score: number) => {
    if (score < 30) return 'red';
    if (score < 70) return 'orange';
    return 'green';
  };

  const formatTime = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    return `${wholeHours}h ${minutes}m`;
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="dashboard">
          <div className="dashboard-header">
            <div className="dashboard-welcome">
              <div className="welcome-mascot">
                <Mascot size={80} mood="excited" />
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            {/* Learning Progress Overview */}
            <div className="ai-coach-card">
              <h3>📊 Your Learning Progress</h3>
              <div className="progress-overview">
                <div className="progress-stat">
                  <div className="stat-number">{userProgress.averageScore}%</div>
                  <div className="stat-label">Average Score</div>
                  <div className="progress-bar-bg">
                    <div className={`progress-bar-fill ${getScoreColor(userProgress.averageScore)}`} 
                         style={{ width: `${userProgress.averageScore}%` }}></div>
                  </div>
                  <div className="progress-labels">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
                <div className="progress-details">
                  <div className="detail-item">
                    <span className="detail-label">Questions Answered:</span>
                    <span className="detail-value">{userProgress.totalQuestions}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Correct Answers:</span>
                    <span className="detail-value">{userProgress.correctAnswers}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Study Time:</span>
                    <span className="detail-value">{formatTime(userProgress.studyTime)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="ai-coach-card">
              <h3>🧠 AI Learning Insights</h3>
              {aiInsights.map((insight, index) => (
                <div key={index} className={`ai-insight ${insight.priority}`}>
                  <h4>
                    {insight.type === 'mistake' && '⚠️ '}
                    {insight.type === 'strength' && '✅ '}
                    {insight.type === 'recommendation' && '💡 '}
                    {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)} Analysis
                  </h4>
                  <p>{insight.message}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
