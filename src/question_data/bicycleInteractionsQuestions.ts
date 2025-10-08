import type { Question } from '../types';

export const bicycleInteractionsQuestions: Question[] = [
  {
    id: 'q-bi-1',
    text: 'You approach an intersection with a bicycle crossing. A cyclist is waiting to cross. What should you do?',
    options: [
      { id: 'q-bi-1o1', text: 'Stop and give way to the cyclist' },
      { id: 'q-bi-1o2', text: 'Continue driving, cyclists must wait' },
      { id: 'q-bi-1o3', text: 'Honk to warn the cyclist' }
    ],
    correctAnswerId: 'q-bi-1o1',
    explanation: 'At bicycle crossings, motorists must stop and give way to cyclists who are waiting to cross or already crossing.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-2',
    text: 'You want to turn right at an intersection. A cyclist is approaching from the opposite direction, also turning right. Who has priority?',
    options: [
      { id: 'q-bi-2o1', text: 'The cyclist has priority' },
      { id: 'q-bi-2o2', text: 'You have priority as a motorist' },
      { id: 'q-bi-2o3', text: 'Whoever arrives first has priority' }
    ],
    correctAnswerId: 'q-bi-2o1',
    explanation: 'Cyclists have priority when turning right at intersections. Motorists must give way to cyclists in this situation.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-3',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane. What is the minimum distance you must maintain when overtaking?',
    options: [
      { id: 'q-bi-3o1', text: '1 meter' },
      { id: 'q-bi-3o2', text: '1.5 meters' },
      { id: 'q-bi-3o3', text: '2 meters' }
    ],
    correctAnswerId: 'q-bi-3o2',
    explanation: 'When overtaking cyclists, you must maintain a minimum distance of 1.5 meters to ensure their safety.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-4',
    text: 'You are driving in a 30 km/h zone. A cyclist is riding ahead of you at 20 km/h. What should you do?',
    options: [
      { id: 'q-bi-4o1', text: 'Overtake immediately when safe' },
      { id: 'q-bi-4o2', text: 'Follow behind at a safe distance' },
      { id: 'q-bi-4o3', text: 'Honk to make the cyclist move faster' }
    ],
    correctAnswerId: 'q-bi-4o2',
    explanation: 'In 30 km/h zones, you should follow cyclists at a safe distance rather than overtaking, as the speed difference is minimal.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-5',
    text: 'You are parking your car. You see a bicycle lane next to the parking space. What should you do?',
    options: [
      { id: 'q-bi-5o1', text: 'Park normally, cyclists can go around' },
      { id: 'q-bi-5o2', text: 'Check for cyclists before opening your door' },
      { id: 'q-bi-5o3', text: 'Park closer to the bicycle lane to save space' }
    ],
    correctAnswerId: 'q-bi-5o2',
    explanation: 'Always check for approaching cyclists before opening your car door when parking next to a bicycle lane to prevent accidents.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-6',
    text: 'You are driving on a road without a bicycle lane. A cyclist is riding on the right side of the road. What should you do?',
    options: [
      { id: 'q-bi-6o1', text: 'Drive as close as possible to the cyclist' },
      { id: 'q-bi-6o2', text: 'Maintain a safe distance and overtake when possible' },
      { id: 'q-bi-6o3', text: 'Honk to make the cyclist move to the side' }
    ],
    correctAnswerId: 'q-bi-6o2',
    explanation: 'When there is no bicycle lane, cyclists have the right to use the road. Maintain a safe distance and overtake only when it is safe to do so.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-7',
    text: 'You are approaching a roundabout. A cyclist is already in the roundabout. What should you do?',
    options: [
      { id: 'q-bi-7o1', text: 'Enter the roundabout, cyclists must give way' },
      { id: 'q-bi-7o2', text: 'Wait for the cyclist to exit the roundabout' },
      { id: 'q-bi-7o3', text: 'Enter and overtake the cyclist immediately' }
    ],
    correctAnswerId: 'q-bi-7o2',
    explanation: 'At roundabouts, you must give way to traffic already in the roundabout, including cyclists.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-8',
    text: 'You are driving on a narrow road. A cyclist is approaching from the opposite direction. What should you do?',
    options: [
      { id: 'q-bi-8o1', text: 'Continue driving, the cyclist must move aside' },
      { id: 'q-bi-8o2', text: 'Slow down and give the cyclist extra space' },
      { id: 'q-bi-8o3', text: 'Stop completely and let the cyclist pass' }
    ],
    correctAnswerId: 'q-bi-8o2',
    explanation: 'On narrow roads, slow down and give cyclists extra space when passing to ensure their safety.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-9',
    text: 'You are driving at night. You see a cyclist ahead without proper lighting. What should you do?',
    options: [
      { id: 'q-bi-9o1', text: 'Flash your headlights to warn the cyclist' },
      { id: 'q-bi-9o2', text: 'Slow down and pass with extra caution' },
      { id: 'q-bi-9o3', text: 'Honk to alert the cyclist' }
    ],
    correctAnswerId: 'q-bi-9o2',
    explanation: 'When encountering a cyclist without proper lighting at night, slow down and pass with extra caution to ensure safety.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-10',
    text: 'You are driving in a residential area. Children are riding bicycles on the street. What should you do?',
    options: [
      { id: 'q-bi-10o1', text: 'Drive normally, children should be careful' },
      { id: 'q-bi-10o2', text: 'Reduce speed and be extra vigilant' },
      { id: 'q-bi-10o3', text: 'Honk to warn the children' }
    ],
    correctAnswerId: 'q-bi-10o2',
    explanation: 'In residential areas with children cycling, reduce your speed and be extra vigilant as children may not always follow traffic rules.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-11',
    text: 'You are driving on a road with a shared bicycle and pedestrian path. A cyclist is using the path. What should you do?',
    options: [
      { id: 'q-bi-11o1', text: 'Ignore the cyclist, they are on a separate path' },
      { id: 'q-bi-11o2', text: 'Be aware that the cyclist may enter the road' },
      { id: 'q-bi-11o3', text: 'Honk to warn the cyclist to stay on the path' }
    ],
    correctAnswerId: 'q-bi-11o2',
    explanation: 'When driving near shared bicycle and pedestrian paths, be aware that cyclists may need to enter the road and be prepared to give way.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-12',
    text: 'You are driving on a road with a bicycle lane. The bicycle lane is blocked by roadworks. What should you do?',
    options: [
      { id: 'q-bi-12o1', text: 'Continue driving normally' },
      { id: 'q-bi-12o2', text: 'Be extra careful as cyclists may use the main road' },
      { id: 'q-bi-12o3', text: 'Honk to warn cyclists about the roadworks' }
    ],
    correctAnswerId: 'q-bi-12o2',
    explanation: 'When a bicycle lane is blocked, cyclists may need to use the main road. Be extra careful and give them space.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-13',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding outside the bicycle lane. What should you do?',
    options: [
      { id: 'q-bi-13o1', text: 'Honk to make the cyclist use the bicycle lane' },
      { id: 'q-bi-13o2', text: 'Respect the cyclist\'s choice and maintain safe distance' },
      { id: 'q-bi-13o3', text: 'Drive as close as possible to force them into the lane' }
    ],
    correctAnswerId: 'q-bi-13o2',
    explanation: 'Cyclists are not always required to use bicycle lanes. Respect their choice and maintain a safe distance when passing.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-14',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but swerving slightly. What should you do?',
    options: [
      { id: 'q-bi-14o1', text: 'Honk to warn the cyclist' },
      { id: 'q-bi-14o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-14o3', text: 'Drive as close as possible to keep them in line' }
    ],
    correctAnswerId: 'q-bi-14o2',
    explanation: 'When a cyclist is swerving, they may be avoiding obstacles or have difficulty maintaining balance. Give extra space and pass with caution.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-15',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be looking at their phone. What should you do?',
    options: [
      { id: 'q-bi-15o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-15o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-15o3', text: 'Drive as close as possible to get their attention' }
    ],
    correctAnswerId: 'q-bi-15o2',
    explanation: 'When a cyclist appears distracted, give extra space and pass with caution. Honking may startle them and cause an accident.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-16',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be intoxicated. What should you do?',
    options: [
      { id: 'q-bi-16o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-16o2', text: 'Give extra space and pass with extreme caution' },
      { id: 'q-bi-16o3', text: 'Drive as close as possible to keep them in line' }
    ],
    correctAnswerId: 'q-bi-16o2',
    explanation: 'When a cyclist appears intoxicated, give extra space and pass with extreme caution. Their behavior may be unpredictable.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-17',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be having mechanical problems. What should you do?',
    options: [
      { id: 'q-bi-17o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-17o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-17o3', text: 'Drive as close as possible to keep them moving' }
    ],
    correctAnswerId: 'q-bi-17o2',
    explanation: 'When a cyclist appears to have mechanical problems, give extra space and pass with caution as they may need to stop suddenly.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-18',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be lost or confused. What should you do?',
    options: [
      { id: 'q-bi-18o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-18o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-18o3', text: 'Drive as close as possible to guide them' }
    ],
    correctAnswerId: 'q-bi-18o2',
    explanation: 'When a cyclist appears lost or confused, give extra space and pass with caution as they may make unexpected movements.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-19',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be in distress. What should you do?',
    options: [
      { id: 'q-bi-19o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-19o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-19o3', text: 'Stop and offer help if safe to do so' }
    ],
    correctAnswerId: 'q-bi-19o3',
    explanation: 'When a cyclist appears to be in distress, stop and offer help if it is safe to do so. Otherwise, give extra space and pass with caution.',
    subject: 'Bicycle Interactions'
  },
  {
    id: 'q-bi-20',
    text: 'You are driving on a road with a bicycle lane. A cyclist is riding in the bicycle lane but appears to be racing. What should you do?',
    options: [
      { id: 'q-bi-20o1', text: 'Honk to alert the cyclist' },
      { id: 'q-bi-20o2', text: 'Give extra space and pass with caution' },
      { id: 'q-bi-20o3', text: 'Drive as close as possible to keep them in line' }
    ],
    correctAnswerId: 'q-bi-20o2',
    explanation: 'When a cyclist appears to be racing, give extra space and pass with caution as their behavior may be unpredictable.',
    subject: 'Bicycle Interactions'
  }
];






