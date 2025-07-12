import { useState } from 'react';
import { QuizSettings, LanguageCode, Difficulty, QuestionType } from '@/types/quiz';
import { languages } from '@/data/multilingualData';

interface StartScreenProps {
  settings: QuizSettings;
  onStartQuiz: (settings: QuizSettings) => void;
  isLoading: boolean;
}

export function StartScreen({ settings, onStartQuiz, isLoading }: StartScreenProps) {
  const [currentSettings, setCurrentSettings] = useState<QuizSettings>(settings);

  const handleSettingChange = (key: keyof QuizSettings, value: any) => {
    setCurrentSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleQuestionTypeToggle = (type: QuestionType) => {
    const newTypes = currentSettings.questionTypes.includes(type)
      ? currentSettings.questionTypes.filter(t => t !== type)
      : [...currentSettings.questionTypes, type];
    
    if (newTypes.length > 0) {
      handleSettingChange('questionTypes', newTypes);
    }
  };

  const handleStartQuiz = () => {
    onStartQuiz(currentSettings);
  };

  const getLanguageName = (code: LanguageCode): string => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.name : code;
  };

  const getLanguageFlag = (code: LanguageCode): string => {
    const flags: Record<LanguageCode, string> = {
      'en': '🇺🇸',
      'zh': '🇨🇳',
      'ko': '🇰🇷',
      'ja': '🇯🇵',
      'es': '🇪🇸',
      'vi': '🇻🇳',
      'fr': '🇫🇷',
      'de': '🇩🇪',
      'tr': '🇹🇷'
    };
    return flags[code] || '🌐';
  };

  return (
    <div className="max-w-md mx-auto space-y-6 animate-fadeIn">
      {/* Welcome Card */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-pink-500 to-primary-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-custom">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 font-secondary mb-2">Start Your Quiz</h2>
          <p className="text-gray-600 text-sm font-primary">Configure your language learning session</p>
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
        <h3 className="text-lg font-semibold text-gray-800 font-secondary mb-4 flex items-center">
          <span className="mr-2">🌍</span>
          Language Pair
        </h3>
        
        <div className="space-y-4">
          {/* Source Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
              From (Source Language)
            </label>
            <div className="relative">
              <select
                value={currentSettings.sourceLanguage}
                onChange={(e) => handleSettingChange('sourceLanguage', e.target.value as LanguageCode)}
                className="w-full p-4 border border-gray-200 rounded-2xl bg-white text-gray-900 font-primary focus:ring-2 focus:ring-secondary-pink-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {getLanguageFlag(lang.code)} {lang.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>

          {/* Target Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
              To (Target Language)
            </label>
            <div className="relative">
              <select
                value={currentSettings.targetLanguage}
                onChange={(e) => handleSettingChange('targetLanguage', e.target.value as LanguageCode)}
                className="w-full p-4 border border-gray-200 rounded-2xl bg-white text-gray-900 font-primary focus:ring-2 focus:ring-secondary-pink-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {getLanguageFlag(lang.code)} {lang.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Settings */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
        <h3 className="text-lg font-semibold text-gray-800 font-secondary mb-4 flex items-center">
          <span className="mr-2">⚙️</span>
          Quiz Settings
        </h3>
        
        <div className="space-y-4">
          {/* Question Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
              Number of Questions
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map(count => (
                <button
                  key={count}
                  onClick={() => handleSettingChange('questionCount', count)}
                  className={`
                    p-3 rounded-xl text-sm font-medium transition-all duration-300 btn-hover btn-press
                    ${currentSettings.questionCount === count
                      ? 'bg-secondary-pink-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
              Difficulty Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['easy', 'medium', 'hard', 'mixed'] as Difficulty[]).map(diff => (
                <button
                  key={diff}
                  onClick={() => handleSettingChange('difficulty', diff)}
                  className={`
                    p-3 rounded-xl text-sm font-medium capitalize transition-all duration-300 btn-hover btn-press
                    ${currentSettings.difficulty === diff
                      ? 'bg-accent-teal-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {diff === 'mixed' ? '🎲 Mixed' : 
                   diff === 'easy' ? '🟢 Easy' :
                   diff === 'medium' ? '🟡 Medium' : '🔴 Hard'}
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 font-primary mb-2">
              Time per Question (seconds)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[15, 30, 45, 60].map(time => (
                <button
                  key={time}
                  onClick={() => handleSettingChange('timeLimit', time)}
                  className={`
                    p-3 rounded-xl text-sm font-medium transition-all duration-300 btn-hover btn-press
                    ${currentSettings.timeLimit === time
                      ? 'bg-accent-yellow-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {time}s
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Question Types */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
        <h3 className="text-lg font-semibold text-gray-800 font-secondary mb-4 flex items-center">
          <span className="mr-2">📝</span>
          Question Types
        </h3>
        
        <div className="space-y-3">
          {[
            { type: 'multiple-choice' as QuestionType, label: 'Multiple Choice', icon: '✅' },
            { type: 'translation' as QuestionType, label: 'Translation', icon: '🔄' },
            { type: 'listening' as QuestionType, label: 'Listening', icon: '🎧' }
          ].map(({ type, label, icon }) => (
            <button
              key={type}
              onClick={() => handleQuestionTypeToggle(type)}
              className={`
                w-full p-4 rounded-2xl text-left transition-all duration-300 btn-hover btn-press flex items-center justify-between
                ${currentSettings.questionTypes.includes(type)
                  ? 'bg-primary-purple-100 border-2 border-primary-purple-500 text-primary-purple-700'
                  : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <div className="flex items-center">
                <span className="mr-3 text-lg">{icon}</span>
                <span className="font-medium font-primary">{label}</span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                currentSettings.questionTypes.includes(type)
                  ? 'bg-primary-purple-500 border-primary-purple-500'
                  : 'border-gray-300'
              }`}>
                {currentSettings.questionTypes.includes(type) && (
                  <span className="text-white text-xs">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartQuiz}
        disabled={isLoading || currentSettings.questionTypes.length === 0}
        className={`
          w-full py-4 px-6 rounded-2xl text-lg font-semibold font-secondary transition-all duration-300 
          btn-hover btn-press shadow-lg
          ${isLoading || currentSettings.questionTypes.length === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 text-white hover:from-secondary-pink-600 hover:to-primary-purple-700'
          }
        `}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
            Generating Quiz...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="mr-2">🚀</span>
            Start Quiz
          </div>
        )}
      </button>
      
      {currentSettings.questionTypes.length === 0 && (
        <p className="text-center text-sm text-secondary-coral-500 font-primary">
          Please select at least one question type
        </p>
      )}
    </div>
  );
} 