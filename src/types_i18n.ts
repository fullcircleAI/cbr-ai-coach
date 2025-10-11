export type Language = 'en' | 'nl' | 'ar';

// Web Speech API declarations
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export type Question = {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
  subject: string;
  imageUrl?: string;
  imageHint?: string;
};

export type PerformanceMetrics = {
  totalTests: number;
  averageScore: number;
  categoryBreakdown: {
    [category: string]: {
      count: number;
      averageScore: number;
    };
  };
};

export type PracticeResult = {
  category: string;
  score: number;
  total: number;
  date: string;
};

export interface LanguageStrings {
  // Common
  welcome: string;
  loading: string;
  error: string;
  success: string;
  next: string;
  back: string;
  cancel: string;
  save: string;
  delete: string;
  edit: string;
  close: string;
  yes: string;
  no: string;
  
  // Navigation
  navigation: {
    dashboard: string;
    practice: string;
    exam: string;
    chat: string;
    settings: string;
  };
  
  // Dashboard
  dashboard: {
    title: string;
    welcomeMessage: string;
    welcomeSubtitle: string;
    startPractice: string;
    performanceTracker: string;
    testsCompleted: string;
    averageScore: string;
    categoryPerformance: string;
    focusAreas: string;
    focusNote: string;
    upgradeToPremium: string;
    upgradeDescription: string;
    upgradeNow: string;
    doingAmazing: string;
    makingProgress: string;
    readyToStart: string;
    woohoo: string;
    youGotThis: string;
    firstWin: string;
  };
  
  // Practice
  practice: {
    title: string;
    startTest: string;
    hazardPerception: string;
    insightPractice: string;
    mandatorySigns: string;
    warningSigns: string;
    prohibitorySigns: string;
    prohibitorySigns2: string;
    trafficLightsSignals: string;
    roadInformation: string;
    signIdentification: string;
    priorityRules: string;
    mandatorySigns2: string;
    premium: string;
    question: string;
    of: string;
    timeLeft: string;
    nextQuestion: string;
    finishTest: string;
    explanation: string;
    listening: string;
    sayABCD: string;
    voiceMode: string;
    mute: string;
    unmute: string;
    mockExam: string;
  };
  
  // Chat
  chat: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    emptyState: string;
    typing: string;
  };
  
  // Results
  results: {
    title: string;
    congratulations: string;
    wellDone: string;
    keepPracticing: string;
    score: string;
    correct: string;
    incorrect: string;
    totalQuestions: string;
    percentage: string;
    timeSpent: string;
    backToPractice: string;
    tryAgain: string;
    shareResults: string;
  };
  
  // Language Selection
  languageSelection: {
    title: string;
    subtitle: string;
    english: string;
    dutch: string;
    arabic: string;
  };
  
  // Test Categories
  testCategories: {
    hazardPerception: string;
    insightPractice: string;
    mandatorySigns: string;
    warningSigns: string;
    prohibitorySigns: string;
    prohibitorySigns2: string;
    trafficLightsSignals: string;
    roadInformation: string;
    signIdentification: string;
    priorityRules: string;
    mandatorySigns2: string;
    mockExam: string;
  };
  
  // Mock Exam Bio
  mockExamBio: {
    title: string;
    subtitle: string;
    examOverview: string;
    questions: string;
    questionsDesc: string;
    timeLimit: string;
    timeLimitDesc: string;
    passRate: string;
    passRateDesc: string;
    randomQuestions: string;
    randomQuestionsDesc: string;
    topicsCovered: string;
    trafficLights: string;
    roadSigns: string;
    hazardPerception: string;
    priorityRules: string;
    roadInformation: string;
    insightPractice: string;
    instructions: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    instruction4: string;
    instruction5: string;
    practiceRequirement: string;
    progressComplete: string;
    readyTitle: string;
    readyMessage: string;
    almostTitle: string;
    almostMessage: string;
    practiceTitle: string;
    practiceMessage: string;
    startMockExam: string;
    continuePracticing: string;
    startPracticing: string;
    completedTests: string;
    noTestsCompleted: string;
    backToDashboard: string;
  };
  
  // Quiz
  quiz: {
    title: string;
    subtitle: string;
    officialStyle: string;
    questions: string;
    timeLimit: string;
    passRate: string;
    testType: string;
    computerBased: string;
    variesByCategory: string;
    instructions: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    instruction4: string;
    instruction5: string;
    warning: string;
    startQuiz: string;
    loading: string;
    timeLeft: string;
    question: string;
    finishQuiz: string;
    previous: string;
    next: string;
    cancel: string;
    finishQuizConfirm: string;
    finishQuizMessage: string;
    answeredQuestions: string;
    results: string;
    score: string;
    correct: string;
    incorrect: string;
    totalQuestions: string;
    percentage: string;
    timeSpent: string;
    backToPractice: string;
    tryAgain: string;
    shareResults: string;
    congratulations: string;
    wellDone: string;
    keepPracticing: string;
    passed: string;
    failed: string;
    excellent: string;
    great: string;
    good: string;
    close: string;
    needPractice: string;
    backToQuizzes: string;
  };
  
  // Quiz Selection
  quizSelection: {
    title: string;
    subtitle: string;
    level1: {
      title: string;
      subtitle: string;
      description: string;
      passRate: string;
    };
    level2: {
      title: string;
      subtitle: string;
      description: string;
      passRate: string;
    };
    level3: {
      title: string;
      subtitle: string;
      description: string;
      passRate: string;
    };
    difficulty: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    questions: string;
    timeLimit: string;
    passRate: string;
    startQuiz: string;
    footer: string;
    status: {
      completed: string;
      attempted: string;
      available: string;
      locked: string;
    };
    bestScore: string;
    locked: string;
    unlockMessage: string;
    progress: string;
  };
  
  // Voice Commands
  voiceCommands: {
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
    one: string;
    two: string;
    three: string;
    four: string;
  };
} 