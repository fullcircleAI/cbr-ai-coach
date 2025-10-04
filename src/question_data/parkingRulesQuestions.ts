import type { Question } from '../types';

export const parkingRulesQuestions: Question[] = [
  {
    id: 'q-pr-1',
    text: 'What is the minimum distance you must park from a pedestrian crossing?',
    options: [
      { id: 'q-pr-1o1', text: '3 meters' },
      { id: 'q-pr-1o2', text: '5 meters' },
      { id: 'q-pr-1o3', text: '10 meters' },
      { id: 'q-pr-1o4', text: '15 meters' }
    ],
    correctAnswerId: 'q-pr-1o2',
    explanation: 'You must park at least 5 meters from a pedestrian crossing to ensure pedestrians have a clear view of approaching traffic.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-2',
    text: 'What is the minimum distance you must park from a junction?',
    options: [
      { id: 'q-pr-2o1', text: '3 meters' },
      { id: 'q-pr-2o2', text: '5 meters' },
      { id: 'q-pr-2o3', text: '10 meters' },
      { id: 'q-pr-2o4', text: '15 meters' }
    ],
    correctAnswerId: 'q-pr-2o2',
    explanation: 'You must park at least 5 meters from a junction to ensure other drivers have a clear view of approaching traffic.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-3',
    text: 'What is the minimum distance you must park from a bus stop?',
    options: [
      { id: 'q-pr-3o1', text: '5 meters' },
      { id: 'q-pr-3o2', text: '10 meters' },
      { id: 'q-pr-3o3', text: '15 meters' },
      { id: 'q-pr-3o4', text: '20 meters' }
    ],
    correctAnswerId: 'q-pr-3o2',
    explanation: 'You must park at least 10 meters from a bus stop to allow buses to pull in and out safely.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-4',
    text: 'What is the minimum distance you must park from a fire hydrant?',
    options: [
      { id: 'q-pr-4o1', text: '3 meters' },
      { id: 'q-pr-4o2', text: '5 meters' },
      { id: 'q-pr-4o3', text: '10 meters' },
      { id: 'q-pr-4o4', text: '15 meters' }
    ],
    correctAnswerId: 'q-pr-4o2',
    explanation: 'You must park at least 5 meters from a fire hydrant to ensure emergency services can access it when needed.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-5',
    text: 'What is the minimum distance you must park from a railway crossing?',
    options: [
      { id: 'q-pr-5o1', text: '10 meters' },
      { id: 'q-pr-5o2', text: '15 meters' },
      { id: 'q-pr-5o3', text: '20 meters' },
      { id: 'q-pr-5o4', text: '25 meters' }
    ],
    correctAnswerId: 'q-pr-5o3',
    explanation: 'You must park at least 20 meters from a railway crossing to ensure trains have a clear view and can stop safely if needed.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-6',
    text: 'What does a solid yellow line along the edge of the road indicate?',
    options: [
      { id: 'q-pr-6o1', text: 'No parking allowed' },
      { id: 'q-pr-6o2', text: 'No stopping allowed' },
      { id: 'q-pr-6o3', text: 'Parking allowed for 30 minutes' },
      { id: 'q-pr-6o4', text: 'Parking allowed for residents only' }
    ],
    correctAnswerId: 'q-pr-6o1',
    explanation: 'A solid yellow line along the edge of the road indicates that parking is not allowed at any time.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-7',
    text: 'What does a broken yellow line along the edge of the road indicate?',
    options: [
      { id: 'q-pr-7o1', text: 'No parking allowed' },
      { id: 'q-pr-7o2', text: 'No stopping allowed' },
      { id: 'q-pr-7o3', text: 'Parking allowed for 30 minutes' },
      { id: 'q-pr-7o4', text: 'Parking allowed for residents only' }
    ],
    correctAnswerId: 'q-pr-7o2',
    explanation: 'A broken yellow line along the edge of the road indicates that stopping is not allowed, which means you cannot stop or park your vehicle there.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-8',
    text: 'What does a blue line along the edge of the road indicate?',
    options: [
      { id: 'q-pr-8o1', text: 'No parking allowed' },
      { id: 'q-pr-8o2', text: 'Parking for disabled persons only' },
      { id: 'q-pr-8o3', text: 'Parking for residents only' },
      { id: 'q-pr-8o4', text: 'Parking with a permit only' }
    ],
    correctAnswerId: 'q-pr-8o2',
    explanation: 'A blue line indicates parking reserved for disabled persons. You must have a valid disabled parking permit to park here.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-9',
    text: 'What does a white "P" sign with a car symbol indicate?',
    options: [
      { id: 'q-pr-9o1', text: 'No parking allowed' },
      { id: 'q-pr-9o2', text: 'Parking permitted' },
      { id: 'q-pr-9o3', text: 'Parking for residents only' },
      { id: 'q-pr-9o4', text: 'Parking with a permit only' }
    ],
    correctAnswerId: 'q-pr-9o2',
    explanation: 'A white "P" sign with a car symbol indicates that parking is permitted. Look for additional information on any conditions or restrictions.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-10',
    text: 'What does a "No Parking" sign with a red circle and crossed-out "P" indicate?',
    options: [
      { id: 'q-pr-10o1', text: 'No parking allowed' },
      { id: 'q-pr-10o2', text: 'No stopping allowed' },
      { id: 'q-pr-10o3', text: 'Parking allowed for 30 minutes' },
      { id: 'q-pr-10o4', text: 'Parking allowed for residents only' }
    ],
    correctAnswerId: 'q-pr-10o1',
    explanation: 'A "No Parking" sign with a red circle and crossed-out "P" indicates that parking is not allowed at any time.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-11',
    text: 'What does a "No Stopping" sign with a red circle and crossed-out "S" indicate?',
    options: [
      { id: 'q-pr-11o1', text: 'No parking allowed' },
      { id: 'q-pr-11o2', text: 'No stopping allowed' },
      { id: 'q-pr-11o3', text: 'Parking allowed for 30 minutes' },
      { id: 'q-pr-11o4', text: 'Parking allowed for residents only' }
    ],
    correctAnswerId: 'q-pr-11o2',
    explanation: 'A "No Stopping" sign with a red circle and crossed-out "S" indicates that stopping is not allowed, which means you cannot stop or park your vehicle there.',
    subject: 'Parking Rules'
  },
  {
    id: 'q-pr-12',
    text: 'What does a "Resident Parking" sign indicate?',
    options: [
      { id: 'q-pr-12o1', text: 'No parking allowed' },
      { id: 'q-pr-12o2', text: 'Parking for disabled persons only' },
      { id: 'q-pr-12o3', text: 'Parking for residents only' },
      { id: 'q-pr-12o4', text: 'Parking with a permit only' }
    ],
    correctAnswerId: 'q-pr-12o3',
    explanation: 'A "Resident Parking" sign indicates that parking is reserved for residents of the area. You must have a valid resident parking permit to park here.',
    subject: 'Parking Rules'
  }
];
