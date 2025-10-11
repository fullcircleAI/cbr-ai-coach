import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navigation } from './Navigation';
import { PullToRefresh } from './PullToRefresh';
import { aiCoach } from '../services/aiCoach';
import type { AIInsight } from '../services/aiCoach';
import './AICoachDashboard.css';

interface UserProgress {
  averageScore: number;
  totalQuestions: number;
  correctAnswers: number;
  studyTime: number;
  weakAreas: string[];
  strongAreas: string[];
}


export const AICoachDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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
    // Load REAL data from AI Coach
    const realData: UserProgress = {
      averageScore: aiCoach.getPracticeAverage(),
      totalQuestions: aiCoach.getTestHistory().reduce((sum, t) => sum + t.totalQuestions, 0),
      correctAnswers: aiCoach.getTestHistory().reduce((sum, t) => sum + t.score, 0),
      studyTime: aiCoach.getStudyTime(),
      weakAreas: [],
      strongAreas: []
    };

    const realInsights = aiCoach.getAIInsights();

    setUserProgress(realData);
    setAiInsights(realInsights);
  }, []);

  const handleRefresh = async () => {
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reload data (in real app, fetch from API)
    window.location.reload();
  };

  const getScoreColor = (score: number) => {
    if (score < 30) return 'red';
    if (score < 70) return 'orange';
    return 'green';
  };

  const formatTime = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    // Digital clock format: 08:30 instead of 8h 30m
    return `${String(wholeHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const getTimeRemaining = () => {
    const targetHours = 24; // 24-hour target
    const remaining = Math.max(0, targetHours - userProgress.studyTime);
    const percentage = Math.min(100, (userProgress.studyTime / targetHours) * 100);
    return { remaining, percentage };
  };

  const navigateToRecommendedTest = (insight: AIInsight) => {
    // Use testId from AI Coach (already calculated)
    const testId = insight.testId || 'traffic-rules-signs';
    navigate(`/practice/${testId}`);
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <PullToRefresh onRefresh={handleRefresh}>
          <div className="dashboard">
          {/* Summarized Learning Progress */}
          <div className="dashboard-summary">
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="stat-number">{userProgress.averageScore}%</div>
                <div className="stat-label">{t('dashboard.averageScore')}</div>
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
                <div className="stat-label">{t('dashboard.studyTime')}</div>
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
                <div className="stat-label">{t('dashboard.timeRemaining')}</div>
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
            <h3>{t('dashboard.yourProgress')}</h3>
            <div className="insights-grid">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`insight-card ${insight.priority}`}>
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
                        <span className="btn-text">{t('dashboard.startPractice')}</span>
                        <span className="btn-time">15 min</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          </div>
        </PullToRefresh>
      </main>
    </div>
  );
};
