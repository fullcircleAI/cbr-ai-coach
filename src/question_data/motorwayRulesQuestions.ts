import type { Question } from '../types';

export const motorwayRulesQuestions: Question[] = [
  {
    id: 'q-mr-1',
    text: 'What is the minimum speed limit on a motorway in the Netherlands?',
    options: [
      { id: 'q-mr-1o1', text: '50 km/h' },
      { id: 'q-mr-1o2', text: '60 km/h' },
      { id: 'q-mr-1o3', text: '70 km/h' },
      { id: 'q-mr-1o4', text: '80 km/h' }
    ],
    correctAnswerId: 'q-mr-1o2',
    explanation: 'The minimum speed limit on a motorway in the Netherlands is 60 km/h. Vehicles that cannot maintain this speed are not allowed on motorways.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-2',
    text: 'Which vehicles are not allowed on motorways?',
    options: [
      { id: 'q-mr-2o1', text: 'Motorcycles' },
      { id: 'q-mr-2o2', text: 'Mopeds and tractors' },
      { id: 'q-mr-2o3', text: 'Cars towing trailers' },
      { id: 'q-mr-2o4', text: 'All of the above' }
    ],
    correctAnswerId: 'q-mr-2o2',
    explanation: 'Mopeds and tractors are not allowed on motorways as they cannot maintain the minimum speed limit and would create a safety hazard.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-3',
    text: 'What should you do if your vehicle breaks down on a motorway?',
    options: [
      { id: 'q-mr-3o1', text: 'Stay in your vehicle' },
      { id: 'q-mr-3o2', text: 'Get out and stand behind the barrier' },
      { id: 'q-mr-3o3', text: 'Walk along the motorway to find help' },
      { id: 'q-mr-3o4', text: 'Try to repair the vehicle yourself' }
    ],
    correctAnswerId: 'q-mr-3o2',
    explanation: 'If your vehicle breaks down on a motorway, you should get out of your vehicle and stand behind the safety barrier. Call for assistance using the emergency phones.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-4',
    text: 'What is the purpose of the hard shoulder on a motorway?',
    options: [
      { id: 'q-mr-4o1', text: 'For overtaking slow vehicles' },
      { id: 'q-mr-4o2', text: 'For emergency stops and breakdowns' },
      { id: 'q-mr-4o3', text: 'For parking when tired' },
      { id: 'q-mr-4o4', text: 'For making phone calls' }
    ],
    correctAnswerId: 'q-mr-4o2',
    explanation: 'The hard shoulder is reserved for emergency stops and breakdowns only. It should not be used for normal driving, overtaking, or parking.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-5',
    text: 'What should you do when approaching a motorway exit?',
    options: [
      { id: 'q-mr-5o1', text: 'Speed up to get through quickly' },
      { id: 'q-mr-5o2', text: 'Move to the left lane early' },
      { id: 'q-mr-5o3', text: 'Move to the right lane early' },
      { id: 'q-mr-5o4', text: 'Honk your horn to signal your intention' }
    ],
    correctAnswerId: 'q-mr-5o3',
    explanation: 'When approaching a motorway exit, you should move to the right lane early and reduce your speed gradually to safely exit the motorway.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-6',
    text: 'What should you do when entering a motorway?',
    options: [
      { id: 'q-mr-6o1', text: 'Stop and wait for a large gap' },
      { id: 'q-mr-6o2', text: 'Accelerate to match motorway speed' },
      { id: 'q-mr-6o3', text: 'Slow down to let other vehicles pass' },
      { id: 'q-mr-6o4', text: 'Honk your horn to signal your intention' }
    ],
    correctAnswerId: 'q-mr-6o2',
    explanation: 'When entering a motorway, you should accelerate to match the speed of traffic on the motorway and merge safely into a gap.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-7',
    text: 'What does a variable speed limit sign on a motorway mean?',
    options: [
      { id: 'q-mr-7o1', text: 'The speed limit is optional' },
      { id: 'q-mr-7o2', text: 'You must follow the displayed speed limit' },
      { id: 'q-mr-7o3', text: 'The speed limit only applies to trucks' },
      { id: 'q-mr-7o4', text: 'The speed limit only applies at night' }
    ],
    correctAnswerId: 'q-mr-7o2',
    explanation: 'Variable speed limit signs on motorways display mandatory speed limits that you must follow. These are used to manage traffic flow and improve safety.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-8',
    text: 'What should you do if you miss your motorway exit?',
    options: [
      { id: 'q-mr-8o1', text: 'Reverse back to the exit' },
      { id: 'q-mr-8o2', text: 'Stop and turn around' },
      { id: 'q-mr-8o3', text: 'Continue to the next exit' },
      { id: 'q-mr-8o4', text: 'Use the hard shoulder to turn around' }
    ],
    correctAnswerId: 'q-mr-8o3',
    explanation: 'If you miss your motorway exit, you should continue to the next exit and find an alternative route. Never reverse, stop, or turn around on a motorway.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-9',
    text: 'What is the purpose of lane markings on a motorway?',
    options: [
      { id: 'q-mr-9o1', text: 'To separate different types of vehicles' },
      { id: 'q-mr-9o2', text: 'To organize traffic flow and prevent accidents' },
      { id: 'q-mr-9o3', text: 'To create parking spaces' },
      { id: 'q-mr-9o4', text: 'To mark emergency stopping areas' }
    ],
    correctAnswerId: 'q-mr-9o2',
    explanation: 'Lane markings on motorways help organize traffic flow, prevent accidents, and ensure safe driving by clearly defining where vehicles should drive.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-10',
    text: 'What should you do when overtaking on a motorway?',
    options: [
      { id: 'q-mr-10o1', text: 'Use the hard shoulder' },
      { id: 'q-mr-10o2', text: 'Use the left lane' },
      { id: 'q-mr-10o3', text: 'Use the right lane' },
      { id: 'q-mr-10o4', text: 'Honk your horn continuously' }
    ],
    correctAnswerId: 'q-mr-10o2',
    explanation: 'When overtaking on a motorway, you should use the left lane (the lane to the left of the vehicle you are overtaking).',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-11',
    text: 'What should you do when being overtaken on a motorway?',
    options: [
      { id: 'q-mr-11o1', text: 'Speed up to prevent being overtaken' },
      { id: 'q-mr-11o2', text: 'Move to the right lane' },
      { id: 'q-mr-11o3', text: 'Maintain your speed and position' },
      { id: 'q-mr-11o4', text: 'Honk your horn to signal your position' }
    ],
    correctAnswerId: 'q-mr-11o3',
    explanation: 'When being overtaken on a motorway, you should maintain your speed and position. Do not speed up or change lanes unnecessarily.',
    subject: 'Motorway Rules'
  },
  {
    id: 'q-mr-12',
    text: 'What should you do if you see an emergency vehicle on a motorway?',
    options: [
      { id: 'q-mr-12o1', text: 'Ignore it and continue driving' },
      { id: 'q-mr-12o2', text: 'Move to the right and slow down' },
      { id: 'q-mr-12o3', text: 'Speed up to get out of the way' },
      { id: 'q-mr-12o4', text: 'Stop immediately' }
    ],
    correctAnswerId: 'q-mr-12o2',
    explanation: 'If you see an emergency vehicle on a motorway, you should move to the right lane and slow down to allow it to pass safely.',
    subject: 'Motorway Rules'
  }
];
