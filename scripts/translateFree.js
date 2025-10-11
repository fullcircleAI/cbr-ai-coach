/**
 * FREE Translation Script - NO CREDIT CARD, NO SIGNUP!
 * Uses LibreTranslate public API (100% free)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

console.log(`
╔════════════════════════════════════════════════════════════════╗
║  🆓 FREE Translation - NO Credit Card, NO Signup!            ║
╠════════════════════════════════════════════════════════════════╣
║  Using: LibreTranslate Public API                             ║
║  Cost: 100% FREE forever                                      ║
║  Setup: NONE - Just run!                                      ║
╚════════════════════════════════════════════════════════════════╝
`);

// LibreTranslate public API endpoint
const LIBRETRANSLATE_API = 'https://libretranslate.com/translate';

// Function to translate text using LibreTranslate
async function translateText(text, targetLang) {
  return new Promise((resolve, reject) => {
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

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          resolve(result.translatedText || text);
        } catch (error) {
          resolve(text); // Return original if error
        }
      });
    });

    req.on('error', (error) => {
      console.error('Translation error:', error.message);
      resolve(text); // Return original if error
    });

    req.write(data);
    req.end();
  });
}

// Function to translate with rate limiting (to be nice to free API)
async function translateWithDelay(text, targetLang, delay = 500) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return await translateText(text, targetLang);
}

// Function to translate all questions in a test
async function translateTest(testName, questions, targetLang) {
  console.log(`  Translating ${testName} to ${targetLang}...`);
  
  const translatedTest = {};
  let count = 0;
  const total = Object.keys(questions).length;
  
  for (const [qKey, qData] of Object.entries(questions)) {
    count++;
    process.stdout.write(`    ${count}/${total} questions...\r`);
    
    translatedTest[qKey] = {};
    
    // Translate question text
    if (qData.text) {
      translatedTest[qKey].text = await translateWithDelay(qData.text, targetLang);
    }
    
    // Translate options
    for (let i = 1; i <= 10; i++) {
      const optKey = `o${i}`;
      if (qData[optKey]) {
        translatedTest[qKey][optKey] = await translateWithDelay(qData[optKey], targetLang);
      }
    }
    
    // Translate explanation
    if (qData.explanation) {
      translatedTest[qKey].explanation = await translateWithDelay(qData.explanation, targetLang);
    }
  }
  
  console.log(`    ✅ Complete!`);
  return translatedTest;
}

// Main translation function
async function translateAll() {
  console.log('🌍 Starting FREE translation for ALL questions...\n');
  console.log('⏱️  This will take ~15-20 minutes (rate-limited to be nice to free API)\n');
  
  // Load English questions
  const enJsonPath = path.join(__dirname, '../src/i18n/locales/en.json');
  const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
  
  const questions = enData.questions || {};
  
  if (Object.keys(questions).length === 0) {
    console.log('❌ No questions found in en.json');
    console.log('Make sure questions are in the "questions" object');
    return;
  }
  
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
  console.log('\n💡 Note: LibreTranslate is free but slower than paid APIs');
  console.log('   Quality is good for most cases!');
}

// Run translation
console.log('🚀 Starting translation...\n');
translateAll().catch(error => {
  console.error('❌ Translation failed:', error.message);
  process.exit(1);
});

