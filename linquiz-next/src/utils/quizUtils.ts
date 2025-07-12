import { QuizSettings, QuizQuestion, QuizResult, Word, LanguageCode } from '@/types/quiz';
import { vocabularyData } from '@/data/multilingualData';

// Helper function to find corresponding word in target language
function findTranslation(sourceWord: Word, targetLanguage: LanguageCode): string | null {
  const targetWords = vocabularyData[targetLanguage] || [];
  
  // Find the word with the same translation key (English meaning)
  const targetWord = targetWords.find(word => word.translation === sourceWord.translation);
  
  return targetWord ? targetWord.word : null;
}

// Helper function to get wrong answers in target language
function getWrongAnswers(correctTranslation: string, targetLanguage: LanguageCode, count: number = 3): string[] {
  const targetWords = vocabularyData[targetLanguage] || [];
  const wrongAnswers: string[] = [];
  
  // Filter out the correct answer and get random wrong answers
  const availableWords = targetWords.filter(word => word.word !== correctTranslation);
  
  while (wrongAnswers.length < count && availableWords.length > wrongAnswers.length) {
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    if (!wrongAnswers.includes(randomWord.word)) {
      wrongAnswers.push(randomWord.word);
    }
  }
  
  return wrongAnswers;
}

export function generateQuiz(settings: QuizSettings): QuizQuestion[] {
  const sourceWords = vocabularyData[settings.sourceLanguage] || [];
  const targetWords = vocabularyData[settings.targetLanguage] || [];
  
  if (sourceWords.length === 0 || targetWords.length === 0) {
    throw new Error('Language data not available');
  }

  // Filter words by difficulty
  let filteredWords = sourceWords;
  if (settings.difficulty !== 'mixed') {
    filteredWords = sourceWords.filter(word => word.difficulty === settings.difficulty);
  }

  // Only include words that have translations in the target language
  const availableWords = filteredWords.filter(word => 
    findTranslation(word, settings.targetLanguage) !== null
  );

  if (availableWords.length === 0) {
    throw new Error('No matching words found for the selected language pair');
  }

  // Shuffle and select words
  const shuffledWords = [...availableWords].sort(() => Math.random() - 0.5);
  const selectedWords = shuffledWords.slice(0, Math.min(settings.questionCount, availableWords.length));

  // Generate questions
  const questions: QuizQuestion[] = [];
  
  for (let i = 0; i < selectedWords.length; i++) {
    const word = selectedWords[i];
    const questionType = settings.questionTypes[i % settings.questionTypes.length];
    
    const question = generateQuestion(word, questionType, settings);
    if (question) {
      questions.push(question);
    }
  }

  return questions;
}

function generateQuestion(
  word: Word, 
  type: 'multiple-choice' | 'translation' | 'listening',
  settings: QuizSettings
): QuizQuestion | null {
  const correctTranslation = findTranslation(word, settings.targetLanguage);
  
  if (!correctTranslation) {
    return null; // Skip if no translation found
  }
  
  // Generate wrong answers in target language
  const wrongAnswers = getWrongAnswers(correctTranslation, settings.targetLanguage, 3);
  
  // If we don't have enough wrong answers, add some generic ones
  if (wrongAnswers.length < 3) {
    const genericWrongAnswers = ['---', '???', '...'];
    for (const generic of genericWrongAnswers) {
      if (wrongAnswers.length >= 3) break;
      if (!wrongAnswers.includes(generic) && generic !== correctTranslation) {
        wrongAnswers.push(generic);
      }
    }
  }

  // Create options array
  const options = [correctTranslation, ...wrongAnswers.slice(0, 3)];
  
  // Shuffle options
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return {
    word,
    type,
    options: shuffledOptions,
    correctAnswer: correctTranslation
  };
}

export function calculateScore(
  questions: QuizQuestion[], 
  answers: string[], 
  settings: QuizSettings
): QuizResult {
  let correctAnswers = 0;
  
  for (let i = 0; i < Math.min(questions.length, answers.length); i++) {
    if (answers[i] === questions[i].correctAnswer) {
      correctAnswers++;
    }
  }

  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
  const timeSpent = totalQuestions * settings.timeLimit; // Approximate time spent

  return {
    score: correctAnswers,
    percentage,
    correctAnswers,
    totalQuestions,
    timeSpent,
    difficulty: settings.difficulty,
    sourceLanguage: settings.sourceLanguage,
    targetLanguage: settings.targetLanguage,
    timestamp: Date.now()
  };
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'hard':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
} 