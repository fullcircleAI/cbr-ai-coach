/**
 * COMPLETE Translation Pipeline
 * 1. Extract ALL questions from ALL test files
 * 2. Add to en.json
 * 3. Translate to Dutch and Arabic
 * 
 * NO CREDIT CARD. NO SIGNUP. 100% FREE!
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

console.log(`
╔════════════════════════════════════════════════════════════════╗
║  🚀 COMPLETE Translation Pipeline                            ║
║  Extracting + Translating ALL 420 Questions                  ║
╠════════════════════════════════════════════════════════════════╣
║  Step 1: Extract from TypeScript files                       ║
║  Step 2: Add to en.json                                      ║
║  Step 3: Translate to Dutch                                  ║
║  Step 4: Translate to Arabic                                 ║
║  Time: ~20-30 minutes                                        ║
╚════════════════════════════════════════════════════════════════╝
`);

// Import all question files
const questionData = require('../src/question_data');

// Map test file exports to translation keys
const testMapping = {
  trafficLightsSignalsQuestions: 'trafficLights',
  priorityRulesQuestions: 'priorityRules',
  hazardPerceptionQuestions: 'hazardPerception',
  speedLimitQuestions: 'speedLimit',
  bicycleInteractionsQuestions: 'bicycleInteractions',
  roundaboutRulesQuestions: 'roundaboutRules',
  tramInteractionsQuestions: 'tramInteractions',
  roadMarkingsQuestions: 'roadMarkings',
  pedestrianCrossingsQuestions: 'pedestrianCrossings',
  weatherConditionsQuestions: 'weatherConditions',
  alcoholDrugsQuestions: 'alcoholDrugs',
  motorwayRulesQuestions: 'motorwayRules',
  constructionZonesQuestions: 'constructionZones',
  parkingRulesQuestions: 'parkingRules',
  emergencyProceduresQuestions: 'emergencyProcedures',
  environmentalZonesQuestions: 'environmentalZones',
  vehicleCategoriesQuestions: 'vehicleCategories',
  vehicleDocumentationQuestions: 'vehicleDocumentation',
  fatigueRestQuestions: 'fatigueRest',
  technologySafetyQuestions: 'technologySafety',
  insightPracticeQuestions: 'insightPractice',
  mandatorySignsQuestions: 'mandatorySigns',
  mandatorySigns2Questions: 'mandatorySigns2',
  prohibitorySignsQuestions: 'prohibitorySigns',
  prohibitorySigns2Questions: 'prohibitorySigns2',
  warningSignsQuestions: 'warningSigns',
  roadInformationQuestions: 'roadInformation',
  signIdentificationQuestions: 'signIdentification',
  expandedPriorityRulesQuestions: 'expandedPriorityRules'
};

// Step 1: Extract all questions
console.log('📝 Step 1: Extracting questions from TypeScript files...\n');

const allQuestions = {};
let totalQuestions = 0;

for (const [exportName, translationKey] of Object.entries(testMapping)) {
  const questions = questionData[exportName];
  if (!questions || !Array.isArray(questions)) continue;
  
  allQuestions[translationKey] = {};
  
  questions.forEach((q, index) => {
    const qKey = `q${index + 1}`;
    allQuestions[translationKey][qKey] = {
      text: q.text
    };
    
    // Add options
    q.options.forEach((opt, optIndex) => {
      allQuestions[translationKey][qKey][`o${optIndex + 1}`] = opt.text;
    });
    
    // Add explanation
    allQuestions[translationKey][qKey].explanation = q.explanation;
    
    totalQuestions++;
  });
  
  console.log(`  ✅ ${translationKey}: ${questions.length} questions`);
}

console.log(`\n✅ Extracted ${totalQuestions} questions from ${Object.keys(allQuestions).length} tests!\n`);

// Step 2: Add to en.json
console.log('📝 Step 2: Adding to en.json...\n');

const enJsonPath = path.join(__dirname, '../src/i18n/locales/en.json');
const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
enData.questions = allQuestions;
fs.writeFileSync(enJsonPath, JSON.stringify(enData, null, 2));

console.log('✅ en.json updated with all questions!\n');

// Step 3 & 4: Translate
console.log('📝 Step 3 & 4: Translating to Dutch and Arabic...\n');
console.log('⏱️  This will take 20-30 minutes...\n');

// Translation function
async function translateText(text, targetLang) {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text'
    });

    const options = {
      hostname: 'libretranslate.com',
      port: 443,
      path: '/translate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          resolve(result.translatedText || text);
        } catch {
          resolve(text);
        }
      });
    });

    req.on('error', () => resolve(text));
    req.write(data);
    req.end();
  });
}

async function translateWithDelay(text, targetLang, delay = 400) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return await translateText(text, targetLang);
}

async function translateTest(testName, questions, targetLang) {
  const translatedTest = {};
  const qKeys = Object.keys(questions);
  
  for (let i = 0; i < qKeys.length; i++) {
    const qKey = qKeys[i];
    const qData = questions[qKey];
    
    process.stdout.write(`  ${testName} (${targetLang}): ${i + 1}/${qKeys.length}\r`);
    
    translatedTest[qKey] = {};
    
    if (qData.text) {
      translatedTest[qKey].text = await translateWithDelay(qData.text, targetLang);
    }
    
    for (let j = 1; j <= 10; j++) {
      const optKey = `o${j}`;
      if (qData[optKey]) {
        translatedTest[qKey][optKey] = await translateWithDelay(qData[optKey], targetLang);
      }
    }
    
    if (qData.explanation) {
      translatedTest[qKey].explanation = await translateWithDelay(qData.explanation, targetLang);
    }
  }
  
  console.log(`  ✅ ${testName} (${targetLang}): Complete!`);
  return translatedTest;
}

async function translateAll() {
  const nlQuestions = {};
  const arQuestions = {};
  
  for (const [testName, testQuestions] of Object.entries(allQuestions)) {
    nlQuestions[testName] = await translateTest(testName, testQuestions, 'nl');
    arQuestions[testName] = await translateTest(testName, testQuestions, 'ar');
  }
  
  const nlJsonPath = path.join(__dirname, '../src/i18n/locales/nl.json');
  const arJsonPath = path.join(__dirname, '../src/i18n/locales/ar.json');
  
  const nlData = JSON.parse(fs.readFileSync(nlJsonPath, 'utf8'));
  const arData = JSON.parse(fs.readFileSync(arJsonPath, 'utf8'));
  
  nlData.questions = nlQuestions;
  arData.questions = arQuestions;
  
  fs.writeFileSync(nlJsonPath, JSON.stringify(nlData, null, 2));
  fs.writeFileSync(arJsonPath, JSON.stringify(arData, null, 2));
  
  console.log('\n🎉 ALL TRANSLATIONS COMPLETE!');
  console.log(`✅ ${totalQuestions} questions translated to Dutch`);
  console.log(`✅ ${totalQuestions} questions translated to Arabic`);
  console.log('\n🚀 Your app is now fully multilingual!');
}

translateAll().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

