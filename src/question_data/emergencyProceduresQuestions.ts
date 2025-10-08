import type { Question } from '../types';

export const emergencyProceduresQuestions: Question[] = [
  {
    id: 'q-ep-1',
    text: 'What should you do if you are involved in a traffic accident?',
    options: [
      { id: 'q-ep-1o1', text: 'Drive away quickly' },
      { id: 'q-ep-1o2', text: 'Stop immediately and check for injuries' },
      { id: 'q-ep-1o3', text: 'Wait for someone else to call the police' }
    ],
    correctAnswerId: 'q-ep-1o2',
    explanation: 'If you are involved in a traffic accident, you must stop immediately and check for injuries. Call emergency services if needed.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-2',
    text: 'What is the emergency number in the Netherlands?',
    options: [
      { id: 'q-ep-2o1', text: '911' },
      { id: 'q-ep-2o2', text: '112' },
      { id: 'q-ep-2o3', text: '999' }
    ],
    correctAnswerId: 'q-ep-2o2',
    explanation: 'The emergency number in the Netherlands is 112. This number connects you to police, fire, and ambulance services.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-3',
    text: 'When should you call the emergency number 112?',
    options: [
      { id: 'q-ep-3o1', text: 'Only for life-threatening situations' },
      { id: 'q-ep-3o2', text: 'For any traffic accident' },
      { id: 'q-ep-3o3', text: 'For life-threatening situations and serious accidents' }
    ],
    correctAnswerId: 'q-ep-3o3',
    explanation: 'Call 112 for life-threatening situations and serious accidents where immediate assistance is needed.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-4',
    text: 'What should you do if you witness a traffic accident?',
    options: [
      { id: 'q-ep-4o1', text: 'Continue driving' },
      { id: 'q-ep-4o2', text: 'Stop and offer assistance if safe to do so' },
      { id: 'q-ep-4o3', text: 'Call the police immediately' }
    ],
    correctAnswerId: 'q-ep-4o2',
    explanation: 'If you witness a traffic accident, stop and offer assistance if it is safe to do so. Call emergency services if needed.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-5',
    text: 'What should you do if your vehicle breaks down on a motorway?',
    options: [
      { id: 'q-ep-5o1', text: 'Stay in your vehicle' },
      { id: 'q-ep-5o2', text: 'Get out and stand behind the barrier' },
      { id: 'q-ep-5o3', text: 'Walk along the motorway to find help' }
    ],
    correctAnswerId: 'q-ep-5o2',
    explanation: 'If your vehicle breaks down on a motorway, get out and stand behind the safety barrier. Use emergency phones to call for assistance.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-6',
    text: 'What should you do if you see an emergency vehicle with lights and sirens?',
    options: [
      { id: 'q-ep-6o1', text: 'Ignore it and continue driving' },
      { id: 'q-ep-6o2', text: 'Move to the right and slow down' },
      { id: 'q-ep-6o3', text: 'Speed up to get out of the way' }
    ],
    correctAnswerId: 'q-ep-6o2',
    explanation: 'If you see an emergency vehicle with lights and sirens, move to the right and slow down to allow it to pass safely.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-7',
    text: 'What should you do if you are involved in a minor accident with no injuries?',
    options: [
      { id: 'q-ep-7o1', text: 'Exchange information with the other driver' },
      { id: 'q-ep-7o2', text: 'Call the police immediately' },
      { id: 'q-ep-7o3', text: 'Drive away quickly' }
    ],
    correctAnswerId: 'q-ep-7o1',
    explanation: 'In a minor accident with no injuries, exchange information with the other driver including names, addresses, and insurance details.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-8',
    text: 'What should you do if you hit a parked car?',
    options: [
      { id: 'q-ep-8o1', text: 'Leave a note with your contact information' },
      { id: 'q-ep-8o2', text: 'Wait for the owner to return' },
      { id: 'q-ep-8o3', text: 'Call the police immediately' }
    ],
    correctAnswerId: 'q-ep-8o1',
    explanation: 'If you hit a parked car, leave a note with your contact information and report the incident to your insurance company.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-9',
    text: 'What should you do if you are involved in an accident with a cyclist or pedestrian?',
    options: [
      { id: 'q-ep-9o1', text: 'Drive away quickly' },
      { id: 'q-ep-9o2', text: 'Stop immediately and call emergency services' },
      { id: 'q-ep-9o3', text: 'Wait for someone else to help' }
    ],
    correctAnswerId: 'q-ep-9o2',
    explanation: 'If you are involved in an accident with a cyclist or pedestrian, stop immediately and call emergency services (112).',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-10',
    text: 'What should you do if your vehicle catches fire?',
    options: [
      { id: 'q-ep-10o1', text: 'Try to put out the fire yourself' },
      { id: 'q-ep-10o2', text: 'Stop immediately and evacuate everyone' },
      { id: 'q-ep-10o3', text: 'Continue driving to find help' }
    ],
    correctAnswerId: 'q-ep-10o2',
    explanation: 'If your vehicle catches fire, stop immediately and evacuate everyone from the vehicle. Call emergency services and move to a safe distance.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-11',
    text: 'What should you do if you witness a hit-and-run accident?',
    options: [
      { id: 'q-ep-11o1', text: 'Follow the fleeing vehicle' },
      { id: 'q-ep-11o2', text: 'Call the police and provide details' },
      { id: 'q-ep-11o3', text: 'Ignore it' }
    ],
    correctAnswerId: 'q-ep-11o2',
    explanation: 'If you witness a hit-and-run accident, call the police and provide as many details as possible about the fleeing vehicle.',
    subject: 'Emergency Procedures'
  },
  {
    id: 'q-ep-12',
    text: 'What should you do if you are involved in an accident with an uninsured driver?',
    options: [
      { id: 'q-ep-12o1', text: 'Accept cash payment' },
      { id: 'q-ep-12o2', text: 'Call the police and your insurance company' },
      { id: 'q-ep-12o3', text: 'Drive away quickly' }
    ],
    correctAnswerId: 'q-ep-12o2',
    explanation: 'If you are involved in an accident with an uninsured driver, call the police and your insurance company immediately.',
    subject: 'Emergency Procedures'
  }
];
