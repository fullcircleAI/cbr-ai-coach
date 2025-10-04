import type { Question } from '../types';

export const expandedPriorityRulesQuestions: Question[] = [
  {
    id: 'q-epr-1',
    text: 'At an intersection with no traffic signs or signals, who has the right of way?',
    options: [
      { id: 'q-epr-1o1', text: 'The vehicle on the left' },
      { id: 'q-epr-1o2', text: 'The vehicle on the right' },
      { id: 'q-epr-1o3', text: 'The larger vehicle' },
      { id: 'q-epr-1o4', text: 'The vehicle going straight' }
    ],
    correctAnswerId: 'q-epr-1o2',
    explanation: 'At an intersection with no traffic signs or signals, traffic from the right has the right of way. This is known as the "right before left" rule.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-2',
    text: 'At a T-junction, who has the right of way?',
    options: [
      { id: 'q-epr-2o1', text: 'Traffic on the through road' },
      { id: 'q-epr-2o2', text: 'Traffic turning onto the through road' },
      { id: 'q-epr-2o3', text: 'The vehicle on the left' },
      { id: 'q-epr-2o4', text: 'The vehicle on the right' }
    ],
    correctAnswerId: 'q-epr-2o1',
    explanation: 'At a T-junction, traffic on the through road has the right of way. Traffic turning onto the through road must yield.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-3',
    text: 'At a roundabout, who has the right of way?',
    options: [
      { id: 'q-epr-3o1', text: 'Traffic entering the roundabout' },
      { id: 'q-epr-3o2', text: 'Traffic already on the roundabout' },
      { id: 'q-epr-3o3', text: 'Traffic turning left' },
      { id: 'q-epr-3o4', text: 'Traffic turning right' }
    ],
    correctAnswerId: 'q-epr-3o2',
    explanation: 'At a roundabout, traffic already on the roundabout has the right of way. Traffic entering the roundabout must yield.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-4',
    text: 'When merging onto a motorway, who has the right of way?',
    options: [
      { id: 'q-epr-4o1', text: 'Traffic merging onto the motorway' },
      { id: 'q-epr-4o2', text: 'Traffic already on the motorway' },
      { id: 'q-epr-4o3', text: 'The vehicle with the higher speed' },
      { id: 'q-epr-4o4', text: 'The vehicle in the left lane' }
    ],
    correctAnswerId: 'q-epr-4o2',
    explanation: 'When merging onto a motorway, traffic already on the motorway has the right of way. Merging traffic must adjust their speed and find a gap.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-5',
    text: 'When changing lanes, who has the right of way?',
    options: [
      { id: 'q-epr-5o1', text: 'The vehicle changing lanes' },
      { id: 'q-epr-5o2', text: 'The vehicle already in the lane' },
      { id: 'q-epr-5o3', text: 'The vehicle with the higher speed' },
      { id: 'q-epr-5o4', text: 'The vehicle in the left lane' }
    ],
    correctAnswerId: 'q-epr-5o2',
    explanation: 'When changing lanes, the vehicle already in the lane has the right of way. The vehicle changing lanes must yield and find a safe gap.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-6',
    text: 'At an intersection with a "Stop" sign, who has the right of way?',
    options: [
      { id: 'q-epr-6o1', text: 'The vehicle at the stop sign' },
      { id: 'q-epr-6o2', text: 'All other traffic' },
      { id: 'q-epr-6o3', text: 'The vehicle on the right' },
      { id: 'q-epr-6o4', text: 'The vehicle going straight' }
    ],
    correctAnswerId: 'q-epr-6o2',
    explanation: 'At an intersection with a "Stop" sign, the vehicle at the stop sign must yield to all other traffic before proceeding.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-7',
    text: 'At an intersection with a "Give Way" sign, who has the right of way?',
    options: [
      { id: 'q-epr-7o1', text: 'The vehicle at the give way sign' },
      { id: 'q-epr-7o2', text: 'All other traffic' },
      { id: 'q-epr-7o3', text: 'The vehicle on the right' },
      { id: 'q-epr-7o4', text: 'The vehicle going straight' }
    ],
    correctAnswerId: 'q-epr-7o2',
    explanation: 'At an intersection with a "Give Way" sign, the vehicle at the give way sign must yield to all other traffic before proceeding.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-8',
    text: 'When a traffic light turns green, who has the right of way?',
    options: [
      { id: 'q-epr-8o1', text: 'All traffic with a green light' },
      { id: 'q-epr-8o2', text: 'Pedestrians crossing' },
      { id: 'q-epr-8o3', text: 'Emergency vehicles' },
      { id: 'q-epr-8o4', text: 'Traffic turning left' }
    ],
    correctAnswerId: 'q-epr-8o1',
    explanation: 'When a traffic light turns green, all traffic with a green light has the right of way, but must still yield to pedestrians and emergency vehicles.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-9',
    text: 'When a traffic light turns yellow, what should you do?',
    options: [
      { id: 'q-epr-9o1', text: 'Speed up to get through' },
      { id: 'q-epr-9o2', text: 'Stop if it is safe to do so' },
      { id: 'q-epr-9o3', text: 'Ignore the light' },
      { id: 'q-epr-9o4', text: 'Honk your horn' }
    ],
    correctAnswerId: 'q-epr-9o2',
    explanation: 'When a traffic light turns yellow, you should stop if it is safe to do so. Only proceed if you cannot stop safely.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-10',
    text: 'When a traffic light turns red, what should you do?',
    options: [
      { id: 'q-epr-10o1', text: 'Stop completely' },
      { id: 'q-epr-10o2', text: 'Slow down but continue' },
      { id: 'q-epr-10o3', text: 'Speed up to get through' },
      { id: 'q-epr-10o4', text: 'Turn right if clear' }
    ],
    correctAnswerId: 'q-epr-10o1',
    explanation: 'When a traffic light turns red, you must stop completely and wait for the light to turn green before proceeding.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-11',
    text: 'When a traffic light is flashing yellow, what should you do?',
    options: [
      { id: 'q-epr-11o1', text: 'Stop completely' },
      { id: 'q-epr-11o2', text: 'Proceed with caution' },
      { id: 'q-epr-11o3', text: 'Speed up' },
      { id: 'q-epr-11o4', text: 'Turn around' }
    ],
    correctAnswerId: 'q-epr-11o2',
    explanation: 'When a traffic light is flashing yellow, you should proceed with caution and be prepared to stop if necessary.',
    subject: 'Expanded Priority Rules'
  },
  {
    id: 'q-epr-12',
    text: 'When a traffic light is not working, what should you do?',
    options: [
      { id: 'q-epr-12o1', text: 'Treat it as a stop sign' },
      { id: 'q-epr-12o2', text: 'Ignore it completely' },
      { id: 'q-epr-12o3', text: 'Speed up to get through' },
      { id: 'q-epr-12o4', text: 'Turn around' }
    ],
    correctAnswerId: 'q-epr-12o1',
    explanation: 'When a traffic light is not working, you should treat it as a stop sign and yield to other traffic before proceeding.',
    subject: 'Expanded Priority Rules'
  }
];
