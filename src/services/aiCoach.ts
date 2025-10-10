// AI Coach Service - Real intelligent recommendations based on user performance

export interface TestResult {
  testId: string;
  testName: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
}

export interface TestRecommendation {
  testId: string;
  testName: string;
  reason: string;
  priority: 'critical' | 'high' | 'medium';
  score: number;
  ignoreCount: number;
}

export interface AIInsight {
  type: 'mistake' | 'strength' | 'recommendation';
  message: string;
  priority: 'red' | 'amber' | 'green';
  testId?: string;
  explanation?: string;
  frequency?: number;
  lastOccurrence?: string;
}

// Test metadata
const TEST_METADATA: Record<string, { name: string; category: string }> = {
  'traffic-lights-signals': { name: 'Traffic Lights & Signals', category: 'signals' },
  'priority-rules': { name: 'Priority & Right of Way', category: 'rules' },
  'hazard-perception': { name: 'Hazard Perception', category: 'safety' },
  'speed-safety': { name: 'Speed & Safety', category: 'safety' },
  'bicycle-interactions': { name: 'Bicycle Interactions', category: 'interactions' },
  'roundabout-rules': { name: 'Roundabout Rules', category: 'rules' },
  'tram-interactions': { name: 'Tram Interactions', category: 'interactions' },
  'pedestrian-crossings': { name: 'Pedestrian Crossings', category: 'interactions' },
  'construction-zones': { name: 'Construction Zones', category: 'zones' },
  'weather-conditions': { name: 'Weather Conditions', category: 'safety' },
  'road-signs': { name: 'Road Signs', category: 'signs' },
  'motorway-rules': { name: 'Motorway Rules', category: 'rules' },
  'vehicle-knowledge': { name: 'Vehicle Knowledge', category: 'vehicles' },
  'parking-rules': { name: 'Parking Rules', category: 'rules' },
  'environmental': { name: 'Environmental Zones', category: 'zones' },
  'technology-safety': { name: 'Technology & Safety', category: 'technology' },
  'alcohol-drugs': { name: 'Alcohol & Drugs', category: 'safety' },
  'fatigue-rest': { name: 'Fatigue & Rest', category: 'safety' },
  'emergency-procedures': { name: 'Emergency Procedures', category: 'safety' },
  'insight-practice': { name: 'Insight Practice', category: 'advanced' },
  'traffic-rules-signs': { name: 'Traffic Rules & Signs', category: 'rules' },
};

// Default beginner path for new users
const BEGINNER_PATH = ['traffic-rules-signs', 'priority-rules', 'hazard-perception', 'speed-safety'];

class AICoachService {
  // Save test result
  saveTestResult(result: TestResult): void {
    const history = this.getTestHistory();
    history.push(result);
    localStorage.setItem('testHistory', JSON.stringify(history));
    
    // Clear ignore count when user completes a recommended test
    const currentRec = this.getTopRecommendation();
    if (currentRec.testId === result.testId) {
      this.clearIgnoreCount(result.testId);
    }
  }

  // Get all test history
  getTestHistory(): TestResult[] {
    const history = localStorage.getItem('testHistory');
    return history ? JSON.parse(history) : [];
  }

  // Calculate average score per test
  getTestScores(): Record<string, { average: number; count: number; lastScore: number }> {
    const history = this.getTestHistory();
    const scores: Record<string, number[]> = {};
    
    history.forEach(result => {
      if (!scores[result.testId]) {
        scores[result.testId] = [];
      }
      scores[result.testId].push(result.percentage);
    });

    const testScores: Record<string, { average: number; count: number; lastScore: number }> = {};
    Object.keys(scores).forEach(testId => {
      const testScoreArray = scores[testId];
      const average = testScoreArray.reduce((a, b) => a + b, 0) / testScoreArray.length;
      testScores[testId] = {
        average: Math.round(average),
        count: testScoreArray.length,
        lastScore: testScoreArray[testScoreArray.length - 1]
      };
    });

    return testScores;
  }

  // Track recommendation ignore
  trackIgnore(testId: string): void {
    const ignores = this.getIgnoreCounts();
    ignores[testId] = (ignores[testId] || 0) + 1;
    localStorage.setItem('recommendationIgnores', JSON.stringify(ignores));
  }

  // Get ignore counts
  getIgnoreCounts(): Record<string, number> {
    const ignores = localStorage.getItem('recommendationIgnores');
    return ignores ? JSON.parse(ignores) : {};
  }

  // Clear ignore count
  clearIgnoreCount(testId: string): void {
    const ignores = this.getIgnoreCounts();
    delete ignores[testId];
    localStorage.setItem('recommendationIgnores', JSON.stringify(ignores));
  }

