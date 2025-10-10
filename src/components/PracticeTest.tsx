import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import * as questionData from '../question_data';
import { lightHaptic, successHaptic, errorHaptic } from '../utils/haptics';
import './PracticeTest.css';
import './PracticeResult.css';

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [testComplete, setTestComplete] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Hide mobile footer during practice tests
  useEffect(() => {
    document.body.classList.add('practice-test-active');
    return () => {
      document.body.classList.remove('practice-test-active');
    };
  }, []);

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
    };
    loadQuestions();
  }, [testId]);

  const handleAnswer = (answerId: string) => {
    if (!isAnswered) {
      lightHaptic(); // Haptic feedback on selection
      setSelectedAnswer(answerId);
      setIsAnswered(true);
      setShowExplanation(true);
      
      if (answerId === questions[currentQuestionIndex].correctAnswerId) {
        setScore(score + 1);
        successHaptic(); // Success haptic for correct answer
      } else {
        errorHaptic(); // Error haptic for wrong answer
      }
    }
  };

  const nextQuestion = () => {
    lightHaptic(); // Haptic feedback on next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      setTestComplete(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
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

  const getMotivationWord = () => {
    const isCorrect = selectedAnswer === questions[currentQuestionIndex]?.correctAnswerId;
    if (isCorrect) {
      const words = ['Excellent!', 'Perfect!', 'Great!', 'Correct!', 'Well done!'];
      return words[Math.floor(Math.random() * words.length)];
    } else {
      const words = ['Try again', 'Not quite', 'Incorrect', 'Wrong answer', 'Keep trying'];
      return words[Math.floor(Math.random() * words.length)];
    }
  };

  const getNextTest = () => {
    const allTests = [
      { id: 'traffic-lights-signals', name: 'Traffic Lights & Signals' },
      { id: 'priority-rules', name: 'Priority & Right of Way' },
      { id: 'hazard-perception', name: 'Hazard Perception' },
      { id: 'speed-safety', name: 'Speed & Safety' },
      { id: 'bicycle-interactions', name: 'Bicycle Interactions' },
      { id: 'roundabout-rules', name: 'Roundabout Rules' },
      { id: 'tram-interactions', name: 'Tram Interactions' },
      { id: 'pedestrian-crossings', name: 'Pedestrian Crossings' },
      { id: 'construction-zones', name: 'Construction Zones' },
      { id: 'weather-conditions', name: 'Weather Conditions' },
      { id: 'road-signs', name: 'Road Signs' },
      { id: 'motorway-rules', name: 'Motorway Rules' },
      { id: 'vehicle-knowledge', name: 'Vehicle Knowledge' },
      { id: 'parking-rules', name: 'Parking Rules' },
      { id: 'environmental', name: 'Environmental Zones' },
      { id: 'technology-safety', name: 'Technology & Safety' },
      { id: 'alcohol-drugs', name: 'Alcohol & Drugs' },
      { id: 'fatigue-rest', name: 'Fatigue & Rest' },
      { id: 'emergency-procedures', name: 'Emergency Procedures' },
      { id: 'insight-practice', name: 'Insight Practice' },
      { id: 'traffic-rules-signs', name: 'Traffic Rules & Signs' },
    ];
    
    const currentIndex = allTests.findIndex(test => test.id === testId);
    const nextIndex = (currentIndex + 1) % allTests.length;
    return allTests[nextIndex];
  };

  if (questions.length === 0) {
    return (
      <div className="main-layout">
        <Navigation />
        <main className="main-content">
          <div className="practice-test">
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
    const nextTest = getNextTest();

    return (
      <div className="result-page">
        <div className="result-content-row">
          <div className="result-content-main">
            <div className="result-card">
              <div className="result-header">
                <h1>Test Complete!</h1>
                <h2>{getTestName()}</h2>
              </div>
              
              <div className="result-score">
                <div className="score-display">
                  <span className="score-number">{score}</span>
                  <span className="score-separator">/</span>
                  <span className="score-total">{questions.length}</span>
                </div>
                <div className="score-percentage">{percentage}%</div>
              </div>

              <div className={`result-message ${percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'practice'}`}>
                {percentage >= 80 ? 'Excellent Work!' : percentage >= 60 ? 'Good Job!' : 'Keep Practicing!'}
              </div>

              <div className="result-actions">
                <button className="practice-nav-btn next-test" onClick={() => navigate(`/practice/${nextTest.id}`)}>
                  Next: {nextTest.name}
                </button>
                <button className="practice-nav-btn primary" onClick={() => window.location.reload()}>
                  Retake Test
                </button>
                <button className="practice-nav-btn" onClick={() => navigate('/')}>
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswerId;
  const motivationWord = getMotivationWord();

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        <div className="practice-test">
          <div className="practice-progress-bar">
            <div className="practice-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          
          <div className="practice-header-row">
            <div className="practice-subject-row">
              <span className="practice-question-number">
                Question {currentQuestionIndex + 1} of {questions.length}:
              </span>
              <span className="practice-question-subject">{currentQuestion.subject}</span>
            </div>
            <div className="practice-header-controls">
              <button
                className="practice-exit-btn" 
                onClick={() => navigate('/')}
                aria-label="Back to Dashboard"
                title="Back to Dashboard"
              >
                ←
              </button>
              <button className={`practice-mute-btn${isMuted ? ' muted' : ''}`} onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>

          <div className="practice-question-text">
            {currentQuestion.text}
          </div>

          {currentQuestion.imageUrl && (
            <div className="practice-question-image">
              <img src={currentQuestion.imageUrl} alt="question visual" style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain' }} />
            </div>
          )}

          <div className="practice-options-list">
            {currentQuestion.options.map((option, idx) => (
              <label key={option.id} className={`practice-option-label${selectedAnswer === option.id ? ' selected' : ''}${isAnswered && currentQuestion.correctAnswerId === option.id ? ' correct' : ''}${isAnswered && selectedAnswer === option.id && selectedAnswer !== currentQuestion.correctAnswerId ? ' incorrect' : ''}`}> 
                <input
                  type="radio"
                  name="practice-option"
                  value={option.id}
                  checked={selectedAnswer === option.id}
                  onChange={() => handleAnswer(option.id)}
                  disabled={isAnswered}
                />
                <span className="practice-option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="practice-option-text">{option.text}</span>
              </label>
            ))}
          </div>

          {showExplanation && (
            <div className="practice-explanation-section">
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isAnswered && (
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: isCorrect ? '#059669' : '#dc2626',
                    background: isCorrect ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginRight: '0.7rem',
                    minWidth: 0,
                    whiteSpace: 'nowrap',
                    borderRadius: '8px',
                    padding: '0.25em 0.6em',
                    display: 'inline-block',
                    boxShadow: isCorrect ? '0 1px 4px rgba(5, 150, 105, 0.2)' : '0 1px 4px rgba(220, 38, 38, 0.2)',
                    border: isCorrect ? '1px solid #a7f3d0' : '1px solid #fecaca',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                  }}>
                    {motivationWord}
                  </span>
                )}
                <div className="practice-explanation-label" style={{ fontSize: '1rem', margin: '0 auto' }}>Explanation</div>
              </div>
              <div className="practice-explanation-text" style={{ fontSize: '0.95rem' }}>{currentQuestion.explanation}</div>
            </div>
          )}
          
          {/* Always show Next button after answering */}
          {isAnswered && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0' }}>
              <button
                className="practice-nav-btn"
                onClick={nextQuestion}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};