import type { Question } from '../types';

export const speedLimitQuestions: Question[] = [
  {
    id: 'q-sl-1',
    text: 'What is the maximum speed limit for cars on a motorway in the Netherlands during good weather conditions?',
    options: [
      { id: 'q-sl-1o1', text: '100 km/h' },
      { id: 'q-sl-1o2', text: '120 km/h' },
      { id: 'q-sl-1o3', text: '130 km/h' },
      { id: 'q-sl-1o4', text: '140 km/h' }
    ],
    correctAnswerId: 'q-sl-1o1',
    explanation: 'The maximum speed limit for cars on Dutch motorways is 100 km/h during good weather conditions. This was reduced from 130 km/h to 100 km/h in 2020 and remains at 100 km/h.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-2',
    text: 'What is the speed limit for cars in built-up areas (within city limits) in the Netherlands?',
    options: [
      { id: 'q-sl-2o1', text: '30 km/h' },
      { id: 'q-sl-2o2', text: '50 km/h' },
      { id: 'q-sl-2o3', text: '70 km/h' },
      { id: 'q-sl-2o4', text: '80 km/h' }
    ],
    correctAnswerId: 'q-sl-2o2',
    explanation: 'The standard speed limit in built-up areas in the Netherlands is 50 km/h, unless otherwise indicated by traffic signs.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-3',
    text: 'What is the speed limit for cars on rural roads outside built-up areas?',
    options: [
      { id: 'q-sl-3o1', text: '60 km/h' },
      { id: 'q-sl-3o2', text: '70 km/h' },
      { id: 'q-sl-3o3', text: '80 km/h' },
      { id: 'q-sl-3o4', text: '100 km/h' }
    ],
    correctAnswerId: 'q-sl-3o3',
    explanation: 'On rural roads outside built-up areas, the speed limit for cars is 80 km/h, unless a different limit is indicated by traffic signs.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-4',
    text: 'What is the speed limit for cars on a motorway during bad weather conditions (rain, snow, fog)?',
    options: [
      { id: 'q-sl-4o1', text: '80 km/h' },
      { id: 'q-sl-4o2', text: '100 km/h' },
      { id: 'q-sl-4o3', text: '120 km/h' },
      { id: 'q-sl-4o4', text: '130 km/h' }
    ],
    correctAnswerId: 'q-sl-4o2',
    explanation: 'During bad weather conditions, the speed limit on motorways is reduced to 100 km/h for safety reasons.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-5',
    text: 'What is the speed limit for cars in a 30 km/h zone?',
    options: [
      { id: 'q-sl-5o1', text: '20 km/h' },
      { id: 'q-sl-5o2', text: '30 km/h' },
      { id: 'q-sl-5o3', text: '40 km/h' },
      { id: 'q-sl-5o4', text: '50 km/h' }
    ],
    correctAnswerId: 'q-sl-5o2',
    explanation: 'In a 30 km/h zone, the maximum speed limit is 30 km/h. These zones are typically found in residential areas, near schools, or in areas with high pedestrian activity.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-6',
    text: 'What is the speed limit for cars on a motorway at night (between 19:00 and 06:00)?',
    options: [
      { id: 'q-sl-6o1', text: '100 km/h' },
      { id: 'q-sl-6o2', text: '120 km/h' },
      { id: 'q-sl-6o3', text: '130 km/h' },
      { id: 'q-sl-6o4', text: '140 km/h' }
    ],
    correctAnswerId: 'q-sl-6o1',
    explanation: 'At night (between 19:00 and 06:00), the speed limit on motorways is 100 km/h to reduce noise pollution and improve safety.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-7',
    text: 'What is the speed limit for cars on a dual carriageway (autoweg) outside built-up areas?',
    options: [
      { id: 'q-sl-7o1', text: '80 km/h' },
      { id: 'q-sl-7o2', text: '100 km/h' },
      { id: 'q-sl-7o3', text: '120 km/h' },
      { id: 'q-sl-7o4', text: '130 km/h' }
    ],
    correctAnswerId: 'q-sl-7o2',
    explanation: 'On dual carriageways (autoweg) outside built-up areas, the speed limit for cars is 100 km/h.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-8',
    text: 'What is the speed limit for cars when towing a trailer on a motorway?',
    options: [
      { id: 'q-sl-8o1', text: '80 km/h' },
      { id: 'q-sl-8o2', text: '90 km/h' },
      { id: 'q-sl-8o3', text: '100 km/h' },
      { id: 'q-sl-8o4', text: '120 km/h' }
    ],
    correctAnswerId: 'q-sl-8o2',
    explanation: 'When towing a trailer on a motorway, the speed limit is 90 km/h for safety reasons.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-9',
    text: 'What is the speed limit for cars in a roadworks zone on a motorway?',
    options: [
      { id: 'q-sl-9o1', text: '50 km/h' },
      { id: 'q-sl-9o2', text: '70 km/h' },
      { id: 'q-sl-9o3', text: '80 km/h' },
      { id: 'q-sl-9o4', text: '100 km/h' }
    ],
    correctAnswerId: 'q-sl-9o2',
    explanation: 'In roadworks zones on motorways, the speed limit is typically reduced to 70 km/h to ensure the safety of workers and drivers.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-10',
    text: 'What is the speed limit for cars in a residential area with speed bumps?',
    options: [
      { id: 'q-sl-10o1', text: '20 km/h' },
      { id: 'q-sl-10o2', text: '30 km/h' },
      { id: 'q-sl-10o3', text: '50 km/h' },
      { id: 'q-sl-10o4', text: '70 km/h' }
    ],
    correctAnswerId: 'q-sl-10o2',
    explanation: 'In residential areas with speed bumps, the speed limit is typically 30 km/h to ensure pedestrian safety.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-11',
    text: 'What is the speed limit for cars on a motorway when there is a variable speed limit sign showing 80 km/h?',
    options: [
      { id: 'q-sl-11o1', text: '80 km/h' },
      { id: 'q-sl-11o2', text: '100 km/h' },
      { id: 'q-sl-11o3', text: '130 km/h' },
      { id: 'q-sl-11o4', text: 'The normal motorway limit' }
    ],
    correctAnswerId: 'q-sl-11o1',
    explanation: 'When a variable speed limit sign shows 80 km/h, you must follow that limit, which overrides the normal motorway speed limit.',
    subject: 'Speed Limits'
  },
  {
    id: 'q-sl-12',
    text: 'What is the speed limit for cars in a special zone marked with a "Zone 30" sign?',
    options: [
      { id: 'q-sl-12o1', text: '20 km/h' },
      { id: 'q-sl-12o2', text: '30 km/h' },
      { id: 'q-sl-12o3', text: '50 km/h' },
      { id: 'q-sl-12o4', text: '70 km/h' }
    ],
    correctAnswerId: 'q-sl-12o2',
    explanation: 'A "Zone 30" sign indicates that the speed limit is 30 km/h throughout the entire zone, not just at the entrance.',
    subject: 'Speed Limits'
  }
];
