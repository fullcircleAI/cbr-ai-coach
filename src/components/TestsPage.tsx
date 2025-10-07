import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import './TestsPage.css';

interface PracticeTest {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  icon: string;
}

export const TestsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const practiceTests: PracticeTest[] = [
    {
      id: 'traffic-rules-signs',
      name: 'Traffic Rules & Signs',
      description: 'Master Dutch traffic rules, signs, and regulations',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🚦'
    },
    {
      id: 'priority-rules',
      name: 'Priority & Right of Way',
      description: 'Understand priority rules and right of way situations',
      questionCount: 20,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🚩'
    },
    {
      id: 'hazard-perception',
      name: 'Hazard Perception',
      description: 'Learn to recognize and respond to dangerous situations',
      questionCount: 15,
      difficulty: 'hard',
      category: 'Safety',
      icon: '👁️'
    },
    {
      id: 'speed-safety',
      name: 'Speed & Safety',
      description: 'Speed limits, safety rules, and vehicle regulations',
      questionCount: 20,
      difficulty: 'easy',
      category: 'Safety',
      icon: '🛡️'
    },
    {
      id: 'bicycle-interactions',
      name: 'Bicycle Interactions',
      description: 'Learn to safely interact with cyclists on the road',
      questionCount: 15,
      difficulty: 'medium',
      category: 'Interactions',
      icon: '🚴'
    },
    {
      id: 'roundabout-rules',
      name: 'Roundabout Rules',
      description: 'Master roundabout navigation and priority rules',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🔄'
    },
    {
      id: 'tram-interactions',
      name: 'Tram Interactions',
      description: 'Understand how to safely interact with trams',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Interactions',
      icon: '🚊'
    },
    {
      id: 'pedestrian-crossings',
      name: 'Pedestrian Crossings',
      description: 'Learn pedestrian crossing rules and safety',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Interactions',
      icon: '🚶'
    },
    {
      id: 'construction-zones',
      name: 'Construction Zones',
      description: 'Navigate construction zones safely',
      questionCount: 10,
      difficulty: 'easy',
      category: 'Zones',
      icon: '🚧'
    },
    {
      id: 'weather-conditions',
      name: 'Weather Conditions',
      description: 'Drive safely in various weather conditions',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Safety',
      icon: '🌧️'
    },
    {
      id: 'road-signs',
      name: 'Road Signs',
      description: 'Advanced road signs and identification',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signs',
      icon: '🛑'
    },
    {
      id: 'motorway-rules',
      name: 'Motorway Rules',
      description: 'Specific rules for motorway driving',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🛣️'
    },
    {
      id: 'vehicle-knowledge',
      name: 'Vehicle Knowledge',
      description: 'Vehicle categories and documentation',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Vehicles',
      icon: '🚗'
    },
    {
      id: 'parking-rules',
      name: 'Parking Rules',
      description: 'Parking regulations and restrictions',
      questionCount: 20,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🅿️'
    },
    {
      id: 'environmental',
      name: 'Environmental Zones',
      description: 'Environmental zones and restrictions',
      questionCount: 10,
      difficulty: 'easy',
      category: 'Zones',
      icon: '🌱'
    },
    {
      id: 'technology-safety',
      name: 'Technology & Safety',
      description: 'Modern vehicle technology and safety features',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Technology',
      icon: '🔧'
    },
    {
      id: 'alcohol-drugs',
      name: 'Alcohol & Drugs',
      description: 'Alcohol and drug regulations for drivers',
      questionCount: 15,
      difficulty: 'medium',
      category: 'Safety',
      icon: '🍺'
    },
    {
      id: 'fatigue-rest',
      name: 'Fatigue & Rest',
      description: 'Driver fatigue and rest requirements',
      questionCount: 10,
      difficulty: 'easy',
      category: 'Safety',
      icon: '😴'
    },
    {
      id: 'emergency-procedures',
      name: 'Emergency Procedures',
      description: 'Emergency procedures and protocols',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Safety',
      icon: '🚨'
    },
    {
      id: 'insight-practice',
      name: 'Insight Practice',
      description: 'Practice understanding traffic scenarios',
      questionCount: 20,
      difficulty: 'hard',
      category: 'Advanced',
      icon: '🧠'
    },
    {
      id: 'traffic-lights-signals',
      name: 'Traffic Lights & Signals',
      description: 'Traffic light signals and sequences',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signals',
      icon: '🚦'
    }
  ];

  const categories = ['all', 'Rules', 'Safety', 'Interactions', 'Zones', 'Signs', 'Vehicles', 'Technology', 'Advanced', 'Signals'];

  const filteredTests = selectedCategory === 'all' 
    ? practiceTests 
    : practiceTests.filter(test => test.category === selectedCategory);

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
  };

  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content tests-page">
        <div className="tests-page">
          <div className="tests-header">
            <div className="header-content">
              <div className="header-text">
                <h1>🧪 Practice Tests</h1>
                <p>Choose a practice test to improve your driving theory knowledge</p>
              </div>
            </div>
          </div>

          <div className="tests-content">
            {/* Category Filter */}
            <div className="category-filter">
              <h3>Filter by Category</h3>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'All Tests' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tests Grid */}
            <div className="tests-grid">
              {filteredTests.map((test) => (
                <div 
                  key={test.id}
                  className="test-card"
                  onClick={() => handleTestClick(test.id)}
                >
                  <div className="test-icon">{test.icon}</div>
                  <div className="test-content">
                    <h3 className="test-name">{test.name}</h3>
                    <p className="test-description">{test.description}</p>
                    <div className="test-meta">
                      <span className="question-count">{test.questionCount} questions</span>
                      <span 
                        className="difficulty-badge"
                        style={{ backgroundColor: getDifficultyColor(test.difficulty) }}
                      >
                        {test.difficulty}
                      </span>
                    </div>
                    <div className="test-category">{test.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTests.length === 0 && (
              <div className="no-tests">
                <p>No tests found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};