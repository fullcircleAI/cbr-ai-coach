import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import './AICoachProgress.css';

interface ProgressMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

interface LearningInsight {
  type: 'achievement' | 'improvement' | 'recommendation';
  title: string;
  description: string;
  impact: string;
}

export const AICoachProgress: React.FC = () => {
  const navigate = useNavigate();
  const [progressMetrics, setProgressMetrics] = useState<ProgressMetric[]>([]);
  const [learningInsights, setLearningInsights] = useState<LearningInsight[]>([]);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress data
    const mockMetrics: ProgressMetric[] = [
      {
        name: 'Average Score',
        value: 75,
        target: 85,
        unit: '%',
        trend: 'up',
        color: '#10b981'
      },
      {
        name: 'Study Time',
        value: 8.5,
        target: 12,
        unit: 'hours',
        trend: 'up',
        color: '#3b82f6'
      },
      {
        name: 'Topics Mastered',
        value: 6,
        target: 10,
        unit: 'topics',
        trend: 'up',
        color: '#8b5cf6'
      },
      {
        name: 'Learning Velocity',
        value: 40,
        target: 50,
        unit: '% faster',
        trend: 'up',
        color: '#f59e0b'
      }
    ];

    const mockInsights: LearningInsight[] = [
      {
        type: 'achievement',
        title: '🎉 Speed Limits Mastered!',
        description: 'You\'ve achieved 90% accuracy in Speed Limits - excellent progress!',
        impact: 'This shows you learn well with visual content'
      },
      {
        type: 'improvement',
        title: '📈 40% Learning Speed Increase',
        description: 'Your learning velocity has improved significantly this week',
        impact: 'You\'re now learning 3x faster than when you started'
      },
      {
        type: 'recommendation',
        title: '🎯 Focus on Traffic Lights',
        description: 'Traffic Lights is your biggest opportunity for improvement',
        impact: 'Mastering this could boost your overall score by 15%'
      }
    ];

    setProgressMetrics(mockMetrics);
    setLearningInsights(mockInsights);
    setOverallProgress(68);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === 'hours') {
      const hours = Math.floor(value);
      const minutes = Math.round((value - hours) * 60);
      return `${hours}h ${minutes}m`;
    }
    return `${value}${unit}`;
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="progress-container">
          <div className="progress-header">
            <div className="header-content">
              <div className="header-text">
                <h1>📈 Learning Progress</h1>
              </div>
            </div>
            <button 
              className="back-button"
              onClick={() => navigate('/')}
            >
              ← Back to Dashboard
            </button>
          </div>

          {/* Overall Progress */}
          <div className="overall-progress-card">
            <h2>🎯 Overall Learning Progress</h2>
            <div className="overall-progress-bar">
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill green"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <div className="progress-labels">
                <span>0%</span>
                <span>{overallProgress}%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="progress-description">
              You're {overallProgress}% through your learning journey. Keep up the great work!
            </div>
          </div>

          {/* Progress Metrics */}
          <div className="metrics-grid">
            {progressMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-header">
                  <div className="metric-name">{metric.name}</div>
                  <div className="metric-trend">
                    {getTrendIcon(metric.trend)}
                  </div>
                </div>
                <div className="metric-value">
                  {formatValue(metric.value, metric.unit)}
                </div>
                <div className="metric-target">
                  Target: {formatValue(metric.target, metric.unit)}
                </div>
                <div className="metric-progress">
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill"
                      style={{ 
                        width: `${(metric.value / metric.target) * 100}%`,
                        backgroundColor: metric.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Insights */}
          <div className="insights-section">
            <h2>🧠 AI Learning Insights</h2>
            <div className="insights-grid">
              {learningInsights.map((insight, index) => (
                <div key={index} className={`insight-card ${insight.type}`}>
                  <div className="insight-header">
                    <div className="insight-title">{insight.title}</div>
                    <div className="insight-type">
                      {insight.type === 'achievement' && '🏆'}
                      {insight.type === 'improvement' && '📈'}
                      {insight.type === 'recommendation' && '💡'}
                    </div>
                  </div>
                  <div className="insight-description">
                    {insight.description}
                  </div>
                  <div className="insight-impact">
                    <strong>Impact:</strong> {insight.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="progress-actions">
            <button 
              className="action-button"
              onClick={() => navigate('/recommendations')}
            >
              Get Study Plan
            </button>
            <button 
              className="action-button secondary"
              onClick={() => navigate('/analysis')}
            >
              View Analysis
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
