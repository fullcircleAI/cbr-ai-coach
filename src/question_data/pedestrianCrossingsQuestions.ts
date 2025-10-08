import type { Question } from '../types';

export const pedestrianCrossingsQuestions: Question[] = [
  {
    id: 'q-pc-1',
    text: 'You are driving and see a pedestrian waiting at a zebra crossing. What should you do?',
    options: [
      { id: 'q-pc-1o1', text: 'Stop and give way to the pedestrian' },
      { id: 'q-pc-1o2', text: 'Continue driving, pedestrians must wait' },
      { id: 'q-pc-1o3', text: 'Honk to warn the pedestrian' }
    ],
    correctAnswerId: 'q-pc-1o1',
    explanation: 'At zebra crossings, you must stop and give way to pedestrians who are waiting to cross or already crossing.',
    subject: 'Pedestrian Crossings'
  },
  {
    id: 'q-pc-2',
    text: 'You are driving and see a pedestrian crossing at a traffic light. The light is green for you. What should you do?',
    options: [
      { id: 'q-pc-2o1', text: 'Stop and give way to the pedestrian' },
      { id: 'q-pc-2o2', text: 'Continue driving, the light is green' },
      { id: 'q-pc-2o3', text: 'Honk to warn the pedestrian' }
    ],
    correctAnswerId: 'q-pc-2o1',
    explanation: 'Even when the light is green for you, you must stop and give way to pedestrians who are already crossing or about to cross.',
    subject: 'Pedestrian Crossings'
  },
  {
    id: 'q-pc-3',
    text: 'You are driving and see a pedestrian crossing at a school crossing. What should you do?',
    options: [
      { id: 'q-pc-3o1', text: 'Stop and give way to the pedestrian' },
      { id: 'q-pc-3o2', text: 'Continue driving, school crossings are not mandatory' },
      { id: 'q-pc-3o3', text: 'Honk to warn the pedestrian' }
    ],
    correctAnswerId: 'q-pc-3o1',
    explanation: 'At school crossings, you must stop and give way to pedestrians, especially children, who are crossing or waiting to cross.',
    subject: 'Pedestrian Crossings'
  },
  {
    id: 'q-pc-4',
    text: 'You are driving and see a pedestrian crossing at a pedestrian crossing with a traffic light. The light is red for pedestrians. What should you do?',
    options: [
      { id: 'q-pc-4o1', text: 'Stop and give way to the pedestrian' },
      { id: 'q-pc-4o2', text: 'Continue driving, the light is red for pedestrians' },
      { id: 'q-pc-4o3', text: 'Honk to warn the pedestrian' }
    ],
    correctAnswerId: 'q-pc-4o1',
    explanation: 'Even when the light is red for pedestrians, you must stop and give way to pedestrians who are already crossing or about to cross.',
    subject: 'Pedestrian Crossings'
  },
  {
    id: 'q-pc-5',
    text: 'You are driving and see a pedestrian crossing at a pedestrian crossing with a traffic light. The light is green for pedestrians. What should you do?',
    options: [
      { id: 'q-pc-5o1', text: 'Stop and give way to the pedestrian' },
      { id: 'q-pc-5o2', text: 'Continue driving, the light is green for pedestrians' },
      { id: 'q-pc-5o3', text: 'Honk to warn the pedestrian' }
    ],
    correctAnswerId: 'q-pc-5o1',
    explanation: 'When the light is green for pedestrians, you must stop and give way to pedestrians who are crossing or waiting to cross.',
    subject: 'Pedestrian Crossings'
  }
];






