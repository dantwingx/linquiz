'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { StartScreen } from '@/components/StartScreen';
import { HistoryScreen } from '@/components/HistoryScreen';
import { SpeechSettings } from '@/components/SpeechSettings';
import { QuizSettings, QuizQuestion, QuizResult, Screen, LanguageCode } from '@/types/quiz';
import { generateQuiz, calculateScore } from '@/utils/quizGenerator';
import { speakText } from '@/utils/speech';
import { saveQuizResult, loadSettings, saveSettings, loadAutoPlaySetting, saveAutoPlaySetting } from '@/utils/storage';
import { languages } from '@/data/vocabulary';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [settings, setSettings] = useState<QuizSettings>({
    sourceLanguage: 'en',
    targetLanguage: 'zh',
    difficulty: 'mixed',
    questionCount: 100,
    questionType: 'mixed',
    timeLimit: 30,
    autoPlay: true
  });
  const [autoPlay, setAutoPlay] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [userInput, setUserInput] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load settings on component mount
  useEffect(() => {
    const savedSettings = loadSettings();
    const savedAutoPlay = loadAutoPlaySetting();
    
    if (savedSettings) {
      setSettings(savedSettings);
    }
    setAutoPlay(savedAutoPlay);
  }, []);

  // Timer effect
  useEffect(() => {
    if (currentScreen === 'quiz' && timeLeft > 0 && !isPaused && !showFeedback && settings.timeLimit > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (currentScreen === 'quiz' && timeLeft === 0 && !showFeedback && settings.timeLimit > 0) {
      // Time's up, no answer - handle timeout
      const newAnswers = [...userAnswers, ''];
      setUserAnswers(newAnswers);
      setShowFeedback(true);
      setIsPaused(true);
      setIsCorrect(false);
      setSelectedAnswer('');
      
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          const nextIndex = currentQuestionIndex + 1;
          setCurrentQuestionIndex(nextIndex);
          setTimeLeft(settings.timeLimit);
          setShowFeedback(false);
          setSelectedAnswer('');
          setUserInput('');
          setIsPaused(false);
        } else {
          // Finish quiz
          const timeSpent = Math.floor((Date.now() - startTime) / 1000);
          const result = calculateScore(questions, newAnswers, timeSpent);
          
          const quizResult = {
            id: Date.now().toString(),
            score: result.score,
            percentage: result.percentage,
            correctAnswers: result.correctAnswers,
            totalQuestions: result.totalQuestions,
            timeSpent: result.timeSpent,
            difficulty: settings.difficulty,
            sourceLanguage: settings.sourceLanguage,
            targetLanguage: settings.targetLanguage,
            timestamp: Date.now(),
            questions: questions,
            userAnswers: newAnswers,
          };
          
          setQuizResult(quizResult);
          saveQuizResult(quizResult);
          setCurrentScreen('result');
        }
      }, 2000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentScreen, timeLeft, isPaused, showFeedback, settings.timeLimit, userAnswers, currentQuestionIndex, questions, settings, startTime]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const getLanguageName = (code: LanguageCode): string => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.name : code;
  };

  const startQuiz = async (newSettings: QuizSettings) => {
    setIsLoading(true);
    setSettings(newSettings);
    saveSettings(newSettings);
    
    try {
      const generatedQuestions = generateQuiz(newSettings);
      setQuestions(generatedQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setTimeLeft(newSettings.timeLimit);
      setShowFeedback(false);
      setSelectedAnswer('');
      setUserInput('');
      setStartTime(Date.now());
      setCurrentScreen('quiz');
      
      // Auto-play first question if enabled
      if (generatedQuestions[0] && autoPlay) {
        setTimeout(() => {
          speakText(generatedQuestions[0].word.word, newSettings.sourceLanguage);
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
    
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);
    
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
      setUserInput('');
      setIsPaused(false);
      
      // Auto-play next question if enabled
      if (questions[nextIndex] && autoPlay) {
        setTimeout(() => {
          speakText(questions[nextIndex].word.word, settings.sourceLanguage);
        }, 500);
      }
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const result = calculateScore(questions, userAnswers, timeSpent);
    
    const quizResult: QuizResult = {
      id: Date.now().toString(),
      score: result.score,
      percentage: result.percentage,
      correctAnswers: result.correctAnswers,
      totalQuestions: result.totalQuestions,
      timeSpent: result.timeSpent,
      difficulty: settings.difficulty,
      sourceLanguage: settings.sourceLanguage,
      targetLanguage: settings.targetLanguage,
      timestamp: Date.now(),
      questions: questions,
      userAnswers: userAnswers,
    };
    
    setQuizResult(quizResult);
    saveQuizResult(quizResult);
    setCurrentScreen('result');
  };

  const resetQuiz = () => {
    setCurrentScreen('start');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizResult(null);
    setShowFeedback(false);
    setSelectedAnswer('');
    setUserInput('');
    setTimeLeft(30);
    setIsPaused(false);
    setShowLanguageSelector(false);
  };

  const handleAutoPlayToggle = () => {
    const newAutoPlay = !autoPlay;
    setAutoPlay(newAutoPlay);
    saveAutoPlaySetting(newAutoPlay);
  };

  const handleLanguageChange = (type: 'source' | 'target', language: LanguageCode) => {
    const newSettings = {
      ...settings,
      [type === 'source' ? 'sourceLanguage' : 'targetLanguage']: language
    };
    setSettings(newSettings);
    saveSettings(newSettings);
    setShowLanguageSelector(false);
    
    // Regenerate quiz with new language settings
    try {
      const generatedQuestions = generateQuiz(newSettings);
      setQuestions(generatedQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setTimeLeft(newSettings.timeLimit);
      setShowFeedback(false);
      setSelectedAnswer('');
      setUserInput('');
      setIsPaused(false);
      
      // Auto-play first question if enabled
      if (generatedQuestions[0] && autoPlay) {
        setTimeout(() => {
          speakText(generatedQuestions[0].word.word, newSettings.sourceLanguage);
        }, 500);
      }
    } catch (error) {
      console.error('Error regenerating quiz:', error);
      alert('Error regenerating quiz with new language settings.');
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      handleAnswer(userInput.trim());
    }
  };

  const playAudio = (text: string, language: LanguageCode) => {
    // Load saved speech config
    const savedConfig = localStorage.getItem('speechConfig');
    let config = {};
    if (savedConfig) {
      try {
        config = JSON.parse(savedConfig);
      } catch (error) {
        console.error('Error loading speech config:', error);
      }
    }
    speakText(text, language, config);
  };

  return (
    <div className="min-h-screen bg-background">
              <Header 
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          autoPlay={autoPlay}
          onAutoPlayToggle={handleAutoPlayToggle}
          onSpeechSettingsClick={() => setShowSpeechSettings(true)}
        />
      
      <main className="max-w-4xl mx-auto px-4 py-4">
                {currentScreen === 'start' && (
          <StartScreen
            settings={settings}
            onStartQuiz={startQuiz}
            isLoading={isLoading}
          />
        )}

        {currentScreen === 'history' && (
          <HistoryScreen
            onBackToStart={() => setCurrentScreen('start')}
          />
        )}

        {currentScreen === 'history' && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Quiz History</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">This feature is coming soon!</p>
            <button 
              onClick={resetQuiz}
              className="btn-primary"
            >
              Back to Start
            </button>
          </div>
        )}

        {currentScreen === 'quiz' && currentQuestion && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            {/* Progress Bar */}
            <div className="card">
              <div className="card-content">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <div className="flex items-center space-x-2">
                    {settings.timeLimit > 0 && (
                      <>
                        <span className={`text-sm font-semibold ${timeLeft <= 10 ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}>
                          {timeLeft}s
                        </span>
                        <div className={`w-3 h-3 rounded-full ${timeLeft <= 10 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                      </>
                    )}
                  </div>
                </div>
                <div className="progress">
                  <div 
                    className="progress-indicator"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Language Selector Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="btn-outline"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {getLanguageName(settings.sourceLanguage)} → {getLanguageName(settings.targetLanguage)}
              </button>
            </div>

            {/* Language Selector */}
            {showLanguageSelector && (
              <div className="card animate-slide-down">
                <div className="card-header">
                  <h3 className="card-title">Change Languages</h3>
                </div>
                <div className="card-content">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Source Language</h4>
                      <div className="space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange('source', lang.code)}
                            className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left transition-colors ${
                              settings.sourceLanguage === lang.code ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Target Language</h4>
                      <div className="space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange('target', lang.code)}
                            className={`w-full flex items-center space-x-2 p-2 rounded-lg text-left transition-colors ${
                              settings.targetLanguage === lang.code ? 'bg-pink-100 dark:bg-pink-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Question Card */}
            <div className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">{currentQuestion.question}</h2>
                  <button
                    onClick={() => playAudio(currentQuestion.word.word, settings.sourceLanguage)}
                    className="btn-ghost p-2"
                    aria-label="Play audio"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="badge badge-outline">{currentQuestion.type}</span>
                  <span>•</span>
                  <span>{currentQuestion.word.word}</span>
                  {currentQuestion.word.pronunciation && (
                    <>
                      <span>•</span>
                      <span className="italic">{currentQuestion.word.pronunciation}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="card-content">
                {/* Multiple Choice Options */}
                {currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'listening' ? (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={showFeedback}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                          showFeedback
                            ? option === currentQuestion.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300'
                              : option === selectedAnswer
                              ? 'border-red-500 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                              : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800'
                            : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {showFeedback && option === currentQuestion.correctAnswer && (
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                          {showFeedback && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  /* Text Input for Fill-in-the-blank and Translation */
                  <form onSubmit={handleInputSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your answer..."
                        className="input w-full"
                        disabled={showFeedback}
                        autoFocus
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={showFeedback || !userInput.trim()}
                      className="btn-primary w-full"
                    >
                      Submit Answer
                    </button>
                  </form>
                )}

                {/* Feedback */}
                {showFeedback && (
                  <div className={`mt-6 p-4 rounded-xl border-2 ${
                    isCorrect 
                                        ? 'border-green-500 bg-green-50 dark:bg-green-950'
                  : 'border-red-500 bg-red-50 dark:bg-red-950'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      {isCorrect ? (
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                                              <span className={`font-semibold ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Correct answer:</span> {currentQuestion.correctAnswer}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Pronunciation:</span>
                          <span className="text-sm italic">{currentQuestion.word.pronunciation}</span>
                          <button
                            onClick={() => playAudio(currentQuestion.correctAnswer, settings.targetLanguage)}
                            className="btn-ghost p-1"
                            aria-label="Play correct answer audio"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Question:</span> {currentQuestion.word.word}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Translation:</span> {currentQuestion.word.translation}
                        </div>
                        <button
                          onClick={handleNextQuestion}
                          className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Next Question</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                    
                    {isCorrect && (
                      <div className="space-y-3">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Click the correct answer again to continue immediately!
                        </p>
                        <button
                          onClick={handleNextQuestion}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Next Question</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'result' && quizResult && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-large mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold font-display gradient-text mb-2">
                Quiz Complete!
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Here&apos;s how you performed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Score</h3>
                </div>
                <div className="card-content">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {quizResult.percentage}%
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      {quizResult.correctAnswers} out of {quizResult.totalQuestions} correct
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Statistics</h3>
                </div>
                <div className="card-content">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Time Spent:</span>
                      <span className="font-medium">{Math.floor(quizResult.timeSpent / 60)}m {quizResult.timeSpent % 60}s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className="font-medium capitalize">{quizResult.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Languages:</span>
                      <span className="font-medium">{getLanguageName(quizResult.sourceLanguage)} → {getLanguageName(quizResult.targetLanguage)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="btn-primary"
              >
                Try Again
              </button>
              <button
                onClick={() => setCurrentScreen('history')}
                className="btn-outline"
              >
                View History
              </button>
            </div>
          </div>
        )}

        {/* Speech Settings Modal */}
        <SpeechSettings
          isOpen={showSpeechSettings}
          onClose={() => setShowSpeechSettings(false)}
          currentLanguage={settings.sourceLanguage}
        />
      </main>
    </div>
  );
}
