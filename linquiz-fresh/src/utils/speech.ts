import { LanguageCode } from '@/types/quiz';

// Speech provider types
export type SpeechProvider = 'responsivevoice' | 'google' | 'webspeech' | 'elevenlabs';

// Configuration for different speech providers
export interface SpeechConfig {
  provider: SpeechProvider;
  apiKey?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

// Default configuration
const defaultConfig: SpeechConfig = {
  provider: 'responsivevoice',
  rate: 0.8,
  pitch: 1.0,
  volume: 1.0,
};

// Language mapping for ResponsiveVoice
const responsiveVoiceLanguages: Record<LanguageCode, string> = {
  en: 'UK English Female',
  zh: 'Chinese Female',
  ko: 'Korean Female',
  ja: 'Japanese Female',
  es: 'Spanish Female',
  vi: 'Vietnamese Female', // This should work with ResponsiveVoice
  fr: 'French Female',
  de: 'German Female',
  tr: 'Turkish Female',
};

// Alternative voice mapping for better Vietnamese support
const alternativeVoiceMapping: Record<LanguageCode, string[]> = {
  en: ['UK English Female', 'US English Female', 'Australian English Female'],
  zh: ['Chinese Female', 'Chinese (Hong Kong) Female', 'Chinese (Taiwan) Female'],
  ko: ['Korean Female'],
  ja: ['Japanese Female'],
  es: ['Spanish Female', 'Spanish (Latin American) Female'],
  vi: ['Vietnamese Female', 'Vietnamese Male', 'Vietnamese', 'vi-VN'], // Try multiple Vietnamese voice options
  fr: ['French Female', 'French (Canada) Female'],
  de: ['German Female'],
  tr: ['Turkish Female'],
};

// Language mapping for Google Cloud TTS
const googleLanguages: Record<LanguageCode, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ko: 'ko-KR',
  ja: 'ja-JP',
  es: 'es-ES',
  vi: 'vi-VN',
  fr: 'fr-FR',
  de: 'de-DE',
  tr: 'tr-TR',
};

// Language mapping for Web Speech API
const webSpeechLanguages: Record<LanguageCode, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ko: 'ko-KR',
  ja: 'ja-JP',
  es: 'es-ES',
  vi: 'vi-VN',
  fr: 'fr-FR',
  de: 'de-DE',
  tr: 'tr-TR',
};

// Check if ResponsiveVoice is available
const isResponsiveVoiceAvailable = (): boolean => {
  return typeof window !== 'undefined' && 'responsiveVoice' in window;
};

// Check if Web Speech API is available
const isWebSpeechAvailable = (): boolean => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
};

// ResponsiveVoice implementation (High Quality)
const speakWithResponsiveVoice = (text: string, language: LanguageCode, config: SpeechConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!isResponsiveVoiceAvailable()) {
      reject(new Error('ResponsiveVoice is not available'));
      return;
    }

    // Special handling for Vietnamese - try multiple voice options
    let voiceOptions = alternativeVoiceMapping[language] || [responsiveVoiceLanguages[language] || responsiveVoiceLanguages.en];
    
    // For Vietnamese, add more fallback options
    if (language === 'vi') {
      voiceOptions = [
        'Vietnamese Female',
        'Vietnamese Male', 
        'Vietnamese',
        'vi-VN',
        'vi',
        'Vietnamese (Vietnam)',
        'Viet Nam',
        'UK English Female' // Final fallback
      ];
    }
    
    const tryVoice = (voiceIndex: number) => {
      if (voiceIndex >= voiceOptions.length) {
        reject(new Error(`All voice options failed for language: ${language}`));
        return;
      }
      
      const voice = voiceOptions[voiceIndex];
      console.log(`Trying voice: ${voice} for language: ${language} (attempt ${voiceIndex + 1}/${voiceOptions.length})`);
      
      try {
        // Add timeout to prevent hanging
        const timeoutId = setTimeout(() => {
          console.warn(`Voice ${voice} timed out, trying next...`);
          tryVoice(voiceIndex + 1);
        }, 5000);
        
        (window as any).responsiveVoice.speak(text, voice, {
          rate: config.rate || 0.8,
          pitch: config.pitch || 1.0,
          volume: config.volume || 1.0,
          onstart: () => {
            clearTimeout(timeoutId);
            console.log(`ResponsiveVoice started with ${voice}`);
          },
          onend: () => {
            clearTimeout(timeoutId);
            console.log(`ResponsiveVoice ended with ${voice}`);
            resolve();
          },
          onerror: (error: any) => {
            clearTimeout(timeoutId);
            console.warn(`ResponsiveVoice error with ${voice}:`, error);
            // Try next voice option
            setTimeout(() => tryVoice(voiceIndex + 1), 100);
          },
        });
      } catch (error) {
        console.warn(`Failed to use voice ${voice}:`, error);
        setTimeout(() => tryVoice(voiceIndex + 1), 100);
      }
    };
    
    tryVoice(0);
  });
};

