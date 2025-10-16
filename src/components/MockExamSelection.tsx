import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navigation } from './Navigation';
import { aiCoach } from '../services/aiCoach';
import './MockExamSelection.css';

export const MockExamSelection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [recentScores, setRecentScores] = useState<Record<string, any>>({});
  const [unlockProgress, setUnlockProgress] = useState(aiCoach.getUnlockProgress());
  const [showUnlockCelebration, setShowUnlockCelebration] = useState(false);

  const mockExams = [
    {
      id: 'beginner',
      name: 'Exam 1',
      description: '',
      questions: 50,
      time: 30,
      passRate: 88,
      difficulty: ''
    },
    {
      id: 'intermediate',
      name: 'Exam 2',
      description: '',
      questions: 50,
      time: 30,
      passRate: 92,
      difficulty: ''
    },
    {
      id: 'advanced',
      name: 'Exam 3',
      description: '',
      questions: 50,
      time: 30,
      passRate: 96,
      difficulty: ''
    }
  ];

  useEffect(() => {
    // Load recent scores from localStorage
    const scores: Record<string, any> = {};
    mockExams.forEach(exam => {
      const result = localStorage.getItem(`mockExamResults_${exam.id}`);
      if (result) {
        scores[exam.id] = JSON.parse(result);
      }
    });
    setRecentScores(scores);
    
    // Update unlock progress
    const newUnlockProgress = aiCoach.getUnlockProgress();
    setUnlockProgress(newUnlockProgress);
    
    // Show celebration if just unlocked
    if (newUnlockProgress.canUnlock && !unlockProgress.canUnlock) {
      setShowUnlockCelebration(true);
      setTimeout(() => setShowUnlockCelebration(false), 5000); // Hide after 5 seconds
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExamClick = (examId: string) => {
    // Check if mock exams are unlocked
    if (!unlockProgress.canUnlock) {
      // Show unlock requirements instead of navigating
      return;
    }
    navigate(`/mock-exam/${examId}`);
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content tests-page">
        <div className="tests-page">
          <div className="tests-header">
            <div className="header-content">
              <div className="header-text">
                <h1>{t('quiz.title')}</h1>
                <div className="mock-exam-requirement-note">
                  <div className="requirement-icon">📋</div>
                  <div className="requirement-text">
                    <strong>Requirement:</strong> Score 70% or higher on practice tests to access mock exams
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tests-content">
            {/* Unlock Progress Banner */}
            {!unlockProgress.canUnlock && (
              <div className="unlock-progress-banner">
                <div className="unlock-icon">🔒</div>
                <div className="unlock-content">
                  <h3>Mock Exams Locked</h3>
                  <p>Complete practice tests to unlock mock exams</p>
                  <div className="unlock-requirements">
                    <div className={`requirement ${unlockProgress.completedTests >= unlockProgress.requiredTests ? 'met' : 'pending'}`}>
                      <span className="requirement-icon">{unlockProgress.completedTests >= unlockProgress.requiredTests ? '✅' : '⏳'}</span>
                      <span>{unlockProgress.completedTests}/{unlockProgress.requiredTests} tests completed</span>
                    </div>
                    <div className={`requirement ${unlockProgress.averageScore >= unlockProgress.requiredAverage ? 'met' : 'pending'}`}>
                      <span className="requirement-icon">{unlockProgress.averageScore >= unlockProgress.requiredAverage ? '✅' : '⏳'}</span>
                      <span>{unlockProgress.averageScore}% average (need {unlockProgress.requiredAverage}%)</span>
                    </div>
                    <div className={`requirement ${unlockProgress.minTestScore >= unlockProgress.requiredMinScore ? 'met' : 'pending'}`}>
                      <span className="requirement-icon">{unlockProgress.minTestScore >= unlockProgress.requiredMinScore ? '✅' : '⏳'}</span>
                      <span>Lowest test: {unlockProgress.minTestScore}% (need {unlockProgress.requiredMinScore}%)</span>
                    </div>
                    <div className={`requirement ${unlockProgress.studyTime >= unlockProgress.requiredStudyTime ? 'met' : 'pending'}`}>
                      <span className="requirement-icon">{unlockProgress.studyTime >= unlockProgress.requiredStudyTime ? '✅' : '⏳'}</span>
                      <span>{unlockProgress.studyTime}h study time (need {unlockProgress.requiredStudyTime}h)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="tests-grid">
              {mockExams.map((exam) => {
                const recentScore = recentScores[exam.id];
                const isLocked = !unlockProgress.canUnlock;
                
                return (
                  <div
                    key={exam.id}
                    className={`test-card ${isLocked ? 'locked' : 'unlocked'}`}
                    onClick={() => handleExamClick(exam.id)}
                  >
                    <div className="test-content">
                      <div className="test-header">
                        <h3 className="test-name">{exam.name}</h3>
                        {isLocked && <div className="lock-icon">🔒</div>}
                      </div>
                      
                      {recentScore && !isLocked && (
                        <div className={`recent-score ${recentScore.passed ? 'passed' : 'failed'}`}>
                          Recent: {recentScore.score}/{exam.questions} ({recentScore.percentage}%)
                        </div>
                      )}
                      
                      <div className="test-meta">
                        <span>{exam.questions} questions</span>
                        <span>•</span>
                        <span>{exam.time} min</span>
                        <span>•</span>
                        <span>{exam.passRate}% to pass</span>
                      </div>
                      
                      {isLocked && (
                        <div className="locked-message">
                          Complete practice tests to unlock
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Unlock Celebration Modal */}
      {showUnlockCelebration && (
        <div className="unlock-celebration-overlay">
          <div className="unlock-celebration-modal">
            <div className="celebration-icon">🎉</div>
            <h2>Mock Exams Unlocked!</h2>
            <p>Congratulations! You've completed enough practice tests with good scores to unlock mock exams.</p>
            <div className="celebration-achievements">
              <div className="achievement">✅ {unlockProgress.completedTests} tests completed</div>
              <div className="achievement">✅ {unlockProgress.averageScore}% average score</div>
              <div className="achievement">✅ All tests above 70%</div>
              <div className="achievement">✅ {unlockProgress.studyTime}h study time</div>
            </div>
            <button 
              className="celebration-close-btn"
              onClick={() => setShowUnlockCelebration(false)}
            >
              Start Mock Exams
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

