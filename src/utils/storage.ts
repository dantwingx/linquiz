import { QuizResult, QuizSettings } from '@/types/quiz';

const QUIZ_HISTORY_KEY = 'linquiz_history';
const QUIZ_SETTINGS_KEY = 'linquiz_settings';
const AUTO_PLAY_KEY = 'linquiz_autoplay';

export const saveQuizHistory = (history: QuizResult[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
  }
};

export const loadQuizHistory = (): QuizResult[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(QUIZ_HISTORY_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing quiz history:', error);
        return [];
      }
    }
  }
  return [];
};

export const saveQuizSettings = (settings: QuizSettings): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(settings));
  }
};

export const loadQuizSettings = (): QuizSettings => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(QUIZ_SETTINGS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing quiz settings:', error);
      }
    }
  }
  
  // Default settings
  return {
    quizLanguage: 'zh',
    answerLanguage: 'en',
    difficultyLevel: 'beginner',
    questionCount: 10,
    timeLimit: 0,
    questionType: 'mixed',
    autoPlay: false
  };
};

export const saveAutoPlaySetting = (autoPlay: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTO_PLAY_KEY, JSON.stringify(autoPlay));
  }
};

export const loadAutoPlaySetting = (): boolean => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(AUTO_PLAY_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing auto play setting:', error);
      }
    }
  }
  return false;
};

export const clearQuizHistory = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(QUIZ_HISTORY_KEY);
  }
}; 