// Google Cloud Text-to-Speech implementation (Highest Quality)
const speakWithGoogle = async (text: string, language: LanguageCode, config: SpeechConfig): Promise<void> => {
  if (!config.apiKey) {
    throw new Error('Google Cloud TTS API key is required');
  }

  const languageCode = googleLanguages[language] || 'en-US';
  
  try {
    const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { text },
        voice: {
          languageCode,
          name: `${languageCode}-Neural2-A`, // Use neural voices for better quality
          ssmlGender: 'FEMALE',
        },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate: config.rate || 0.8,
          pitch: config.pitch || 1.0,
          volumeGainDb: 0,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Google TTS API error: ${response.status}`);
    }

    const data = await response.json();
    const audioContent = data.audioContent;
    
    // Play the audio
    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
    audio.volume = config.volume || 1.0;
    
    return new Promise((resolve, reject) => {
      audio.onended = () => resolve();
      audio.onerror = reject;
      audio.play().catch(reject);
    });
  } catch (error) {
    throw new Error(`Google TTS error: ${error}`);
  }
};

// Enhanced Web Speech API implementation
const speakWithWebSpeech = (text: string, language: LanguageCode, config: SpeechConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!isWebSpeechAvailable()) {
      reject(new Error('Web Speech API is not available'));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const languageCode = webSpeechLanguages[language] || 'en-US';
    
    utterance.lang = languageCode;
    utterance.rate = config.rate || 0.8;
    utterance.pitch = config.pitch || 1.0;
    utterance.volume = config.volume || 1.0;

    // Try to find the best voice for the language
    const voices = speechSynthesis.getVoices();
    console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
    
    // For Vietnamese, try multiple voice patterns
    let preferredVoice = null;
    if (language === 'vi') {
      preferredVoice = voices.find(voice => 
        voice.lang.toLowerCase().includes('vi') ||
        voice.lang.toLowerCase().includes('vietnamese') ||
        voice.name.toLowerCase().includes('vietnamese')
      );
    } else {
      preferredVoice = voices.find(voice => 
        voice.lang.toLowerCase().includes(language) || 
        voice.lang.toLowerCase().includes(languageCode.toLowerCase())
      );
    }

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      console.log(`Using voice: ${preferredVoice.name} (${preferredVoice.lang}) for language: ${language}`);
    } else {
      console.warn(`No preferred voice found for language: ${language}, using default`);
    }

    utterance.onend = () => {
      console.log('Web Speech API finished speaking');
      resolve();
    };
    utterance.onerror = (error) => {
      console.error('Web Speech API error:', error);
      reject(error);
    };

    speechSynthesis.speak(utterance);
  });
};

// Main speech function with fallback chain
export const speakText = async (
  text: string, 
  language: LanguageCode, 
  config: Partial<SpeechConfig> = {}
): Promise<void> => {
  const finalConfig = { ...defaultConfig, ...config };
  
  // Special handling for Vietnamese
  if (language === 'vi') {
    try {
      await speakVietnameseDirectly(text, finalConfig);
      return;
    } catch (error) {
      console.warn('Direct Vietnamese method failed, trying Google Translate TTS:', error);
      try {
        await speakVietnameseWithGoogleTranslate(text);
        return;
      } catch (error2) {
        console.warn('Google Translate TTS also failed, trying other providers:', error2);
      }
    }
  }
  
  // Try providers in order of quality
  const providers: SpeechProvider[] = [
    'responsivevoice', // Best balance of quality and ease
    'webspeech',       // Fallback
  ];

  // If Google API key is provided, prioritize it
  if (finalConfig.apiKey) {
    providers.unshift('google');
  }

  for (const provider of providers) {
    try {
      switch (provider) {
        case 'responsivevoice':
          if (isResponsiveVoiceAvailable()) {
            await speakWithResponsiveVoice(text, language, finalConfig);
            return;
          }
          break;
        case 'google':
          if (finalConfig.apiKey) {
            await speakWithGoogle(text, language, finalConfig);
            return;
          }
          break;
        case 'webspeech':
          if (isWebSpeechAvailable()) {
            await speakWithWebSpeech(text, language, finalConfig);
            return;
          }
          break;
      }
    } catch (error) {
      console.warn(`${provider} failed:`, error);
      // Continue to next provider
    }
  }

  throw new Error('No speech provider available');
};

// Convenience function for quick speech
export const speak = (text: string, language: LanguageCode): void => {
  speakText(text, language).catch(error => {
    console.error('Speech failed:', error);
  });
};

// Stop all speech
export const stopSpeech = (): void => {
  if (isWebSpeechAvailable()) {
    speechSynthesis.cancel();
  }
  
  if (isResponsiveVoiceAvailable()) {
    (window as any).responsiveVoice.cancel();
  }
};

// Check if any speech provider is available
export const isSpeechAvailable = (): boolean => {
  return isResponsiveVoiceAvailable() || isWebSpeechAvailable();
};

// Get available speech providers
export const getAvailableProviders = (): SpeechProvider[] => {
  const providers: SpeechProvider[] = [];
  
  if (isResponsiveVoiceAvailable()) {
    providers.push('responsivevoice');
  }
  
  if (isWebSpeechAvailable()) {
    providers.push('webspeech');
  }
  
  return providers;
};

// Special Vietnamese pronunciation function with multiple fallback methods
const speakVietnameseDirectly = (text: string, config: SpeechConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log('Trying direct Vietnamese pronunciation...');
    
    // Method 1: Try ResponsiveVoice with Vietnamese voices
    if (isResponsiveVoiceAvailable()) {
      const vietnameseVoices = [
        'Vietnamese Female',
        'Vietnamese Male',
        'Vietnamese',
        'vi-VN',
        'vi',
        'US English Female' // Fallback to English for Vietnamese text
      ];
      
      const tryResponsiveVoice = (voiceIndex: number): void => {
        if (voiceIndex >= vietnameseVoices.length) {
          console.log('ResponsiveVoice Vietnamese voices exhausted, trying Web Speech API');
          tryWebSpeechVietnamese();
          return;
        }
        
        const voice = vietnameseVoices[voiceIndex];
        console.log(`Trying ResponsiveVoice with voice: ${voice}`);
        
            try {
      (window as any).responsiveVoice.speak(text, voice, {
            rate: 0.7,
            pitch: 1.0,
            volume: config.volume || 1.0,
            onstart: () => {
              console.log(`ResponsiveVoice started with ${voice}`);
            },
            onend: () => {
              console.log(`ResponsiveVoice ended successfully with ${voice}`);
              resolve();
            },
            onerror: (error: any) => {
              console.warn(`ResponsiveVoice error with ${voice}:`, error);
              setTimeout(() => tryResponsiveVoice(voiceIndex + 1), 100);
            }
          });
        } catch (error) {
          console.warn(`ResponsiveVoice exception with ${voice}:`, error);
          setTimeout(() => tryResponsiveVoice(voiceIndex + 1), 100);
        }
      };
      
      tryResponsiveVoice(0);
    } else {
      console.log('ResponsiveVoice not available, trying Web Speech API');
      tryWebSpeechVietnamese();
    }
    
    // Method 2: Web Speech API with Vietnamese-specific handling
    function tryWebSpeechVietnamese(): void {
      if (!isWebSpeechAvailable()) {
        console.log('Web Speech API not available, trying browser TTS');
        tryBrowserTTS();
        return;
      }
      
      console.log('Trying Web Speech API for Vietnamese');
      
      // Wait for voices to load
      const speakWithWebSpeech = () => {
        const voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
        
        // Find Vietnamese voices
        const vietnameseVoices = voices.filter(voice => 
          voice.lang.toLowerCase().includes('vi') ||
          voice.lang.toLowerCase().includes('vn') ||
          voice.name.toLowerCase().includes('vietnamese')
        );
        
        console.log('Vietnamese voices found:', vietnameseVoices);
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.7;
        utterance.pitch = 1.0;
        utterance.volume = config.volume || 1.0;
        
        if (vietnameseVoices.length > 0) {
          utterance.voice = vietnameseVoices[0];
          console.log(`Using Vietnamese voice: ${vietnameseVoices[0].name}`);
        } else {
          console.log('No Vietnamese voices found, using default with vi-VN language');
        }
        
        utterance.onend = () => {
          console.log('Web Speech API Vietnamese ended successfully');
          resolve();
        };
        
        utterance.onerror = (error) => {
          console.error('Web Speech API Vietnamese error:', error);
          tryBrowserTTS();
        };
        
        speechSynthesis.speak(utterance);
      };
      
      // Check if voices are already loaded
      if (speechSynthesis.getVoices().length > 0) {
        speakWithWebSpeech();
      } else {
        // Wait for voices to load
        speechSynthesis.onvoiceschanged = () => {
          speechSynthesis.onvoiceschanged = null;
          speakWithWebSpeech();
        };
        
        // Fallback timeout
        setTimeout(() => {
          if (speechSynthesis.onvoiceschanged) {
            speechSynthesis.onvoiceschanged = null;
            speakWithWebSpeech();
          }
        }, 1000);
      }
    }
    
    // Method 3: Simple browser TTS fallback
    function tryBrowserTTS(): void {
      console.log('Trying simple browser TTS for Vietnamese');
      
      if (!isWebSpeechAvailable()) {
        reject(new Error('No speech synthesis available'));
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi';
      utterance.rate = 0.6;
      utterance.pitch = 1.0;
      utterance.volume = config.volume || 1.0;
      
      utterance.onend = () => {
        console.log('Simple browser TTS ended');
        resolve();
      };
      
      utterance.onerror = (error) => {
        console.error('Simple browser TTS error:', error);
        reject(new Error('All Vietnamese pronunciation methods failed'));
      };
      
      speechSynthesis.speak(utterance);
    }
  });
};

// Alternative Vietnamese TTS using Google Translate (as fallback)
const speakVietnameseWithGoogleTranslate = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Create audio element with Google Translate TTS URL
      const audio = new Audio();
      const encodedText = encodeURIComponent(text);
      
      // Google Translate TTS URL (public API)
      const gttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodedText}`;
      
      audio.src = gttsUrl;
      audio.onended = () => {
        console.log('Google Translate TTS ended successfully');
        resolve();
      };
      audio.onerror = (error) => {
        console.error('Google Translate TTS error:', error);
        reject(new Error('Google Translate TTS failed'));
      };
      
      console.log('Playing Vietnamese with Google Translate TTS');
      audio.play().catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

// Test Vietnamese pronunciation specifically
export const testVietnamesePronunciation = async (text: string = 'Xin chào'): Promise<void> => {
  console.log('Testing Vietnamese pronunciation...');
  
  // Try special Vietnamese function first
  try {
    await speakVietnameseDirectly(text, defaultConfig);
    console.log('Vietnamese pronunciation test successful with direct method');
    return;
  } catch (error) {
    console.error('Direct Vietnamese method failed:', error);
  }
  
  // Try Google Translate TTS as fallback
  try {
    await speakVietnameseWithGoogleTranslate(text);
    console.log('Vietnamese pronunciation test successful with Google Translate TTS');
    return;
  } catch (error) {
    console.error('Google Translate TTS failed:', error);
  }
  
  // Check if ResponsiveVoice is available
  if (isResponsiveVoiceAvailable()) {
    console.log('ResponsiveVoice is available');
    try {
      await speakWithResponsiveVoice(text, 'vi', defaultConfig);
      console.log('Vietnamese pronunciation test successful with ResponsiveVoice');
      return;
    } catch (error) {
      console.error('ResponsiveVoice Vietnamese test failed:', error);
    }
  } else {
    console.log('ResponsiveVoice is not available');
  }
  
  // Try Web Speech API
  if (isWebSpeechAvailable()) {
    console.log('Web Speech API is available');
    try {
      await speakWithWebSpeech(text, 'vi', defaultConfig);
      console.log('Vietnamese pronunciation test successful with Web Speech API');
      return;
    } catch (error) {
      console.error('Web Speech API Vietnamese test failed:', error);
    }
  } else {
    console.log('Web Speech API is not available');
  }
  
  throw new Error('No speech provider can handle Vietnamese');
};

// Debug function to check ResponsiveVoice status
export const debugResponsiveVoice = (): void => {
  console.log('=== ResponsiveVoice Debug Info ===');
  console.log('Window object has responsiveVoice:', 'responsiveVoice' in window);
  
  if ('responsiveVoice' in window) {
    const rv = (window as any).responsiveVoice;
    console.log('ResponsiveVoice object:', rv);
    console.log('ResponsiveVoice.voiceSupport():', rv.voiceSupport?.());
    console.log('ResponsiveVoice.getVoices():', rv.getVoices?.());
    
    // Try to get Vietnamese voices specifically
    const voices = rv.getVoices?.() || [];
    const vietnameseVoices = voices.filter((voice: any) => 
      voice.name?.toLowerCase().includes('vietnamese') || 
      voice.lang?.toLowerCase().includes('vi')
    );
    console.log('Vietnamese voices found:', vietnameseVoices);
    
    // Test if ResponsiveVoice supports Vietnamese
    console.log('Testing ResponsiveVoice Vietnamese support...');
    rv.speak?.('Test', 'Vietnamese Female', {
      onstart: () => console.log('ResponsiveVoice Vietnamese test started'),
      onend: () => console.log('ResponsiveVoice Vietnamese test ended'),
      onerror: (error: any) => console.error('ResponsiveVoice Vietnamese test error:', error)
    });
  }
  
  console.log('=== Web Speech API Debug Info ===');
  console.log('speechSynthesis available:', 'speechSynthesis' in window);
  
  if ('speechSynthesis' in window) {
    const voices = speechSynthesis.getVoices();
    console.log('Total voices:', voices.length);
    const vietnameseVoices = voices.filter(voice => 
      voice.lang.toLowerCase().includes('vi') ||
      voice.name.toLowerCase().includes('vietnamese')
    );
    console.log('Vietnamese voices in Web Speech API:', vietnameseVoices);
    
    // List all voices for debugging
    console.log('All available voices:');
    voices.forEach((voice, index) => {
      console.log(`${index}: ${voice.name} (${voice.lang}) - ${voice.localService ? 'Local' : 'Remote'}`);
    });
    
    // Test Web Speech API with Vietnamese
    if (vietnameseVoices.length > 0) {
      console.log('Testing Web Speech API Vietnamese...');
      const utterance = new SpeechSynthesisUtterance('Test');
      utterance.voice = vietnameseVoices[0];
      utterance.lang = 'vi-VN';
      utterance.onstart = () => console.log('Web Speech API Vietnamese test started');
      utterance.onend = () => console.log('Web Speech API Vietnamese test ended');
      utterance.onerror = (error) => console.error('Web Speech API Vietnamese test error:', error);
      speechSynthesis.speak(utterance);
    }
  }
  
  console.log('=== Browser and System Info ===');
  console.log('User Agent:', navigator.userAgent);
  console.log('Language:', navigator.language);
  console.log('Languages:', navigator.languages);
}; 