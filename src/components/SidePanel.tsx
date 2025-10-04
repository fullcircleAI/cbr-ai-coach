import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SidePanel.css';

interface PracticeTest {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const SidePanel: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const practiceTests: PracticeTest[] = [
    {
      id: 'traffic-lights',
      name: 'Traffic Lights',
      description: 'Traffic light signals and sequences',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signals'
    },
    {
      id: 'priority-rules',
      name: 'Priority Rules',
      description: 'Right of way and priority situations',
      questionCount: 30,
      difficulty: 'hard',
      category: 'Rules'
    },
    {
      id: 'roundabouts',
      name: 'Roundabouts',
      description: 'Roundabout entry, exit, and lane selection',
      questionCount: 20,
      difficulty: 'hard',
      category: 'Maneuvers'
    },
    {
      id: 'speed-limits',
      name: 'Speed Limits',
      description: 'Speed limits and restrictions',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Rules'
    },
    {
      id: 'parking',
      name: 'Parking Rules',
      description: 'Parking regulations and restrictions',
      questionCount: 22,
      difficulty: 'medium',
      category: 'Rules'
    },
    {
      id: 'hazard-perception',
      name: 'Hazard Perception',
      description: 'Identifying and responding to hazards',
      questionCount: 18,
      difficulty: 'hard',
      category: 'Safety'
    },
    {
      id: 'motorway',
      name: 'Motorway Rules',
      description: 'Highway and motorway regulations',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Rules'
    },
    {
      id: 'weather',
      name: 'Weather Conditions',
      description: 'Driving in different weather conditions',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Safety'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const handleTestClick = (testId: string) => {
    navigate(`/practice/${testId}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)} />}
      
      {/* Side Panel */}
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>Practice Tests</h3>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        
        <div className="panel-content">
          <div className="practice-tests">
            {practiceTests.map((test) => (
              <div 
                key={test.id}
                className="practice-test-card"
                onClick={() => handleTestClick(test.id)}
              >
                <div className="test-header">
                  <div className="test-name">{test.name}</div>
                  <div 
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(test.difficulty) }}
                  >
                    {test.difficulty}
                  </div>
                </div>
                <div className="test-description">{test.description}</div>
                <div className="test-meta">
                  <span className="question-count">{test.questionCount} questions</span>
                  <span className="category">{test.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        className="panel-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        📚 Practice
      </button>
    </>
  );
};
