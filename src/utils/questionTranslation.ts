import type { Language } from '../types_i18n';

// Translation utility for questions
// Since question data is in English only, we'll use the translation system
// to provide Dutch and Arabic translations dynamically

export interface TranslatedQuestion {
  text: string;
  options: { id: string; text: string }[];
  explanation: string;
}

// Question translation mapping
// This allows us to translate questions on-the-fly based on selected language
// For now, questions will display in English (original)
// Dutch and Arabic translations can be added here progressively

export const translateQuestion = (
  questionId: string,
  questionText: string,
  options: { id: string; text: string }[],
  explanation: string,
  language: Language
): TranslatedQuestion => {
  // For now, return original English text for all languages
  // TODO: Add Dutch and Arabic translations to question data
  
  if (language === 'en') {
    return {
      text: questionText,
      options: options,
      explanation: explanation
    };
  }

  // For Dutch and Arabic, return English text with a note
  // (Full translation of 500+ questions would require a separate translation project)
  return {
    text: questionText,
    options: options,
    explanation: explanation
  };
};

// Helper to indicate if questions are translated for a language
export const areQuestionsTranslated = (language: Language): boolean => {
  return language === 'en'; // Only English questions available
};

// Get language note for untranslated questions
export const getTranslationNote = (language: Language): string | null => {
  if (language === 'nl') {
    return 'Note: Questions are currently in English. Dutch translations coming soon.';
  }
  if (language === 'ar') {
    return 'ملاحظة: الأسئلة متوفرة حاليًا باللغة الإنجليزية. الترجمة العربية قريباً.';
  }
  return null;
};

