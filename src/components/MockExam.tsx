import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { lightHaptic, impactHaptic } from '../utils/haptics';
import './MockExam.css';
import * as questionData from '../question_data';

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

interface MockExamConfig {
  questions: number;
  timeLimit: number; // in minutes
  passRate: number; // percentage
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const MockExam: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();

  // Mock exam configurations - ONLY pass mark differs (official CBR format)
  const examConfigs: Record<string, MockExamConfig> = {
    'beginner': { questions: 50, timeLimit: 30, passRate: 88, difficulty: 'beginner' }, // Official CBR: 44/50
    'intermediate': { questions: 50, timeLimit: 30, passRate: 92, difficulty: 'intermediate' }, // Higher: 46/50
    'advanced': { questions: 50, timeLimit: 30, passRate: 96, difficulty: 'advanced' } // Highest: 48/50
  };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [examConfig, setExamConfig] = useState<MockExamConfig | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Hide mobile footer during mock exam
  useEffect(() => {
    document.body.classList.add('practice-test-active');
    return () => {
      document.body.classList.remove('practice-test-active');
    };
  }, []);

  // Load exam configuration and questions
  useEffect(() => {
    if (!examId) return;

    const config = examConfigs[examId];
    if (!config) {
      navigate('/mock-exam');
      return;
    }

    setExamConfig(config);
    setTimeLeft(config.timeLimit * 60); // Convert minutes to seconds

    // Create formatted exam with proper question distribution
    const formattedQuestions = createFormattedExam(config.difficulty);
    setQuestions(formattedQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, navigate]);

  // Create formatted exam - 50 questions: 25 Traffic Rules, 15 Hazard Perception, 10 Insight
  const createFormattedExam = (_difficulty: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
    const trafficRulesQuestions = [
      ...questionData.trafficLightsSignalsQuestions,
      ...questionData.priorityRulesQuestions,
      ...questionData.speedLimitQuestions,
      ...questionData.roadMarkingsQuestions,
      ...questionData.expandedPriorityRulesQuestions,
      ...questionData.motorwayRulesQuestions,
      ...questionData.parkingRulesQuestions,
      ...questionData.environmentalZonesQuestions,
      ...questionData.technologySafetyQuestions,
      ...questionData.alcoholDrugsQuestions,
      ...questionData.fatigueRestQuestions,
      ...questionData.emergencyProceduresQuestions,
      ...questionData.bicycleInteractionsQuestions,
      ...questionData.roundaboutRulesQuestions,
      ...questionData.tramInteractionsQuestions,
      ...questionData.pedestrianCrossingsQuestions,
      ...questionData.constructionZonesQuestions,
      ...questionData.weatherConditionsQuestions,
      ...questionData.vehicleCategoriesQuestions,
      ...questionData.vehicleDocumentationQuestions,
      ...questionData.mandatorySignQuestions,
      ...questionData.warningSignsQuestions,
      ...questionData.prohibitorySignsQuestions,
      ...questionData.prohibitorySigns2Questions,
      ...questionData.roadInformationQuestions,
      ...questionData.signIdentificationQuestions,
      ...questionData.mandatorySigns2Questions
    ];

    const hazardPerceptionList = [...questionData.hazardPerceptionQuestions];
    const trafficInsightList = [...questionData.insightPracticeQuestions];

    // Shuffle each category
    const shuffledTrafficRules = [...trafficRulesQuestions].sort(() => Math.random() - 0.5);
    const shuffledHazardPerception = [...hazardPerceptionList].sort(() => Math.random() - 0.5);
    const shuffledTrafficInsight = [...trafficInsightList].sort(() => Math.random() - 0.5);

    // Select questions: 25 + 15 + 10 = 50
    const selectedTrafficRules = shuffledTrafficRules.slice(0, 25);
    const selectedHazardPerception = shuffledHazardPerception.slice(0, 15);
    const selectedTrafficInsight = shuffledTrafficInsight.slice(0, 10);

    // Combine and shuffle final exam
    const exam = [
      ...selectedTrafficRules,
      ...selectedHazardPerception,
      ...selectedTrafficInsight
    ].sort(() => Math.random() - 0.5);

    return exam;
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamStarted || isFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExamStarted, isFinished, timeLeft]);

