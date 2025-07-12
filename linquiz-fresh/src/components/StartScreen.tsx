'use client';

import { useState } from 'react';
import { QuizSettings } from '@/types/quiz';
import { languages } from '@/data/vocabulary';
import { testVietnamesePronunciation, debugResponsiveVoice } from '@/utils/speech';

interface StartScreenProps {
  settings: QuizSettings;
  onStartQuiz: (settings: QuizSettings) => void;
  isLoading: boolean;
}

export function StartScreen({ settings, onStartQuiz, isLoading }: StartScreenProps) {
  const [localSettings, setLocalSettings] = useState<QuizSettings>(settings);

  const handleSettingChange = (key: keyof QuizSettings, value: string | number | boolean) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleStartQuiz = () => {
    onStartQuiz(localSettings);
  };

  const handleTestVietnamese = async () => {
    try {
      console.log('Testing Vietnamese pronunciation...');
      debugResponsiveVoice();
      await testVietnamesePronunciation('Xin chào, tôi là LinQuiz');
      alert('Vietnamese pronunciation test completed! Check console for details.');
    } catch (error) {
      console.error('Vietnamese test failed:', error);
      alert('Vietnamese pronunciation test failed. Check console for details.');
    }
  };

  const difficultyOptions = [
    { value: 'easy', label: 'Easy', icon: '🟢' },
    { value: 'medium', label: 'Medium', icon: '🟡' },
    { value: 'hard', label: 'Hard', icon: '🔴' },
    { value: 'mixed', label: 'Mixed', icon: '🎲' },
  ];

  const questionTypeOptions = [
    { value: 'multiple-choice', label: 'Multiple Choice', icon: '📝' },
    { value: 'fill-blank', label: 'Fill Blank', icon: '✏️' },
    { value: 'listening', label: 'Listening', icon: '🎵' },
    { value: 'translation', label: 'Translation', icon: '🔄' },
    { value: 'mixed', label: 'Mixed', icon: '🎲' },
  ];

  const questionCountOptions = [
    { value: 10, label: '10 Questions' },
    { value: 20, label: '20 Questions' },
    { value: 50, label: '50 Questions' },
    { value: 100, label: '100 Questions' },
    { value: 200, label: '200 Questions' },
    { value: 500, label: '500 Questions' },
    { value: 1000, label: '1000 Questions' },
  ];
  
  const timeLimitOptions = [
    { value: 0, label: 'No Limit', icon: '∞' },
    { value: 30, label: '30s', icon: '⏱️' },
    { value: 60, label: '1m', icon: '⏰' },
    { value: 120, label: '2m', icon: '⏲️' },
  ];

  return (
    <div className="min-h-screen gradient-bg py-4 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 text-white shadow-lg mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold font-display gradient-text mb-1">
            Start Your Quiz
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Configure your language learning session
          </p>
        </div>

        {/* Settings Form */}
        <div className="card animate-slide-up">
          <div className="card-content space-y-4">
            
            {/* Source Language */}
            <div>
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                From (Source Language)
              </h3>
                             <div className="flex flex-wrap gap-1.5">
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => handleSettingChange('sourceLanguage', lang.code)}
                     className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md border transition-all duration-200 text-xs ${
                       localSettings.sourceLanguage === lang.code
                         ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                         : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                     }`}
                   >
                     <span className="text-sm">{lang.flag}</span>
                     <span className="font-medium">{lang.name}</span>
                   </button>
                 ))}
               </div>
            </div>

            {/* Target Language */}
            <div>
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                To (Target Language)
              </h3>
                             <div className="flex flex-wrap gap-1.5">
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => handleSettingChange('targetLanguage', lang.code)}
                     className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md border transition-all duration-200 text-xs ${
                       localSettings.targetLanguage === lang.code
                         ? 'border-pink-500 bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300'
                         : 'border-slate-200 dark:border-slate-700 hover:border-pink-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                     }`}
                   >
                     <span className="text-sm">{lang.flag}</span>
                     <span className="font-medium">{lang.name}</span>
                   </button>
                 ))}
               </div>
            </div>

            {/* Quiz Settings Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Difficulty Level */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Difficulty Level
                </h3>
                                 <div className="flex flex-wrap gap-1.5">
                   {difficultyOptions.map((option) => (
                     <button
                       key={option.value}
                       onClick={() => handleSettingChange('difficulty', option.value)}
                       className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md border transition-all duration-200 text-xs ${
                         localSettings.difficulty === option.value
                           ? 'border-orange-500 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300'
                           : 'border-slate-200 dark:border-slate-700 hover:border-orange-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                       }`}
                     >
                       <span className="text-sm">{option.icon}</span>
                       <span className="font-medium">{option.label}</span>
                     </button>
                   ))}
                 </div>
              </div>

              {/* Question Type */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Question Type
                </h3>
                                 <div className="flex flex-wrap gap-1.5">
                   {questionTypeOptions.map((option) => (
                     <button
                       key={option.value}
                       onClick={() => handleSettingChange('questionType', option.value)}
                       className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md border transition-all duration-200 text-xs ${
                         localSettings.questionType === option.value
                           ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300'
                           : 'border-slate-200 dark:border-slate-700 hover:border-green-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                       }`}
                     >
                       <span className="text-sm">{option.icon}</span>
                       <span className="font-medium">{option.label}</span>
                     </button>
                   ))}
                 </div>
              </div>
            </div>

            {/* Additional Settings Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Number of Questions */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Number of Questions
                </h3>
                                                <div className="flex flex-wrap gap-1.5">
                 {questionCountOptions.map((option) => (
                   <button
                     key={option.value}
                     onClick={() => handleSettingChange('questionCount', option.value)}
                     className={`flex items-center justify-center px-3 py-1.5 rounded-md border transition-all duration-200 text-xs font-medium min-w-[50px] ${
                       localSettings.questionCount === option.value
                         ? 'border-purple-500 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                         : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                     }`}
                   >
                     {option.value}
                   </button>
                 ))}
               </div>
              </div>

              {/* Time Limit */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Time per Question
                </h3>
                                 <div className="flex flex-wrap gap-1.5">
                   {timeLimitOptions.map((option) => (
                     <button
                       key={option.value}
                       onClick={() => handleSettingChange('timeLimit', option.value)}
                       className={`flex items-center space-x-1.5 px-2 py-1.5 rounded-md border transition-all duration-200 text-xs ${
                         localSettings.timeLimit === option.value
                           ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300'
                           : 'border-slate-200 dark:border-slate-700 hover:border-yellow-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                       }`}
                     >
                       <span className="text-sm">{option.icon}</span>
                       <span className="font-medium">{option.label}</span>
                     </button>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Quiz Button */}
        <div className="flex flex-col items-center space-y-3 mt-4 animate-scale-in animation-delay-300">
          <button
            onClick={handleStartQuiz}
            disabled={isLoading}
            className="btn-primary text-base px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Generating Quiz...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Quiz</span>
              </div>
            )}
          </button>
          
          {/* Vietnamese Test Button */}
          <button
            onClick={handleTestVietnamese}
            className="text-sm px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 border border-red-300 transition-colors duration-200"
          >
            🇻🇳 Test Vietnamese Pronunciation
          </button>
        </div>
      </div>
    </div>
  );
} 