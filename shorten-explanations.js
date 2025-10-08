const fs = require('fs');
const path = require('path');

// Directory containing question files
const questionDir = path.join(__dirname, 'src/question_data');

// Get all .ts files
const files = fs.readdirSync(questionDir).filter(f => f.endsWith('.ts') && f.includes('Questions'));

console.log(`Found ${files.length} question files`);

files.forEach(file => {
  const filePath = path.join(questionDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Match explanation patterns and shorten them
  // Pattern: explanation: 'Long text with multiple sentences...',
  const explanationRegex = /explanation:\s*'([^']+)'/g;
  
  let shortened = content.replace(explanationRegex, (match, explanation) => {
    // Get first sentence only
    let firstSentence = explanation.split('.')[0] + '.';
    
    // If still too long (> 100 chars), cut at first comma or semicolon
    if (firstSentence.length > 100) {
      const commaIndex = firstSentence.indexOf(',');
      const semicolonIndex = firstSentence.indexOf(';');
      
      if (commaIndex > 0 && commaIndex < 80) {
        firstSentence = firstSentence.substring(0, commaIndex) + '.';
      } else if (semicolonIndex > 0 && semicolonIndex < 80) {
        firstSentence = firstSentence.substring(0, semicolonIndex) + '.';
      } else if (firstSentence.length > 120) {
        // Last resort: cut at 100 chars and add period
        firstSentence = firstSentence.substring(0, 100).trim() + '...';
      }
    }
    
    return `explanation: '${firstSentence}'`;
  });
  
  // Write back
  fs.writeFileSync(filePath, shortened, 'utf8');
  console.log(`✅ Shortened explanations in ${file}`);
});

console.log('\n✅ All explanations shortened!');

