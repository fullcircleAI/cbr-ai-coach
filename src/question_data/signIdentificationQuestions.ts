import type { Question } from '../types';

export const signIdentificationQuestions: Question[] = [
  {
    id: 'q-identify-sign-1',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-1o1', text: 'Warning sign' },
      { id: 'q-sign-1o2', text: 'Prohibitory sign' },
      { id: 'q-sign-1o3', text: 'Mandatory sign' }
    ],
    correctAnswerId: 'q-sign-1o1',
    explanation: 'This is a warning sign, indicated by its triangular shape and red border.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-1.png',
    imageHint: 'warning sign'
  },
  {
    id: 'q-identify-sign-2',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-2o1', text: 'Prohibitory sign' },
      { id: 'q-sign-2o2', text: 'Warning sign' },
      { id: 'q-sign-2o3', text: 'Mandatory sign' }
    ],
    correctAnswerId: 'q-sign-2o2',
    explanation: 'This is a warning sign (St. Andrew\'s Cross), indicating a railroad crossing ahead.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-2.png',
    imageHint: 'warning sign railroad crossing'
  },
  {
    id: 'q-identify-sign-3',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-3o1', text: 'Mandatory sign' },
      { id: 'q-sign-3o2', text: 'Warning sign' },
      { id: 'q-sign-3o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-3o1',
    explanation: 'This is a mandatory sign, indicated by its circular shape and blue background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-3.png',
    imageHint: 'mandatory sign'
  },
  {
    id: 'q-identify-sign-4',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-4o1', text: 'Information sign' },
      { id: 'q-sign-4o2', text: 'Warning sign' },
      { id: 'q-sign-4o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-4o1',
    explanation: 'This is an information sign, indicated by its rectangular shape and blue background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-4.png',
    imageHint: 'information sign'
  },
  {
    id: 'q-identify-sign-5',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-5o1', text: 'Priority sign' },
      { id: 'q-sign-5o2', text: 'Warning sign' },
      { id: 'q-sign-5o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-5o1',
    explanation: 'This is a priority sign, indicated by its diamond shape and yellow background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-5.png',
    imageHint: 'priority sign'
  },
  {
    id: 'q-identify-sign-6',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-6o1', text: 'Direction sign' },
      { id: 'q-sign-6o2', text: 'Warning sign' },
      { id: 'q-sign-6o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-6o1',
    explanation: 'This is a direction sign, indicated by its rectangular shape and green background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-6.png',
    imageHint: 'direction sign'
  },
  {
    id: 'q-identify-sign-7',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-7o1', text: 'Service sign' },
      { id: 'q-sign-7o2', text: 'Warning sign' },
      { id: 'q-sign-7o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-7o1',
    explanation: 'This is a service sign, indicated by its rectangular shape and blue background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-7.png',
    imageHint: 'service sign'
  },
  {
    id: 'q-identify-sign-8',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-8o1', text: 'Additional sign' },
      { id: 'q-sign-8o2', text: 'Warning sign' },
      { id: 'q-sign-8o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-8o1',
    explanation: 'This is an additional sign, indicated by its rectangular shape and white background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-8.png',
    imageHint: 'additional sign'
  },
  {
    id: 'q-identify-sign-9',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-9o1', text: 'Temporary sign' },
      { id: 'q-sign-9o2', text: 'Warning sign' },
      { id: 'q-sign-9o3', text: 'Prohibitory sign' }
    ],
    correctAnswerId: 'q-sign-9o1',
    explanation: 'This is a temporary sign, indicated by its yellow background and often used for road works.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-9.png',
    imageHint: 'temporary sign'
  },
  {
    id: 'q-identify-sign-10',
    text: 'Identify the road sign:',
    options: [
      { id: 'q-sign-10o1', text: 'Regulatory sign' },
      { id: 'q-sign-10o2', text: 'Warning sign' },
      { id: 'q-sign-10o3', text: 'Information sign' }
    ],
    correctAnswerId: 'q-sign-10o1',
    explanation: 'This is a regulatory sign, indicated by its circular shape and red border or blue background.',
    subject: 'Sign Identification',
    imageUrl: '/images/signs/sign identification/q-identify-sign-10.png',
    imageHint: 'regulatory sign'
  }
]; 