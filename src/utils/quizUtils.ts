import { multilingualData } from '@/data/multilingualData';
import { Word, QuizQuestion, LanguageCode, QuestionType } from '@/types/quiz';

export const getAllWords = (): Word[] => {
  const allWords: Word[] = [];
  Object.values(multilingualData).forEach(category => {
    allWords.push(...category);
  });
  return allWords;
};

export const assignDifficultyLevels = (words: Word[]): Word[] => {
  return words.map(word => {
    if (word.difficulty) {
      return word; // Already has difficulty assigned
    }
    
    // Category-based difficulty assignment
    const categoryDifficulties: Record<string, string> = {
      'greetings': 'beginner',
      'family': 'beginner',
      'colors': 'beginner',
      'numbers': 'beginner',
      'food': 'beginner',
      'weather': 'beginner',
      'travel': 'intermediate',
      'business': 'intermediate',
      'verbs': 'intermediate',
      'grammar': 'intermediate',
      'advanced': 'advanced'
    };
    
    // Find which category this word belongs to
    let category = 'intermediate'; // default
    for (const [catName, catWords] of Object.entries(multilingualData)) {
      if (catWords.includes(word)) {
        category = catName;
        break;
      }
    }
    
    // Assign difficulty based on category
    const difficulty = categoryDifficulties[category] || 'intermediate';
    
    // Advanced difficulty for longer/complex words
    const text = word.translations.en?.text || '';
    if (text.length > 12 || text.includes(' ')) {
      return { ...word, difficulty: 'advanced' };
    }
    
    return { ...word, difficulty };
  });
};

export const generateQuestion = (
  word: Word, 
  quizLanguage: LanguageCode, 
  answerLanguage: LanguageCode, 
  questionType: QuestionType = 'multiple-choice'
): QuizQuestion => {
  const questionText = word.translations[quizLanguage].text;
  const pronunciation = word.translations[quizLanguage].pronunciation;
  const correctAnswer = word.translations[answerLanguage].text;
  
  // Get all words for generating wrong answers
  const allWords = getAllWords();
  const wrongAnswers = allWords
    .filter(w => w.id !== word.id && w.translations[answerLanguage])
    .map(w => w.translations[answerLanguage].text)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  // Create options array with correct answer
  const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  const correctIndex = options.indexOf(correctAnswer);
  
  return {
    type: word.type,
    questionType: questionType,
    questionText,
    pronunciation,
    options,
    correctAnswer: correctIndex,
    correctAnswerText: correctAnswer,
    word: word
  };
};

export const generateFillBlankQuestion = (
  word: Word, 
  quizLanguage: LanguageCode, 
  answerLanguage: LanguageCode
): QuizQuestion => {
  const questionText = word.translations[quizLanguage].text;
  const pronunciation = word.translations[quizLanguage].pronunciation;
  const correctAnswer = word.translations[answerLanguage].text;
  
  return {
    type: word.type,
    questionType: 'fill-blank',
    questionText,
    pronunciation,
    correctAnswerText: correctAnswer.toLowerCase(),
    word: word
  };
};

export const generateAudioOnlyQuestion = (
  word: Word, 
  quizLanguage: LanguageCode, 
  answerLanguage: LanguageCode
): QuizQuestion => {
  const questionText = word.translations[quizLanguage].text;
  const pronunciation = word.translations[quizLanguage].pronunciation;
  const correctAnswer = word.translations[answerLanguage].text;
  
  // Get all words for generating wrong answers
  const allWords = getAllWords();
  const wrongAnswers = allWords
    .filter(w => w.id !== word.id && w.translations[answerLanguage])
    .map(w => w.translations[answerLanguage].text)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  // Create options array with correct answer
  const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  const correctIndex = options.indexOf(correctAnswer);
  
  return {
    type: word.type,
    questionType: 'audio-only',
    questionText,
    pronunciation,
    options,
    correctAnswer: correctIndex,
    correctAnswerText: correctAnswer,
    word: word
  };
};

