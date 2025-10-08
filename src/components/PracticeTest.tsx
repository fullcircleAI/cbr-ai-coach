import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import * as questionData from '../question_data';
import './PracticeTest.css';

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
  imageUrl?: string;
  imageHint?: string;
  subject: string;
}

export const PracticeTest: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [testComplete, setTestComplete] = useState(false);

  useEffect(() => {
    const loadQuestions = () => {
      let questions: Question[] = [];
      switch (testId) {
        case 'traffic-lights-signals':
          questions = questionData.trafficLightsSignalsQuestions;
          break;
        case 'priority-rules':
          questions = questionData.priorityRulesQuestions;
          break;
        case 'hazard-perception':
          questions = questionData.hazardPerceptionQuestions;
          break;
        case 'speed-safety':
          questions = questionData.speedLimitQuestions;
          break;
        case 'bicycle-interactions':
          questions = questionData.bicycleInteractionsQuestions;
          break;
        case 'roundabout-rules':
          questions = questionData.roundaboutRulesQuestions;
          break;
        case 'tram-interactions':
          questions = questionData.tramInteractionsQuestions;
          break;
        case 'pedestrian-crossings':
          questions = questionData.pedestrianCrossingsQuestions;
          break;
        case 'construction-zones':
          questions = questionData.constructionZonesQuestions;
          break;
        case 'weather-conditions':
          questions = questionData.weatherConditionsQuestions;
          break;
        case 'road-signs':
          questions = questionData.signIdentificationQuestions;
          break;
        case 'motorway-rules':
          questions = questionData.motorwayRulesQuestions;
          break;
        case 'vehicle-knowledge':
          questions = questionData.vehicleCategoriesQuestions;
          break;
        case 'parking-rules':
          questions = questionData.parkingRulesQuestions;
          break;
        case 'environmental':
          questions = questionData.environmentalZonesQuestions;
          break;
        case 'technology-safety':
          questions = questionData.technologySafetyQuestions;
          break;
        case 'alcohol-drugs':
          questions = questionData.alcoholDrugsQuestions;
          break;
        case 'fatigue-rest':
          questions = questionData.fatigueRestQuestions;
          break;
        case 'emergency-procedures':
          questions = questionData.emergencyProceduresQuestions;
          break;
        case 'insight-practice':
          questions = questionData.insightPracticeQuestions;
          break;
        case 'traffic-rules-signs':
          questions = questionData.mandatorySignQuestions;
          break;
        default:
          questions = questionData.trafficLightsSignalsQuestions;
      }
      setQuestions(questions);
      setStartTime(Date.now());
    };
    loadQuestions();
  }, [testId]);

  const handleAnswerSelect = (answerId: string) => {
    if (!showResult) {
      setSelectedAnswer(answerId);
    }
  };

  const handleShowResult = () => {
    if (selectedAnswer) {
      setShowResult(true);
      if (selectedAnswer === questions[currentQuestion].correctAnswerId) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setTestComplete(true);
    }
  };

  const handleRetakeTest = () => {
    window.location.reload();
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  const getTestName = () => {
    switch (testId) {
      case 'traffic-lights-signals': return 'Traffic Lights & Signals';
      case 'priority-rules': return 'Priority & Right of Way';
      case 'hazard-perception': return 'Hazard Perception';
      case 'speed-safety': return 'Speed & Safety';
      case 'bicycle-interactions': return 'Bicycle Interactions';
      case 'roundabout-rules': return 'Roundabout Rules';
      case 'tram-interactions': return 'Tram Interactions';
      case 'pedestrian-crossings': return 'Pedestrian Crossings';
      case 'construction-zones': return 'Construction Zones';
      case 'weather-conditions': return 'Weather Conditions';
      case 'road-signs': return 'Road Signs';
      case 'motorway-rules': return 'Motorway Rules';
      case 'vehicle-knowledge': return 'Vehicle Knowledge';
      case 'parking-rules': return 'Parking Rules';
      case 'environmental': return 'Environmental Zones';
      case 'technology-safety': return 'Technology & Safety';
      case 'alcohol-drugs': return 'Alcohol & Drugs';
      case 'fatigue-rest': return 'Fatigue & Rest';
      case 'emergency-procedures': return 'Emergency Procedures';
      case 'insight-practice': return 'Insight Practice';
      case 'traffic-rules-signs': return 'Traffic Rules & Signs';
      default: return 'Practice Test';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="main-layout">
        <Navigation />
        <main className="main-content">
          <div className="practice-test-container">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div>Loading questions...</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Results page
  if (testComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // minutes

    return (
      <div className="main-layout">
        <Navigation />
        <main className="main-content">
          <div className="practice-test-container">
            <div className="test-result">
              <div className="result-header">
                <h1>🎉 Test Complete!</h1>
                <h2>{getTestName()}</h2>
              </div>
              
              <div className="result-score">
                <div className="score-display">
                  <span className="score-number">{score}</span>
                  <span className="score-separator">/</span>
                  <span className="score-total">{questions.length}</span>
                </div>
                <div className="score-percentage">({percentage}%)</div>
              </div>

              <div className={`result-message ${percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'practice'}`}>
                {percentage >= 80 ? '🎯 Excellent Work!' : percentage >= 60 ? '👍 Good Job!' : '📚 Keep Practicing!'}
              </div>

              <div className="result-details">
                <div className="detail-item">
                  <span className="detail-label">Time Spent:</span>
                  <span className="detail-value">{timeSpent} minutes</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Accuracy:</span>
                  <span className="detail-value">{percentage}%</span>
                </div>
              </div>

              <div className="result-actions">
                <button className="action-button primary" onClick={handleRetakeTest}>
                  🔄 Retake Test
                </button>
                <button className="action-button" onClick={handleBackToDashboard}>
                  🏠 Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="practice-test-container">
          <div className="test-header">
            <div className="test-info">
              <h2>{getTestName()}</h2>
              <div className="test-progress">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
          </div>

          <div className="test-progress">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>

          <div className="question-container">
            <div className="question-card">
              <div className="question-text">
                {currentQ.text}
              </div>
              
              {currentQ.imageUrl && (
                <div className="question-image">
                  <img 
                    src={currentQ.imageUrl} 
                    alt={currentQ.imageHint || 'Question image'} 
                  />
                </div>
              )}

              <div className="answer-options">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    className={`answer-option ${selectedAnswer === option.id ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(option.id)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="answer-explanation">
                  <div className={`explanation-header ${selectedAnswer === currentQ.correctAnswerId ? 'correct' : 'incorrect'}`}>
                    {selectedAnswer === currentQ.correctAnswerId ? '✅ Correct!' : '❌ Incorrect'}
                  </div>
                  <div className="explanation-text">
                    {currentQ.explanation}
                  </div>
                </div>
              )}

              <div className="question-actions">
                {!showResult ? (
                  <button 
                    className="action-button"
                    onClick={handleShowResult}
                    disabled={!selectedAnswer}
                  >
                    Check Answer
                  </button>
                ) : (
                  <button 
                    className="action-button"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Test'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};