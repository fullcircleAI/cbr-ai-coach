import type { Question } from '../types';

export const tramInteractionsQuestions: Question[] = [
  {
    id: 'q-ti-1',
    text: 'You are driving and see a tram approaching from behind. What should you do?',
    options: [
      { id: 'q-ti-1o1', text: 'Give way to the tram' },
      { id: 'q-ti-1o2', text: 'Continue driving normally' },
      { id: 'q-ti-1o3', text: 'Speed up to avoid the tram' }
    ],
    correctAnswerId: 'q-ti-1o1',
    explanation: 'Trams have priority over other vehicles. You must give way to trams and allow them to pass safely.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-2',
    text: 'You are driving and see a tram stopped at a tram stop. What should you do?',
    options: [
      { id: 'q-ti-2o1', text: 'Stop and wait for passengers to board/alight' },
      { id: 'q-ti-2o2', text: 'Continue driving past the tram' },
      { id: 'q-ti-2o3', text: 'Honk to warn passengers' }
    ],
    correctAnswerId: 'q-ti-2o1',
    explanation: 'When a tram is stopped at a tram stop, you must stop and wait for passengers to safely board or alight before proceeding.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-3',
    text: 'You are driving and see a tram crossing your path. What should you do?',
    options: [
      { id: 'q-ti-3o1', text: 'Give way to the tram' },
      { id: 'q-ti-3o2', text: 'Continue driving, trams must give way' },
      { id: 'q-ti-3o3', text: 'Speed up to cross before the tram' }
    ],
    correctAnswerId: 'q-ti-3o1',
    explanation: 'Trams have priority at intersections and crossings. You must give way to trams and wait for them to pass.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-4',
    text: 'You are driving on a road with tram tracks. What should you do?',
    options: [
      { id: 'q-ti-4o1', text: 'Drive carefully and be aware of trams' },
      { id: 'q-ti-4o2', text: 'Drive normally, trams will avoid you' },
      { id: 'q-ti-4o3', text: 'Avoid driving on roads with tram tracks' }
    ],
    correctAnswerId: 'q-ti-4o1',
    explanation: 'When driving on roads with tram tracks, drive carefully and be constantly aware of trams that may be approaching.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-5',
    text: 'You are driving and see a tram with flashing lights. What should you do?',
    options: [
      { id: 'q-ti-5o1', text: 'Give way to the tram immediately' },
      { id: 'q-ti-5o2', text: 'Continue driving normally' },
      { id: 'q-ti-5o3', text: 'Honk to warn the tram driver' }
    ],
    correctAnswerId: 'q-ti-5o1',
    explanation: 'Trams with flashing lights have priority and may be making an emergency stop. Give way to them immediately.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-6',
    text: 'You are driving and see a tram approaching from the opposite direction. What should you do?',
    options: [
      { id: 'q-ti-6o1', text: 'Drive normally, trams have their own lane' },
      { id: 'q-ti-6o2', text: 'Give extra space to the tram' },
      { id: 'q-ti-6o3', text: 'Stop completely and let the tram pass' }
    ],
    correctAnswerId: 'q-ti-6o2',
    explanation: 'When a tram is approaching from the opposite direction, give it extra space and be prepared to stop if necessary.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-7',
    text: 'You are driving and see a tram making a turn. What should you do?',
    options: [
      { id: 'q-ti-7o1', text: 'Give way to the tram' },
      { id: 'q-ti-7o2', text: 'Continue driving, trams must give way' },
      { id: 'q-ti-7o3', text: 'Speed up to avoid the tram' }
    ],
    correctAnswerId: 'q-ti-7o1',
    explanation: 'Trams have priority when making turns. You must give way to trams and wait for them to complete their turn.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-8',
    text: 'You are driving and see a tram at a tram stop with passengers boarding. What should you do?',
    options: [
      { id: 'q-ti-8o1', text: 'Stop and wait for the tram to depart' },
      { id: 'q-ti-8o2', text: 'Continue driving past the tram' },
      { id: 'q-ti-8o3', text: 'Honk to warn passengers' }
    ],
    correctAnswerId: 'q-ti-8o1',
    explanation: 'When a tram is at a stop with passengers boarding, you must stop and wait for the tram to depart before proceeding.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-9',
    text: 'You are driving and see a tram with its doors open. What should you do?',
    options: [
      { id: 'q-ti-9o1', text: 'Stop and wait for the doors to close' },
      { id: 'q-ti-9o2', text: 'Continue driving past the tram' },
      { id: 'q-ti-9o3', text: 'Honk to warn the tram driver' }
    ],
    correctAnswerId: 'q-ti-9o1',
    explanation: 'When a tram has its doors open, it means passengers are boarding or alighting. You must stop and wait for the doors to close.',
    subject: 'Tram Interactions'
  },
  {
    id: 'q-ti-10',
    text: 'You are driving and see a tram with a red light. What should you do?',
    options: [
      { id: 'q-ti-10o1', text: 'Give way to the tram' },
      { id: 'q-ti-10o2', text: 'Continue driving normally' },
      { id: 'q-ti-10o3', text: 'Honk to warn the tram driver' }
    ],
    correctAnswerId: 'q-ti-10o1',
    explanation: 'Trams with red lights have priority and may be making an emergency stop. You must give way to them immediately.',
    subject: 'Tram Interactions'
  }
];