  const startExam = () => {
    setIsExamStarted(true);
  };

  const finishExam = () => {
    impactHaptic(); // Heavy haptic for exam completion
    setIsFinished(true);

    // Calculate final score
    const correctAnswers = Object.values(answers).filter((answer, index) =>
      answer === questions[index]?.correctAnswerId
    ).length;
    
    // Navigate to results page with data
    if (examConfig && examId) {
      const percentage = Math.round((correctAnswers / examConfig.questions) * 100);
      const passed = percentage >= examConfig.passRate;
      
      const resultsData = {
        examId,
        score: correctAnswers,
        percentage,
        passed,
        totalQuestions: examConfig.questions,
        timeUsed: (examConfig.timeLimit * 60) - timeLeft,
        difficulty: examConfig.difficulty,
        passRate: examConfig.passRate
      };
      
      // Save to localStorage
      localStorage.setItem(`mockExamResults_${examId}`, JSON.stringify(resultsData));
      
      // Navigate to results page
      navigate('/mock-exam/results', { state: resultsData });
    }
  };


  const handleAnswer = (answerId: string) => {
    if (isAnswered || !isExamStarted) return;

    lightHaptic(); // Haptic feedback on answer selection
    setIsAnswered(true);
    setSelectedAnswer(answerId);
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerId }));

    // Instant next question (like real CBR - no delays)
    setTimeout(() => {
      nextQuestion();
    }, 300);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      finishExam();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  if (!examConfig || questions.length === 0) {
    return null;
  }


  // Intro Screen - Native iOS/Android style
  if (!isExamStarted) {
    const quizNumber = examId === 'beginner' ? '1' : examId === 'intermediate' ? '2' : '3';
    
    return (
      <div className="main-layout">
        <Navigation />
        <main className="main-content">
          <div className="mock-exam-intro">
            <button className="back-btn" onClick={() => navigate('/mock-exam')}>
              ← Back
            </button>
            
            <div className="intro-header">
              <h1 className="intro-title">Quiz {quizNumber}</h1>
              <p className="intro-subtitle">CBR Mock Exam</p>
            </div>

            <div className="exam-info-cards">
              <div className="info-card">
                <div className="info-icon">📝</div>
                <div className="info-details">
                  <span className="info-value">{examConfig.questions}</span>
                  <span className="info-label">Questions</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">⏱️</div>
                <div className="info-details">
                  <span className="info-value">{examConfig.timeLimit}</span>
                  <span className="info-label">Minutes</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">✅</div>
                <div className="info-details">
                  <span className="info-value">{examConfig.passRate}%</span>
                  <span className="info-label">To Pass</span>
                </div>
              </div>
            </div>

            <div className="exam-instructions">
              <div className="instruction-item">
                <span className="instruction-icon">•</span>
                <span>No explanations during exam</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">•</span>
                <span>Results shown at the end</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">•</span>
                <span>Questions randomly selected</span>
              </div>
            </div>

            <button className="start-exam-btn" onClick={startExam}>
              Start
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Exam Screen (using Practice Test design)
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
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="exam-timer" style={{ color: timeLeft < 300 ? '#ef4444' : '#10b981' }}>
                ⏱ {formatTime(timeLeft)}
              </span>
            </div>
            <div className="practice-header-controls">
              <button className="practice-exit-btn" onClick={() => navigate('/mock-exam')}>
                ✕
              </button>
              <button 
                className={`practice-mute-btn ${isMuted ? 'muted' : ''}`}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>

          <div className="practice-question-text">{currentQuestion.text}</div>

          {currentQuestion.imageUrl && (
            <div className="practice-question-image">
              <img src={currentQuestion.imageUrl} alt="Question" />
            </div>
          )}

          <div className="practice-options-list">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option.id;

              return (
                <button
                  key={option.id}
                  className={`practice-option-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleAnswer(option.id)}
                  disabled={isAnswered}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

