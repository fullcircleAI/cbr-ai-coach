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
      id: 'traffic-lights-signals',
      name: 'Traffic Lights & Signals',
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
      id: 'roundabout-rules',
      name: 'Roundabout Rules',
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
      id: 'parking-rules',
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
      id: 'motorway-rules',
      name: 'Motorway Rules',
      description: 'Highway and motorway regulations',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Rules'
    },
    {
      id: 'weather-conditions',
      name: 'Weather Conditions',
      description: 'Driving in different weather conditions',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Safety'
    },
    {
      id: 'mandatory-signs',
      name: 'Mandatory Signs',
      description: 'Mandatory traffic signs and their meanings',
      questionCount: 20,
      difficulty: 'medium',
      category: 'Signs'
    },
    {
      id: 'warning-signs',
      name: 'Warning Signs',
      description: 'Warning signs and hazard indicators',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Signs'
    },
    {
      id: 'prohibitory-signs',
      name: 'Prohibitory Signs',
      description: 'Prohibitory signs and restrictions',
      questionCount: 22,
      difficulty: 'medium',
      category: 'Signs'
    },
    {
      id: 'road-information',
      name: 'Road Information',
      description: 'Road information signs and markings',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Information'
    },
    {
      id: 'sign-identification',
      name: 'Sign Identification',
      description: 'Identifying and understanding traffic signs',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signs'
    },
    {
      id: 'road-markings',
      name: 'Road Markings',
      description: 'Road markings and their meanings',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Markings'
    },
    {
      id: 'alcohol-drugs',
      name: 'Alcohol & Drugs',
      description: 'Alcohol and drug regulations for drivers',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Safety'
    },
    {
      id: 'fatigue-rest',
      name: 'Fatigue & Rest',
      description: 'Driver fatigue and rest requirements',
      questionCount: 10,
      difficulty: 'easy',
      category: 'Safety'
    },
    {
      id: 'vehicle-documentation',
      name: 'Vehicle Documentation',
      description: 'Required vehicle documents and inspections',
      questionCount: 14,
      difficulty: 'medium',
      category: 'Documentation'
    },
    {
      id: 'emergency-procedures',
      name: 'Emergency Procedures',
      description: 'Emergency situations and procedures',
      questionCount: 16,
      difficulty: 'hard',
      category: 'Safety'
    },
    {
      id: 'bicycle-interactions',
      name: 'Bicycle Interactions',
      description: 'Interacting with cyclists on the road',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Interactions'
    },
    {
      id: 'tram-interactions',
      name: 'Tram Interactions',
      description: 'Interacting with trams and public transport',
      questionCount: 14,
      difficulty: 'hard',
      category: 'Interactions'
    },
    {
      id: 'pedestrian-crossings',
      name: 'Pedestrian Crossings',
      description: 'Pedestrian crossings and safety',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Safety'
    },
    {
      id: 'construction-zones',
      name: 'Construction Zones',
      description: 'Driving through construction areas',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Zones'
    },
    {
      id: 'environmental-zones',
      name: 'Environmental Zones',
      description: 'Environmental zones and restrictions',
      questionCount: 10,
      difficulty: 'easy',
      category: 'Zones'
    },
    {
      id: 'technology-safety',
      name: 'Technology & Safety',
      description: 'Vehicle technology and safety systems',
      questionCount: 14,
      difficulty: 'medium',
      category: 'Technology'
    },
    {
      id: 'vehicle-categories',
      name: 'Vehicle Categories',
      description: 'Different vehicle categories and classifications',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Vehicles'
    },
    {
      id: 'insight-practice',
      name: 'Insight Practice',
      description: 'Advanced driving insight and judgment',
      questionCount: 20,
      difficulty: 'hard',
      category: 'Advanced'
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
