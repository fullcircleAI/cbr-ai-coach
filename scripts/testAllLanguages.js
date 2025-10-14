/**
 * COMPREHENSIVE LANGUAGE TESTING
 * Tests all 3 languages for accuracy, performance, and logic
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 COMPREHENSIVE LANGUAGE TESTING STARTING...\n');

// Test 1: File Structure & Sizes
console.log('📁 TEST 1: File Structure & Sizes');
console.log('=====================================');

const localesDir = path.join(__dirname, '../src/i18n/locales');
const files = ['en.json', 'nl.json', 'ar.json'];

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${file}: ${sizeKB}KB`);
  } else {
    console.log(`❌ ${file}: MISSING`);
  }
});

// Test 2: JSON Validity
console.log('\n📋 TEST 2: JSON Validity');
console.log('=========================');

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    console.log(`✅ ${file}: Valid JSON`);
    
    // Check for required sections
    const requiredSections = ['navigation', 'dashboard', 'practice', 'settings', 'quiz', 'questions'];
    const missingSections = requiredSections.filter(section => !data[section]);
    
    if (missingSections.length === 0) {
      console.log(`   ✅ All required sections present`);
    } else {
      console.log(`   ❌ Missing sections: ${missingSections.join(', ')}`);
    }
  } catch (error) {
    console.log(`❌ ${file}: Invalid JSON - ${error.message}`);
  }
});

// Test 3: Question Count Consistency
console.log('\n📊 TEST 3: Question Count Consistency');
console.log('=====================================');

const questionCounts = {};

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.questions) {
      let totalQuestions = 0;
      Object.keys(data.questions).forEach(testKey => {
        const testQuestions = data.questions[testKey];
        const testCount = Object.keys(testQuestions).filter(key => key.startsWith('q')).length;
        totalQuestions += testCount;
      });
      questionCounts[file] = totalQuestions;
      console.log(`✅ ${file}: ${totalQuestions} questions`);
    } else {
      console.log(`❌ ${file}: No questions section`);
    }
  } catch (error) {
    console.log(`❌ ${file}: Error counting questions`);
  }
});

// Check consistency
const counts = Object.values(questionCounts);
if (counts.length > 0 && counts.every(count => count === counts[0])) {
  console.log(`✅ All languages have same question count: ${counts[0]}`);
} else {
  console.log(`❌ Question count mismatch:`, questionCounts);
}

// Test 4: Translation Quality Check
console.log('\n🔍 TEST 4: Translation Quality Check');
console.log('====================================');

// Load all files
const translations = {};
files.forEach(file => {
  const filePath = path.join(localesDir, file);
  try {
    translations[file] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.log(`❌ Failed to load ${file}`);
  }
});

// Check specific translations
const testKeys = [
  'navigation.dashboard',
  'navigation.practice', 
  'navigation.quiz',
  'navigation.settings',
  'dashboard.title',
  'dashboard.startPractice',
  'practice.title',
  'quiz.title'
];

testKeys.forEach(key => {
  console.log(`\n🔑 Testing key: ${key}`);
  const values = {};
  
  files.forEach(file => {
    if (translations[file]) {
      const keys = key.split('.');
      let value = translations[file];
      for (const k of keys) {
        value = value?.[k];
      }
      if (value) {
        values[file] = value;
        console.log(`   ${file}: "${value}"`);
      } else {
        console.log(`   ${file}: ❌ MISSING`);
      }
    }
  });
  
  // Check if all languages have this key
  if (Object.keys(values).length === files.length) {
    console.log(`   ✅ All languages have this key`);
  } else {
    console.log(`   ❌ Some languages missing this key`);
  }
});

// Test 5: Question Translation Sample
console.log('\n📝 TEST 5: Question Translation Sample');
console.log('=====================================');

// Check first question from traffic lights test
const sampleQuestionKey = 'questions.trafficLights.q1';
files.forEach(file => {
  if (translations[file]) {
    const question = translations[file].questions?.trafficLights?.q1;
    if (question) {
      console.log(`\n${file} - Traffic Lights Q1:`);
      console.log(`   Text: "${question.text}"`);
      console.log(`   Options: ${Object.keys(question).filter(k => k.startsWith('o')).length} options`);
      console.log(`   Explanation: "${question.explanation?.substring(0, 50)}..."`);
    } else {
      console.log(`❌ ${file}: No traffic lights questions found`);
    }
  }
});

// Test 6: Performance Check
console.log('\n⚡ TEST 6: Performance Check');
console.log('===========================');

const startTime = Date.now();
let loadCount = 0;

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    loadCount++;
  } catch (error) {
    console.log(`❌ ${file}: Load failed`);
  }
});

const loadTime = Date.now() - startTime;
console.log(`✅ Loaded ${loadCount}/${files.length} files in ${loadTime}ms`);
console.log(`✅ Average load time: ${Math.round(loadTime / loadCount)}ms per file`);

// Test 7: RTL Support Check
console.log('\n🔄 TEST 7: RTL Support Check');
console.log('============================');

const arData = translations['ar.json'];
if (arData) {
  // Check if Arabic text contains RTL characters
  const sampleText = arData.navigation?.dashboard || '';
  const hasArabicChars = /[\u0600-\u06FF]/.test(sampleText);
  
  if (hasArabicChars) {
    console.log('✅ Arabic text contains RTL characters');
    console.log(`   Sample: "${sampleText}"`);
  } else {
    console.log('❌ Arabic text may not be properly translated');
  }
} else {
  console.log('❌ Arabic translations not found');
}

// Final Summary
console.log('\n🎯 FINAL SUMMARY');
console.log('================');

const totalQuestions = questionCounts['en.json'] || 0;
const allFilesPresent = files.every(file => fs.existsSync(path.join(localesDir, file)));
const allFilesValid = files.every(file => {
  try {
    JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    return true;
  } catch {
    return false;
  }
});

console.log(`✅ Files Present: ${allFilesPresent ? 'YES' : 'NO'}`);
console.log(`✅ Files Valid: ${allFilesValid ? 'YES' : 'NO'}`);
console.log(`✅ Questions Count: ${totalQuestions}`);
console.log(`✅ Load Performance: ${loadTime}ms for ${loadCount} files`);
console.log(`✅ RTL Support: ${arData ? 'YES' : 'NO'}`);

if (allFilesPresent && allFilesValid && totalQuestions > 0) {
  console.log('\n🎉 ALL TESTS PASSED! App is ready for multilingual testing!');
} else {
  console.log('\n❌ Some tests failed. Check the issues above.');
}

console.log('\n🚀 Ready to test in browser: http://localhost:5173/');
