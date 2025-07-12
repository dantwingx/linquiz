import { useState, useEffect } from 'react';
import { QuizResult, LanguageCode } from '@/types/quiz';
import { loadQuizResults, clearQuizResults } from '@/utils/storage';
import { languages } from '@/data/multilingualData';

interface HistoryScreenProps {
  onBackToStart: () => void;
}

type FilterType = 'all' | 'recent' | 'poor';
type SortType = 'date' | 'score';

export function HistoryScreen({ onBackToStart }: HistoryScreenProps) {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<QuizResult[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('date');

  useEffect(() => {
    const savedResults = loadQuizResults();
    setResults(savedResults);
  }, []);

  useEffect(() => {
    let filtered = [...results];

    // Apply filter
    switch (filter) {
      case 'recent':
        filtered = filtered.slice(-10);
        break;
      case 'poor':
        filtered = filtered.filter(result => result.percentage < 70);
        break;
      default:
        break;
    }

    // Apply sort
    filtered.sort((a, b) => {
      if (sort === 'date') {
        return b.timestamp - a.timestamp;
      } else {
        return b.percentage - a.percentage;
      }
    });

    setFilteredResults(filtered);
  }, [results, filter, sort]);

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all quiz history?')) {
      clearQuizResults();
      setResults([]);
    }
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

  const getScoreColor = (percentage: number): string => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 70) return 'text-accent-teal-600';
    if (percentage >= 50) return 'text-accent-yellow-600';
    return 'text-secondary-coral-600';
  };

  const getScoreBackground = (percentage: number): string => {
    if (percentage >= 90) return 'bg-gradient-to-r from-green-50 to-green-100 border-green-200';
    if (percentage >= 70) return 'bg-gradient-to-r from-accent-teal-50 to-accent-teal-100 border-accent-teal-200';
    if (percentage >= 50) return 'bg-gradient-to-r from-accent-yellow-50 to-accent-yellow-100 border-accent-yellow-200';
    return 'bg-gradient-to-r from-secondary-coral-50 to-secondary-coral-100 border-secondary-coral-200';
  };

  const stats = {
    total: results.length,
    averageScore: results.length > 0 ? Math.round(results.reduce((sum, r) => sum + r.percentage, 0) / results.length) : 0,
    bestScore: results.length > 0 ? Math.max(...results.map(r => r.percentage)) : 0,
    poorCount: results.filter(r => r.percentage < 70).length
  };

  return (
    <div className="max-w-md mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 card-hover">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-pink-500 to-primary-purple-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-secondary">Quiz History</h2>
              <p className="text-sm text-gray-600 font-primary">Track your progress</p>
            </div>
          </div>
          <button
            onClick={onBackToStart}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-secondary-pink-500 transition-all duration-300 btn-hover btn-press"
            title="Back to Start"
          >
            <span className="text-lg">🏠</span>
          </button>
        </div>
      </div>

      {/* Statistics */}
      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-r from-secondary-pink-50 to-secondary-pink-100 p-4 rounded-2xl border border-secondary-pink-200">
            <div className="text-sm text-secondary-pink-700 font-primary">Total Quizzes</div>
            <div className="text-2xl font-bold text-secondary-pink-800 font-secondary">{stats.total}</div>
          </div>
          <div className="bg-gradient-to-r from-primary-purple-50 to-primary-purple-100 p-4 rounded-2xl border border-primary-purple-200">
            <div className="text-sm text-primary-purple-700 font-primary">Average Score</div>
            <div className="text-2xl font-bold text-primary-purple-800 font-secondary">{stats.averageScore}%</div>
          </div>
          <div className="bg-gradient-to-r from-accent-teal-50 to-accent-teal-100 p-4 rounded-2xl border border-accent-teal-200">
            <div className="text-sm text-accent-teal-700 font-primary">Best Score</div>
            <div className="text-2xl font-bold text-accent-teal-800 font-secondary">{stats.bestScore}%</div>
          </div>
          <div className="bg-gradient-to-r from-accent-yellow-50 to-accent-yellow-100 p-4 rounded-2xl border border-accent-yellow-200">
            <div className="text-sm text-accent-yellow-700 font-primary">Need Practice</div>
            <div className="text-2xl font-bold text-accent-yellow-800 font-secondary">{stats.poorCount}</div>
          </div>
        </div>
      )}

      {/* Filters and Controls */}
      {results.length > 0 && (
        <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100">
          <div className="space-y-4">
            {/* Filter Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-primary mb-2">Filter</label>
              <div className="flex gap-2">
                {[
                  { key: 'all', label: 'All', icon: '📋' },
                  { key: 'recent', label: 'Recent', icon: '🕐' },
                  { key: 'poor', label: 'Practice', icon: '📚' }
                ].map(({ key, label, icon }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key as FilterType)}
                    className={`
                      flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-300 btn-hover btn-press
                      ${filter === key
                        ? 'bg-secondary-pink-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    <span className="mr-1">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-primary mb-2">Sort by</label>
              <div className="flex gap-2">
                {[
                  { key: 'date', label: 'Date', icon: '📅' },
                  { key: 'score', label: 'Score', icon: '🏆' }
                ].map(({ key, label, icon }) => (
                  <button
                    key={key}
                    onClick={() => setSort(key as SortType)}
                    className={`
                      flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-300 btn-hover btn-press
                      ${sort === key
                        ? 'bg-accent-teal-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    <span className="mr-1">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear History Button */}
            <button
              onClick={handleClearHistory}
              className="w-full py-3 px-4 bg-secondary-coral-500 hover:bg-secondary-coral-600 text-white font-semibold rounded-2xl transition-all duration-300 btn-hover btn-press shadow-md font-secondary"
            >
              <span className="mr-2">🗑️</span>
              Clear History
            </button>
          </div>
        </div>
      )}

      {/* Results List */}
      {filteredResults.length > 0 ? (
        <div className="space-y-3">
          {filteredResults.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-300 card-hover ${getScoreBackground(result.percentage)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">
                    {getLanguageFlag(result.sourceLanguage)}
                  </span>
                  <span className="text-sm text-gray-600 font-primary">
                    {getLanguageName(result.sourceLanguage)} → {getLanguageName(result.targetLanguage)}
                  </span>
                </div>
                <div className={`text-2xl font-bold font-secondary ${getScoreColor(result.percentage)}`}>
                  {Math.round(result.percentage)}%
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 font-primary">
                <div>
                  <span className="font-medium">Score:</span> {result.correctAnswers}/{result.totalQuestions}
                </div>
                <div>
                  <span className="font-medium">Time:</span> {Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')}
                </div>
                <div>
                  <span className="font-medium">Level:</span> {result.difficulty}
                </div>
              </div>
              
              <div className="mt-2 text-xs text-gray-500 font-primary">
                {new Date(result.timestamp).toLocaleDateString()} {new Date(result.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-400 text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-secondary mb-2">No Quiz History</h3>
          <p className="text-gray-600 font-primary mb-6">
            Take your first quiz to see your progress here!
          </p>
          <button
            onClick={onBackToStart}
            className="bg-gradient-to-r from-secondary-pink-500 to-primary-purple-600 hover:from-secondary-pink-600 hover:to-primary-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 btn-hover btn-press shadow-lg font-secondary"
          >
            <span className="mr-2">🚀</span>
            Start Your First Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-400 text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-secondary mb-2">No Results Found</h3>
          <p className="text-gray-600 font-primary">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
} 