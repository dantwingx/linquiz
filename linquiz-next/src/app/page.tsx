'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { StartScreen } from '@/components/StartScreen';
import { HistoryScreen } from '@/components/HistoryScreen';
import { QuizSettings, QuizQuestion, QuizResult, LanguageCode } from '@/types/quiz';
import { generateQuiz, calculateScore } from '@/utils/quizUtils';
import { saveQuizResult, loadSettings, saveSettings } from '@/utils/storage';
import { languages } from '@/data/multilingualData';

// Helper function to get language name
const getLanguageName = (code: LanguageCode): string => {
  const lang = languages.find(l => l.code === code);
  return lang ? lang.name : code;
};

// Helper function to get question instructions based on type and languages
const getQuestionInstructions = (type: string, sourceLanguage: LanguageCode, targetLanguage: LanguageCode): string => {
  const sourceLang = getLanguageName(sourceLanguage);
  const targetLang = getLanguageName(targetLanguage);
  
  switch (type) {
    case 'multiple-choice':
      return `Choose the correct ${targetLang} translation`;
    case 'translation':
      return `Translate from ${sourceLang} to ${targetLang}`;
    case 'listening':
      return `Listen and choose the correct ${targetLang} translation`;
    default:
      return `Choose the correct ${targetLang} translation`;
  }
};

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'start' | 'quiz' | 'result' | 'history'>('start');
  const [settings, setSettings] = useState<QuizSettings>({
    sourceLanguage: 'en',
    targetLanguage: 'zh',
    difficulty: 'mixed',
    questionCount: 10,
    questionTypes: ['multiple-choice', 'translation', 'listening'],
    timeLimit: 30,
    autoPlay: true
  });
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load settings on component mount
  useEffect(() => {
    const savedSettings = loadSettings();
    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (currentScreen === 'quiz' && timeLeft > 0 && !isPaused && !showFeedback) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (currentScreen === 'quiz' && timeLeft === 0 && !showFeedback) {
      handleAnswer(''); // Time's up, no answer
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentScreen, timeLeft, isPaused, showFeedback]);

  // Text-to-speech function
  const speak = (text: string, lang: LanguageCode) => {
    if (typeof window === 'undefined') return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'zh' ? 'zh-CN' : lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang;
    utterance.rate = 0.8;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
  };

  // Language change during quiz
  const handleLanguageChange = (newSettings: Partial<QuizSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    saveSettings(updatedSettings);
    setShowLanguageSelector(false);
    
    // Regenerate quiz with new language settings
    try {
      const newQuestions = generateQuiz(updatedSettings);
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setTimeLeft(updatedSettings.timeLimit);
      setShowFeedback(false);
      setSelectedAnswer('');
      setIsPaused(false);
      
      // Auto-play first question if enabled
      if (newQuestions[0] && updatedSettings.autoPlay) {
        setTimeout(() => {
          speak(newQuestions[0].word.word, updatedSettings.sourceLanguage);
        }, 1000);
      }
    } catch (error) {
      console.error('Error regenerating quiz:', error);
      alert('Error regenerating quiz. Please try different language settings.');
    }
  };

  const startQuiz = async (newSettings: QuizSettings) => {
    setIsLoading(true);
    setSettings(newSettings);
    saveSettings(newSettings);
    
    try {
      const generatedQuestions = generateQuiz(newSettings);
      setQuestions(generatedQuestions);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setTimeLeft(newSettings.timeLimit);
      setShowFeedback(false);
      setSelectedAnswer('');
      setCurrentScreen('quiz');
      
      // Auto-play first question if enabled
      if (generatedQuestions[0] && newSettings.autoPlay) {
        setTimeout(() => {
          speak(generatedQuestions[0].word.word, newSettings.sourceLanguage);
        }, 1000);
      }
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('Error generating quiz. Please try different language settings.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    if (showFeedback) {
      // If feedback is showing and user clicks the correct answer again, move to next question immediately
      if (isCorrect && answer === selectedAnswer) {
        handleNextQuestion();
        return;
      }
      return; // Prevent other answers during feedback
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    const correct = answer === currentQuestion.correctAnswer;
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    setIsPaused(true);
    
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    // For correct answers, allow immediate progression by clicking again
    // For incorrect answers, show feedback for longer time
    if (correct) {
      // Show feedback briefly, but allow immediate progression
      setTimeout(() => {
        if (showFeedback) { // Only auto-progress if user hasn't clicked again
          handleNextQuestion();
        }
      }, 1500);
    } else {
      // Show feedback longer for incorrect answers
      setTimeout(() => {
        handleNextQuestion();
      }, 4000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setTimeLeft(settings.timeLimit);
      setShowFeedback(false);
      setSelectedAnswer('');
      setIsPaused(false);
      
      // Auto-play next question if enabled
      if (questions[nextIndex] && settings.autoPlay) {
        setTimeout(() => {
          speak(questions[nextIndex].word.word, settings.sourceLanguage);
        }, 500);
      }
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const result = calculateScore(questions, answers, settings);
    setQuizResult(result);
    saveQuizResult(result);
    setCurrentScreen('result');
  };

  const resetQuiz = () => {
    setCurrentScreen('start');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizResult(null);
    setShowFeedback(false);
    setSelectedAnswer('');
    setIsPaused(false);
    setShowLanguageSelector(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const showHistory = () => {
    setCurrentScreen('history');
  };

  const toggleAutoPlay = () => {
    const newSettings = { ...settings, autoPlay: !settings.autoPlay };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen gradient-bg">
      <Header 
        autoPlay={settings.autoPlay} 
        onToggleAutoPlay={toggleAutoPlay}
        onReset={currentScreen !== 'start' ? resetQuiz : undefined}
        onShowHistory={currentScreen === 'start' ? showHistory : undefined}
      />
      
      <main className="max-w-md mx-auto px-4 py-6">
        {currentScreen === 'start' && (
          <StartScreen 
            settings={settings} 
            onStartQuiz={startQuiz} 
            isLoading={isLoading}
          />
        )}

        {currentScreen === 'history' && (
          <HistoryScreen 
            onBackToStart={resetQuiz}
          />
        )}

        {currentScreen === 'quiz' && currentQuestion && (
          <div className="space-y-6 animate-fadeIn">
            {/* Progress Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-card border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-primary">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-semibold ${timeLeft <= 10 ? 'text-secondary-coral-500' : 'text-gray-700 dark:text-gray-300'}`}>
                    {timeLeft}s
                  </span>
                  <div className={`w-3 h-3 rounded-full ${timeLeft <= 10 ? 'bg-secondary-coral-500 animate-pulse' : 'bg-accent-teal-500'}`}></div>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Language Selector Button */}
            <div className="text-center">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:text-secondary-pink-500 dark:hover:text-secondary-pink-400 transition-all duration-300 btn-hover btn-press shadow-sm font-primary"
              >
                <span className="mr-2">🌐</span>
                <span className="text-sm font-medium">
                  {getLanguageName(settings.sourceLanguage)} → {getLanguageName(settings.targetLanguage)}
                </span>
              </button>
            </div>

            {/* Language Selector */}
            {showLanguageSelector && (
              <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 animate-slideIn">
                <h3 className="text-lg font-semibold text-gray-800 font-secondary mb-4 flex items-center">
                  <span className="mr-2">🌍</span>
                  Change Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
                      From
                    </label>
                    <select
                      value={settings.sourceLanguage}
                      onChange={(e) => handleLanguageChange({ sourceLanguage: e.target.value as LanguageCode })}
                      className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-primary focus:ring-2 focus:ring-secondary-pink-500 focus:border-transparent transition-all duration-300"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
                      To
                    </label>
                    <select
                      value={settings.targetLanguage}
                      onChange={(e) => handleLanguageChange({ targetLanguage: e.target.value as LanguageCode })}
                      className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-primary focus:ring-2 focus:ring-secondary-pink-500 focus:border-transparent transition-all duration-300"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800 font-secondary mb-4">
                  {getQuestionInstructions(currentQuestion.type, settings.sourceLanguage, settings.targetLanguage)}
                </h2>
                
                {currentQuestion.type !== 'listening' && (
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 mb-3 font-secondary">
                      {currentQuestion.word.word}
                    </div>
                    {/* Pronunciation display */}
                    {currentQuestion.word.pronunciation && (
                      <div className="text-sm text-gray-600 mb-3 font-primary">
                        [{currentQuestion.word.pronunciation}]
                      </div>
                    )}
                    {/* Audio button for question */}
                    <button
                      onClick={() => speak(currentQuestion.word.word, settings.sourceLanguage)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 hover:from-secondary-pink-600 hover:to-primary-purple-700 text-white rounded-full transition-all duration-300 btn-hover btn-press shadow-md font-primary"
                    >
                      <span className="mr-2">🔊</span>
                      <span className="text-sm font-medium">Play</span>
                    </button>
                  </div>
                )}
                
                {currentQuestion.type === 'listening' && (
                  <div className="mb-6">
                    <button
                      onClick={() => speak(currentQuestion.word.word, settings.sourceLanguage)}
                      className="bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 hover:from-secondary-pink-600 hover:to-primary-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 btn-hover btn-press shadow-lg font-secondary"
                    >
                      <span className="mr-3 text-xl">🔊</span>
                      Play Audio
                    </button>
                    {currentQuestion.word.pronunciation && (
                      <div className="text-sm text-gray-600 mt-3 font-primary">
                        [{currentQuestion.word.pronunciation}]
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option: string, index: number) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.correctAnswer;
                  
                  let buttonClass = "w-full p-4 text-left rounded-2xl transition-all duration-300 border-2 font-primary ";
                  
                  if (showFeedback) {
                    if (isSelected && isCorrectAnswer) {
                      buttonClass += "bg-gradient-to-r from-green-50 to-green-100 border-green-400 text-green-800 cursor-pointer shadow-md";
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonClass += "bg-gradient-to-r from-red-50 to-red-100 border-red-400 text-red-800";
                    } else if (!isSelected && isCorrectAnswer) {
                      buttonClass += "bg-gradient-to-r from-green-50 to-green-100 border-green-300 text-green-700";
                    } else {
                      buttonClass += "bg-gray-50 border-gray-200 text-gray-700";
                    }
                  } else {
                    buttonClass += "bg-white hover:bg-gradient-to-r hover:from-secondary-pink-50 hover:to-primary-purple-50 border-gray-200 hover:border-secondary-pink-300 text-gray-800 btn-hover";
                  }
                  
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <button
                        onClick={() => handleAnswer(option)}
                        className={buttonClass}
                        title={showFeedback && isSelected && isCorrectAnswer ? "Click again to continue" : ""}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mr-3">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </span>
                          {showFeedback && isSelected && (
                            <span className="text-xl">
                              {isCorrectAnswer ? '✅' : '❌'}
                            </span>
                          )}
                          {showFeedback && !isSelected && isCorrectAnswer && (
                            <span className="text-xl">✅</span>
                          )}
                        </div>
                      </button>
                      {/* Audio button for each option */}
                      <button
                        onClick={() => speak(option, settings.targetLanguage)}
                        className="w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-secondary-pink-500 transition-all duration-300 btn-hover btn-press shadow-sm"
                        title="Play pronunciation"
                      >
                        <span className="text-lg">🔊</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Feedback message */}
              {showFeedback && (
                <div className="mt-6 p-4 rounded-2xl text-center animate-fadeIn">
                  {isCorrect ? (
                    <div className="text-green-600">
                      <div className="text-3xl mb-2">🎉</div>
                      <div className="font-bold text-lg font-secondary mb-2">Correct!</div>
                      <div className="text-sm text-gray-600 font-primary">
                        Click the correct answer again to continue immediately
                      </div>
                    </div>
                  ) : (
                    <div className="text-red-600">
                      <div className="text-3xl mb-2">😞</div>
                      <div className="font-bold text-lg font-secondary mb-2">Incorrect!</div>
                      <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border border-red-200">
                        <div className="text-sm font-medium mb-3 text-red-800">
                          The correct answer was: <strong>{currentQuestion.correctAnswer}</strong>
                        </div>
                        
                        {/* Show detailed information about the correct answer */}
                        <div className="text-left space-y-2">
                          <div className="text-sm text-gray-700 font-primary">
                            <strong>Question:</strong> {currentQuestion.word.word}
                          </div>
                          {currentQuestion.word.pronunciation && (
                            <div className="text-sm text-gray-700 font-primary">
                              <strong>Pronunciation:</strong> [{currentQuestion.word.pronunciation}]
                            </div>
                          )}
                          <div className="text-sm text-gray-700 font-primary">
                            <strong>Correct Translation:</strong> {currentQuestion.correctAnswer}
                          </div>
                          
                          {/* Audio buttons for detailed review */}
                          <div className="flex gap-2 mt-3 justify-center">
                            <button
                              onClick={() => speak(currentQuestion.word.word, settings.sourceLanguage)}
                              className="px-3 py-2 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-all duration-300 btn-hover font-primary"
                            >
                              🔊 Play Question
                            </button>
                            <button
                              onClick={() => speak(currentQuestion.correctAnswer, settings.targetLanguage)}
                              className="px-3 py-2 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded-full transition-all duration-300 btn-hover font-primary"
                            >
                              🔊 Play Answer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {currentScreen === 'result' && quizResult && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 text-center card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-pink-500 to-primary-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 font-secondary mb-6">
                Quiz Complete!
              </h2>
              
              {/* Language pair display */}
              <div className="mb-6">
                <div className="text-lg text-gray-600 font-primary">
                  {getLanguageName(settings.sourceLanguage)} → {getLanguageName(settings.targetLanguage)}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 mb-3 font-secondary">
                  {Math.round(quizResult.percentage)}%
                </div>
                <div className="text-lg text-gray-600 font-primary">
                  {quizResult.correctAnswers} out of {quizResult.totalQuestions} correct
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-r from-accent-teal-50 to-accent-teal-100 p-4 rounded-2xl border border-accent-teal-200">
                  <div className="text-sm text-accent-teal-700 font-primary">Time Taken</div>
                  <div className="text-xl font-bold text-accent-teal-800 font-secondary">
                    {Math.floor(quizResult.timeSpent / 60)}:{(quizResult.timeSpent % 60).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-accent-yellow-50 to-accent-yellow-100 p-4 rounded-2xl border border-accent-yellow-200">
                  <div className="text-sm text-accent-yellow-700 font-primary">Difficulty</div>
                  <div className="text-xl font-bold text-accent-yellow-800 font-secondary capitalize">
                    {quizResult.difficulty}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={resetQuiz}
                  className="w-full bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 hover:from-secondary-pink-600 hover:to-primary-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 btn-hover btn-press shadow-lg font-secondary"
                >
                  <span className="mr-2">🏠</span>
                  Take Another Quiz
                </button>
                <button
                  onClick={() => startQuiz(settings)}
                  className="w-full bg-white hover:bg-gray-50 border-2 border-secondary-pink-500 text-secondary-pink-600 hover:text-secondary-pink-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 btn-hover btn-press shadow-md font-secondary"
                >
                  <span className="mr-2">🔄</span>
                  Retry Same Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
