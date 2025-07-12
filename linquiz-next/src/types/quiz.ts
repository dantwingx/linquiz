export type LanguageCode = 'en' | 'zh' | 'ko' | 'ja' | 'es' | 'vi' | 'fr' | 'de' | 'tr';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'mixed';

export type QuestionType = 'multiple-choice' | 'translation' | 'listening';

export interface Translation {
  [key: string]: string;
}

export interface Word {
  word: string;
  translation: string;
  pronunciation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizQuestion {
  word: Word;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
}

export interface QuizSettings {
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  difficulty: Difficulty;
  questionCount: number;
  questionTypes: QuestionType[];
  timeLimit: number;
  autoPlay: boolean;
}

export interface QuizResult {
  score: number;
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  difficulty: string;
  sourceLanguage: LanguageCode;
  targetLanguage: LanguageCode;
  timestamp: number;
}

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
} 