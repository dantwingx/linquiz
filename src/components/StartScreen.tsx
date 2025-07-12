'use client';

import { LanguageCode, DifficultyLevel, QuestionType, QuizSettings } from '@/types/quiz';

interface StartScreenProps {
  settings: QuizSettings;
  onSettingsChange: (settings: QuizSettings) => void;
  onStartQuiz: () => void;
}

const languages = [
  { code: 'zh', name: 'Chinese (中文)', flag: '🇨🇳' },
  { code: 'ko', name: 'Korean (한국어)', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: 'Japanese (日本語)', flag: '🇯🇵' },
  { code: 'es', name: 'Spanish (Español)', flag: '🇪🇸' },
  { code: 'vi', name: 'Vietnamese (Tiếng Việt)', flag: '🇻🇳' },
  { code: 'fr', name: 'French (Français)', flag: '🇫🇷' },
  { code: 'de', name: 'German (Deutsch)', flag: '🇩🇪' },
  { code: 'tr', name: 'Turkish (Türkçe)', flag: '🇹🇷' }
];

const difficulties = [
  { value: 'beginner', label: '🟢 Beginner - Basic words & phrases' },
  { value: 'intermediate', label: '🟡 Intermediate - Common vocabulary' },
  { value: 'advanced', label: '🔴 Advanced - Complex words & expressions' }
];

const questionCounts = [5, 10, 15, 20];
const timeLimits = [
  { value: 0, label: '⏱️ No Time Limit' },
  { value: 30, label: '⏱️ 30 seconds per question' },
  { value: 60, label: '⏱️ 1 minute per question' },
  { value: 120, label: '⏱️ 2 minutes per question' }
];

const questionTypes = [
  { value: 'mixed', label: '🎲 Mixed - All question types' },
  { value: 'multiple-choice', label: '📝 Multiple Choice' },
  { value: 'fill-blank', label: '✏️ Fill in the Blank' },
  { value: 'audio-only', label: '🎵 Audio Only' },
  { value: 'reverse', label: '🔄 Reverse Translation' }
];

export default function StartScreen({ settings, onSettingsChange, onStartQuiz }: StartScreenProps) {
  const handleSettingChange = (key: keyof QuizSettings, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Multi-Language Quiz!</h2>
      <p className="text-gray-600 mb-8">Test your language knowledge with customizable quiz settings</p>
      
      <div className="w-full max-w-md space-y-6">
        {/* Quiz Language */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Quiz Language (Questions will be in):
          </label>
          <select
            value={settings.quizLanguage}
            onChange={(e) => handleSettingChange('quizLanguage', e.target.value as LanguageCode)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Answer Language */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Answer Language (Options will be in):
          </label>
          <select
            value={settings.answerLanguage}
            onChange={(e) => handleSettingChange('answerLanguage', e.target.value as LanguageCode)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Level */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Difficulty Level:
          </label>
          <select
            value={settings.difficultyLevel}
            onChange={(e) => handleSettingChange('difficultyLevel', e.target.value as DifficultyLevel)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {difficulties.map(diff => (
              <option key={diff.value} value={diff.value}>
                {diff.label}
              </option>
            ))}
          </select>
        </div>

        {/* Question Count */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Questions:
          </label>
          <select
            value={settings.questionCount}
            onChange={(e) => handleSettingChange('questionCount', parseInt(e.target.value))}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {questionCounts.map(count => (
              <option key={count} value={count}>
                {count} Questions
              </option>
            ))}
          </select>
        </div>

        {/* Time Limit */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Time Limit:
          </label>
          <select
            value={settings.timeLimit}
            onChange={(e) => handleSettingChange('timeLimit', parseInt(e.target.value))}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {timeLimits.map(limit => (
              <option key={limit.value} value={limit.value}>
                {limit.label}
              </option>
            ))}
          </select>
        </div>

        {/* Question Type */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Question Type:
          </label>
          <select
            value={settings.questionType}
            onChange={(e) => handleSettingChange('questionType', e.target.value as QuestionType)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 bg-white cursor-pointer transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {questionTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartQuiz}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg active:transform active:translate-y-0"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
} 