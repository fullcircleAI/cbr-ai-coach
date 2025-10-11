/**
 * Extract ALL questions from all test files and generate i18n JSON
 * This script extracts 420+ questions automatically
 */

const fs = require('fs');
const path = require('path');

// Test ID mappings
const testMappings = {
  'trafficLightsSignalsQuestions': 'trafficLights',
  'priorityRulesQuestions': 'priorityRules',
  'expandedPriorityRulesQuestions': 'expandedPriorityRules',
  'hazardPerceptionQuestions': 'hazardPerception',
  'speedLimitQuestions': 'speedLimit',
  'bicycleInteractionsQuestions': 'bicycleInteractions',
  'roundaboutRulesQuestions': 'roundaboutRules',
  'tramInteractionsQuestions': 'tramInteractions',
  'roadMarkingsQuestions': 'roadMarkings',
  'pedestrianCrossingsQuestions': 'pedestrianCrossings',
  'weatherConditionsQuestions': 'weatherConditions',
  'alcoholDrugsQuestions': 'alcoholDrugs',
  'motorwayRulesQuestions': 'motorwayRules',
  'constructionZonesQuestions': 'constructionZones',
  'parkingRulesQuestions': 'parkingRules',
  'emergencyProceduresQuestions': 'emergencyProcedures',
  'environmentalZonesQuestions': 'environmentalZones',
  'vehicleCategoriesQuestions': 'vehicleCategories',
  'vehicleDocumentationQuestions': 'vehicleDocumentation',
  'fatigueRestQuestions': 'fatigueRest',
  'technologySafetyQuestions': 'technologySafety',
  'insightPracticeQuestions': 'insightPractice',
  'mandatorySignsQuestions': 'mandatorySigns',
  'mandatorySigns2Questions': 'mandatorySigns2',
  'prohibitorySignsQuestions': 'prohibitorySigns',
  'prohibitorySigns2Questions': 'prohibitorySigns2',
  'warningSignsQuestions': 'warningSigns',
  'roadInformationQuestions': 'roadInformation',
  'signIdentificationQuestions': 'signIdentification'
};

const questionDataDir = path.join(__dirname, '../src/question_data');
const files = fs.readdirSync(questionDataDir).filter(f => f.endsWith('Questions.ts'));

const allQuestions = {};
let totalQuestions = 0;

files.forEach(file => {
  const filePath = path.join(questionDataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract test name
  const testName = file.replace('.ts', '');
  const jsonKey = testMappings[testName] || testName;
  
  // Extract questions array
  const arrayMatch = content.match(/export const \w+ = \[([\s\S]*?)\];/);
  if (!arrayMatch) return;
  
  // Parse questions (simple extraction)
  const questionsText = arrayMatch[1];
  const questionMatches = questionsText.match(/\{[\s\S]*?subject: '[^']+',?\s*\}/g);
  
  if (!questionMatches) return;
  
  allQuestions[jsonKey] = {};
  
  questionMatches.forEach((qText, index) => {
    // Extract text
    const textMatch = qText.match(/text: '([^']+)'/);
    if (!textMatch) return;
    
    // Extract options
    const optionsMatch = qText.match(/options: \[([\s\S]*?)\]/);
    const options = {};
    if (optionsMatch) {
      const optionTexts = optionsMatch[1].match(/text: '([^']+)'/g);
      if (optionTexts) {
        optionTexts.forEach((opt, optIndex) => {
          const optText = opt.match(/text: '([^']+)'/);
          if (optText) {
            options[`o${optIndex + 1}`] = optText[1];
          }
        });
      }
    }
    
    // Extract explanation
    const explMatch = qText.match(/explanation: '([^']+)'/);
    
    const qKey = `q${index + 1}`;
    allQuestions[jsonKey][qKey] = {
      text: textMatch[1],
      ...options,
      explanation: explMatch ? explMatch[1] : ''
    };
    
    totalQuestions++;
  });
});

console.log(`\n✅ Extracted ${totalQuestions} questions from ${Object.keys(allQuestions).length} tests!\n`);
console.log('Tests found:', Object.keys(allQuestions).join(', '));

// Save to temp file for review
const outputPath = path.join(__dirname, '../EXTRACTED_QUESTIONS.json');
fs.writeFileSync(outputPath, JSON.stringify({ questions: allQuestions }, null, 2));

console.log(`\n📝 Saved to: ${outputPath}`);
console.log(`\n🚀 Next: Use AI to translate this JSON to Dutch and Arabic!`);

