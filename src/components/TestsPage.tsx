import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Mascot } from './Mascot';
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
      id: 'traffic-lights-signals',
      name: 'Traffic Lights & Signals',
      description: 'Traffic light signals and sequences',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signals',
      icon: '🚦'
    },
    {
      id: 'priority-rules',
      name: 'Priority Rules',
      description: 'Right of way and priority situations',
      questionCount: 30,
      difficulty: 'hard',
      category: 'Rules',
      icon: '🛑'
    },
    {
      id: 'roundabout-rules',
      name: 'Roundabout Rules',
      description: 'Roundabout entry, exit, and lane selection',
      questionCount: 20,
      difficulty: 'hard',
      category: 'Maneuvers',
      icon: '🔄'
    },
    {
      id: 'speed-limits',
      name: 'Speed Limits',
      description: 'Speed limits and restrictions',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Rules',
      icon: '⚡'
    },
    {
      id: 'parking-rules',
      name: 'Parking Rules',
      description: 'Parking regulations and restrictions',
      questionCount: 22,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🅿️'
    },
    {
      id: 'hazard-perception',
      name: 'Hazard Perception',
      description: 'Identifying and responding to hazards',
      questionCount: 18,
      difficulty: 'hard',
      category: 'Safety',
      icon: '⚠️'
    },
    {
      id: 'motorway-rules',
      name: 'Motorway Rules',
      description: 'Highway and motorway regulations',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Rules',
      icon: '🛣️'
    },
    {
      id: 'weather-conditions',
      name: 'Weather Conditions',
      description: 'Driving in different weather conditions',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Safety',
      icon: '🌧️'
    },
    {
      id: 'mandatory-signs',
      name: 'Mandatory Signs',
      description: 'Mandatory traffic signs and their meanings',
      questionCount: 20,
      difficulty: 'medium',
      category: 'Signs',
      icon: '📋'
    },
    {
      id: 'warning-signs',
      name: 'Warning Signs',
      description: 'Warning signs and hazard indicators',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Signs',
      icon: '⚠️'
    },
    {
      id: 'prohibitory-signs',
      name: 'Prohibitory Signs',
      description: 'Prohibitory signs and restrictions',
      questionCount: 22,
      difficulty: 'medium',
      category: 'Signs',
      icon: '🚫'
    },
    {
      id: 'road-information',
      name: 'Road Information',
      description: 'Road information signs and markings',
      questionCount: 15,
      difficulty: 'easy',
      category: 'Information',
      icon: 'ℹ️'
    },
    {
      id: 'sign-identification',
      name: 'Sign Identification',
      description: 'Identifying and understanding traffic signs',
      questionCount: 25,
      difficulty: 'medium',
      category: 'Signs',
      icon: '🔍'
    },
    {
      id: 'road-markings',
      name: 'Road Markings',
      description: 'Road markings and their meanings',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Markings',
      icon: '🛣️'
    },
    {
      id: 'alcohol-drugs',
      name: 'Alcohol & Drugs',
      description: 'Alcohol and drug regulations for drivers',
      questionCount: 12,
      difficulty: 'easy',
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
      id: 'vehicle-documentation',
      name: 'Vehicle Documentation',
      description: 'Required vehicle documents and inspections',
      questionCount: 14,
      difficulty: 'medium',
      category: 'Documentation',
      icon: '📄'
    },
    {
      id: 'emergency-procedures',
      name: 'Emergency Procedures',
      description: 'Emergency situations and procedures',
      questionCount: 16,
      difficulty: 'hard',
      category: 'Safety',
      icon: '🚨'
    },
    {
      id: 'bicycle-interactions',
      name: 'Bicycle Interactions',
      description: 'Interacting with cyclists on the road',
      questionCount: 18,
      difficulty: 'medium',
      category: 'Interactions',
      icon: '🚴'
    },
    {
      id: 'tram-interactions',
      name: 'Tram Interactions',
      description: 'Interacting with trams and public transport',
      questionCount: 14,
      difficulty: 'hard',
      category: 'Interactions',
      icon: '🚊'
    },
    {
      id: 'pedestrian-crossings',
      name: 'Pedestrian Crossings',
      description: 'Pedestrian crossings and safety',
      questionCount: 16,
      difficulty: 'medium',
      category: 'Safety',
      icon: '🚶'
    },
    {
      id: 'construction-zones',
      name: 'Construction Zones',
      description: 'Driving through construction areas',
      questionCount: 12,
      difficulty: 'medium',
      category: 'Zones',
      icon: '🚧'
    },
    {
      id: 'environmental-zones',
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
      description: 'Vehicle technology and safety systems',
      questionCount: 14,
      difficulty: 'medium',
      category: 'Technology',
      icon: '🔧'
    },
    {
      id: 'vehicle-categories',
      name: 'Vehicle Categories',
      description: 'Different vehicle categories and classifications',
      questionCount: 12,
      difficulty: 'easy',
      category: 'Vehicles',
      icon: '🚗'
    },
    {
      id: 'insight-practice',
      name: 'Insight Practice',
      description: 'Advanced driving insight and judgment',
      questionCount: 20,
      difficulty: 'hard',
      category: 'Advanced',
      icon: '🧠'
    }
  ];

  const categories = ['all', 'Signals', 'Rules', 'Safety', 'Signs', 'Information', 'Markings', 'Documentation', 'Interactions', 'Zones', 'Technology', 'Vehicles', 'Advanced', 'Maneuvers'];

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
      <main className="main-content">
        <div className="tests-page">
          <div className="tests-header">
            <div className="header-content">
              <div className="header-mascot">
                <Mascot size={60} />
              </div>
              <div className="header-text">
                <h1>Practice Tests</h1>
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
