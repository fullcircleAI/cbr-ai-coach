import type { Question } from '../types';

export const warningSignsQuestions: Question[] = [
  {
    id: 'q-new-warn-1',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-1o1', text: 'Warning for traffic jams' },
      { id: 'q-new-warn-1o2', text: 'No overtaking' },
      { id: 'q-new-warn-1o3', text: 'End of motorway' }
    ],
    correctAnswerId: 'q-new-warn-1o1',
    explanation: 'This sign warns drivers of potential traffic jams ahead.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-1.png',
    imageHint: 'traffic jams warning'
  },
  {
    id: 'q-new-warn-2',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-2o1', text: 'Pedestrian crossing' },
      { id: 'q-new-warn-2o2', text: 'No entry for trains' },
      { id: 'q-new-warn-2o3', text: 'Railroad crossing ahead with barriers' }
    ],
    correctAnswerId: 'q-new-warn-2o3',
    explanation: 'This sign indicates a railroad crossing ahead that is equipped with barriers.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-2.png',
    imageHint: 'railroad barriers'
  },
  {
    id: 'q-new-warn-3',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-3o1', text: 'Tramway crossing' },
      { id: 'q-new-warn-3o2', text: 'Rail crossing ahead with 1 railway' },
      { id: 'q-new-warn-3o3', text: 'Multiple railway tracks' }
    ],
    correctAnswerId: 'q-new-warn-3o2',
    explanation: 'This sign (St. Andrew\'s cross) indicates a rail crossing ahead with a single railway track.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-3.png',
    imageHint: 'single railway crossing'
  },
  {
    id: 'q-new-warn-4',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-4o1', text: 'Two-way traffic ahead' },
      { id: 'q-new-warn-4o2', text: 'One-way street' },
      { id: 'q-new-warn-4o3', text: 'Overtaking permitted' }
    ],
    correctAnswerId: 'q-new-warn-4o1',
    explanation: 'This sign warns that the road ahead carries two-way traffic, often encountered when leaving a one-way system.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-4.png',
    imageHint: 'two way traffic'
  },
  {
    id: 'q-new-warn-5',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-5o1', text: 'Sharp right turn' },
      { id: 'q-new-warn-5o2', text: 'Winding road for 1km' },
      { id: 'q-new-warn-5o3', text: 'Double curve ahead, to the left then to the right' }
    ],
    correctAnswerId: 'q-new-warn-5o3',
    explanation: 'This sign warns of a double curve ahead, the first to the left, followed by a curve to the right.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-5.png',
    imageHint: 'double curve left right'
  },
  {
    id: 'q-new-warn-6',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-6o1', text: 'Warning for bikes and cyclists' },
      { id: 'q-new-warn-6o2', text: 'No cycling allowed' },
      { id: 'q-new-warn-6o3', text: 'Cycle path ahead' }
    ],
    correctAnswerId: 'q-new-warn-6o1',
    explanation: 'This sign warns drivers to be aware of bicycles and cyclists in the area or crossing the road.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-6.png',
    imageHint: 'bikes cyclists warning'
  },
  {
    id: 'q-new-warn-7',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-7o1', text: 'Speed bumps ahead' },
      { id: 'q-new-warn-7o2', text: 'Uneven road surface' },
      { id: 'q-new-warn-7o3', text: 'Roadworks ahead warning' }
    ],
    correctAnswerId: 'q-new-warn-7o3',
    explanation: 'This sign warns drivers of roadworks ahead, indicating potential obstructions or changes in road layout.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-7.png',
    imageHint: 'roadworks warning'
  },
  {
    id: 'q-new-warn-8',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-8o1', text: 'Danger of falling leaves' },
      { id: 'q-new-warn-8o2', text: 'Heavy crosswinds in area warning' },
      { id: 'q-new-warn-8o3', text: 'Airport nearby' }
    ],
    correctAnswerId: 'q-new-warn-8o2',
    explanation: 'This sign warns of strong crosswinds in the area, which can affect vehicle stability.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-8.png',
    imageHint: 'crosswinds warning'
  },
  {
    id: 'q-new-warn-9',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-9o1', text: 'No U-turns allowed' },
      { id: 'q-new-warn-9o2', text: 'Slippery road surface' },
      { id: 'q-new-warn-9o3', text: 'Road bends right then left' }
    ],
    correctAnswerId: 'q-new-warn-9o3',
    explanation: 'This sign warns of a double curve ahead, the first to the right, followed by a curve to the left.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-9.png',
    imageHint: 'road bends right left'
  },
  {
    id: 'q-new-warn-10',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-new-warn-10o1', text: 'Loose chippings and stones on the road warning' },
      { id: 'q-new-warn-10o2', text: 'Risk of falling rocks' },
      { id: 'q-new-warn-10o3', text: 'Uneven road surface' }
    ],
    correctAnswerId: 'q-new-warn-10o1',
    explanation: 'This sign warns of loose chippings or stones on the road surface, which can reduce grip or be thrown up by vehicles.',
    subject: 'Warning Signs',
    imageUrl: '/images/signs/warningsigns/q-new-warn-10.png',
    imageHint: 'loose chippings warning'
  }
]; 