import type { Question } from '../types';

export const roadInformationQuestions: Question[] = [
  {
    id: 'q-park-lane-1',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-1o1', text: 'Motorway' },
      { id: 'q-park-lane-1o2', text: 'Expressway' },
      { id: 'q-park-lane-1o3', text: 'Highway' }
    ],
    correctAnswerId: 'q-park-lane-1o1',
    explanation: 'This sign indicates the beginning of a motorway, which has specific rules and restrictions.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-1.png',
    imageHint: 'motorway'
  },
  {
    id: 'q-park-lane-2',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-2o1', text: 'Parking' },
      { id: 'q-park-lane-2o2', text: 'Parking area' },
      { id: 'q-park-lane-2o3', text: 'Parking permitted' }
    ],
    correctAnswerId: 'q-park-lane-2o1',
    explanation: 'This blue square sign with white "P" indicates a parking area where vehicles are allowed to park.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-2.png',
    imageHint: 'parking'
  },
  {
    id: 'q-park-lane-3',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-3o1', text: 'Playground' },
      { id: 'q-park-lane-3o2', text: 'Children at play' },
      { id: 'q-park-lane-3o3', text: 'Play area' }
    ],
    correctAnswerId: 'q-park-lane-3o1',
    explanation: 'This blue rectangular sign with red diagonal line warns drivers of a playground area where children may be playing. Drivers should reduce speed and be extra cautious.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-3.png',
    imageHint: 'playground'
  },
  {
    id: 'q-park-lane-4',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-4o1', text: 'Priority over oncoming traffic' },
      { id: 'q-park-lane-4o2', text: 'Right of way over oncoming traffic' },
      { id: 'q-park-lane-4o3', text: 'Priority for oncoming traffic' }
    ],
    correctAnswerId: 'q-park-lane-4o1',
    explanation: 'This blue square sign with red arrow down and white arrow up indicates that you have priority over oncoming traffic in narrow sections.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-4.png',
    imageHint: 'priority oncoming traffic'
  },
  {
    id: 'q-park-lane-5',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-5o1', text: 'Priority road' },
      { id: 'q-park-lane-5o2', text: 'Main road' },
      { id: 'q-park-lane-5o3', text: 'Priority route' }
    ],
    correctAnswerId: 'q-park-lane-5o1',
    explanation: 'This white diamond sign with yellow square and three black lines indicates a priority road where you have right of way over other traffic.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-5.png',
    imageHint: 'priority road'
  },
  {
    id: 'q-park-lane-6',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-6o1', text: 'Destination' },
      { id: 'q-park-lane-6o2', text: 'Place name' },
      { id: 'q-park-lane-6o3', text: 'Direction sign' }
    ],
    correctAnswerId: 'q-park-lane-6o1',
    explanation: 'This blue rectangular sign with white text indicates a destination or place name, helping drivers navigate to their intended location.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-6.png',
    imageHint: 'destination'
  },
  {
    id: 'q-park-lane-7',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-7o1', text: 'Lanes merging from the left' },
      { id: 'q-park-lane-7o2', text: 'Lane reduction' },
      { id: 'q-park-lane-7o3', text: 'Merge lanes' }
    ],
    correctAnswerId: 'q-park-lane-7o1',
    explanation: 'This blue square sign with three arrows indicates that lanes are merging from the left, requiring drivers to be cautious and allow merging traffic.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-7.png',
    imageHint: 'lanes merging left'
  },
  {
    id: 'q-park-lane-8',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-8o1', text: 'Compulsory direction' },
      { id: 'q-park-lane-8o2', text: 'Turn right' },
      { id: 'q-park-lane-8o3', text: 'Direction arrow' }
    ],
    correctAnswerId: 'q-park-lane-8o1',
    explanation: 'This blue rectangular sign with white arrow indicates a compulsory direction that traffic must follow.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-8.png',
    imageHint: 'compulsory direction'
  },
  {
    id: 'q-park-lane-9',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-9o1', text: 'Height restriction' },
      { id: 'q-park-lane-9o2', text: 'Maximum height 2m' },
      { id: 'q-park-lane-9o3', text: 'Height limit' }
    ],
    correctAnswerId: 'q-park-lane-9o1',
    explanation: 'This blue rectangular sign with red circle and "2m" indicates a height restriction of 2 meters maximum.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-9.png',
    imageHint: 'height restriction'
  },
  {
    id: 'q-park-lane-10',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-park-lane-10o1', text: 'End of no entry for motor vehicles' },
      { id: 'q-park-lane-10o2', text: 'End of motor vehicle prohibition' },
      { id: 'q-park-lane-10o3', text: 'Motor vehicles allowed' }
    ],
    correctAnswerId: 'q-park-lane-10o1',
    explanation: 'This blue square sign with white car and red diagonal line indicates the end of a zone where motor vehicles were prohibited.',
    subject: 'Road Information',
    imageUrl: '/images/signs/road information/q-park-lane-10.png',
    imageHint: 'end no entry motor vehicles'
  }
]; 