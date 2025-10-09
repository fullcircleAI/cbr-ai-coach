import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import './MockExamSelection.css';

export const MockExamSelection: React.FC = () => {
  const navigate = useNavigate();

  const mockExams = [
    {
      id: 'beginner',
      name: 'Beginner Mock Exam',
      description: 'Perfect for first-time test takers',
      questions: 50,
      time: 30,
      passRate: 88,
      difficulty: 'Easy'
    },
    {
      id: 'intermediate',
      name: 'Intermediate Mock Exam',
      description: 'Standard CBR exam difficulty',
      questions: 50,
      time: 30,
      passRate: 88,
      difficulty: 'Medium'
    },
    {
      id: 'advanced',
      name: 'Advanced Mock Exam',
      description: 'Challenging questions for mastery',
      questions: 50,
      time: 30,
      passRate: 88,
      difficulty: 'Hard'
    }
  ];

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
                <h1>Mock Exams</h1>
              </div>
            </div>
          </div>

          <div className="tests-content">
            <div className="tests-grid">
              {mockExams.map((exam) => (
                <div
                  key={exam.id}
                  className="test-card"
                  onClick={() => handleExamClick(exam.id)}
                >
                  <div className="test-content">
                    <h3 className="test-name">{exam.name}</h3>
                    <p className="test-description">{exam.description}</p>
                    <div className="test-meta">
                      <span>{exam.questions} questions</span>
                      <span>•</span>
                      <span>{exam.time} min</span>
                      <span>•</span>
                      <span>{exam.passRate}% to pass</span>
                    </div>
                    <div className={`test-difficulty ${exam.difficulty.toLowerCase()}`}>
                      {exam.difficulty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