  // Get top recommendation (SMART LOGIC)
  getTopRecommendation(): TestRecommendation {
    const testScores = this.getTestScores();
    const ignores = this.getIgnoreCounts();
    const allTestIds = Object.keys(TEST_METADATA);

    // New user - recommend beginner path
    if (Object.keys(testScores).length === 0) {
      return {
        testId: BEGINNER_PATH[0],
        testName: TEST_METADATA[BEGINNER_PATH[0]].name,
        reason: 'Perfect starting point for beginners',
        priority: 'high',
        score: 0,
        ignoreCount: 0
      };
    }

    // Calculate weak areas
    const weakAreas: Array<{ testId: string; score: number; ignoreCount: number }> = [];
    
    allTestIds.forEach(testId => {
      const testData = testScores[testId];
      if (testData) {
        weakAreas.push({
          testId,
          score: testData.average,
          ignoreCount: ignores[testId] || 0
        });
      } else {
        // Not practiced yet - add as potential
        weakAreas.push({
          testId,
          score: 0,
          ignoreCount: ignores[testId] || 0
        });
      }
    });

    // Sort by priority:
    // 1. Critical areas (score < 60%) that haven't been ignored too much
    // 2. Unpracticed tests in beginner path
    // 3. Lower scores first
    // 4. Less ignored first
    weakAreas.sort((a, b) => {
      // Critical and not over-ignored comes first
      const aCritical = a.score < 60 && a.ignoreCount < 3;
      const bCritical = b.score < 60 && b.ignoreCount < 3;
      if (aCritical && !bCritical) return -1;
      if (!aCritical && bCritical) return 1;

      // Then by ignore count (less ignored first)
      if (a.ignoreCount !== b.ignoreCount) {
        return a.ignoreCount - b.ignoreCount;
      }

      // Then by score (lower first)
      return a.score - b.score;
    });

    const topWeak = weakAreas[0];
    const testName = TEST_METADATA[topWeak.testId].name;
    
    // Determine priority and reason
    let priority: 'critical' | 'high' | 'medium' = 'medium';
    let reason = 'Practice this to improve';

    if (topWeak.score === 0) {
      priority = 'high';
      reason = 'Not practiced yet - start here';
    } else if (topWeak.score < 60) {
      priority = 'critical';
      const potentialGain = 88 - topWeak.score;
      reason = `Focus here for +${potentialGain}% toward pass`;
    } else if (topWeak.score < 75) {
      priority = 'high';
      reason = `Improve to ${topWeak.score + 10}% for exam readiness`;
    } else if (topWeak.score < 88) {
      priority = 'medium';
      reason = `Almost exam-ready - boost to 88%+`;
    }

    return {
      testId: topWeak.testId,
      testName,
      reason,
      priority,
      score: topWeak.score,
      ignoreCount: topWeak.ignoreCount
    };
  }

  // Get AI Insights for dashboard
  getAIInsights(): AIInsight[] {
    const testScores = this.getTestScores();
    const recommendation = this.getTopRecommendation();
    const allTestIds = Object.keys(TEST_METADATA);

    const insights: AIInsight[] = [];

    // 1. Top recommendation (RED)
    insights.push({
      type: 'recommendation',
      message: recommendation.testName,
      priority: recommendation.priority === 'critical' ? 'red' : 'amber',
      testId: recommendation.testId,
      explanation: recommendation.reason
    });

    // 2. Find a mistake area (AMBER)
    const mistakeArea = allTestIds.find(testId => {
      const score = testScores[testId];
      return score && score.average >= 60 && score.average < 75 && testId !== recommendation.testId;
    });

    if (mistakeArea) {
      const score = testScores[mistakeArea];
      insights.push({
        type: 'mistake',
        message: TEST_METADATA[mistakeArea].name,
        priority: 'amber',
        testId: mistakeArea,
        explanation: `${score.average}% - needs improvement`
      });
    } else {
      // Fallback: Show second weakest
      const weakAreas = Object.keys(testScores)
        .filter(id => id !== recommendation.testId)
        .sort((a, b) => testScores[a].average - testScores[b].average);
      
      if (weakAreas.length > 0) {
        const secondWeak = weakAreas[0];
        insights.push({
          type: 'mistake',
          message: TEST_METADATA[secondWeak].name,
          priority: 'amber',
          testId: secondWeak,
          explanation: `${testScores[secondWeak].average}% - room to improve`
        });
      }
    }

    // 3. Find a strength area (GREEN)
    const strengthArea = allTestIds.find(testId => {
      const score = testScores[testId];
      return score && score.average >= 85;
    });

    if (strengthArea) {
      const score = testScores[strengthArea];
      insights.push({
        type: 'strength',
        message: TEST_METADATA[strengthArea].name,
        priority: 'green',
        testId: strengthArea,
        explanation: `${score.average}% - excellent work`
      });
    } else {
      // No strengths yet - encourage
      insights.push({
        type: 'strength',
        message: 'Keep Practicing',
        priority: 'green',
        explanation: 'You\'re building skills'
      });
    }

    return insights.slice(0, 3); // Return top 3
  }

  // Calculate overall practice average (for dashboard)
  getPracticeAverage(): number {
    const testScores = this.getTestScores();
    const scores = Object.values(testScores).map(t => t.average);
    
    if (scores.length === 0) return 0;
    
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(average);
  }

  // Get study time (total time spent practicing)
  getStudyTime(): number {
    const history = this.getTestHistory();
    // Estimate: 1.5 minutes per question (realistic average)
    const totalQuestions = history.reduce((sum, result) => sum + result.totalQuestions, 0);
    const hours = totalQuestions / 40; // 1.5 min per Q = 40 Q per hour
    return parseFloat(hours.toFixed(1));
  }
}

export const aiCoach = new AICoachService();

