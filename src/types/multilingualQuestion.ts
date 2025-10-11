import type { Language } from '../types_i18n';

// Multilingual Question Structure
export interface MultilingualQuestion {
  id: string;
  text: {
    en: string;
    nl: string;
    ar: string;
  };
  options: Array<{
    id: string;
    text: {
      en: string;
      nl: string;
      ar: string;
    };
  }>;
  correctAnswerId: string;
  explanation: {
    en: string;
    nl: string;
    ar: string;
  };
  subject: string;
  imageUrl?: string;
  imageHint?: string;
}

// Helper to get question in specific language
export const getQuestionInLanguage = (
  question: MultilingualQuestion,
  language: Language
) => {
  return {
    id: question.id,
    text: question.text[language],
    options: question.options.map(opt => ({
      id: opt.id,
      text: opt.text[language]
    })),
    correctAnswerId: question.correctAnswerId,
    explanation: question.explanation[language],
    subject: question.subject,
    imageUrl: question.imageUrl,
    imageHint: question.imageHint
  };
};

