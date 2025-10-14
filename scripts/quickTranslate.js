/**
 * QUICK TRANSLATION FIX
 * Creates basic Dutch and Arabic translations for testing
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 QUICK TRANSLATION FIX STARTING...\n');

// Simple translation mappings
const dutchTranslations = {
  // UI Elements
  'Dashboard': 'Dashboard',
  'Practice': 'Oefenen', 
  'Mock Exam': 'Proefexamen',
  'Settings': 'Instellingen',
  'Start Practice': 'Start Oefenen',
  'Start': 'Start',
  'Next Question': 'Volgende Vraag',
  'Finish Test': 'Test Afronden',
  'Explanation': 'Uitleg',
  'Question': 'Vraag',
  'of': 'van',
  
  // Common question words
  'What is': 'Wat is',
  'What should': 'Wat moet',
  'What does': 'Wat betekent',
  'When should': 'Wanneer moet',
  'Where should': 'Waar moet',
  'How should': 'Hoe moet',
  'Which of': 'Welke van',
  'You are': 'Je bent',
  'You must': 'Je moet',
  'You should': 'Je moet',
  'You can': 'Je kunt',
  'You cannot': 'Je kunt niet',
  'The maximum': 'Het maximum',
  'The minimum': 'Het minimum',
  'In the Netherlands': 'In Nederland',
  'On Dutch roads': 'Op Nederlandse wegen',
  'According to Dutch law': 'Volgens Nederlandse wet',
  'traffic lights': 'verkeerslichten',
  'road signs': 'verkeersborden',
  'speed limit': 'snelheidslimiet',
  'right of way': 'voorrang',
  'roundabout': 'rotonde',
  'motorway': 'snelweg',
  'parking': 'parkeren',
  'overtaking': 'inhalen',
  'stopping': 'stoppen',
  'driving': 'rijden',
  'vehicle': 'voertuig',
  'driver': 'bestuurder',
  'passenger': 'passagier',
  'pedestrian': 'voetganger',
  'cyclist': 'fietser',
  'motorcyclist': 'motorrijder',
  'truck': 'vrachtwagen',
  'bus': 'bus',
  'tram': 'tram',
  'ambulance': 'ambulance',
  'police': 'politie',
  'fire truck': 'brandweerwagen',
  'emergency': 'noodgeval',
  'accident': 'ongeluk',
  'construction': 'bouw',
  'weather': 'weer',
  'rain': 'regen',
  'snow': 'sneeuw',
  'fog': 'mist',
  'ice': 'ijs',
  'wet': 'nat',
  'dry': 'droog',
  'daylight': 'daglicht',
  'darkness': 'duisternis',
  'headlights': 'koplampen',
  'brake': 'rem',
  'accelerate': 'versnellen',
  'slow down': 'vertragen',
  'stop': 'stoppen',
  'go': 'gaan',
  'turn left': 'linksaf slaan',
  'turn right': 'rechtsaf slaan',
  'straight ahead': 'rechtdoor',
  'reverse': 'achteruit',
  'park': 'parkeren',
  'overtake': 'inhalen',
  'yield': 'voorrang verlenen',
  'give way': 'voorrang verlenen',
  'priority': 'voorrang',
  'mandatory': 'verplicht',
  'prohibited': 'verboden',
  'warning': 'waarschuwing',
  'information': 'informatie',
  'direction': 'richting',
  'distance': 'afstand',
  'speed': 'snelheid',
  'time': 'tijd',
  'hours': 'uren',
  'minutes': 'minuten',
  'seconds': 'seconden',
  'meters': 'meters',
  'kilometers': 'kilometers',
  'per hour': 'per uur',
  'per day': 'per dag',
  'per week': 'per week',
  'per month': 'per maand',
  'per year': 'per jaar',
  'always': 'altijd',
  'never': 'nooit',
  'sometimes': 'soms',
  'usually': 'meestal',
  'often': 'vaak',
  'rarely': 'zelden',
  'immediately': 'onmiddellijk',
  'quickly': 'snel',
  'slowly': 'langzaam',
  'carefully': 'voorzichtig',
  'safely': 'veilig',
  'legally': 'wettelijk',
  'illegally': 'onwettig',
  'correctly': 'correct',
  'incorrectly': 'incorrect',
  'true': 'waar',
  'false': 'onwaar',
  'yes': 'ja',
  'no': 'nee',
  'maybe': 'misschien',
  'probably': 'waarschijnlijk',
  'definitely': 'zeker',
  'possibly': 'mogelijk',
  'certainly': 'zeker',
  'absolutely': 'absoluut',
  'exactly': 'precies',
  'approximately': 'ongeveer',
  'about': 'ongeveer',
  'around': 'rond',
  'near': 'dichtbij',
  'far': 'ver',
  'close': 'dichtbij',
  'open': 'open',
  'closed': 'gesloten',
  'free': 'gratis',
  'paid': 'betaald',
  'required': 'vereist',
  'optional': 'optioneel',
  'necessary': 'noodzakelijk',
  'important': 'belangrijk',
  'dangerous': 'gevaarlijk',
  'safe': 'veilig',
  'easy': 'makkelijk',
  'difficult': 'moeilijk',
  'simple': 'eenvoudig',
  'complex': 'complex',
  'clear': 'duidelijk',
  'unclear': 'onduidelijk',
  'visible': 'zichtbaar',
  'invisible': 'onzichtbaar',
  'obvious': 'duidelijk',
  'hidden': 'verborgen',
  'public': 'openbaar',
  'private': 'privé',
  'official': 'officieel',
  'unofficial': 'onofficieel',
  'legal': 'wettig',
  'illegal': 'onwettig',
  'valid': 'geldig',
  'invalid': 'ongeldig',
  'correct': 'correct',
  'incorrect': 'incorrect',
  'right': 'juist',
  'wrong': 'fout',
  'good': 'goed',
  'bad': 'slecht',
  'better': 'beter',
  'worse': 'slechter',
  'best': 'beste',
  'worst': 'slechtste',
  'more': 'meer',
  'less': 'minder',
  'most': 'meeste',
  'least': 'minste',
  'many': 'veel',
  'few': 'weinig',
  'all': 'alle',
  'none': 'geen',
  'some': 'sommige',
  'other': 'andere',
  'another': 'een andere',
  'same': 'zelfde',
  'different': 'verschillend',
  'similar': 'vergelijkbaar',
  'equal': 'gelijk',
  'unequal': 'ongelijk',
  'first': 'eerste',
  'last': 'laatste',
  'next': 'volgende',
  'previous': 'vorige',
  'before': 'voor',
  'after': 'na',
  'during': 'tijdens',
  'while': 'terwijl',
  'until': 'tot',
  'since': 'sinds',
  'from': 'van',
  'to': 'naar',
  'at': 'op',
  'in': 'in',
  'on': 'op',
  'under': 'onder',
  'over': 'over',
  'above': 'boven',
  'below': 'onder',
  'inside': 'binnen',
  'outside': 'buiten',
  'here': 'hier',
  'there': 'daar',
  'everywhere': 'overal',
  'nowhere': 'nergens',
  'somewhere': 'ergens',
  'anywhere': 'overal',
  'up': 'omhoog',
  'down': 'omlaag',
  'left': 'links',
  'right': 'rechts',
  'forward': 'vooruit',
  'backward': 'achteruit',
  'north': 'noord',
  'south': 'zuid',
  'east': 'oost',
  'west': 'west',
  'northeast': 'noordoost',
  'northwest': 'noordwest',
  'southeast': 'zuidoost',
  'southwest': 'zuidwest'
};

const arabicTranslations = {
  // UI Elements
  'Dashboard': 'لوحة القيادة',
  'Practice': 'ممارسة',
  'Mock Exam': 'امتحان تجريبي',
  'Settings': 'الإعدادات',
  'Start Practice': 'ابدأ الممارسة',
  'Start': 'ابدأ',
  'Next Question': 'السؤال التالي',
  'Finish Test': 'إنهاء الاختبار',
  'Explanation': 'شرح',
  'Question': 'سؤال',
  'of': 'من',
  
  // Common question words
  'What is': 'ما هو',
  'What should': 'ماذا يجب',
  'What does': 'ماذا يعني',
  'When should': 'متى يجب',
  'Where should': 'أين يجب',
  'How should': 'كيف يجب',
  'Which of': 'أي من',
  'You are': 'أنت',
  'You must': 'يجب عليك',
  'You should': 'يجب عليك',
  'You can': 'يمكنك',
  'You cannot': 'لا يمكنك',
  'The maximum': 'الحد الأقصى',
  'The minimum': 'الحد الأدنى',
  'In the Netherlands': 'في هولندا',
  'On Dutch roads': 'على الطرق الهولندية',
  'According to Dutch law': 'وفقاً للقانون الهولندي',
  'traffic lights': 'إشارات المرور',
  'road signs': 'علامات الطريق',
  'speed limit': 'حد السرعة',
  'right of way': 'حق المرور',
  'roundabout': 'دوار',
  'motorway': 'طريق سريع',
  'parking': 'وقوف',
  'overtaking': 'تجاوز',
  'stopping': 'توقف',
  'driving': 'قيادة',
  'vehicle': 'مركبة',
  'driver': 'سائق',
  'passenger': 'راكب',
  'pedestrian': 'مشاة',
  'cyclist': 'راكب دراجة',
  'motorcyclist': 'راكب دراجة نارية',
  'truck': 'شاحنة',
  'bus': 'حافلة',
  'tram': 'ترام',
  'ambulance': 'سيارة إسعاف',
  'police': 'شرطة',
  'fire truck': 'سيارة إطفاء',
  'emergency': 'طوارئ',
  'accident': 'حادث',
  'construction': 'بناء',
  'weather': 'طقس',
  'rain': 'مطر',
  'snow': 'ثلج',
  'fog': 'ضباب',
  'ice': 'جليد',
  'wet': 'رطب',
  'dry': 'جاف',
  'daylight': 'ضوء النهار',
  'darkness': 'ظلام',
  'headlights': 'المصابيح الأمامية',
  'brake': 'فرامل',
  'accelerate': 'تسريع',
  'slow down': 'إبطاء',
  'stop': 'توقف',
  'go': 'اذهب',
  'turn left': 'انعطف يساراً',
  'turn right': 'انعطف يميناً',
  'straight ahead': 'مستقيم',
  'reverse': 'رجوع',
  'park': 'وقوف',
  'overtake': 'تجاوز',
  'yield': 'أفسح الطريق',
  'give way': 'أفسح الطريق',
  'priority': 'أولوية',
  'mandatory': 'إجباري',
  'prohibited': 'ممنوع',
  'warning': 'تحذير',
  'information': 'معلومات',
  'direction': 'اتجاه',
  'distance': 'مسافة',
  'speed': 'سرعة',
  'time': 'وقت',
  'hours': 'ساعات',
  'minutes': 'دقائق',
  'seconds': 'ثواني',
  'meters': 'أمتار',
  'kilometers': 'كيلومترات',
  'per hour': 'في الساعة',
  'per day': 'في اليوم',
  'per week': 'في الأسبوع',
  'per month': 'في الشهر',
  'per year': 'في السنة',
  'always': 'دائماً',
  'never': 'أبداً',
  'sometimes': 'أحياناً',
  'usually': 'عادة',
  'often': 'كثيراً',
  'rarely': 'نادراً',
  'immediately': 'فوراً',
  'quickly': 'بسرعة',
  'slowly': 'ببطء',
  'carefully': 'بحذر',
  'safely': 'بأمان',
  'legally': 'قانونياً',
  'illegally': 'غير قانوني',
  'correctly': 'بصحة',
  'incorrectly': 'بخطأ',
  'true': 'صحيح',
  'false': 'خطأ',
  'yes': 'نعم',
  'no': 'لا',
  'maybe': 'ربما',
  'probably': 'على الأرجح',
  'definitely': 'بالتأكيد',
  'possibly': 'ممكن',
  'certainly': 'بالتأكيد',
  'absolutely': 'تماماً',
  'exactly': 'تماماً',
  'approximately': 'تقريباً',
  'about': 'حوالي',
  'around': 'حول',
  'near': 'قريب',
  'far': 'بعيد',
  'close': 'قريب',
  'open': 'مفتوح',
  'closed': 'مغلق',
  'free': 'مجاني',
  'paid': 'مدفوع',
  'required': 'مطلوب',
  'optional': 'اختياري',
  'necessary': 'ضروري',
  'important': 'مهم',
  'dangerous': 'خطير',
  'safe': 'آمن',
  'easy': 'سهل',
  'difficult': 'صعب',
  'simple': 'بسيط',
  'complex': 'معقد',
  'clear': 'واضح',
  'unclear': 'غير واضح',
  'visible': 'مرئي',
  'invisible': 'غير مرئي',
  'obvious': 'واضح',
  'hidden': 'مخفي',
  'public': 'عام',
  'private': 'خاص',
  'official': 'رسمي',
  'unofficial': 'غير رسمي',
  'legal': 'قانوني',
  'illegal': 'غير قانوني',
  'valid': 'صالح',
  'invalid': 'غير صالح',
  'correct': 'صحيح',
  'incorrect': 'خطأ',
  'right': 'صحيح',
  'wrong': 'خطأ',
  'good': 'جيد',
  'bad': 'سيء',
  'better': 'أفضل',
  'worse': 'أسوأ',
  'best': 'الأفضل',
  'worst': 'الأسوأ',
  'more': 'أكثر',
  'less': 'أقل',
  'most': 'الأكثر',
  'least': 'الأقل',
  'many': 'كثير',
  'few': 'قليل',
  'all': 'كل',
  'none': 'لا شيء',
  'some': 'بعض',
  'other': 'آخر',
  'another': 'آخر',
  'same': 'نفس',
  'different': 'مختلف',
  'similar': 'مشابه',
  'equal': 'متساوي',
  'unequal': 'غير متساوي',
  'first': 'أول',
  'last': 'آخر',
  'next': 'التالي',
  'previous': 'السابق',
  'before': 'قبل',
  'after': 'بعد',
  'during': 'خلال',
  'while': 'بينما',
  'until': 'حتى',
  'since': 'منذ',
  'from': 'من',
  'to': 'إلى',
  'at': 'في',
  'in': 'في',
  'on': 'على',
  'under': 'تحت',
  'over': 'فوق',
  'above': 'فوق',
  'below': 'تحت',
  'inside': 'داخل',
  'outside': 'خارج',
  'here': 'هنا',
  'there': 'هناك',
  'everywhere': 'في كل مكان',
  'nowhere': 'في أي مكان',
  'somewhere': 'في مكان ما',
  'anywhere': 'في أي مكان',
  'up': 'أعلى',
  'down': 'أسفل',
  'left': 'يسار',
  'right': 'يمين',
  'forward': 'أمام',
  'backward': 'خلف',
  'north': 'شمال',
  'south': 'جنوب',
  'east': 'شرق',
  'west': 'غرب',
  'northeast': 'شمال شرق',
  'northwest': 'شمال غرب',
  'southeast': 'جنوب شرق',
  'southwest': 'جنوب غرب'
};

// Simple translation function
function translateText(text, language) {
  if (language === 'en') return text;
  
  const translations = language === 'nl' ? dutchTranslations : arabicTranslations;
  
  let translated = text;
  
  // Replace common phrases
  Object.keys(translations).forEach(english => {
    const regex = new RegExp(`\\b${english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    translated = translated.replace(regex, translations[english]);
  });
  
  return translated;
}

// Load and translate files
const enPath = path.join(__dirname, '../src/i18n/locales/en.json');
const nlPath = path.join(__dirname, '../src/i18n/locales/nl.json');
const arPath = path.join(__dirname, '../src/i18n/locales/ar.json');

console.log('📝 Loading English file...');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

console.log('📝 Creating Dutch translations...');
const nlData = JSON.parse(JSON.stringify(enData)); // Deep copy

console.log('📝 Creating Arabic translations...');
const arData = JSON.parse(JSON.stringify(enData)); // Deep copy

// Translate UI elements
function translateObject(obj, language) {
  if (typeof obj === 'string') {
    return translateText(obj, language);
  } else if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item, language));
  } else if (obj && typeof obj === 'object') {
    const translated = {};
    Object.keys(obj).forEach(key => {
      translated[key] = translateObject(obj[key], language);
    });
    return translated;
  }
  return obj;
}

// Translate questions
console.log('🔄 Translating questions to Dutch...');
if (nlData.questions) {
  Object.keys(nlData.questions).forEach(testKey => {
    const test = nlData.questions[testKey];
    Object.keys(test).forEach(qKey => {
      if (qKey.startsWith('q')) {
        const question = test[qKey];
        if (question.text) question.text = translateText(question.text, 'nl');
        if (question.explanation) question.explanation = translateText(question.explanation, 'nl');
        Object.keys(question).forEach(optKey => {
          if (optKey.startsWith('o') && question[optKey]) {
            question[optKey] = translateText(question[optKey], 'nl');
          }
        });
      }
    });
  });
}

console.log('🔄 Translating questions to Arabic...');
if (arData.questions) {
  Object.keys(arData.questions).forEach(testKey => {
    const test = arData.questions[testKey];
    Object.keys(test).forEach(qKey => {
      if (qKey.startsWith('q')) {
        const question = test[qKey];
        if (question.text) question.text = translateText(question.text, 'ar');
        if (question.explanation) question.explanation = translateText(question.explanation, 'ar');
        Object.keys(question).forEach(optKey => {
          if (optKey.startsWith('o') && question[optKey]) {
            question[optKey] = translateText(question[optKey], 'ar');
          }
        });
      }
    });
  });
}

// Save files
console.log('💾 Saving Dutch file...');
fs.writeFileSync(nlPath, JSON.stringify(nlData, null, 2));

console.log('💾 Saving Arabic file...');
fs.writeFileSync(arPath, JSON.stringify(arData, null, 2));

console.log('\n🎉 QUICK TRANSLATION COMPLETE!');
console.log('✅ Dutch questions translated');
console.log('✅ Arabic questions translated');
console.log('\n🚀 Ready to test!');
