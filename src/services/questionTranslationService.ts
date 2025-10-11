import type { Language } from '../types_i18n';
import type { Question } from '../types';
import type { MultilingualQuestion } from '../types/multilingualQuestion';
import { trafficLightsSignalsMultilingual } from '../question_data/translations/trafficLightsSignalsTranslations';

// Map of test IDs to their multilingual questions
const multilingualQuestions: Record<string, MultilingualQuestion[]> = {
  'traffic-lights-signals': trafficLightsSignalsMultilingual,
  // More will be added as we translate them
};

// Convert multilingual question to regular question for a specific language
export const translateQuestion = (
  question: Question | MultilingualQuestion,
  language: Language
): Question => {
  // Check if it's already a multilingual question
  if ('text' in question && typeof question.text === 'object') {
    const mq = question as MultilingualQuestion;
    return {
      id: mq.id,
      text: mq.text[language] || mq.text.en,
      options: mq.options.map(opt => ({
        id: opt.id,
        text: opt.text[language] || opt.text.en
      })),
      correctAnswerId: mq.correctAnswerId,
      explanation: mq.explanation[language] || mq.explanation.en,
      subject: mq.subject,
      imageUrl: mq.imageUrl,
      imageHint: mq.imageHint
    };
  }

  // It's a regular question, return as-is (English only)
  return question as Question;
};

// Get translated questions for a test
export const getTranslatedQuestions = (
  testId: string,
  questions: Question[],
  language: Language
): Question[] => {
  // Check if we have multilingual versions for this test
  const multilingualVersions = multilingualQuestions[testId];
  
  if (multilingualVersions && language !== 'en') {
    // Use multilingual versions
    return multilingualVersions.map(q => translateQuestion(q, language));
  }

  // Return original questions (English)
  return questions;
};

// Check if a test has translations available
export const hasTranslations = (testId: string): boolean => {
  return testId in multilingualQuestions;
};

// Get list of tests with translations
export const getTranslatedTestIds = (): string[] => {
  return Object.keys(multilingualQuestions);
};

