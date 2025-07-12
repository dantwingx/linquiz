import { QuizSettings, QuizQuestion, Word, LanguageCode, QuestionType } from '@/types/quiz';
import { vocabulary } from '@/data/vocabulary';

// Generate a unique ID for each question
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Shuffle array utility
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get words filtered by difficulty
const getFilteredWords = (
  sourceLanguage: LanguageCode,
  difficulty: string
): Word[] => {
  const words = vocabulary[sourceLanguage] || [];
  
  if (difficulty === 'mixed') {
    return words;
  }
  
  return words.filter(word => word.difficulty === difficulty);
};

// Find translation for a word in target language
const findTranslation = (
  word: Word,
  sourceLanguage: LanguageCode,
  targetLanguage: LanguageCode
): string | null => {
  const targetWords = vocabulary[targetLanguage] || [];
  const targetWord = targetWords.find((w: Word) => w.translation === word.translation);
  return targetWord ? targetWord.word : null;
};

// Generate multiple choice options
const generateMultipleChoiceOptions = (
  correctAnswer: string,
  allWords: Word[],
  count: number = 4
): string[] => {
  const options = [correctAnswer];
  const shuffledWords = shuffleArray(allWords);
  
  for (const word of shuffledWords) {
    if (word.word !== correctAnswer && options.length < count) {
      options.push(word.word);
    }
  }
  
  // Fill with random words if not enough options
  while (options.length < count) {
    const randomWord = shuffledWords[Math.floor(Math.random() * shuffledWords.length)];
    if (!options.includes(randomWord.word)) {
      options.push(randomWord.word);
    }
  }
  
  return shuffleArray(options);
};

// Generate a single question
const generateQuestion = (
  word: Word,
  type: QuestionType,
  settings: QuizSettings
): QuizQuestion | null => {
  const { sourceLanguage, targetLanguage } = settings;
  const targetWords = vocabulary[targetLanguage] || [];
  
  // Find the translation
  const translation = findTranslation(word, sourceLanguage, targetLanguage);
  if (!translation) return null;
  
  const questionId = generateId();
  
  switch (type) {
    case 'multiple-choice': {
      const options = generateMultipleChoiceOptions(translation, targetWords);
      const correctIndex = options.indexOf(translation);
      
      return {
        id: questionId,
        word,
        type,
        question: `What is "${word.word}" in ${getLanguageName(targetLanguage)}?`,
        options,
        correctAnswer: translation,
        correctIndex,
        sourceLanguage,
        targetLanguage,
      };
    }
    
    case 'translation': {
      return {
        id: questionId,
        word,
        type,
        question: `Translate "${word.word}" to ${getLanguageName(targetLanguage)}`,
        options: [],
        correctAnswer: translation,
        sourceLanguage,
        targetLanguage,
      };
    }
    
    case 'listening': {
      const options = generateMultipleChoiceOptions(translation, targetWords);
      const correctIndex = options.indexOf(translation);
      
      return {
        id: questionId,
        word,
        type,
        question: `Listen and choose the correct translation`,
        options,
        correctAnswer: translation,
        correctIndex,
        sourceLanguage,
        targetLanguage,
      };
    }
    
    case 'fill-blank': {
      const blankedWord = translation.replace(/./g, '_');
      
      return {
        id: questionId,
        word,
        type,
        question: `Fill in the blank: "${word.word}" means "${blankedWord}"`,
        options: [],
        correctAnswer: translation,
        sourceLanguage,
        targetLanguage,
      };
    }
    
    default:
      return null;
  }
};

// Get language name helper
const getLanguageName = (code: LanguageCode): string => {
  const languageNames: Record<LanguageCode, string> = {
    en: 'English',
    zh: 'Chinese',
    ko: 'Korean',
    ja: 'Japanese',
    es: 'Spanish',
    vi: 'Vietnamese',
    fr: 'French',
    de: 'German',
    tr: 'Turkish',
  };
  return languageNames[code] || code;
};

// Main quiz generation function
export const generateQuiz = (settings: QuizSettings): QuizQuestion[] => {
  const { sourceLanguage, targetLanguage, difficulty, questionCount, questionType } = settings;
  
  // Get filtered words
  const filteredWords = getFilteredWords(sourceLanguage, difficulty);
  
  if (filteredWords.length === 0) {
    throw new Error('No words available for the selected difficulty');
  }
  
  // Check if target language has vocabulary
  const targetWords = vocabulary[targetLanguage];
  if (!targetWords || targetWords.length === 0) {
    throw new Error(`No vocabulary available for target language: ${targetLanguage}`);
  }
  
  // Shuffle and select words
  const shuffledWords = shuffleArray(filteredWords);
  const selectedWords = shuffledWords.slice(0, Math.min(questionCount, shuffledWords.length));
  
  // Determine question types
  let questionTypes: QuestionType[] = [];
  if (questionType === 'mixed') {
    questionTypes = ['multiple-choice', 'translation', 'listening', 'fill-blank'];
  } else {
    questionTypes = [questionType];
  }
  
  // Generate questions
  const questions: QuizQuestion[] = [];
  
  for (let i = 0; i < selectedWords.length; i++) {
    const word = selectedWords[i];
    const type = questionTypes[i % questionTypes.length];
    
    const question = generateQuestion(word, type, settings);
    if (question) {
      questions.push(question);
    }
  }
  
  return questions;
};

// Calculate quiz score
export const calculateScore = (
  questions: QuizQuestion[],
  userAnswers: string[],
  timeSpent: number
): {
  score: number;
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
} => {
  const totalQuestions = questions.length;
  const correctAnswers = questions.reduce((count, question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer;
    return count + (isCorrect ? 1 : 0);
  }, 0);
  
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  return {
    score: correctAnswers,
    percentage,
    correctAnswers,
    totalQuestions,
    timeSpent,
  };
};

// Speech functions moved to @/utils/speech.ts for better quality options 