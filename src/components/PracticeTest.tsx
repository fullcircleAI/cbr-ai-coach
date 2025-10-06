import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Mascot } from './Mascot';
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

interface TestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  mistakes: string[];
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
    // Load real questions based on testId
    const loadQuestions = () => {
      let questions: Question[] = [];
      
      switch (testId) {
        case 'traffic-lights-signals':
          questions = questionData.trafficLightsSignalsQuestions;
          break;
        case 'priority-rules':
          questions = questionData.priorityRulesQuestions;
          break;
        case 'roundabout-rules':
          questions = questionData.roundaboutRulesQuestions;
          break;
        case 'speed-limits':
          questions = questionData.speedLimitQuestions;
          break;
        case 'parking-rules':
          questions = questionData.parkingRulesQuestions;
          break;
        case 'hazard-perception':
          questions = questionData.hazardPerceptionQuestions;
          break;
        case 'motorway-rules':
          questions = questionData.motorwayRulesQuestions;
          break;
        case 'weather-conditions':
          questions = questionData.weatherConditionsQuestions;
          break;
        case 'mandatory-signs':
          questions = questionData.mandatorySignQuestions;
          break;
        case 'warning-signs':
          questions = questionData.warningSignsQuestions;
          break;
        case 'prohibitory-signs':
          questions = questionData.prohibitorySignsQuestions;
          break;
        case 'road-information':
          questions = questionData.roadInformationQuestions;
          break;
        case 'sign-identification':
          questions = questionData.signIdentificationQuestions;
          break;
        case 'road-markings':
          questions = questionData.roadMarkingsQuestions;
          break;
        case 'alcohol-drugs':
          questions = questionData.alcoholDrugsQuestions;
          break;
        case 'fatigue-rest':
          questions = questionData.fatigueRestQuestions;
          break;
        case 'vehicle-documentation':
          questions = questionData.vehicleDocumentationQuestions;
          break;
        case 'emergency-procedures':
          questions = questionData.emergencyProceduresQuestions;
          break;
        case 'bicycle-interactions':
          questions = questionData.bicycleInteractionsQuestions;
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
        case 'environmental-zones':
          questions = questionData.environmentalZonesQuestions;
          break;
        case 'technology-safety':
          questions = questionData.technologySafetyQuestions;
          break;
        case 'vehicle-categories':
          questions = questionData.vehicleCategoriesQuestions;
          break;
        case 'insight-practice':
          questions = questionData.insightPracticeQuestions;
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
    setSelectedAnswer(answerId);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswerId) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setTestComplete(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const getTestTitle = () => {
    const testTitles: { [key: string]: string } = {
      'traffic-lights-signals': 'Traffic Lights & Signals Practice',
      'priority-rules': 'Priority Rules Practice',
      'roundabout-rules': 'Roundabout Rules Practice',
      'speed-limits': 'Speed Limits Practice',
      'parking-rules': 'Parking Rules Practice',
      'hazard-perception': 'Hazard Perception Practice',
      'motorway-rules': 'Motorway Rules Practice',
      'weather-conditions': 'Weather Conditions Practice',
      'mandatory-signs': 'Mandatory Signs Practice',
      'warning-signs': 'Warning Signs Practice',
      'prohibitory-signs': 'Prohibitory Signs Practice',
      'road-information': 'Road Information Practice',
      'sign-identification': 'Sign Identification Practice',
      'road-markings': 'Road Markings Practice',
      'alcohol-drugs': 'Alcohol & Drugs Practice',
      'fatigue-rest': 'Fatigue & Rest Practice',
      'vehicle-documentation': 'Vehicle Documentation Practice',
      'emergency-procedures': 'Emergency Procedures Practice',
      'bicycle-interactions': 'Bicycle Interactions Practice',
      'tram-interactions': 'Tram Interactions Practice',
      'pedestrian-crossings': 'Pedestrian Crossings Practice',
      'construction-zones': 'Construction Zones Practice',
      'environmental-zones': 'Environmental Zones Practice',
      'technology-safety': 'Technology & Safety Practice',
      'vehicle-categories': 'Vehicle Categories Practice',
      'insight-practice': 'Insight Practice'
    };
    return testTitles[testId || ''] || 'Practice Test';
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return '#10b981';
    if (percentage >= 60) return '#f59e0b';
    return '#ef4444';
  };

  if (testComplete) {
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="practice-test-container">
        <div className="test-header">
          <div className="header-content">
            <div className="header-mascot">
              <Mascot size={60} />
            </div>
            <div className="header-text">
              <h1>🎉 Test Complete!</h1>
              <p>Great job on your practice test</p>
            </div>
          </div>
          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="test-results">
          <div className="result-card">
            <h2>Your Results</h2>
            <div className="score-display">
              <div className="score-circle">
                <div 
                  className="score-fill"
                  style={{ 
                    backgroundColor: getScoreColor(score, questions.length),
                    width: `${percentage}%`
                  }}
                ></div>
                <div className="score-text">
                  <div className="score-number">{score}/{questions.length}</div>
                  <div className="score-percentage">{percentage}%</div>
                </div>
              </div>
            </div>
            
            <div className="result-details">
              <div className="detail-item">
                <span className="detail-label">Correct Answers:</span>
                <span className="detail-value">{score}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Questions:</span>
                <span className="detail-value">{questions.length}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Time Spent:</span>
                <span className="detail-value">{timeSpent} minutes</span>
              </div>
            </div>

            <div className="result-actions">
              <button 
                className="action-button"
                onClick={() => navigate('/')}
              >
                Back to Dashboard
              </button>
              <button 
                className="action-button secondary"
                onClick={() => window.location.reload()}
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="loading">Loading questions...</div>;
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="practice-test-container">
          <div className="test-header">
            <div className="header-content">
              <div className="header-mascot">
                <Mascot size={60} />
              </div>
              <div className="header-text">
                <h1>{getTestTitle()}</h1>
                <p>Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <button 
              className="back-button"
              onClick={() => navigate('/')}
            >
              ← Back to Dashboard
            </button>
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
                    {selectedAnswer === currentQ.correctAnswerId ? 'Correct!' : 'Incorrect'}
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
