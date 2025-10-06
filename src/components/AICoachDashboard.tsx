import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  frequency?: number;
  lastOccurrence?: string;
  explanation?: string;
}

export const AICoachDashboard: React.FC = () => {
  const navigate = useNavigate();
  
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
            message: "Red and amber signals",
            priority: 'high',
            frequency: 4,
            lastOccurrence: '2 hours ago',
            explanation: 'Mixing up light sequence'
          },
          {
            type: 'mistake',
            message: "Giving way rules",
            priority: 'high',
            frequency: 3,
            lastOccurrence: '1 day ago',
            explanation: 'Wrong right of way'
          },
          {
            type: 'strength',
            message: "Speed Limits",
            priority: 'medium',
            frequency: 0,
            explanation: '90% accuracy'
          },
          {
            type: 'recommendation',
            message: "Traffic Lights",
            priority: 'high',
            explanation: 'Focus here for +15% score boost'
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

  const getTimeRemaining = () => {
    const targetHours = 24; // 24-hour target
    const remaining = Math.max(0, targetHours - userProgress.studyTime);
    const percentage = Math.min(100, (userProgress.studyTime / targetHours) * 100);
    return { remaining, percentage };
  };

  const navigateToRecommendedTest = (insight: AIInsight) => {
    // Map insight types to specific practice tests
    let testId = '';
    switch (insight.type) {
      case 'mistake':
        if (insight.message.includes('Traffic Lights')) {
          testId = 'traffic-lights-signals';
        } else if (insight.message.includes('Priority Rules')) {
          testId = 'priority-rules';
        } else if (insight.message.includes('Roundabouts')) {
          testId = 'roundabouts';
        } else {
          testId = 'traffic-lights-signals'; // Default
        }
        break;
      case 'strength':
        testId = 'speed-limits'; // Continue with strengths
        break;
      case 'recommendation':
        testId = 'alcohol-drugs'; // General recommendation
        break;
      default:
        testId = 'traffic-lights-signals';
    }
    
    navigate(`/practice/${testId}`);
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="dashboard">
          {/* Summarized Learning Progress */}
          <div className="dashboard-summary">
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="stat-number">{userProgress.averageScore}%</div>
                <div className="stat-label">Average Score</div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" 
                       style={{ 
                         width: `${userProgress.averageScore}%`,
                         backgroundColor: getScoreColor(userProgress.averageScore)
                       }}></div>
                </div>
              </div>
              <div className="summary-stat">
                <div className="stat-number">{formatTime(userProgress.studyTime)}</div>
                <div className="stat-label">Study Time</div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" 
                       style={{ 
                         width: `${Math.min((userProgress.studyTime / 24) * 100, 100)}%`,
                         backgroundColor: userProgress.studyTime >= 24 ? '#10b981' : '#f59e0b'
                       }}></div>
                </div>
              </div>
              <div className="summary-stat">
                <div className="stat-number">{formatTime(getTimeRemaining().remaining)}</div>
                <div className="stat-label">Time Remaining</div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" 
                       style={{ 
                         width: `${getTimeRemaining().percentage}%`,
                         backgroundColor: getTimeRemaining().percentage >= 100 ? '#10b981' : '#f59e0b'
                       }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Summary */}
          <div className="ai-insights-summary">
            <h3>🤖 AI Learning Analysis</h3>
            <div className="insights-grid">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`insight-card ${insight.priority}`}>
                  <div className="insight-icon">
                    {insight.type === 'mistake' && '⚠️'}
                    {insight.type === 'strength' && '✅'}
                    {insight.type === 'recommendation' && '💡'}
                  </div>
                  <div className="insight-content">
                    <h4>{insight.message}</h4>
                    {insight.explanation && (
                      <p className="insight-explanation">{insight.explanation}</p>
                    )}
                    {insight.frequency && insight.frequency > 0 && (
                      <p className="insight-frequency">{insight.frequency} times • {insight.lastOccurrence}</p>
                    )}
                    {/* Show Start button for recommendation insights */}
                    {insight.type === 'recommendation' && (
                      <button 
                        className="start-practice-btn"
                        onClick={() => navigateToRecommendedTest(insight)}
                      >
                        <span className="btn-icon">▶️</span>
                        <span className="btn-text">Start Practice</span>
                        <span className="btn-time">15 min</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot at the bottom */}
          <div className="dashboard-footer">
            <div className="welcome-mascot">
              <Mascot size={80} mood="excited" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
