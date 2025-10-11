/**
 * Auto-translation helper for questions
 * This provides basic translations for all questions
 * Note: These are automated translations and may not be perfect
 * Professional review recommended for production use
 */

import type { Language } from '../../types_i18n';

// Common translations for question patterns
const commonTranslations = {
  // Question starters
  'What does': {
    nl: 'Wat betekent',
    ar: 'ماذا يعني'
  },
  'What is': {
    nl: 'Wat is',
    ar: 'ما هو'
  },
  'Who has': {
    nl: 'Wie heeft',
    ar: 'من لديه'
  },
  'When should': {
    nl: 'Wanneer moet',
    ar: 'متى يجب'
  },
  'You must': {
    nl: 'Je moet',
    ar: 'يجب عليك'
  },
  'You may': {
    nl: 'Je mag',
    ar: 'يمكنك'
  },
  
  // Traffic terms
  'traffic light': {
    nl: 'verkeerslicht',
    ar: 'إشارة المرور'
  },
  'traffic lights': {
    nl: 'verkeerslichten',
    ar: 'إشارات المرور'
  },
  'stop': {
    nl: 'stop',
    ar: 'توقف'
  },
  'give way': {
    nl: 'voorrang verlenen',
    ar: 'أعط الأولوية'
  },
  'priority': {
    nl: 'voorrang',
    ar: 'الأولوية'
  },
  'pedestrian': {
    nl: 'voetganger',
    ar: 'مشاة'
  },
  'crossing': {
    nl: 'oversteekplaats',
    ar: 'معبر'
  },
  'junction': {
    nl: 'kruising',
    ar: 'تقاطع'
  },
  'road': {
    nl: 'weg',
    ar: 'طريق'
  },
  'vehicle': {
    nl: 'voertuig',
    ar: 'مركبة'
  },
  'driver': {
    nl: 'bestuurder',
    ar: 'سائق'
  }
};

// Basic translation function (fallback for untranslated questions)
export const autoTranslate = (text: string, language: Language): string => {
  if (language === 'en') return text;
  
  // For now, return original English text with a note
  // Full auto-translation would require an AI service
  return text; // Keep English for accuracy
};

// Get translation note
export const getTranslationNote = (language: Language): string | null => {
  if (language === 'nl') {
    return '📝 Deze test is beschikbaar in het Engels. Nederlandse vertaling komt binnenkort.';
  }
  if (language === 'ar') {
    return '📝 هذا الاختبار متاح باللغة الإنجليزية. الترجمة العربية قريباً.';
  }
  return null;
};

// Check if full translations are available
export const hasFullTranslations = (testId: string, language: Language): boolean => {
  // List of tests with full translations
  const fullyTranslated = [
    'traffic-lights-signals' // Only this one so far
  ];
  
  return fullyTranslated.includes(testId) && language !== 'en';
};

