import type { Question } from '../types';

export const constructionZonesQuestions: Question[] = [
  {
    id: 'q-cz-1',
    text: 'You are driving and see a construction zone ahead. What should you do?',
    options: [
      { id: 'q-cz-1o1', text: 'Reduce speed and be extra careful' },
      { id: 'q-cz-1o2', text: 'Continue driving at normal speed' },
      { id: 'q-cz-1o3', text: 'Speed up to get through quickly' }
    ],
    correctAnswerId: 'q-cz-1o1',
    explanation: 'In construction zones, you must reduce your speed and be extra careful due to potential hazards and workers.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-2',
    text: 'You are driving in a construction zone and see workers on the road. What should you do?',
    options: [
      { id: 'q-cz-2o1', text: 'Give extra space to workers and drive slowly' },
      { id: 'q-cz-2o2', text: 'Continue driving normally' },
      { id: 'q-cz-2o3', text: 'Honk to warn the workers' }
    ],
    correctAnswerId: 'q-cz-2o1',
    explanation: 'When workers are present in construction zones, give them extra space and drive slowly to ensure their safety.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-3',
    text: 'You are driving in a construction zone and see a temporary speed limit sign. What should you do?',
    options: [
      { id: 'q-cz-3o1', text: 'Follow the temporary speed limit' },
      { id: 'q-cz-3o2', text: 'Continue driving at the normal speed limit' },
      { id: 'q-cz-3o3', text: 'Ignore the temporary speed limit' }
    ],
    correctAnswerId: 'q-cz-3o1',
    explanation: 'Temporary speed limit signs in construction zones must be followed. They are legally enforceable and designed for safety.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-4',
    text: 'You are driving in a construction zone and see a lane closure. What should you do?',
    options: [
      { id: 'q-cz-4o1', text: 'Merge into the open lane when safe' },
      { id: 'q-cz-4o2', text: 'Continue driving in the closed lane' },
      { id: 'q-cz-4o3', text: 'Stop and wait for the lane to reopen' }
    ],
    correctAnswerId: 'q-cz-4o1',
    explanation: 'When a lane is closed in a construction zone, merge into the open lane when it is safe to do so.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-5',
    text: 'You are driving in a construction zone and see a flag person directing traffic. What should you do?',
    options: [
      { id: 'q-cz-5o1', text: 'Follow the flag person\'s directions' },
      { id: 'q-cz-5o2', text: 'Continue driving normally' },
      { id: 'q-cz-5o3', text: 'Honk to get the flag person\'s attention' }
    ],
    correctAnswerId: 'q-cz-5o1',
    explanation: 'Flag persons in construction zones have authority to direct traffic. You must follow their directions for safety.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-6',
    text: 'You are driving in a construction zone and see construction equipment on the road. What should you do?',
    options: [
      { id: 'q-cz-6o1', text: 'Give extra space to the equipment and drive slowly' },
      { id: 'q-cz-6o2', text: 'Continue driving normally' },
      { id: 'q-cz-6o3', text: 'Speed up to get past the equipment quickly' }
    ],
    correctAnswerId: 'q-cz-6o1',
    explanation: 'When construction equipment is on the road, give it extra space and drive slowly to avoid accidents.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-7',
    text: 'You are driving in a construction zone and see a detour sign. What should you do?',
    options: [
      { id: 'q-cz-7o1', text: 'Follow the detour route' },
      { id: 'q-cz-7o2', text: 'Continue driving on the original route' },
      { id: 'q-cz-7o3', text: 'Ignore the detour sign' }
    ],
    correctAnswerId: 'q-cz-7o1',
    explanation: 'Detour signs in construction zones indicate alternative routes. You must follow the detour route for safety.',
    subject: 'Construction Zones'
  },
  {
    id: 'q-cz-8',
    text: 'You are driving in a construction zone and see a "Road Work Ahead" sign. What should you do?',
    options: [
      { id: 'q-cz-8o1', text: 'Prepare to slow down and be extra careful' },
      { id: 'q-cz-8o2', text: 'Continue driving at normal speed' },
      { id: 'q-cz-8o3', text: 'Speed up to get through quickly' }
    ],
    correctAnswerId: 'q-cz-8o1',
    explanation: 'When you see a "Road Work Ahead" sign, prepare to slow down and be extra careful as you approach the construction zone.',
    subject: 'Construction Zones'
  }
];






