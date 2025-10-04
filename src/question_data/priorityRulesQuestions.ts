import type { Question } from '../types';

export const priorityRulesQuestions: Question[] = [
  {
    id: 'q-priority-1',
    text: 'Based on the image, who has the right of way?',
    options: [
      { id: 'q-priority-1o1', text: '1' },
      { id: 'q-priority-1o2', text: '2' },
      { id: 'q-priority-1o3', text: 'none' },
    ],
    correctAnswerId: 'q-priority-1o2',
    explanation: 'Trams generally have priority over other vehicles, especially when they are on tracks.',
    subject: 'Priority Rules',
    imageUrl: '/images/signs/prioritysigns/q-priority-1.png',
    imageHint: 'car tram intersection'
  },
  {
    id: 'q-priority-2',
    text: 'Who must give way at this junction according to the signs?',
    options: [
      { id: 'q-priority-2o1', text: '1' },
      { id: 'q-priority-2o2', text: '2' },
      { id: 'q-priority-2o3', text: 'Both must stop and proceed alternately' },
    ],
    correctAnswerId: 'q-priority-2o1', // Vehicle 1 must give way
    explanation: 'Vehicles on a minor road, often indicated by a give way or stop sign, must yield to traffic on the priority road.',
    subject: 'Priority Rules',
    imageUrl: '/images/signs/prioritysigns/q-priority-2.png', // Ensure this image exists or is a placeholder
    imageHint: 'junction give way priority road'
  },
  {
    id: 'q-priority-3',
    text: 'At an unmarked crossroads, which vehicle has priority?',
    options: [
      { id: 'q-priority-3o1', text: 'The vehicle approaching from the right' },
      { id: 'q-priority-3o2', text: 'The larger vehicle' },
      { id: 'q-priority-3o3', text: 'The vehicle turning left' },
    ],
    correctAnswerId: 'q-priority-3o1',
    explanation: 'At an unmarked crossroads, the "priority to the right" rule applies. Vehicles approaching from the right have priority.',
    subject: 'Priority Rules',
  },
  {
    id: 'q-priority-4',
    text: 'What does a "Give Way" sign (inverted triangle) mean?',
    options: [
      { id: 'q-priority-4o1', text: 'You must stop completely before proceeding' },
      { id: 'q-priority-4o2', text: 'You must slow down and give way to traffic on the priority road' },
      { id: 'q-priority-4o3', text: 'You have priority over all other traffic' },
    ],
    correctAnswerId: 'q-priority-4o2',
    explanation: 'A "Give Way" sign means you must slow down and be prepared to stop if necessary to give way to traffic on the priority road.',
    subject: 'Priority Rules',
  },
  {
    id: 'q-priority-5',
    text: 'At a T-junction, which vehicle typically has priority?',
    options: [
      { id: 'q-priority-5o1', text: 'The vehicle on the through road' },
      { id: 'q-priority-5o2', text: 'The vehicle turning into the junction' },
      { id: 'q-priority-5o3', text: 'The vehicle approaching from the left' },
    ],
    correctAnswerId: 'q-priority-5o1',
    explanation: 'At a T-junction, vehicles on the through road (the top of the T) typically have priority over vehicles turning into the junction.',
    subject: 'Priority Rules',
  },
  {
    id: 'q-priority-6',
    text: 'What is the priority rule for emergency vehicles with flashing lights and sirens?',
    options: [
      { id: 'q-priority-6o1', text: 'They must follow normal traffic rules' },
      { id: 'q-priority-6o2', text: 'They have priority over all other traffic and you must give way' },
      { id: 'q-priority-6o3', text: 'They only have priority at traffic lights' },
    ],
    correctAnswerId: 'q-priority-6o2',
    explanation: 'Emergency vehicles with flashing lights and sirens have priority over all other traffic. You must give way and allow them to pass safely.',
    subject: 'Priority Rules',
  },
  {
    id: 'q-priority-7',
    text: 'At a roundabout, who has priority?',
    options: [
      { id: 'q-priority-7o1', text: 'Traffic entering the roundabout' },
      { id: 'q-priority-7o2', text: 'Traffic already on the roundabout' },
      { id: 'q-priority-7o3', text: 'The larger vehicle' },
    ],
    correctAnswerId: 'q-priority-7o2',
    explanation: 'At a roundabout, traffic already on the roundabout has priority over traffic waiting to enter. You must give way to traffic on your right.',
    subject: 'Priority Rules',
  },
  {
    id: 'q-priority-8',
    text: 'What does a "Stop" sign (octagonal red sign) require you to do?',
    options: [
      { id: 'q-priority-8o1', text: 'Slow down and proceed if the way is clear' },
      { id: 'q-priority-8o2', text: 'Stop completely and give way to all traffic' },
      { id: 'q-priority-8o3', text: 'Stop only if other vehicles are present' },
    ],
    correctAnswerId: 'q-priority-8o2',
    explanation: 'A "Stop" sign requires you to stop completely at the stop line and give way to all traffic on the priority road before proceeding.',
    subject: 'Priority Rules',
  }
]; 