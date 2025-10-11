import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Navigation } from './Navigation';
import './MockExamSelection.css';

export const MockExamSelection: React.FC = () => {
  const navigate = useNavigate();
  const { t_nested } = useLanguage();
  const [recentScores, setRecentScores] = useState<Record<string, any>>({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExamClick = (examId: string) => {
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
                <h1>{t_nested('quiz.title')}</h1>
              </div>
            </div>
          </div>

          <div className="tests-content">
            <div className="tests-grid">
              {mockExams.map((exam) => {
                const recentScore = recentScores[exam.id];
                
                return (
                  <div
                    key={exam.id}
                    className="test-card"
                    onClick={() => handleExamClick(exam.id)}
                  >
                    <div className="test-content">
                      <h3 className="test-name">{exam.name}</h3>
                      
                      {recentScore && (
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