export const generateReverseQuestion = (
  word: Word, 
  quizLanguage: LanguageCode, 
  answerLanguage: LanguageCode
): QuizQuestion => {
  const questionText = word.translations[answerLanguage].text; // Show meaning
  const correctAnswer = word.translations[quizLanguage].text; // Answer is foreign word
  
  // Get all words for generating wrong answers
  const allWords = getAllWords();
  const wrongAnswers = allWords
    .filter(w => w.id !== word.id && w.translations[quizLanguage])
    .map(w => w.translations[quizLanguage].text)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  // Create options array with correct answer
  const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  const correctIndex = options.indexOf(correctAnswer);
  
  return {
    type: word.type,
    questionType: 'reverse',
    questionText,
    pronunciation: word.translations[quizLanguage].pronunciation,
    options,
    correctAnswer: correctIndex,
    correctAnswerText: correctAnswer,
    word: word
  };
};

export const getLanguageName = (code: LanguageCode): string => {
  const languageNames: Record<LanguageCode, string> = {
    'zh': 'Chinese',
    'ko': 'Korean',
    'en': 'English',
    'ja': 'Japanese',
    'es': 'Spanish',
    'vi': 'Vietnamese',
    'fr': 'French',
    'de': 'German',
    'tr': 'Turkish'
  };
  return languageNames[code] || 'Unknown';
};

export const getLanguageCode = (code: LanguageCode): string => {
  const languageCodes: Record<LanguageCode, string> = {
    'zh': 'zh-CN',
    'ko': 'ko-KR',
    'en': 'en-US',
    'ja': 'ja-JP',
    'es': 'es-ES',
    'vi': 'vi-VN',
    'fr': 'fr-FR',
    'de': 'de-DE',
    'tr': 'tr-TR'
  };
  return languageCodes[code] || 'en-US';
};

export const generateRandomQuiz = (
  quizLanguage: LanguageCode,
  answerLanguage: LanguageCode,
  difficultyLevel: string,
  questionCount: number,
  questionType: QuestionType
): QuizQuestion[] => {
  // Get all words from multilingual data and assign difficulty levels
  const allWordsWithDifficulty = assignDifficultyLevels(getAllWords());
  
  // Filter words that have translations in both selected languages
  let availableWords = allWordsWithDifficulty.filter(word => 
    word.translations[quizLanguage] && 
    word.translations[answerLanguage]
  );
  
  // Filter by difficulty level
  availableWords = availableWords.filter(word => word.difficulty === difficultyLevel);
  
  // If not enough words for selected difficulty, mix with easier levels
  if (availableWords.length < questionCount) {
    const difficultyHierarchy = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = difficultyHierarchy.indexOf(difficultyLevel);
    
    // Add words from easier levels if needed
    for (let i = 0; i < currentIndex && availableWords.length < questionCount; i++) {
      const easierWords = allWordsWithDifficulty.filter(word => 
        word.difficulty === difficultyHierarchy[i] &&
        word.translations[quizLanguage] && 
        word.translations[answerLanguage]
      );
      availableWords.push(...easierWords);
    }
  }
  
  // Shuffle and take selected number of words
  const shuffled = [...availableWords].sort(() => 0.5 - Math.random());
  const selectedWords = shuffled.slice(0, questionCount);
  
  // Generate questions from selected words based on question type
  return selectedWords.map(word => {
    if (questionType === 'mixed') {
      // Random question type for mixed mode
      const questionTypes: QuestionType[] = ['multiple-choice', 'fill-blank', 'audio-only', 'reverse'];
      const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      return generateQuestionByType(word, quizLanguage, answerLanguage, randomType);
    } else {
      return generateQuestionByType(word, quizLanguage, answerLanguage, questionType);
    }
  });
};

export const generateQuestionByType = (
  word: Word, 
  quizLanguage: LanguageCode, 
  answerLanguage: LanguageCode, 
  questionType: QuestionType
): QuizQuestion => {
  switch (questionType) {
    case 'fill-blank':
      return generateFillBlankQuestion(word, quizLanguage, answerLanguage);
    case 'audio-only':
      return generateAudioOnlyQuestion(word, quizLanguage, answerLanguage);
    case 'reverse':
      return generateReverseQuestion(word, quizLanguage, answerLanguage);
    case 'multiple-choice':
    default:
      return generateQuestion(word, quizLanguage, answerLanguage, questionType);
  }
}; 