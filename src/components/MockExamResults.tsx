import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import './MockExamResults.css';

interface ResultsData {
  examId: string;
  score: number;
  percentage: number;
  passed: boolean;
  totalQuestions: number;
  timeUsed: number;
  difficulty: string;
  passRate: number;
}

export const MockExamResults: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const resultsData = location.state as ResultsData;

  if (!resultsData) {
    navigate('/mock-exam');
    return null;
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyLabel = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="mock-results-page">
          <div className={`results-status-banner ${resultsData.passed ? 'passed' : 'failed'}`}>
            <div className="status-icon">
              {resultsData.passed ? '✅' : '❌'}
            </div>
            <h1>{resultsData.passed ? 'GEFELICITEERD!' : 'HELAAS'}</h1>
            <h2>{resultsData.passed ? 'Je bent geslaagd!' : 'Je bent gezakt'}</h2>
          </div>

          <div className="results-summary">
            <div className="exam-title">
              <h3>{getDifficultyLabel(resultsData.difficulty)} Mock Exam</h3>
              <p>Official CBR Format</p>
            </div>

            <div className="results-grid">
              <div className="result-card">
                <div className="result-label">Score</div>
                <div className="result-value large">
                  {resultsData.score}/{resultsData.totalQuestions}
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Percentage</div>
                <div className={`result-value large ${resultsData.passed ? 'passed-text' : 'failed-text'}`}>
                  {resultsData.percentage}%
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Pass Rate Required</div>
                <div className="result-value">
                  {resultsData.passRate}%
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Time Used</div>
                <div className="result-value">
                  {formatTime(resultsData.timeUsed)}
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Correct Answers</div>
                <div className="result-value">
                  {resultsData.score}
                </div>
              </div>

              <div className="result-card">
                <div className="result-label">Incorrect Answers</div>
                <div className="result-value">
                  {resultsData.totalQuestions - resultsData.score}
                </div>
              </div>
            </div>
          </div>

          <div className="results-message">
            {resultsData.passed ? (
              <div className="message-box success">
                <p className="message-title">Uitstekend werk!</p>
                <p>Je hebt het examen met succes afgerond. Je bent klaar om het echte CBR-examen af te leggen!</p>
              </div>
            ) : (
              <div className="message-box failure">
                <p className="message-title">Blijf oefenen!</p>
                <p>Je had {Math.ceil(resultsData.passRate / 100 * resultsData.totalQuestions)} goede antwoorden nodig om te slagen. Oefen meer en probeer het opnieuw!</p>
              </div>
            )}
          </div>

          <div className="results-actions">
            <button 
              className="action-btn primary"
              onClick={() => navigate(`/mock-exam/${resultsData.examId}`)}
            >
              Opnieuw proberen
            </button>
            <button 
              className="action-btn secondary"
              onClick={() => navigate('/mock-exam')}
            >
              Andere Mock Exam
            </button>
            <button 
              className="action-btn"
              onClick={() => navigate('/')}
            >
              Terug naar Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

