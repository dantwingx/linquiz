'use client';

import { useState } from 'react';

interface HeaderProps {
  onHomeClick: () => void;
  onHistoryClick: () => void;
  onAutoPlayToggle: () => void;
  autoPlay: boolean;
}

export default function Header({ onHomeClick, onHistoryClick, onAutoPlayToggle, autoPlay }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-5 text-center relative flex-shrink-0">
      <h1 className="text-3xl font-bold mb-1">🌍 Multi-Language Quiz</h1>
      <p className="text-lg opacity-90">Test your knowledge across 9 different languages</p>
      
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex gap-2">
        <button
          onClick={onHomeClick}
          className="bg-white/20 text-white border-2 border-white/50 px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-white/30 hover:border-white/80 hover:scale-105 whitespace-nowrap"
          title="Return to home screen"
        >
          🏠 Home
        </button>
        
        <button
          onClick={onAutoPlayToggle}
          className={`px-3 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap ${
            autoPlay 
              ? 'bg-green-600/80 border-green-600 text-white' 
              : 'bg-white/20 border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/80'
          }`}
          title="Toggle auto-play pronunciation"
        >
          🔊 Auto-Play: {autoPlay ? 'ON' : 'OFF'}
        </button>
        
        <button
          onClick={onHistoryClick}
          className="bg-white/20 text-white border-2 border-white/50 px-3 py-2 rounded-full text-sm transition-all duration-300 hover:bg-white/30 hover:border-white/80 hover:scale-105 whitespace-nowrap"
        >
          📚 Review History
        </button>
      </div>
    </header>
  );
} 