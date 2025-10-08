import type { Question } from '../types';

export const alcoholDrugsQuestions: Question[] = [
  {
    id: 'q-ad-1',
    text: 'What is the maximum blood alcohol concentration (BAC) allowed for drivers in the Netherlands?',
    options: [
      { id: 'q-ad-1o1', text: '0.02%' },
      { id: 'q-ad-1o2', text: '0.05%' },
      { id: 'q-ad-1o3', text: '0.08%' }
    ],
    correctAnswerId: 'q-ad-1o2',
    explanation: 'The maximum blood alcohol concentration (BAC) allowed for drivers in the Netherlands is 0.05%. This is lower than many other countries to improve road safety.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-2',
    text: 'What is the maximum BAC for drivers with less than 5 years of experience?',
    options: [
      { id: 'q-ad-2o1', text: '0.02%' },
      { id: 'q-ad-2o2', text: '0.05%' },
      { id: 'q-ad-2o3', text: '0.08%' }
    ],
    correctAnswerId: 'q-ad-2o1',
    explanation: 'Drivers with less than 5 years of experience have a stricter BAC limit of 0.02%, which is essentially zero tolerance.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-3',
    text: 'What is the penalty for driving with a BAC between 0.05% and 0.08%?',
    options: [
      { id: 'q-ad-3o1', text: 'Warning only' },
      { id: 'q-ad-3o2', text: 'Fine of €140' },
      { id: 'q-ad-3o3', text: 'Fine of €240' }
    ],
    correctAnswerId: 'q-ad-3o3',
    explanation: 'Driving with a BAC between 0.05% and 0.08% results in a fine of €240 and possible license suspension.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-4',
    text: 'What is the penalty for driving with a BAC above 0.08%?',
    options: [
      { id: 'q-ad-4o1', text: 'Fine of €240' },
      { id: 'q-ad-4o2', text: 'Fine of €340' },
      { id: 'q-ad-4o3', text: 'Criminal offense with possible imprisonment' }
    ],
    correctAnswerId: 'q-ad-4o3',
    explanation: 'Driving with a BAC above 0.08% is a criminal offense that can result in imprisonment, heavy fines, and mandatory license suspension.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-5',
    text: 'How long should you wait after drinking alcohol before driving?',
    options: [
      { id: 'q-ad-5o1', text: '1 hour per drink' },
      { id: 'q-ad-5o2', text: '2 hours per drink' },
      { id: 'q-ad-5o3', text: 'At least 24 hours' }
    ],
    correctAnswerId: 'q-ad-5o3',
    explanation: 'The safest approach is to wait at least 24 hours after drinking alcohol before driving. Your judgment of when you feel sober is not reliable.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-6',
    text: 'What drugs are illegal to drive under the influence of in the Netherlands?',
    options: [
      { id: 'q-ad-6o1', text: 'Only hard drugs like cocaine and heroin' },
      { id: 'q-ad-6o2', text: 'Only prescription medications' },
      { id: 'q-ad-6o3', text: 'All drugs that affect driving ability' }
    ],
    correctAnswerId: 'q-ad-6o3',
    explanation: 'It is illegal to drive under the influence of any drug that affects your driving ability, including cannabis, prescription medications, and over-the-counter drugs.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-7',
    text: 'What should you do if you are taking medication that may affect your driving?',
    options: [
      { id: 'q-ad-7o1', text: 'Drive as normal' },
      { id: 'q-ad-7o2', text: 'Drive only during the day' },
      { id: 'q-ad-7o3', text: 'Check with your doctor or pharmacist' }
    ],
    correctAnswerId: 'q-ad-7o3',
    explanation: 'If you are taking medication that may affect your driving, you should check with your doctor or pharmacist about whether it is safe to drive.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-8',
    text: 'What are the signs of drug-impaired driving?',
    options: [
      { id: 'q-ad-8o1', text: 'Only erratic driving behavior' },
      { id: 'q-ad-8o2', text: 'Only slow reaction times' },
      { id: 'q-ad-8o3', text: 'Erratic driving, slow reactions, and poor judgment' }
    ],
    correctAnswerId: 'q-ad-8o3',
    explanation: 'Signs of drug-impaired driving include erratic driving behavior, slow reaction times, poor judgment, and difficulty maintaining lane position.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-9',
    text: 'What is the penalty for refusing a breathalyzer test?',
    options: [
      { id: 'q-ad-9o1', text: 'No penalty' },
      { id: 'q-ad-9o2', text: 'Small fine' },
      { id: 'q-ad-9o3', text: 'Same penalty as driving under the influence' }
    ],
    correctAnswerId: 'q-ad-9o3',
    explanation: 'Refusing a breathalyzer test carries the same penalty as driving under the influence, as it is considered an admission of guilt.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-10',
    text: 'How long does alcohol stay in your system?',
    options: [
      { id: 'q-ad-10o1', text: '1-2 hours' },
      { id: 'q-ad-10o2', text: '4-6 hours' },
      { id: 'q-ad-10o3', text: '24-48 hours' }
    ],
    correctAnswerId: 'q-ad-10o3',
    explanation: 'Alcohol can stay in your system for 24-48 hours, depending on factors like body weight, metabolism, and amount consumed.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-11',
    text: 'What should you do if you suspect another driver is under the influence?',
    options: [
      { id: 'q-ad-11o1', text: 'Confront them directly' },
      { id: 'q-ad-11o2', text: 'Call the police emergency number' },
      { id: 'q-ad-11o3', text: 'Follow them to their destination' }
    ],
    correctAnswerId: 'q-ad-11o2',
    explanation: 'If you suspect another driver is under the influence, call the police emergency number (112) and provide the vehicle description and location.',
    subject: 'Alcohol & Drugs'
  },
  {
    id: 'q-ad-12',
    text: 'What is the best way to prevent drunk driving?',
    options: [
      { id: 'q-ad-12o1', text: 'Designate a sober driver' },
      { id: 'q-ad-12o2', text: 'Take a taxi or public transport' },
      { id: 'q-ad-12o3', text: 'All of the above' }
    ],
    correctAnswerId: 'q-ad-12o3',
    explanation: 'The best ways to prevent drunk driving are to designate a sober driver, take a taxi or public transport, or stay overnight. Never drive after drinking.',
    subject: 'Alcohol & Drugs'
  }
];
