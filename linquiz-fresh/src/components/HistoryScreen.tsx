'use client';

import { useState, useEffect } from 'react';
import { QuizResult, LanguageCode } from '@/types/quiz';
import { loadQuizResults, clearQuizResults, getUniqueWrongWords } from '@/utils/storage';
import { languages } from '@/data/vocabulary';

interface HistoryScreenProps {
  onBackToStart: () => void;
}

export function HistoryScreen({ onBackToStart }: HistoryScreenProps) {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<QuizResult[]>([]);
  const [filter, setFilter] = useState<'all' | 'recent' | 'poor'>('all');
  const [sort, setSort] = useState<'date' | 'score'>('date');
  const [viewMode, setViewMode] = useState<'history' | 'wrong-answers'>('history');
  const [wrongWords, setWrongWords] = useState<{ word: string; count: number; questions: any[] }[]>([]);

  useEffect(() => {
    const savedResults = loadQuizResults();
    setResults(savedResults);
    
    // Load wrong words when component mounts
    const wrongWordsData = getUniqueWrongWords();
    setWrongWords(wrongWordsData);
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
    if (percentage >= 70) return 'text-blue-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const calculateStats = () => {
    if (results.length === 0) return { totalQuizzes: 0, averageScore: 0, bestScore: 0 };
    
    const totalQuizzes = results.length;
    const averageScore = Math.round(results.reduce((sum, result) => sum + result.percentage, 0) / totalQuizzes);
    const bestScore = Math.max(...results.map(result => result.percentage));
    
    return { totalQuizzes, averageScore, bestScore };
  };

  const stats = calculateStats();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-large mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold font-display gradient-text mb-2">
          {viewMode === 'history' ? 'Quiz History' : 'Wrong Answers Review'}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {viewMode === 'history' ? 'Track your learning progress' : 'Review words you got wrong'}
        </p>
        
        {/* View Mode Toggle */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setViewMode('history')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              viewMode === 'history' 
                ? 'bg-blue-500 text-white' 
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            📊 History
          </button>
          <button
            onClick={() => setViewMode('wrong-answers')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              viewMode === 'wrong-answers' 
                ? 'bg-red-500 text-white' 
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            ❌ Wrong Answers ({wrongWords.length})
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="card">
          <div className="card-content text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stats.totalQuizzes}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Total Quizzes</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{stats.averageScore}%</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Average Score</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{stats.bestScore}%</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Best Score</div>
          </div>
        </div>
      </div>

      {/* Filters - Only show for history view */}
      {viewMode === 'history' && (
        <div className="card mb-6">
          <div className="card-content">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('recent')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === 'recent' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Recent
                </button>
                <button
                  onClick={() => setFilter('poor')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === 'poor' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Need Review (&lt;70%)
                </button>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setSort('date')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    sort === 'date' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  By Date
                </button>
                <button
                  onClick={() => setSort('score')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    sort === 'score' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  By Score
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wrong Answers Section */}
      {viewMode === 'wrong-answers' && (
        <div className="space-y-4">
          {wrongWords.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Perfect! No wrong answers yet
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Keep up the great work! Take more quizzes to track your progress.
              </p>
            </div>
          ) : (
            wrongWords.map((wordData, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                        {wordData.word}
                      </h3>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Wrong {wordData.count} time{wordData.count > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {wordData.questions[0]?.sourceLanguage && wordData.questions[0]?.targetLanguage && (
                          <span>
                            {getLanguageFlag(wordData.questions[0].sourceLanguage)} → {getLanguageFlag(wordData.questions[0].targetLanguage)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {wordData.questions.slice(0, 3).map((question, qIndex) => (
                      <div key={qIndex} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                          {question.question}
                        </div>
                        <div className="text-sm">
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            Correct: {question.correctAnswer}
                          </span>
                          {question.translation && (
                            <span className="text-slate-500 dark:text-slate-400 ml-2">
                              ({question.translation})
                            </span>
                          )}
                        </div>
                        {question.pronunciation && (
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            🔊 {question.pronunciation}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {wordData.questions.length > 3 && (
                      <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
                        +{wordData.questions.length - 3} more occurrences
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Quiz Results */}
      {viewMode === 'history' && (
        <div>
          {filteredResults.length === 0 ? (
            <div className="card">
              <div className="card-content text-center py-8">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">No Quiz History</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Start taking quizzes to see your progress here!
                </p>
                <button
                  onClick={onBackToStart}
                  className="btn-primary"
                >
                  Start Your First Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredResults.map((result) => (
                <div key={result.id} className="card">
                  <div className="card-content">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getLanguageFlag(result.sourceLanguage)}</span>
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-lg">{getLanguageFlag(result.targetLanguage)}</span>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {getLanguageName(result.sourceLanguage)} → {getLanguageName(result.targetLanguage)}
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {formatDate(result.timestamp)}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Score</div>
                        <div className={`font-bold text-lg ${getScoreColor(result.percentage)}`}>
                          {result.percentage}%
                        </div>
                      </div>
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Correct</div>
                        <div className="font-medium">{result.correctAnswers}/{result.totalQuestions}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Difficulty</div>
                        <div className="font-medium capitalize">{result.difficulty}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Time</div>
                        <div className="font-medium">{Math.floor(result.timeSpent / 60)}:{String(result.timeSpent % 60).padStart(2, '0')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={onBackToStart}
          className="btn-primary"
        >
          New Quiz
        </button>
        {results.length > 0 && (
          <button
            onClick={handleClearHistory}
            className="btn-outline text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            Clear History
          </button>
        )}
      </div>
    </div>
  );
} 