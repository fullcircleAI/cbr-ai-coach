import type { Question } from '../types';

export const environmentalZonesQuestions: Question[] = [
  {
    id: 'q-ez-1',
    text: 'What is a "milieuzone" (environmental zone) in the Netherlands?',
    options: [
      { id: 'q-ez-1o1', text: 'A nature reserve area' },
      { id: 'q-ez-1o2', text: 'A city center with restricted vehicle access' },
      { id: 'q-ez-1o3', text: 'A parking area for electric vehicles' },
      { id: 'q-ez-1o4', text: 'A bicycle-only zone' }
    ],
    correctAnswerId: 'q-ez-1o2',
    explanation: 'A "milieuzone" (environmental zone) is a city center area where certain vehicles are restricted from entering to improve air quality and reduce pollution.',
    subject: 'Environmental Zones'
  },
  {
    id: 'q-ez-2',
    text: 'Which vehicles are typically restricted in environmental zones?',
    options: [
      { id: 'q-ez-2o1', text: 'All vehicles' },
      { id: 'q-ez-2o2', text: 'Diesel vehicles and older cars' },
      { id: 'q-ez-2o3', text: 'Electric vehicles only' },
      { id: 'q-ez-2o4', text: 'Motorcycles only' }
    ],
    correctAnswerId: 'q-ez-2o2',
    explanation: 'Environmental zones typically restrict diesel vehicles and older cars that do not meet current emission standards to improve air quality.',
    subject: 'Environmental Zones'
  },
  {
    id: 'q-ez-3',
    text: 'What sign indicates the entrance to an environmental zone?',
    options: [
      { id: 'q-ez-3o1', text: 'A red circle with "MILIEUZONE"' },
      { id: 'q-ez-3o2', text: 'A blue circle with "MILIEUZONE"' },
      { id: 'q-ez-3o3', text: 'A green circle with "MILIEUZONE"' },
      { id: 'q-ez-3o4', text: 'A yellow triangle with "MILIEUZONE"' }
    ],
    correctAnswerId: 'q-ez-3o1',
    explanation: 'The entrance to an environmental zone is marked with a red circle containing "MILIEUZONE" to indicate restricted access.',
    subject: 'Environmental Zones'
  },
  {
    id: 'q-ez-4',
    text: 'What sign indicates the exit from an environmental zone?',
    options: [
      { id: 'q-ez-4o1', text: 'A red circle with "MILIEUZONE" and a diagonal line' },
      { id: 'q-ez-4o2', text: 'A blue circle with "MILIEUZONE" and a diagonal line' },
      { id: 'q-ez-4o3', text: 'A green circle with "MILIEUZONE" and a diagonal line' },
      { id: 'q-ez-4o4', text: 'A yellow triangle with "MILIEUZONE" and a diagonal line' }
    ],
    correctAnswerId: 'q-ez-4o1',
    explanation: 'The exit from an environmental zone is marked with a red circle containing "MILIEUZONE" with a diagonal line through it.',
    subject: 'Environmental Zones'
  },
  {
    id: 'q-ez-5',
    text: 'What is the penalty for entering an environmental zone with a restricted vehicle?',
    options: [
      { id: 'q-ez-5o1', text: 'No penalty' },
      { id: 'q-ez-5o2', text: 'A warning letter' },
      { id: 'q-ez-5o3', text: 'A fine of €95' },
      { id: 'q-ez-5o4', text: 'Vehicle confiscation' }
    ],
    correctAnswerId: 'q-ez-5o3',
    explanation: 'Entering an environmental zone with a restricted vehicle typically results in a fine of €95.',
    subject: 'Environmental Zones'
  },
  {
    id: 'q-ez-6',
    text: 'Which vehicles are usually exempt from environmental zone restrictions?',
    options: [
      { id: 'q-ez-6o1', text: 'All vehicles' },
      { id: 'q-ez-6o2', text: 'Emergency vehicles and electric vehicles' },
      { id: 'q-ez-6o3', text: 'Only electric vehicles' },
      { id: 'q-ez-6o4', text: 'Only emergency vehicles' }
    ],
    correctAnswerId: 'q-ez-6o2',
    explanation: 'Emergency vehicles and electric vehicles are usually exempt from environmental zone restrictions as they have low or zero emissions.',
    subject: 'Environmental Zones'
  }
];
