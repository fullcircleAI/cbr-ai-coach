import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mascot } from './Mascot';
import './AICoachAnalysis.css';

interface MistakePattern {
  topic: string;
  mistake: string;
  frequency: number;
  lastOccurrence: string;
  explanation: string;
  solution: string;
}

interface AIAnalysis {
  totalMistakes: number;
  mostCommonMistake: string;
  learningPattern: string;
  improvementRate: number;
  recommendations: string[];
}

export const AICoachAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [mistakePatterns, setMistakePatterns] = useState<MistakePattern[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);

  useEffect(() => {
    // Simulate loading mistake analysis data
    const mockMistakes: MistakePattern[] = [
      {
        topic: 'Traffic Lights',
        mistake: 'Confusing red and amber signals',
        frequency: 4,
        lastOccurrence: '2 hours ago',
        explanation: 'You\'re mixing up the sequence of traffic light changes. Red means stop, amber means prepare to stop.',
        solution: 'Practice with visual examples of traffic light sequences. Remember: Red → Amber → Green → Amber → Red'
      },
      {
        topic: 'Priority Rules',
        mistake: 'Giving way to the right incorrectly',
        frequency: 3,
        lastOccurrence: '1 day ago',
        explanation: 'You\'re not recognizing when you have right of way vs when you should give way.',
        solution: 'Study the priority triangle rule: if you see a triangle pointing down, you must give way to traffic from the right'
      },
      {
        topic: 'Roundabouts',
        mistake: 'Wrong lane selection',
        frequency: 2,
        lastOccurrence: '3 days ago',
        explanation: 'You\'re choosing the wrong lane for your intended exit direction.',
        solution: 'Left lane for left/straight, right lane for right/straight. Practice with roundabout diagrams'
      }
    ];

    const mockAnalysis: AIAnalysis = {
      totalMistakes: 9,
      mostCommonMistake: 'Traffic light signal confusion',
      learningPattern: 'You learn 40% faster with visual examples',
      improvementRate: 15,
      recommendations: [
        'Focus on Traffic Lights - your biggest weakness',
        'Use visual learning methods for better retention',
        'Practice roundabouts with diagrams',
        'Review priority rules with real examples'
      ]
    };

    setMistakePatterns(mockMistakes);
    setAiAnalysis(mockAnalysis);
  }, []);

  return (
    <div className="main-layout">
      <main className="main-content">
        <div className="analysis-container">
          <div className="analysis-header">
            <div className="header-content">
              <div className="header-mascot">
                <Mascot size={60} />
              </div>
              <div className="header-text">
                <h1>🔍 AI Mistake Analysis</h1>
                <p>Discover exactly why you're struggling and how to improve</p>
              </div>
            </div>
            <button 
              className="back-button"
              onClick={() => navigate('/')}
            >
              ← Back to Dashboard
            </button>
          </div>

          {/* AI Analysis Summary */}
          {aiAnalysis && (
            <div className="analysis-summary">
              <h2>🧠 AI Learning Analysis</h2>
              <div className="summary-grid">
                <div className="summary-card">
                  <div className="summary-number">{aiAnalysis.totalMistakes}</div>
                  <div className="summary-label">Total Mistakes</div>
                </div>
                <div className="summary-card">
                  <div className="summary-number">{aiAnalysis.improvementRate}%</div>
                  <div className="summary-label">Improvement Rate</div>
                </div>
                <div className="summary-card">
                  <div className="summary-number">40%</div>
                  <div className="summary-label">Faster Learning</div>
                </div>
              </div>
              
              <div className="ai-insight">
                <h4>💡 AI Insight</h4>
                <p>{aiAnalysis.learningPattern}</p>
              </div>
            </div>
          )}

          {/* Mistake Patterns */}
          <div className="mistake-patterns">
            <h2>🎯 Your Mistake Patterns</h2>
            {mistakePatterns.map((pattern, index) => (
              <div key={index} className="mistake-card">
                <div className="mistake-header">
                  <div className="mistake-topic">{pattern.topic}</div>
                  <div className="mistake-frequency">{pattern.frequency} times</div>
                </div>
                <div className="mistake-details">
                  <div className="mistake-description">
                    <strong>Mistake:</strong> {pattern.mistake}
                  </div>
                  <div className="mistake-explanation">
                    <strong>Why:</strong> {pattern.explanation}
                  </div>
                  <div className="mistake-solution">
                    <strong>Solution:</strong> {pattern.solution}
                  </div>
                  <div className="mistake-timing">
                    Last occurred: {pattern.lastOccurrence}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Recommendations */}
          {aiAnalysis && (
            <div className="ai-recommendations">
              <h2>🚀 AI Recommendations</h2>
              <div className="recommendations-list">
                {aiAnalysis.recommendations.map((recommendation, index) => (
                  <div key={index} className="recommendation-item">
                    <div className="recommendation-number">{index + 1}</div>
                    <div className="recommendation-text">{recommendation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="analysis-actions">
            <button 
              className="action-button"
              onClick={() => navigate('/recommendations')}
            >
              Get Study Plan
            </button>
            <button 
              className="action-button secondary"
              onClick={() => navigate('/progress')}
            >
              View Progress
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
