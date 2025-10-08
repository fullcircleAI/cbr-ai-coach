import type { Question } from '../types';

export const insightPracticeQuestions: Question[] = [
  {
    id: 'q-insight-1',
    text: 'You are approaching a T-junction and want to turn right onto a busy main road. Your view to the left is blocked by a parked van, and traffic is moving quickly.\n\nWhat is the safest way to proceed?',
    options: [
      { id: 'q-insight-1o1', text: 'Rely on your ability to accelerate quickly and join the traffic as soon as possible.' },
      { id: 'q-insight-1o2', text: 'Wait until you have a clear view and there is a safe gap in both directions, even if it takes longer.' },
      { id: 'q-insight-1o3', text: 'Assume drivers from the right will slow down for you as you enter.' },
    ],
    correctAnswerId: 'q-insight-1o2',
    explanation: 'Always wait for a clear view and a safe gap before joining a busy road, especially when your view is blocked. Never assume others will slow down for you.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-2',
    text: 'You have just overtaken a lorry on a three-lane motorway and are now in the middle lane. The right lane is clear, and there is another slower vehicle further ahead in the left lane.\n\nWhat should you do according to proper motorway driving discipline?',
    options: [
      { id: 'q-insight-2o1', text: 'Stay in the middle lane to overtake the next vehicle ahead.' },
      { id: 'q-insight-2o2', text: 'Move to the right lane to give yourself more space from other traffic.' },
      { id: 'q-insight-2o3', text: 'Return to the left lane as soon as it is safe, and only move out again when overtaking.' },
    ],
    correctAnswerId: 'q-insight-2o3',
    explanation: 'On motorways, you must return to the left-most lane as soon as it is safe. Only use other lanes for overtaking.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-3',
    text: 'You are driving along a residential street with parked cars on your left. A cyclist is riding ahead of you, close to the parked cars.\n\nWhat is the main hazard you should anticipate?',
    options: [
      { id: 'q-insight-3o1', text: 'The cyclist suddenly speeding up and creating a gap.' },
      { id: 'q-insight-3o2', text: 'A car door opening unexpectedly, causing the cyclist to swerve into your path.' },
      { id: 'q-insight-3o3', text: 'The cyclist signaling to turn left across your path without much warning.' },
    ],
    correctAnswerId: 'q-insight-3o2',
    explanation: 'Always anticipate that a cyclist may swerve if a car door opens. Give cyclists extra space when passing parked cars.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-4',
    text: 'You encounter dense fog on a familiar road, and visibility is reduced to about 50 meters.\n\nWhat is the best action to take?',
    options: [
      { id: 'q-insight-4o1', text: 'Turn on your full beam headlights to see further into the fog.' },
      { id: 'q-insight-4o2', text: 'Maintain your normal speed but double your following distance.' },
      { id: 'q-insight-4o3', text: 'Reduce your speed significantly, use dipped headlights (and fog lights if needed), and be ready to stop within the visible distance.' },
    ],
    correctAnswerId: 'q-insight-4o3',
    explanation: 'In fog, reduce speed, use dipped headlights and fog lights if visibility is below 50m, and be able to stop within the distance you can see.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-5',
    text: 'You are approaching a zebra crossing. A pedestrian is standing at the edge, looking in your direction, but has not yet stepped onto the crossing.\n\nWhat should you do?',
    options: [
      { id: 'q-insight-5o1', text: 'Continue at your current speed as they have not stepped onto the crossing.' },
      { id: 'q-insight-5o2', text: 'Slow down and be fully prepared to stop, making eye contact if possible.' },
      { id: 'q-insight-5o3', text: 'Sound your horn to let them know it is safe to cross after you pass.' },
    ],
    correctAnswerId: 'q-insight-5o2',
    explanation: 'Always anticipate that a pedestrian may step onto the crossing. Slow down and be ready to stop.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-6',
    text: 'You are approaching an unmarked crossroads in a residential area. Another vehicle is approaching from your right, and you will arrive at the junction at the same time.\n\nWho has priority in this situation?',
    options: [
      { id: 'q-insight-6o1', text: 'You have priority if your road appears wider or more major.' },
      { id: 'q-insight-6o2', text: 'The vehicle from your right has priority.' },
      { id: 'q-insight-6o3', text: 'The vehicle that arrives at the junction first has priority.' },
    ],
    correctAnswerId: 'q-insight-6o2',
    explanation: 'At unmarked crossroads in the Netherlands, priority is given to traffic from the right.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-7',
    text: 'You are following a slow-moving tractor on a single carriageway road. There is a solid white line on your side of the center marking. The road ahead appears clear for a long distance.\n\nWhat should you do?',
    options: [
      { id: 'q-insight-7o1', text: 'Overtake quickly and carefully as the road is clear and the tractor is slow.' },
      { id: 'q-insight-7o2', text: 'Do not overtake because the solid white line prohibits crossing it for overtaking.' },
      { id: 'q-insight-7o3', text: 'Edge out slightly to see if the tractor driver waves you past, then overtake if they do.' },
    ],
    correctAnswerId: 'q-insight-7o2',
    explanation: 'A solid white line means you must not cross or straddle it to overtake, regardless of how clear the road ahead seems.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-8',
    text: 'You are driving past a park where children are playing football close to the road. There is a waist-high fence separating the park from the pavement and road.\n\nWhat is the safest approach?',
    options: [
      { id: 'q-insight-8o1', text: 'Maintain normal caution; the fence provides adequate safety separation.' },
      { id: 'q-insight-8o2', text: 'Reduce speed and be extra alert; children or a ball could still come onto the road unexpectedly.' },
      { id: 'q-insight-8o3', text: 'No special caution is needed unless a child is visibly climbing the fence.' },
    ],
    correctAnswerId: 'q-insight-8o2',
    explanation: 'Children playing near a road require extra caution, even with a fence. Be ready for sudden, unpredictable actions.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-9',
    text: 'On a 100 km/h dual carriageway, you see a queue of stationary or very slow-moving traffic ahead in your lane due to congestion.\n\nWhat is the best way to warn following traffic and reduce risk?',
    options: [
      { id: 'q-insight-9o1', text: 'Maintain your speed for as long as possible then brake hard to minimize time lost and fit into the queue.' },
      { id: 'q-insight-9o2', text: 'Check mirrors, brake early and smoothly, and briefly activate your hazard warning lights to alert following traffic.' },
      { id: 'q-insight-9o3', text: 'Immediately look for an opportunity to switch to the adjacent lane to bypass the queue, even if it means cutting in.' },
    ],
    correctAnswerId: 'q-insight-9o2',
    explanation: 'Early, smooth braking and using hazard lights to warn following traffic is safest when approaching a sudden queue.',
    subject: 'Insight Practice',
  },
  {
    id: 'q-insight-10',
    text: 'You are due to drive early in the morning but have taken an over-the-counter cold and flu medication the night before. The packaging warns that the medication "may cause drowsiness." You feel slightly tired but otherwise okay.\n\nWhat should you do?',
    options: [
      { id: 'q-insight-10o1', text: 'Drive as planned; the main effects of the medication should have worn off overnight.' },
      { id: 'q-insight-10o2', text: 'Have a strong coffee before driving to counteract any residual drowsiness.' },
      { id: 'q-insight-10o3', text: 'Do not drive. Find another way to travel or postpone your journey until you are sure you are not affected.' },
    ],
    correctAnswerId: 'q-insight-10o3',
    explanation: 'Never drive if you may be impaired by medication. If in doubt, do not drive.',
    subject: 'Insight Practice',
  },
]; 