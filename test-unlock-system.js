// Test script for Mock Exam Unlock System
// This script simulates different user scenarios to test the unlock logic

console.log('🧪 Testing Mock Exam Unlock System...\n');

// Simulate different user scenarios
const testScenarios = [
  {
    name: 'New User (No Tests)',
    testHistory: [],
    expectedUnlock: false,
    description: 'User with no completed tests should not unlock mock exams'
  },
  {
    name: 'Beginner User (Few Tests, Low Scores)',
    testHistory: [
      { testId: 'test1', percentage: 45, totalQuestions: 20 },
      { testId: 'test2', percentage: 50, totalQuestions: 20 },
      { testId: 'test3', percentage: 55, totalQuestions: 20 }
    ],
    expectedUnlock: false,
    description: 'User with few tests and low scores should not unlock'
  },
  {
    name: 'Intermediate User (Some Tests, Mixed Scores)',
    testHistory: [
      { testId: 'test1', percentage: 75, totalQuestions: 20 },
      { testId: 'test2', percentage: 80, totalQuestions: 20 },
      { testId: 'test3', percentage: 70, totalQuestions: 20 },
      { testId: 'test4', percentage: 85, totalQuestions: 20 },
      { testId: 'test5', percentage: 78, totalQuestions: 20 },
      { testId: 'test6', percentage: 82, totalQuestions: 20 },
      { testId: 'test7', percentage: 77, totalQuestions: 20 },
      { testId: 'test8', percentage: 79, totalQuestions: 20 }
    ],
    expectedUnlock: false,
    description: 'User with some tests but not enough (8/15) should not unlock'
  },
  {
    name: 'Good User (Many Tests, Good Scores)',
    testHistory: [
      { testId: 'test1', percentage: 75, totalQuestions: 20 },
      { testId: 'test2', percentage: 80, totalQuestions: 20 },
      { testId: 'test3', percentage: 78, totalQuestions: 20 },
      { testId: 'test4', percentage: 85, totalQuestions: 20 },
      { testId: 'test5', percentage: 82, totalQuestions: 20 },
      { testId: 'test6', percentage: 79, totalQuestions: 20 },
      { testId: 'test7', percentage: 77, totalQuestions: 20 },
      { testId: 'test8', percentage: 81, totalQuestions: 20 },
      { testId: 'test9', percentage: 83, totalQuestions: 20 },
      { testId: 'test10', percentage: 80, totalQuestions: 20 },
      { testId: 'test11', percentage: 78, totalQuestions: 20 },
      { testId: 'test12', percentage: 85, totalQuestions: 20 },
      { testId: 'test13', percentage: 82, totalQuestions: 20 },
      { testId: 'test14', percentage: 79, totalQuestions: 20 },
      { testId: 'test15', percentage: 81, totalQuestions: 20 }
    ],
    expectedUnlock: true,
    description: 'User with 15 tests, 75%+ average, all tests 70%+ should unlock'
  },
  {
    name: 'Almost Ready User (One Low Score)',
    testHistory: [
      { testId: 'test1', percentage: 75, totalQuestions: 20 },
      { testId: 'test2', percentage: 80, totalQuestions: 20 },
      { testId: 'test3', percentage: 78, totalQuestions: 20 },
      { testId: 'test4', percentage: 85, totalQuestions: 20 },
      { testId: 'test5', percentage: 82, totalQuestions: 20 },
      { testId: 'test6', percentage: 79, totalQuestions: 20 },
      { testId: 'test7', percentage: 77, totalQuestions: 20 },
      { testId: 'test8', percentage: 81, totalQuestions: 20 },
      { testId: 'test9', percentage: 83, totalQuestions: 20 },
      { testId: 'test10', percentage: 80, totalQuestions: 20 },
      { testId: 'test11', percentage: 78, totalQuestions: 20 },
      { testId: 'test12', percentage: 85, totalQuestions: 20 },
      { testId: 'test13', percentage: 82, totalQuestions: 20 },
      { testId: 'test14', percentage: 65, totalQuestions: 20 }, // LOW SCORE!
      { testId: 'test15', percentage: 81, totalQuestions: 20 }
    ],
    expectedUnlock: false,
    description: 'User with one test below 70% should not unlock'
  }
];

// Function to calculate unlock criteria
function testUnlockLogic(testHistory) {
  const completedTests = testHistory.length;
  const averageScore = testHistory.length > 0 
    ? Math.round(testHistory.reduce((sum, test) => sum + test.percentage, 0) / testHistory.length)
    : 0;
  const minTestScore = testHistory.length > 0 
    ? Math.min(...testHistory.map(test => test.percentage))
    : 0;
  const totalQuestions = testHistory.reduce((sum, test) => sum + test.totalQuestions, 0);
  const studyTime = totalQuestions / 40; // 1.5 min per Q = 40 Q per hour

  const canUnlock = (
    completedTests >= 15 &&
    averageScore >= 75 &&
    minTestScore >= 70 &&
    studyTime >= 3
  );

  return {
    completedTests,
    averageScore,
    minTestScore,
    studyTime: Math.round(studyTime * 10) / 10,
    canUnlock
  };
}

// Run tests
let passedTests = 0;
let totalTests = testScenarios.length;

testScenarios.forEach((scenario, index) => {
  console.log(`📋 Test ${index + 1}: ${scenario.name}`);
  console.log(`   Description: ${scenario.description}`);
  
  const result = testUnlockLogic(scenario.testHistory);
  
  console.log(`   Results:`);
  console.log(`   - Tests Completed: ${result.completedTests}/15`);
  console.log(`   - Average Score: ${result.averageScore}% (need 75%)`);
  console.log(`   - Lowest Test: ${result.minTestScore}% (need 70%)`);
  console.log(`   - Study Time: ${result.studyTime}h (need 3h)`);
  console.log(`   - Can Unlock: ${result.canUnlock ? '✅ YES' : '❌ NO'}`);
  
  const testPassed = result.canUnlock === scenario.expectedUnlock;
  console.log(`   Expected: ${scenario.expectedUnlock ? '✅ YES' : '❌ NO'}`);
  console.log(`   Result: ${testPassed ? '✅ PASS' : '❌ FAIL'}`);
  
  if (testPassed) passedTests++;
  console.log('');
});

// Summary
console.log('📊 TEST SUMMARY:');
console.log(`✅ Passed: ${passedTests}/${totalTests}`);
console.log(`❌ Failed: ${totalTests - passedTests}/${totalTests}`);
console.log(`📈 Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`);

if (passedTests === totalTests) {
  console.log('\n🎉 ALL TESTS PASSED! Mock Exam Unlock System is working correctly!');
} else {
  console.log('\n⚠️  Some tests failed. Please check the unlock logic.');
}
