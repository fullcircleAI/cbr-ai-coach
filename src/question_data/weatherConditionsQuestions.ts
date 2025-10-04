import type { Question } from '../types';

export const weatherConditionsQuestions: Question[] = [
  {
    id: 'q-wc-1',
    text: 'You are driving in heavy rain. What should you do?',
    options: [
      { id: 'q-wc-1o1', text: 'Reduce speed and increase following distance' },
      { id: 'q-wc-1o2', text: 'Continue driving at normal speed' },
      { id: 'q-wc-1o3', text: 'Speed up to get through the rain quickly' }
    ],
    correctAnswerId: 'q-wc-1o1',
    explanation: 'In heavy rain, reduce your speed and increase your following distance to account for reduced visibility and longer stopping distances.',
    subject: 'Weather Conditions'
  },
  {
    id: 'q-wc-2',
    text: 'You are driving in fog. What should you do?',
    options: [
      { id: 'q-wc-2o1', text: 'Use low beam headlights and reduce speed' },
      { id: 'q-wc-2o2', text: 'Use high beam headlights for better visibility' },
      { id: 'q-wc-2o3', text: 'Continue driving at normal speed' }
    ],
    correctAnswerId: 'q-wc-2o1',
    explanation: 'In fog, use low beam headlights (high beams reflect off fog and reduce visibility) and reduce your speed significantly.',
    subject: 'Weather Conditions'
  },
  {
    id: 'q-wc-3',
    text: 'You are driving in snow. What should you do?',
    options: [
      { id: 'q-wc-3o1', text: 'Reduce speed and use gentle braking' },
      { id: 'q-wc-3o2', text: 'Continue driving at normal speed' },
      { id: 'q-wc-3o3', text: 'Speed up to get through the snow quickly' }
    ],
    correctAnswerId: 'q-wc-3o1',
    explanation: 'In snow, reduce your speed and use gentle braking to avoid skidding. Sudden movements can cause loss of control.',
    subject: 'Weather Conditions'
  },
  {
    id: 'q-wc-4',
    text: 'You are driving in strong winds. What should you do?',
    options: [
      { id: 'q-wc-4o1', text: 'Reduce speed and hold the steering wheel firmly' },
      { id: 'q-wc-4o2', text: 'Continue driving at normal speed' },
      { id: 'q-wc-4o3', text: 'Speed up to get through the wind quickly' }
    ],
    correctAnswerId: 'q-wc-4o1',
    explanation: 'In strong winds, reduce your speed and hold the steering wheel firmly to maintain control of your vehicle.',
    subject: 'Weather Conditions'
  }
];






