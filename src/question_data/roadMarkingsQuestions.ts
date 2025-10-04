import type { Question } from '../types';

export const roadMarkingsQuestions: Question[] = [
  {
    id: 'q-rm-1',
    text: 'What does a solid white line in the center of the road indicate?',
    options: [
      { id: 'q-rm-1o1', text: 'You can overtake if safe' },
      { id: 'q-rm-1o2', text: 'No overtaking allowed' },
      { id: 'q-rm-1o3', text: 'Overtaking allowed only for motorcycles' },
      { id: 'q-rm-1o4', text: 'Overtaking allowed only during daylight' }
    ],
    correctAnswerId: 'q-rm-1o2',
    explanation: 'A solid white line in the center of the road indicates that overtaking is not allowed. You must stay in your lane.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-2',
    text: 'What does a broken white line in the center of the road indicate?',
    options: [
      { id: 'q-rm-2o1', text: 'No overtaking allowed' },
      { id: 'q-rm-2o2', text: 'Overtaking allowed if safe' },
      { id: 'q-rm-2o3', text: 'Overtaking allowed only for emergency vehicles' },
      { id: 'q-rm-2o4', text: 'Overtaking allowed only on the left' }
    ],
    correctAnswerId: 'q-rm-2o2',
    explanation: 'A broken white line indicates that overtaking is allowed if it is safe to do so and there is sufficient visibility.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-3',
    text: 'What does a yellow line along the edge of the road indicate?',
    options: [
      { id: 'q-rm-3o1', text: 'No parking allowed' },
      { id: 'q-rm-3o2', text: 'Parking allowed for 30 minutes' },
      { id: 'q-rm-3o3', text: 'Parking allowed for residents only' },
      { id: 'q-rm-3o4', text: 'Parking allowed during certain hours' }
    ],
    correctAnswerId: 'q-rm-3o1',
    explanation: 'A yellow line along the edge of the road indicates that parking is not allowed at any time.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-4',
    text: 'What does a blue line along the edge of the road indicate?',
    options: [
      { id: 'q-rm-4o1', text: 'No parking allowed' },
      { id: 'q-rm-4o2', text: 'Parking for disabled persons only' },
      { id: 'q-rm-4o3', text: 'Parking for residents only' },
      { id: 'q-rm-4o4', text: 'Parking with a permit only' }
    ],
    correctAnswerId: 'q-rm-4o2',
    explanation: 'A blue line indicates parking reserved for disabled persons. You must have a valid disabled parking permit to park here.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-5',
    text: 'What does a zigzag line on the road indicate?',
    options: [
      { id: 'q-rm-5o1', text: 'A pedestrian crossing' },
      { id: 'q-rm-5o2', text: 'A bus stop' },
      { id: 'q-rm-5o3', text: 'A school zone' },
      { id: 'q-rm-5o4', text: 'A construction zone' }
    ],
    correctAnswerId: 'q-rm-5o1',
    explanation: 'Zigzag lines indicate a pedestrian crossing. You must not park or overtake in this area.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-6',
    text: 'What does a white arrow pointing straight ahead on the road indicate?',
    options: [
      { id: 'q-rm-6o1', text: 'You must turn left' },
      { id: 'q-rm-6o2', text: 'You must turn right' },
      { id: 'q-rm-6o3', text: 'You must go straight ahead' },
      { id: 'q-rm-6o4', text: 'You can choose any direction' }
    ],
    correctAnswerId: 'q-rm-6o3',
    explanation: 'A white arrow pointing straight ahead indicates that you must proceed in that direction.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-7',
    text: 'What does a white bicycle symbol on the road indicate?',
    options: [
      { id: 'q-rm-7o1', text: 'A bicycle lane' },
      { id: 'q-rm-7o2', text: 'A bicycle crossing' },
      { id: 'q-rm-7o3', text: 'A bicycle parking area' },
      { id: 'q-rm-7o4', text: 'A bicycle repair shop' }
    ],
    correctAnswerId: 'q-rm-7o1',
    explanation: 'A white bicycle symbol indicates a bicycle lane. Motor vehicles should not drive in this lane.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-8',
    text: 'What does a white "STOP" word painted on the road indicate?',
    options: [
      { id: 'q-rm-8o1', text: 'You must slow down' },
      { id: 'q-rm-8o2', text: 'You must stop completely' },
      { id: 'q-rm-8o3', text: 'You must yield to pedestrians' },
      { id: 'q-rm-8o4', text: 'You must honk your horn' }
    ],
    correctAnswerId: 'q-rm-8o2',
    explanation: 'A white "STOP" word painted on the road reinforces the requirement to stop completely at the stop line or before entering the intersection.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-9',
    text: 'What does a white diamond symbol on the road indicate?',
    options: [
      { id: 'q-rm-9o1', text: 'A priority road' },
      { id: 'q-rm-9o2', text: 'A school zone' },
      { id: 'q-rm-9o3', text: 'A construction zone' },
      { id: 'q-rm-9o4', text: 'A parking zone' }
    ],
    correctAnswerId: 'q-rm-9o1',
    explanation: 'A white diamond symbol indicates a priority road. Traffic on this road has the right of way over traffic entering from side roads.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-10',
    text: 'What does a white "GIVE WAY" text painted on the road indicate?',
    options: [
      { id: 'q-rm-10o1', text: 'You must stop completely' },
      { id: 'q-rm-10o2', text: 'You must yield to other traffic' },
      { id: 'q-rm-10o3', text: 'You must honk your horn' },
      { id: 'q-rm-10o4', text: 'You must slow down only' }
    ],
    correctAnswerId: 'q-rm-10o2',
    explanation: 'A white "GIVE WAY" text reinforces the requirement to yield to other traffic before proceeding.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-11',
    text: 'What does a white "BUS" text painted on the road indicate?',
    options: [
      { id: 'q-rm-11o1', text: 'A bus lane' },
      { id: 'q-rm-11o2', text: 'A bus stop' },
      { id: 'q-rm-11o3', text: 'A bus parking area' },
      { id: 'q-rm-11o4', text: 'A bus terminal' }
    ],
    correctAnswerId: 'q-rm-11o1',
    explanation: 'A white "BUS" text indicates a bus lane. Only buses and authorized vehicles may use this lane.',
    subject: 'Road Markings'
  },
  {
    id: 'q-rm-12',
    text: 'What does a white "TAXI" text painted on the road indicate?',
    options: [
      { id: 'q-rm-12o1', text: 'A taxi lane' },
      { id: 'q-rm-12o2', text: 'A taxi stand' },
      { id: 'q-rm-12o3', text: 'A taxi parking area' },
      { id: 'q-rm-12o4', text: 'A taxi office' }
    ],
    correctAnswerId: 'q-rm-12o1',
    explanation: 'A white "TAXI" text indicates a taxi lane. Only taxis and authorized vehicles may use this lane.',
    subject: 'Road Markings'
  }
];
