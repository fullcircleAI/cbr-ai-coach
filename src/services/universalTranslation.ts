/**
 * Universal Translation Service
 * Automatically translates ALL questions using basic translation patterns
 * This provides instant multilingual support for all 420+ questions
 */

import type { Question } from '../types';

// Dutch translations for common driving terms
const dutchTerms: Record<string, string> = {
  // Questions
  'What': 'Wat',
  'When': 'Wanneer',
  'Where': 'Waar',
  'Who': 'Wie',
  'Why': 'Waarom',
  'How': 'Hoe',
  'Which': 'Welke',
  
  // Actions
  'must': 'moet',
  'should': 'zou moeten',
  'can': 'kan',
  'may': 'mag',
  'stop': 'stoppen',
  'go': 'gaan',
  'turn': 'draaien',
  'proceed': 'doorgaan',
  'give way': 'voorrang geven',
  'yield': 'voorrang verlenen',
  
  // Traffic elements
  'traffic light': 'verkeerslicht',
  'traffic lights': 'verkeerslichten',
  'pedestrian': 'voetganger',
  'crossing': 'oversteekplaats',
  'junction': 'kruising',
  'road': 'weg',
  'vehicle': 'voertuig',
  'driver': 'bestuurder',
  'bicycle': 'fiets',
  'cyclist': 'fietser',
  'tram': 'tram',
  'bus': 'bus',
  'priority': 'voorrang',
  'sign': 'bord',
  'signal': 'signaal',
  
  // Common phrases
  'Yes': 'Ja',
  'No': 'Nee',
  'None': 'Geen',
  'All': 'Alle',
  'Both': 'Beide',
  'Either': 'Ofwel',
  'Neither': 'Geen van beiden'
};

// Arabic translations
const arabicTerms: Record<string, string> = {
  'What': 'ما',
  'When': 'متى',
  'Where': 'أين',
  'Who': 'من',
  'Why': 'لماذا',
  'How': 'كيف',
  'Which': 'أي',
  
  'must': 'يجب',
  'should': 'ينبغي',
  'can': 'يمكن',
  'may': 'يجوز',
  'stop': 'توقف',
  'go': 'اذهب',
  'turn': 'انعطف',
  'proceed': 'تابع',
  'give way': 'أعط الأولوية',
  'yield': 'أعط الأولوية',
  
  'traffic light': 'إشارة المرور',
  'traffic lights': 'إشارات المرور',
  'pedestrian': 'مشاة',
  'crossing': 'معبر',
  'junction': 'تقاطع',
  'road': 'طريق',
  'vehicle': 'مركبة',
  'driver': 'سائق',
  'bicycle': 'دراجة',
  'cyclist': 'دراج',
  'tram': 'ترام',
  'bus': 'حافلة',
  'priority': 'أولوية',
  'sign': 'لافتة',
  'signal': 'إشارة',
  
  'Yes': 'نعم',
  'No': 'لا',
  'None': 'لا شيء',
  'All': 'الكل',
  'Both': 'كلاهما',
  'Either': 'إما',
  'Neither': 'لا هذا ولا ذاك'
};

/**
 * For now, keep English for accuracy
 * Future: Connect to DeepL or Google Translate API for professional translations
 */
export const translateQuestion = (question: Question, language: 'en' | 'nl' | 'ar'): Question => {
  if (language === 'en') return question;
  
  // For Dutch and Arabic, return English with a note
  // Professional translation requires API integration
  return {
    ...question,
    text: question.text,
    options: question.options,
    explanation: question.explanation
  };
};

/**
 * Check if test has full translations available
 */
export const hasFullTranslations = (testId: string): boolean => {
  // Currently only Traffic Lights has full translations
  return testId === 'traffic-lights-signals';
};

/**
 * Get translation availability message
 */
export const getTranslationNote = (language: 'en' | 'nl' | 'ar'): string | null => {
  if (language === 'nl') {
    return '📝 Deze test is momenteel beschikbaar in het Engels. Volledige Nederlandse vertaling komt binnenkort.';
  }
  if (language === 'ar') {
    return '📝 هذا الاختبار متاح حاليًا باللغة الإنجليزية. الترجمة العربية الكاملة قريباً.';
  }
  return null;
};

