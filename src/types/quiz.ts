export interface Translation {
  text: string;
  pronunciation: string;
}

export interface Word {
  id: string;
  type: string;
  difficulty?: string;
  translations: {
    zh: Translation;
    ko: Translation;
    en: Translation;
    ja: Translation;
    es: Translation;
    vi: Translation;
    fr: Translation;
    de: Translation;
    tr: Translation;
  };
  meanings: {
    en: string;
    zh: string;
    ko: string;
    ja: string;
    es: string;
    vi: string;
    fr: string;
    de: string;
    tr: string;
  };
}

export interface MultilingualData {
  greetings: Word[];
  family: Word[];
  colors: Word[];
  numbers: Word[];
  food: Word[];
  weather: Word[];
  travel: Word[];
  business: Word[];
  verbs: Word[];
  grammar: Word[];
  advanced: Word[];
}

export interface QuizQuestion {
  type: string;
  questionType: string;
  questionText: string;
  pronunciation: string;
  options?: string[];
  correctAnswer?: number;
  correctAnswerText: string;
  word: Word;
}

export interface QuizHistoryItem {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  word: Word;
}

export interface QuizResult {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  quizLanguage: string;
  answerLanguage: string;
  difficultyLevel: string;
  questionType: string;
  questions: QuizHistoryItem[];
}

export interface QuizSettings {
  quizLanguage: string;
  answerLanguage: string;
  difficultyLevel: string;
  questionCount: number;
  timeLimit: number;
  questionType: string;
  autoPlay: boolean;
}

export type LanguageCode = 'zh' | 'ko' | 'en' | 'ja' | 'es' | 'vi' | 'fr' | 'de' | 'tr';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type QuestionType = 'mixed' | 'multiple-choice' | 'fill-blank' | 'audio-only' | 'reverse'; 