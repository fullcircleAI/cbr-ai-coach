import type { Question } from '../types';

export const fatigueRestQuestions: Question[] = [
  {
    id: 'q-fr-1',
    text: 'What are the signs of driver fatigue?',
    options: [
      { id: 'q-fr-1o1', text: 'Only yawning' },
      { id: 'q-fr-1o2', text: 'Only heavy eyelids' },
      { id: 'q-fr-1o3', text: 'Yawning, heavy eyelids, difficulty concentrating, and drifting in lane' }
    ],
    correctAnswerId: 'q-fr-1o3',
    explanation: 'Signs of driver fatigue include yawning, heavy eyelids, difficulty concentrating, drifting in lane, missing exits, and feeling restless or irritable.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-2',
    text: 'How often should you take breaks on long journeys?',
    options: [
      { id: 'q-fr-2o1', text: 'Every 2 hours' },
      { id: 'q-fr-2o2', text: 'Every 4 hours' },
      { id: 'q-fr-2o3', text: 'Every 6 hours' }
    ],
    correctAnswerId: 'q-fr-2o1',
    explanation: 'You should take a break every 2 hours on long journeys, even if you don\'t feel tired. This helps prevent fatigue and maintains alertness.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-3',
    text: 'How long should each break be on a long journey?',
    options: [
      { id: 'q-fr-3o1', text: '5 minutes' },
      { id: 'q-fr-3o2', text: '10 minutes' },
      { id: 'q-fr-3o3', text: '15-20 minutes' }
    ],
    correctAnswerId: 'q-fr-3o3',
    explanation: 'Each break should be 15-20 minutes long. This gives you enough time to rest, stretch, and refresh yourself before continuing your journey.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-4',
    text: 'What should you do if you feel tired while driving?',
    options: [
      { id: 'q-fr-4o1', text: 'Continue driving and try to stay awake' },
      { id: 'q-fr-4o2', text: 'Open the window and turn up the radio' },
      { id: 'q-fr-4o3', text: 'Pull over in a safe place and rest' }
    ],
    correctAnswerId: 'q-fr-4o3',
    explanation: 'If you feel tired while driving, you should pull over in a safe place and rest. Never try to continue driving when fatigued.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-5',
    text: 'How much sleep should you get before a long journey?',
    options: [
      { id: 'q-fr-5o1', text: '4-5 hours' },
      { id: 'q-fr-5o2', text: '6-7 hours' },
      { id: 'q-fr-5o3', text: '7-8 hours' }
    ],
    correctAnswerId: 'q-fr-5o3',
    explanation: 'You should get 7-8 hours of sleep before a long journey to ensure you are well-rested and alert while driving.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-6',
    text: 'What is microsleep?',
    options: [
      { id: 'q-fr-6o1', text: 'A very short nap' },
      { id: 'q-fr-6o2', text: 'A brief period of unconsciousness lasting 1-30 seconds' },
      { id: 'q-fr-6o3', text: 'A deep sleep' }
    ],
    correctAnswerId: 'q-fr-6o2',
    explanation: 'Microsleep is a brief period of unconsciousness lasting 1-30 seconds. It can occur without warning and is extremely dangerous while driving.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-7',
    text: 'What should you do if you experience microsleep while driving?',
    options: [
      { id: 'q-fr-7o1', text: 'Continue driving carefully' },
      { id: 'q-fr-7o2', text: 'Pull over immediately and rest' },
      { id: 'q-fr-7o3', text: 'Take a short nap in the car' }
    ],
    correctAnswerId: 'q-fr-7o2',
    explanation: 'If you experience microsleep while driving, you should pull over immediately in a safe place and rest. This is a serious warning sign of fatigue.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-8',
    text: 'What is the best time to plan long journeys?',
    options: [
      { id: 'q-fr-8o1', text: 'Early morning when you are fresh' },
      { id: 'q-fr-8o2', text: 'Late afternoon' },
      { id: 'q-fr-8o3', text: 'Late evening' }
    ],
    correctAnswerId: 'q-fr-8o1',
    explanation: 'The best time to plan long journeys is early morning when you are fresh and alert. Avoid driving during your normal sleep hours.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-9',
    text: 'What should you avoid before a long journey?',
    options: [
      { id: 'q-fr-9o1', text: 'Heavy meals' },
      { id: 'q-fr-9o2', text: 'Alcohol' },
      { id: 'q-fr-9o3', text: 'All of the above' }
    ],
    correctAnswerId: 'q-fr-9o3',
    explanation: 'Before a long journey, you should avoid heavy meals, alcohol, and medications that cause drowsiness, as they can all contribute to fatigue.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-10',
    text: 'What should you do during breaks on long journeys?',
    options: [
      { id: 'q-fr-10o1', text: 'Stay in the car and rest' },
      { id: 'q-fr-10o2', text: 'Get out, stretch, and walk around' },
      { id: 'q-fr-10o3', text: 'Take a long nap' }
    ],
    correctAnswerId: 'q-fr-10o2',
    explanation: 'During breaks on long journeys, you should get out of the car, stretch, walk around, and get some fresh air to help stay alert.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-11',
    text: 'What is the recommended maximum driving time per day?',
    options: [
      { id: 'q-fr-11o1', text: '6 hours' },
      { id: 'q-fr-11o2', text: '8 hours' },
      { id: 'q-fr-11o3', text: '10 hours' }
    ],
    correctAnswerId: 'q-fr-11o2',
    explanation: 'The recommended maximum driving time per day is 8 hours, including breaks. This helps prevent fatigue and maintains safety.',
    subject: 'Fatigue & Rest'
  },
  {
    id: 'q-fr-12',
    text: 'What should you do if you are driving and start to feel drowsy?',
    options: [
      { id: 'q-fr-12o1', text: 'Continue driving to your destination' },
      { id: 'q-fr-12o2', text: 'Pull over and take a short nap' },
      { id: 'q-fr-12o3', text: 'Drink coffee and continue' }
    ],
    correctAnswerId: 'q-fr-12o2',
    explanation: 'If you start to feel drowsy while driving, you should pull over in a safe place and take a short nap. Coffee and other stimulants are not reliable solutions.',
    subject: 'Fatigue & Rest'
  }
];
