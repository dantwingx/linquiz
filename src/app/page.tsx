'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StartScreen from '@/components/StartScreen';
import { QuizSettings, QuizQuestion, QuizHistoryItem } from '@/types/quiz';
import { loadQuizSettings, saveQuizSettings, loadAutoPlaySetting, saveAutoPlaySetting } from '@/utils/storage';
import { generateRandomQuiz } from '@/utils/quizUtils';

type Screen = 'start' | 'quiz' | 'results' | 'history';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [settings, setSettings] = useState<QuizSettings>({
    quizLanguage: 'zh',
    answerLanguage: 'en',
    difficultyLevel: 'beginner',
    questionCount: 10,
    timeLimit: 0,
    questionType: 'mixed',
    autoPlay: false
  });
  const [autoPlay, setAutoPlay] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizHistory, setQuizHistory] = useState<QuizHistoryItem[]>([]);

  useEffect(() => {
    const savedSettings = loadQuizSettings();
    const savedAutoPlay = loadAutoPlaySetting();
    setSettings(savedSettings);
    setAutoPlay(savedAutoPlay);
  }, []);

  useEffect(() => {
    saveQuizSettings(settings);
  }, [settings]);

  useEffect(() => {
    saveAutoPlaySetting(autoPlay);
  }, [autoPlay]);

  const handleStartQuiz = () => {
    const questions = generateRandomQuiz(
      settings.quizLanguage,
      settings.answerLanguage,
      settings.difficultyLevel,
      settings.questionCount,
      settings.questionType
    );
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizHistory([]);
    setCurrentScreen('quiz');
  };

  const handleHomeClick = () => setCurrentScreen('start');
  const handleHistoryClick = () => setCurrentScreen('history');
  const handleAutoPlayToggle = () => setAutoPlay(!autoPlay);
  const handleSettingsChange = (newSettings: QuizSettings) => setSettings(newSettings);

  return (
    <div className="flex flex-col h-full">
      <Header
        onHomeClick={handleHomeClick}
        onHistoryClick={handleHistoryClick}
        onAutoPlayToggle={handleAutoPlayToggle}
        autoPlay={autoPlay}
      />
      <main className="flex-1 overflow-hidden">
        {currentScreen === 'start' && (
          <StartScreen
            settings={settings}
            onSettingsChange={handleSettingsChange}
            onStartQuiz={handleStartQuiz}
          />
        )}
        {currentScreen === 'quiz' && (
          <div className="p-5">
            <p className="text-center text-gray-600">Quiz Screen - Coming Soon</p>
          </div>
        )}
        {currentScreen === 'results' && (
          <div className="p-5">
            <p className="text-center text-gray-600">Results Screen - Coming Soon</p>
          </div>
        )}
        {currentScreen === 'history' && (
          <div className="p-5">
            <p className="text-center text-gray-600">History Screen - Coming Soon</p>
          </div>
        )}
      </main>
    </div>
  );
} 