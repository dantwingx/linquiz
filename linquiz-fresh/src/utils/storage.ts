import { QuizSettings, QuizResult, UserPreferences } from '@/types/quiz';

const STORAGE_KEYS = {
  QUIZ_SETTINGS: 'linquiz_settings',
  QUIZ_RESULTS: 'linquiz_results',
  USER_PREFERENCES: 'linquiz_preferences',
  AUTO_PLAY: 'linquiz_autoplay',
};

// Settings management
export const saveSettings = (settings: QuizSettings): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.QUIZ_SETTINGS, JSON.stringify(settings));
  }
};

export const loadSettings = (): QuizSettings | null => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_SETTINGS);
    return saved ? JSON.parse(saved) : null;
  }
  return null;
};

// Quiz results management
export const saveQuizResult = (result: QuizResult): void => {
  if (typeof window !== 'undefined') {
    const existing = loadQuizResults();
    const updated = [result, ...existing].slice(0, 100); // Keep last 100 results
    localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(updated));
  }
};

export const loadQuizResults = (): QuizResult[] => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

export const clearQuizResults = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.QUIZ_RESULTS);
  }
};

// User preferences management
export const saveUserPreferences = (preferences: UserPreferences): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  }
};

export const loadUserPreferences = (): UserPreferences | null => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return saved ? JSON.parse(saved) : null;
  }
  return null;
};

// Auto-play setting
export const saveAutoPlaySetting = (autoPlay: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.AUTO_PLAY, JSON.stringify(autoPlay));
  }
};

export const loadAutoPlaySetting = (): boolean => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEYS.AUTO_PLAY);
    return saved ? JSON.parse(saved) : true;
  }
  return true;
};

// Get wrong answers from all quiz results
export const getWrongAnswers = (): { questionIndex: number; userAnswer: string; correctAnswer: string; question: any; result: QuizResult }[] => {
  const results = loadQuizResults();
  const wrongAnswers: { questionIndex: number; userAnswer: string; correctAnswer: string; question: any; result: QuizResult }[] = [];

  results.forEach(result => {
    result.questions.forEach((question, index) => {
      const userAnswer = result.userAnswers[index];
      if (userAnswer !== question.correctAnswer) {
        wrongAnswers.push({
          questionIndex: index,
          userAnswer,
          correctAnswer: question.correctAnswer,
          question,
          result
        });
      }
    });
  });

  return wrongAnswers;
};

// Get unique wrong words (avoid duplicates)
export const getUniqueWrongWords = (): { word: string; count: number; questions: any[] }[] => {
  const wrongAnswers = getWrongAnswers();
  const wordMap = new Map<string, { count: number; questions: any[] }>();

  wrongAnswers.forEach(({ question }) => {
    const word = question.word.word;
    if (wordMap.has(word)) {
      const existing = wordMap.get(word)!;
      existing.count++;
      existing.questions.push(question);
    } else {
      wordMap.set(word, { count: 1, questions: [question] });
    }
  });

  return Array.from(wordMap.entries()).map(([word, data]) => ({
    word,
    count: data.count,
    questions: data.questions
  })).sort((a, b) => b.count - a.count); // Sort by frequency
};

// Statistics calculation
export const calculateStatistics = (results: QuizResult[]) => {
  if (results.length === 0) {
    return {
      totalQuizzes: 0,
      averageScore: 0,
      wordsLearned: 0,
      totalTimeSpent: 0,
      bestScore: 0,
      recentActivity: [],
      wrongAnswersCount: 0,
    };
  }

  const totalQuizzes = results.length;
  const averageScore = Math.round(
    results.reduce((sum, result) => sum + result.percentage, 0) / totalQuizzes
  );
  
  // Count unique words learned (answered correctly)
  const wordsLearned = new Set(
    results.flatMap(result => 
      result.questions
        .filter((_, index) => result.userAnswers[index] === result.questions[index].correctAnswer)
        .map(question => question.word.word)
    )
  ).size;

  const totalTimeSpent = results.reduce((sum, result) => sum + result.timeSpent, 0);
  const bestScore = Math.max(...results.map(result => result.percentage));
  const wrongAnswersCount = getWrongAnswers().length;

  // Recent activity (last 7 days)
  const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  const recentActivity = results.filter(result => result.timestamp > sevenDaysAgo);

  return {
    totalQuizzes,
    averageScore,
    wordsLearned,
    totalTimeSpent,
    bestScore,
    recentActivity,
    wrongAnswersCount,
  };
}; 