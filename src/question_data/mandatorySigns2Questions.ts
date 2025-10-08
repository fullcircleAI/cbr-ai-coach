import type { Question } from '../types';

export const mandatorySigns2Questions: Question[] = [
  {
    id: 'q-mand-text-1',
    text: 'A blue circular sign shows a white arrow pointing left. What does this indicate?',
    options: [
      { id: 'q-mand-text-1o1', text: 'You may turn left if clear.' },
      { id: 'q-mand-text-1o2', text: 'Compulsory left turn ahead.' },
      { id: 'q-mand-text-1o3', text: 'One-way street to the left.' },
    ],
    correctAnswerId: 'q-mand-text-1o2',
    explanation: "This sign means a compulsory left turn. You must turn left as indicated.",
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-2',
    text: 'What is the primary meaning of a round blue sign with a white pedestrian symbol?',
    options: [
      { id: 'q-mand-text-2o1', text: 'Warning: pedestrians crossing.' },
      { id: 'q-mand-text-2o2', text: 'Pedestrians are prohibited here.' },
      { id: 'q-mand-text-2o3', text: 'Mandatory footpath for pedestrians.' },
    ],
    correctAnswerId: 'q-mand-text-2o3',
    explanation: 'This sign indicates a mandatory footpath. Pedestrians must use this path.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-3',
    text: 'If you see a round blue sign with a bicycle symbol, what are you required to do as a cyclist?',
    options: [
      { id: 'q-mand-text-3o1', text: 'Avoid this area.' },
      { id: 'q-mand-text-3o2', text: 'Use the indicated cycle track.' },
      { id: 'q-mand-text-3o3', text: 'Dismount and walk.' },
    ],
    correctAnswerId: 'q-mand-text-3o2',
    explanation: 'This indicates a mandatory cycle track. Cyclists must use the designated track.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-4',
    text: 'A blue circular sign depicts a white arrow curving to the right, indicating you must pass an obstruction on which side?',
    options: [
      { id: 'q-mand-text-4o1', text: 'On the left side.' },
      { id: 'q-mand-text-4o2', text: 'On the right side.' },
      { id: 'q-mand-text-4o3', text: 'Either side is permitted.' },
    ],
    correctAnswerId: 'q-mand-text-4o2',
    explanation: "This sign means 'Pass this side (right)'. You must pass the obstruction on its right.",
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-5',
    text: "What does a blue circular sign with '50' and 'km/h' inside typically mean?",
    options: [
      { id: 'q-mand-text-5o1', text: 'Maximum speed limit of 50 km/h.' },
      { id: 'q-mand-text-5o2', text: 'Recommended speed of 50 km/h.' },
      { id: 'q-mand-text-5o3', text: 'Minimum speed limit of 50 km/h.' },
    ],
    correctAnswerId: 'q-mand-text-5o3',
    explanation: 'This blue circular sign indicates a minimum speed limit. Maximum speed is usually in a red circle.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-6',
    text: 'A circular blue sign shows arrows pointing left and right around a central island symbol. What action is mandated?',
    options: [
      { id: 'q-mand-text-6o1', text: 'Turn left or right only.' },
      { id: 'q-mand-text-6o2', text: 'Proceed straight on.' },
      { id: 'q-mand-text-6o3', text: 'Pass the obstruction on either the left or right side.' },
    ],
    correctAnswerId: 'q-mand-text-6o3',
    explanation: 'This sign means traffic may pass the obstruction on either side. Choose the safest and most appropriate path.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-7',
    text: 'You see a circular blue sign with a horse symbol. What does it mean for horse riders?',
    options: [
      { id: 'q-mand-text-7o1', text: 'Horses are not allowed.' },
      { id: 'q-mand-text-7o2', text: 'Warning: horses may be present.' },
      { id: 'q-mand-text-7o3', text: 'Mandatory bridleway; horse riders must use this path.' },
    ],
    correctAnswerId: 'q-mand-text-7o3',
    explanation: 'This indicates a mandatory bridleway. Horse riders must use this designated path.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-8',
    text: 'What does a blue circular sign with a bus symbol indicate?',
    options: [
      { id: 'q-mand-text-8o1', text: 'Route reserved for buses only.' },
      { id: 'q-mand-text-8o2', text: 'Bus stop ahead.' },
      { id: 'q-mand-text-8o3', text: 'No buses allowed on this road.' },
    ],
    correctAnswerId: 'q-mand-text-8o1',
    explanation: 'This sign shows a route or lane mandatory for buses. Often taxis and cyclists can use it too.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-9',
    text: 'A blue circular sign shows a white arrow pointing straight ahead and another white arrow pointing right. What is required?',
    options: [
      { id: 'q-mand-text-9o1', text: 'You must turn right.' },
      { id: 'q-mand-text-9o2', text: 'You must proceed straight or turn right.' },
      { id: 'q-mand-text-9o3', text: 'You must proceed straight only.' },
    ],
    correctAnswerId: 'q-mand-text-9o2',
    explanation: 'This mandatory sign means drivers must proceed straight or turn right. Choose one of these directions.',
    subject: 'Mandatory Signs',
  },
  {
    id: 'q-mand-text-10',
    text: "If a blue circular sign mandates 'Keep Left', what must you do when approaching an island or obstruction?",
    options: [
      { id: 'q-mand-text-10o1', text: 'You may pass on the right if the left is blocked.' },
      { id: 'q-mand-text-10o2', text: 'You must pass the island or obstruction on its left side.' },
      { id: 'q-mand-text-10o3', text: 'You must turn left at the next junction.' },
    ],
    correctAnswerId: 'q-mand-text-10o2',
    explanation: "The 'Keep Left' sign is mandatory. You must pass the obstruction on its left side.",
    subject: 'Mandatory Signs',
  },
]; 