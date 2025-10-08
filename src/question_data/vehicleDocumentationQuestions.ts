import type { Question } from '../types';

export const vehicleDocumentationQuestions: Question[] = [
  {
    id: 'q-vd-1',
    text: 'What documents must you carry when driving in the Netherlands?',
    options: [
      { id: 'q-vd-1o1', text: 'Only driving license' },
      { id: 'q-vd-1o2', text: 'Driving license and vehicle registration document' },
      { id: 'q-vd-1o3', text: 'Driving license, vehicle registration, insurance certificate, and MOT certificate' }
    ],
    correctAnswerId: 'q-vd-1o3',
    explanation: 'You must carry your driving license, vehicle registration document (kentekenbewijs), insurance certificate, and MOT certificate (APK) when driving.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-2',
    text: 'What is the APK (Algemene Periodieke Keuring)?',
    options: [
      { id: 'q-vd-2o1', text: 'Annual vehicle insurance check' },
      { id: 'q-vd-2o2', text: 'Annual vehicle safety and emissions test' },
      { id: 'q-vd-2o3', text: 'Annual driving license renewal' }
    ],
    correctAnswerId: 'q-vd-2o2',
    explanation: 'APK (Algemene Periodieke Keuring) is the annual vehicle safety and emissions test that all vehicles must pass to be roadworthy.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-3',
    text: 'How often must a new car have an APK test?',
    options: [
      { id: 'q-vd-3o1', text: 'Every year' },
      { id: 'q-vd-3o2', text: 'Every 2 years' },
      { id: 'q-vd-3o3', text: 'Every 3 years' }
    ],
    correctAnswerId: 'q-vd-3o3',
    explanation: 'A new car must have its first APK test after 3 years, then every year thereafter.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-4',
    text: 'What happens if you drive without valid insurance?',
    options: [
      { id: 'q-vd-4o1', text: 'Warning only' },
      { id: 'q-vd-4o2', text: 'Fine of €140' },
      { id: 'q-vd-4o3', text: 'Heavy fine and possible vehicle confiscation' }
    ],
    correctAnswerId: 'q-vd-4o3',
    explanation: 'Driving without valid insurance results in a heavy fine and possible vehicle confiscation. It is a serious offense.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-5',
    text: 'What is the minimum insurance coverage required in the Netherlands?',
    options: [
      { id: 'q-vd-5o1', text: 'Third-party liability only' },
      { id: 'q-vd-5o2', text: 'Third-party liability and theft' },
      { id: 'q-vd-5o3', text: 'Comprehensive coverage' }
    ],
    correctAnswerId: 'q-vd-5o1',
    explanation: 'The minimum insurance coverage required in the Netherlands is third-party liability insurance (WA-verzekering).',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-6',
    text: 'What should you do if you lose your driving license?',
    options: [
      { id: 'q-vd-6o1', text: 'Continue driving normally' },
      { id: 'q-vd-6o2', text: 'Report it to the police and apply for a replacement' },
      { id: 'q-vd-6o3', text: 'Wait until you find it' }
    ],
    correctAnswerId: 'q-vd-6o2',
    explanation: 'If you lose your driving license, you should report it to the police and apply for a replacement at your local municipality.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-7',
    text: 'What is the penalty for driving without a valid driving license?',
    options: [
      { id: 'q-vd-7o1', text: 'Warning only' },
      { id: 'q-vd-7o2', text: 'Fine of €140' },
      { id: 'q-vd-7o3', text: 'Heavy fine and possible imprisonment' }
    ],
    correctAnswerId: 'q-vd-7o3',
    explanation: 'Driving without a valid driving license is a serious offense that can result in a heavy fine and possible imprisonment.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-8',
    text: 'What should you do if your vehicle registration document is stolen?',
    options: [
      { id: 'q-vd-8o1', text: 'Continue driving normally' },
      { id: 'q-vd-8o2', text: 'Report it to the police and apply for a replacement' },
      { id: 'q-vd-8o3', text: 'Wait until you find it' }
    ],
    correctAnswerId: 'q-vd-8o2',
    explanation: 'If your vehicle registration document is stolen, you should report it to the police and apply for a replacement at the RDW.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-9',
    text: 'What is the RDW (Rijksdienst voor het Wegverkeer)?',
    options: [
      { id: 'q-vd-9o1', text: 'Dutch driving school association' },
      { id: 'q-vd-9o2', text: 'Dutch vehicle registration and licensing authority' },
      { id: 'q-vd-9o3', text: 'Dutch insurance company' }
    ],
    correctAnswerId: 'q-vd-9o2',
    explanation: 'The RDW (Rijksdienst voor het Wegverkeer) is the Dutch vehicle registration and licensing authority responsible for vehicle documentation.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-10',
    text: 'What should you do if you buy a used car?',
    options: [
      { id: 'q-vd-10o1', text: 'Transfer ownership immediately' },
      { id: 'q-vd-10o2', text: 'Transfer ownership within 14 days' },
      { id: 'q-vd-10o3', text: 'Transfer ownership within 30 days' }
    ],
    correctAnswerId: 'q-vd-10o2',
    explanation: 'When you buy a used car, you must transfer ownership within 14 days at the RDW or a post office.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-11',
    text: 'What happens if you fail to transfer vehicle ownership on time?',
    options: [
      { id: 'q-vd-11o1', text: 'No penalty' },
      { id: 'q-vd-11o2', text: 'Small fine' },
      { id: 'q-vd-11o3', text: 'Fine of €340' }
    ],
    correctAnswerId: 'q-vd-11o3',
    explanation: 'Failing to transfer vehicle ownership within 14 days results in a fine of €340.',
    subject: 'Vehicle Documentation'
  },
  {
    id: 'q-vd-12',
    text: 'What should you do if you move to a different address?',
    options: [
      { id: 'q-vd-12o1', text: 'Update your driving license address' },
      { id: 'q-vd-12o2', text: 'Update your vehicle registration address' },
      { id: 'q-vd-12o3', text: 'Update both driving license and vehicle registration addresses' }
    ],
    correctAnswerId: 'q-vd-12o3',
    explanation: 'When you move to a different address, you must update both your driving license and vehicle registration addresses at your local municipality.',
    subject: 'Vehicle Documentation'
  }
];
