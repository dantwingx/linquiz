'use client';

import { useState, useEffect } from 'react';
import { SpeechProvider, SpeechConfig, getAvailableProviders, speakText } from '@/utils/speech';
import { LanguageCode } from '@/types/quiz';

interface SpeechSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: LanguageCode;
}

export function SpeechSettings({ isOpen, onClose, currentLanguage }: SpeechSettingsProps) {
  const [config, setConfig] = useState<Partial<SpeechConfig>>({
    provider: 'responsivevoice',
    rate: 0.8,
    pitch: 1.0,
    volume: 1.0,
    apiKey: '',
  });
  const [availableProviders, setAvailableProviders] = useState<SpeechProvider[]>([]);
  const [isTestingVoice, setIsTestingVoice] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAvailableProviders(getAvailableProviders());
      
      // Load saved settings from localStorage
      const savedConfig = localStorage.getItem('speechConfig');
      if (savedConfig) {
        try {
          const parsed = JSON.parse(savedConfig);
          setConfig(parsed);
        } catch (error) {
          console.error('Error loading speech config:', error);
        }
      }
    }
  }, [isOpen]);

  const handleConfigChange = (key: keyof SpeechConfig, value: any) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    
    // Save to localStorage
    localStorage.setItem('speechConfig', JSON.stringify(newConfig));
  };

  const testVoice = async () => {
    if (isTestingVoice) return;
    
    setIsTestingVoice(true);
    try {
      const testText = getTestText(currentLanguage);
      await speakText(testText, currentLanguage, config);
    } catch (error) {
      console.error('Voice test failed:', error);
      alert('Voice test failed. Please check your settings.');
    } finally {
      setIsTestingVoice(false);
    }
  };

  const getTestText = (language: LanguageCode): string => {
    const testTexts: Record<LanguageCode, string> = {
      en: 'Hello, this is a test of the pronunciation quality.',
      zh: '你好，这是发音质量测试。',
      ko: '안녕하세요, 이것은 발음 품질 테스트입니다.',
      ja: 'こんにちは、これは発音品質のテストです。',
      es: 'Hola, esta es una prueba de calidad de pronunciación.',
      vi: 'Xin chào, đây là bài kiểm tra chất lượng phát âm.',
      fr: 'Bonjour, ceci est un test de qualité de prononciation.',
      de: 'Hallo, dies ist ein Test der Aussprachequalität.',
      tr: 'Merhaba, bu telaffuz kalitesi testidir.',
    };
    return testTexts[language] || testTexts.en;
  };

  const getProviderDescription = (provider: SpeechProvider): string => {
    const descriptions: Record<SpeechProvider, string> = {
      responsivevoice: 'High-quality voices with good language support (Recommended)',
      google: 'Highest quality neural voices (Requires API key)',
      webspeech: 'Browser built-in voices (Basic quality)',
      elevenlabs: 'Premium quality voices (Requires API key)',
    };
    return descriptions[provider];
  };

  const getProviderStatus = (provider: SpeechProvider): 'available' | 'requires-key' | 'unavailable' => {
    if (provider === 'google' || provider === 'elevenlabs') {
      return config.apiKey ? 'available' : 'requires-key';
    }
    return availableProviders.includes(provider) ? 'available' : 'unavailable';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Speech Settings
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Voice Provider Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Voice Provider
            </label>
            <div className="space-y-2">
              {(['responsivevoice', 'webspeech'] as SpeechProvider[]).map((provider) => {
                const status = getProviderStatus(provider);
                const isDisabled = status === 'unavailable';
                
                return (
                  <div
                    key={provider}
                    className={`border rounded-lg p-3 ${
                      config.provider === provider
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                        : 'border-slate-200 dark:border-slate-700'
                    } ${isDisabled ? 'opacity-50' : ''}`}
                  >
                    <label className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="provider"
                        value={provider}
                        checked={config.provider === provider}
                        onChange={(e) => handleConfigChange('provider', e.target.value)}
                        disabled={isDisabled}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm capitalize">
                          {provider === 'responsivevoice' ? 'ResponsiveVoice' : 
                           provider === 'webspeech' ? 'Web Speech API' : provider}
                          {status === 'requires-key' && (
                            <span className="text-yellow-600 dark:text-yellow-400 text-xs ml-1">
                              (API Key Required)
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {getProviderDescription(provider)}
                        </div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Voice Settings */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Speed: {config.rate}
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={config.rate}
                onChange={(e) => handleConfigChange('rate', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Pitch: {config.pitch}
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={config.pitch}
                onChange={(e) => handleConfigChange('pitch', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Volume: {config.volume}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={config.volume}
                onChange={(e) => handleConfigChange('volume', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Test Voice Button */}
          <button
            onClick={testVoice}
            disabled={isTestingVoice || getProviderStatus(config.provider as SpeechProvider) === 'unavailable'}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isTestingVoice ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Testing...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span>Test Voice</span>
              </>
            )}
          </button>

          {/* Instructions */}
          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <p><strong>ResponsiveVoice:</strong> Free with good quality, works immediately</p>
            <p><strong>Web Speech API:</strong> Built-in browser voices, quality varies</p>
            <p className="mt-2 text-blue-600 dark:text-blue-400">
              💡 ResponsiveVoice provides much better pronunciation quality than the default browser voices!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 