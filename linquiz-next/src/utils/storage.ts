import { QuizSettings, QuizResult } from '@/types/quiz';

const SETTINGS_KEY = 'linquiz-settings';
const RESULTS_KEY = 'linquiz-results';

export function saveSettings(settings: QuizSettings): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }
}

export function loadSettings(): QuizSettings | null {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  }
  return null;
}

export function saveQuizResult(result: QuizResult): void {
  if (typeof window !== 'undefined') {
    try {
      const existingResults = loadQuizResults();
      const newResults = [result, ...existingResults].slice(0, 50); // Keep only last 50 results
      localStorage.setItem(RESULTS_KEY, JSON.stringify(newResults));
    } catch (error) {
      console.error('Failed to save quiz result:', error);
    }
  }
}

export function loadQuizResults(): QuizResult[] {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(RESULTS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to load quiz results:', error);
    }
  }
  return [];
}

export function clearQuizResults(): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(RESULTS_KEY);
    } catch (error) {
      console.error('Failed to clear quiz results:', error);
    }
  }
}

export function getQuizStats(): {
  totalQuizzes: number;
  averageScore: number;
  bestScore: number;
  recentActivity: QuizResult[];
} {
  const results = loadQuizResults();
  
  if (results.length === 0) {
    return {
      totalQuizzes: 0,
      averageScore: 0,
      bestScore: 0,
      recentActivity: []
    };
  }

  const totalQuizzes = results.length;
  const averageScore = results.reduce((sum, result) => sum + result.percentage, 0) / totalQuizzes;
  const bestScore = Math.max(...results.map(result => result.percentage));
  const recentActivity = results.slice(0, 10);

  return {
    totalQuizzes,
    averageScore,
    bestScore,
    recentActivity
  };
} 