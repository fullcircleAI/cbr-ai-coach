export interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
  image?: string;
  imageUrl?: string;
  imageHint?: string;
  subject: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  averageScore: number;
  totalQuestions: number;
  correctAnswers: number;
  studyTime: number;
  weakAreas: string[];
  strongAreas: string[];
}

export interface MistakePattern {
  topic: string;
  mistake: string;
  frequency: number;
  lastOccurrence: string;
  explanation: string;
  solution: string;
}

export interface AIAnalysis {
  totalMistakes: number;
  mostCommonMistake: string;
  learningPattern: string;
  improvementRate: number;
  recommendations: string[];
}

export interface StudyRecommendation {
  topic: string;
  priority: 'high' | 'medium' | 'low';
  timeNeeded: number;
  readiness: number;
  method: string;
  description: string;
  resources: string[];
}

export interface LearningStyle {
  type: string;
  description: string;
  effectiveness: number;
}

export interface ProgressMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export interface LearningInsight {
  type: 'achievement' | 'improvement' | 'recommendation';
  title: string;
  description: string;
  impact: string;
}

export interface AIInsight {
  type: 'mistake' | 'strength' | 'recommendation';
  message: string;
  priority: 'high' | 'medium' | 'low';
}
