/**
 * DeepL Translation Script
 * Translates ALL questions automatically using DeepL API
 * 
 * Setup:
 * 1. Get FREE API key from: https://www.deepl.com/pro-api
 * 2. Set environment variable: DEEPL_API_KEY=your-key-here
 * 3. Run: node scripts/translateWithDeepL.js
 */

const deepl = require('deepl-node');
const fs = require('fs');
const path = require('path');

// INSTRUCTIONS TO GET FREE API KEY:
console.log(`
╔════════════════════════════════════════════════════════════════╗
║  🚀 DeepL FREE API Setup (2 minutes)                          ║
╠════════════════════════════════════════════════════════════════╣
║  1. Go to: https://www.deepl.com/pro-api                      ║
║  2. Click "Sign up for free"                                  ║
║  3. Enter email, create password                              ║
║  4. Verify email                                              ║
║  5. Copy your API key                                         ║
║  6. Run: export DEEPL_API_KEY="your-key-here"                ║
║  7. Run this script again!                                    ║
╠════════════════════════════════════════════════════════════════╣
║  FREE TIER: 500,000 characters/month                          ║
║  Enough for: ~200,000 words (WAY MORE than we need!)         ║
╚════════════════════════════════════════════════════════════════╝
`);

// Check if API key is set
const apiKey = process.env.DEEPL_API_KEY;

if (!apiKey) {
  console.log('❌ DEEPL_API_KEY not found!');
  console.log('\n💡 Set it with: export DEEPL_API_KEY="your-key-here"');
  console.log('🔗 Get free key: https://www.deepl.com/pro-api\n');
  process.exit(1);
}

console.log('✅ API Key found! Starting translation...\n');

// Initialize DeepL translator
const translator = new deepl.Translator(apiKey);

// Load English questions
const enJsonPath = path.join(__dirname, '../src/i18n/locales/en.json');
const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));

// Function to translate text
async function translateText(text, targetLang) {
  try {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
  } catch (error) {
    console.error(`Error translating: ${text.substring(0, 50)}...`);
    return text; // Return original if error
  }
}

// Function to translate all questions in a test
async function translateTest(testName, questions, targetLang) {
  console.log(`  Translating ${testName} to ${targetLang}...`);
  
  const translatedTest = {};
  
  for (const [qKey, qData] of Object.entries(questions)) {
    translatedTest[qKey] = {};
    
    // Translate question text
    if (qData.text) {
      translatedTest[qKey].text = await translateText(qData.text, targetLang);
    }
    
    // Translate options
    for (let i = 1; i <= 10; i++) {
      const optKey = `o${i}`;
      if (qData[optKey]) {
        translatedTest[qKey][optKey] = await translateText(qData[optKey], targetLang);
      }
    }
    
    // Translate explanation
    if (qData.explanation) {
      translatedTest[qKey].explanation = await translateText(qData.explanation, targetLang);
    }
  }
  
  return translatedTest;
}

// Main translation function
async function translateAll() {
  console.log('🌍 Starting DeepL translation for ALL questions...\n');
  
  const questions = enData.questions || {};
  
  // Dutch translation
  console.log('📝 Translating to Dutch (nl)...');
  const nlQuestions = {};
  for (const [testName, testQuestions] of Object.entries(questions)) {
    nlQuestions[testName] = await translateTest(testName, testQuestions, 'nl');
  }
  
  // Arabic translation
  console.log('\n📝 Translating to Arabic (ar)...');
  const arQuestions = {};
  for (const [testName, testQuestions] of Object.entries(questions)) {
    arQuestions[testName] = await translateTest(testName, testQuestions, 'ar');
  }
  
  // Load existing translations and merge
  const nlJsonPath = path.join(__dirname, '../src/i18n/locales/nl.json');
  const arJsonPath = path.join(__dirname, '../src/i18n/locales/ar.json');
  
  const nlData = JSON.parse(fs.readFileSync(nlJsonPath, 'utf8'));
  const arData = JSON.parse(fs.readFileSync(arJsonPath, 'utf8'));
  
  nlData.questions = { ...nlData.questions, ...nlQuestions };
  arData.questions = { ...arData.questions, ...arQuestions };
  
  // Save translated files
  fs.writeFileSync(nlJsonPath, JSON.stringify(nlData, null, 2));
  fs.writeFileSync(arJsonPath, JSON.stringify(arData, null, 2));
  
  console.log('\n✅ Translation complete!');
  console.log(`📁 Dutch saved to: ${nlJsonPath}`);
  console.log(`📁 Arabic saved to: ${arJsonPath}`);
  console.log('\n🎉 All questions translated! Test your app now!');
}

// Run translation
translateAll().catch(error => {
  console.error('❌ Translation failed:', error.message);
  process.exit(1);
});

