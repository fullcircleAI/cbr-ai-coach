import type { Question } from '../types';

export const vehicleCategoriesQuestions: Question[] = [
  {
    id: 'q-vc-1',
    text: 'What is the speed limit for motorcycles on motorways in the Netherlands?',
    options: [
      { id: 'q-vc-1o1', text: '100 km/h' },
      { id: 'q-vc-1o2', text: '120 km/h' },
      { id: 'q-vc-1o3', text: '130 km/h' },
      { id: 'q-vc-1o4', text: '140 km/h' }
    ],
    correctAnswerId: 'q-vc-1o3',
    explanation: 'Motorcycles have the same speed limit as cars on motorways in the Netherlands, which is 130 km/h during good weather conditions.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-2',
    text: 'What is the speed limit for trucks on motorways in the Netherlands?',
    options: [
      { id: 'q-vc-2o1', text: '80 km/h' },
      { id: 'q-vc-2o2', text: '90 km/h' },
      { id: 'q-vc-2o3', text: '100 km/h' },
      { id: 'q-vc-2o4', text: '110 km/h' }
    ],
    correctAnswerId: 'q-vc-2o1',
    explanation: 'Trucks have a speed limit of 80 km/h on motorways in the Netherlands, regardless of the weather conditions.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-3',
    text: 'What is the speed limit for buses on motorways in the Netherlands?',
    options: [
      { id: 'q-vc-3o1', text: '80 km/h' },
      { id: 'q-vc-3o2', text: '90 km/h' },
      { id: 'q-vc-3o3', text: '100 km/h' },
      { id: 'q-vc-3o4', text: '110 km/h' }
    ],
    correctAnswerId: 'q-vc-3o1',
    explanation: 'Buses have a speed limit of 80 km/h on motorways in the Netherlands, the same as trucks.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-4',
    text: 'What is the speed limit for mopeds on roads in the Netherlands?',
    options: [
      { id: 'q-vc-4o1', text: '25 km/h' },
      { id: 'q-vc-4o2', text: '30 km/h' },
      { id: 'q-vc-4o3', text: '45 km/h' },
      { id: 'q-vc-4o4', text: '50 km/h' }
    ],
    correctAnswerId: 'q-vc-4o3',
    explanation: 'Mopeds have a speed limit of 45 km/h on roads in the Netherlands, unless otherwise indicated by traffic signs.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-5',
    text: 'What is the speed limit for tractors on roads in the Netherlands?',
    options: [
      { id: 'q-vc-5o1', text: '15 km/h' },
      { id: 'q-vc-5o2', text: '25 km/h' },
      { id: 'q-vc-5o3', text: '30 km/h' },
      { id: 'q-vc-5o4', text: '40 km/h' }
    ],
    correctAnswerId: 'q-vc-5o2',
    explanation: 'Tractors have a speed limit of 25 km/h on roads in the Netherlands, unless they have special permission for higher speeds.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-6',
    text: 'Which lane should motorcycles use on a three-lane motorway?',
    options: [
      { id: 'q-vc-6o1', text: 'The right lane only' },
      { id: 'q-vc-6o2', text: 'The left lane only' },
      { id: 'q-vc-6o3', text: 'Any lane they choose' },
      { id: 'q-vc-6o4', text: 'The middle lane only' }
    ],
    correctAnswerId: 'q-vc-6o3',
    explanation: 'Motorcycles can use any lane on a motorway, just like cars. They should follow the same lane discipline rules.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-7',
    text: 'Which lane should trucks use on a three-lane motorway?',
    options: [
      { id: 'q-vc-7o1', text: 'The right lane only' },
      { id: 'q-vc-7o2', text: 'The left lane only' },
      { id: 'q-vc-7o3', text: 'Any lane they choose' },
      { id: 'q-vc-7o4', text: 'The middle and right lanes' }
    ],
    correctAnswerId: 'q-vc-7o4',
    explanation: 'Trucks should use the middle and right lanes on a three-lane motorway. They are not allowed to use the left lane for overtaking.',
    subject: 'Vehicle Categories'
  },
  {
    id: 'q-vc-8',
    text: 'What is the speed limit for cars towing trailers on motorways?',
    options: [
      { id: 'q-vc-8o1', text: '80 km/h' },
      { id: 'q-vc-8o2', text: '90 km/h' },
      { id: 'q-vc-8o3', text: '100 km/h' },
      { id: 'q-vc-8o4', text: '110 km/h' }
    ],
    correctAnswerId: 'q-vc-8o2',
    explanation: 'Cars towing trailers have a speed limit of 90 km/h on motorways in the Netherlands.',
    subject: 'Vehicle Categories'
  }
];
