export type LanguageCode = 'en' | 'zh' | 'ko' | 'ja' | 'es' | 'vi' | 'fr' | 'de' | 'tr';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'mixed';

export type QuestionType = 'multiple-choice' | 'fill-blank' | 'listening' | 'translation' | 'mixed';

export type Screen = 'start' | 'quiz' | 'result' | 'history';

export interface Word {
  word: string;
  translation: string;
  pronunciation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizQuestion {
  id: string;
  word: Word;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: string;
  correctIndex?: number;
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
}

export interface QuizSettings {
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  difficulty: Difficulty;
  questionCount: number;
  questionType: QuestionType;
  timeLimit: number;
  autoPlay: boolean;
}

export interface QuizResult {
  id: string;
  score: number;
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  difficulty: Difficulty;
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  timestamp: number;
  questions: QuizQuestion[];
  userAnswers: string[];
  wrongAnswers?: { questionIndex: number; userAnswer: string; correctAnswer: string }[];
}

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export interface QuizHistory {
  results: QuizResult[];
  totalQuizzes: number;
  averageScore: number;
  wordsLearned: number;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  autoPlay: boolean;
  defaultSettings: QuizSettings;
} 