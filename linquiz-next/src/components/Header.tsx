interface HeaderProps {
  autoPlay: boolean;
  onToggleAutoPlay: () => void;
  onReset?: () => void;
  onShowHistory?: () => void;
}

export function Header({ autoPlay, onToggleAutoPlay, onReset, onShowHistory }: HeaderProps) {
  return (
    <header className="gradient-bg border-b border-primary-purple-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-pink-500 to-primary-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg font-secondary">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 font-secondary">LinQuiz</h1>
              <p className="text-xs text-gray-600 font-primary">Language Learning</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Auto-play Toggle */}
            <button
              onClick={onToggleAutoPlay}
              className={`
                relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                btn-hover btn-press
                ${autoPlay 
                  ? 'bg-secondary-pink-500 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }
              `}
              title={autoPlay ? 'Disable Auto-play' : 'Enable Auto-play'}
            >
              <span className="mr-2 text-base">
                {autoPlay ? '🔊' : '🔇'}
              </span>
              <span className="hidden sm:inline">
                {autoPlay ? 'Auto-play' : 'Manual'}
              </span>
            </button>

            {/* History Button */}
            {onShowHistory && (
              <button
                onClick={onShowHistory}
                className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-secondary-pink-500 transition-all duration-300 btn-hover btn-press shadow-sm"
                title="View History"
              >
                <span className="text-lg">📊</span>
              </button>
            )}

            {/* Reset Button */}
            {onReset && (
              <button
                onClick={onReset}
                className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-secondary-coral-500 transition-all duration-300 btn-hover btn-press shadow-sm"
                title="Reset Quiz"
              >
                <span className="text-lg">🏠</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 