import type { Question } from '../types';

export const technologySafetyQuestions: Question[] = [
  {
    id: 'q-ts-1',
    text: 'What does ABS (Anti-lock Braking System) do?',
    options: [
      { id: 'q-ts-1o1', text: 'Prevents the wheels from locking during braking' },
      { id: 'q-ts-1o2', text: 'Automatically applies the brakes' },
      { id: 'q-ts-1o3', text: 'Increases braking distance' },
      { id: 'q-ts-1o4', text: 'Reduces fuel consumption' }
    ],
    correctAnswerId: 'q-ts-1o1',
    explanation: 'ABS (Anti-lock Braking System) prevents the wheels from locking during hard braking, allowing the driver to maintain steering control and reduce stopping distance.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-2',
    text: 'What does ESP (Electronic Stability Program) do?',
    options: [
      { id: 'q-ts-2o1', text: 'Controls the engine speed' },
      { id: 'q-ts-2o2', text: 'Helps maintain vehicle stability during cornering' },
      { id: 'q-ts-2o3', text: 'Controls the air conditioning' },
      { id: 'q-ts-2o4', text: 'Manages the fuel injection' }
    ],
    correctAnswerId: 'q-ts-2o2',
    explanation: 'ESP (Electronic Stability Program) helps maintain vehicle stability during cornering by automatically applying brakes to individual wheels when it detects loss of control.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-3',
    text: 'What is a rear-view camera used for?',
    options: [
      { id: 'q-ts-3o1', text: 'To watch movies while driving' },
      { id: 'q-ts-3o2', text: 'To help with reversing and parking' },
      { id: 'q-ts-3o3', text: 'To monitor traffic behind' },
      { id: 'q-ts-3o4', text: 'To take photos while driving' }
    ],
    correctAnswerId: 'q-ts-3o2',
    explanation: 'A rear-view camera helps with reversing and parking by providing a clear view of the area behind the vehicle, reducing blind spots.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-4',
    text: 'What does Adaptive Cruise Control (ACC) do?',
    options: [
      { id: 'q-ts-4o1', text: 'Automatically steers the vehicle' },
      { id: 'q-ts-4o2', text: 'Maintains a safe distance from the vehicle ahead' },
      { id: 'q-ts-4o3', text: 'Automatically parks the vehicle' },
      { id: 'q-ts-4o4', text: 'Controls the radio volume' }
    ],
    correctAnswerId: 'q-ts-4o2',
    explanation: 'Adaptive Cruise Control (ACC) maintains a set speed while automatically adjusting to maintain a safe distance from the vehicle ahead.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-5',
    text: 'What does Lane Departure Warning (LDW) do?',
    options: [
      { id: 'q-ts-5o1', text: 'Automatically steers the vehicle back into the lane' },
      { id: 'q-ts-5o2', text: 'Warns the driver when the vehicle drifts out of the lane' },
      { id: 'q-ts-5o3', text: 'Changes lanes automatically' },
      { id: 'q-ts-5o4', text: 'Controls the turn signals' }
    ],
    correctAnswerId: 'q-ts-5o2',
    explanation: 'Lane Departure Warning (LDW) warns the driver when the vehicle drifts out of the lane without using the turn signal.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-6',
    text: 'What does Blind Spot Monitoring (BSM) do?',
    options: [
      { id: 'q-ts-6o1', text: 'Automatically changes lanes' },
      { id: 'q-ts-6o2', text: 'Warns of vehicles in the blind spot' },
      { id: 'q-ts-6o3', text: 'Controls the mirrors' },
      { id: 'q-ts-6o4', text: 'Adjusts the seat position' }
    ],
    correctAnswerId: 'q-ts-6o2',
    explanation: 'Blind Spot Monitoring (BSM) warns the driver of vehicles in the blind spot when changing lanes.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-7',
    text: 'What does Autonomous Emergency Braking (AEB) do?',
    options: [
      { id: 'q-ts-7o1', text: 'Automatically applies brakes to prevent collisions' },
      { id: 'q-ts-7o2', text: 'Controls the steering wheel' },
      { id: 'q-ts-7o3', text: 'Manages the fuel system' },
      { id: 'q-ts-7o4', text: 'Adjusts the suspension' }
    ],
    correctAnswerId: 'q-ts-7o1',
    explanation: 'Autonomous Emergency Braking (AEB) automatically applies the brakes to prevent or reduce the severity of a collision when it detects an imminent crash.',
    subject: 'Technology & Safety'
  },
  {
    id: 'q-ts-8',
    text: 'What does Tire Pressure Monitoring System (TPMS) do?',
    options: [
      { id: 'q-ts-8o1', text: 'Automatically inflates the tires' },
      { id: 'q-ts-8o2', text: 'Warns of low tire pressure' },
      { id: 'q-ts-8o3', text: 'Changes the tires automatically' },
      { id: 'q-ts-8o4', text: 'Controls the suspension' }
    ],
    correctAnswerId: 'q-ts-8o2',
    explanation: 'Tire Pressure Monitoring System (TPMS) warns the driver when tire pressure is too low, which can affect safety and fuel efficiency.',
    subject: 'Technology & Safety'
  }
];
