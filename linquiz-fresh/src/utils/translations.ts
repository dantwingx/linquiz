import { LanguageCode } from '@/types/quiz';

export interface Translations {
  // Common
  loading: string;
  error: string;
  cancel: string;
  confirm: string;
  close: string;
  
  // Navigation
  home: string;
  history: string;
  settings: string;
  
  // Quiz Setup
  startQuiz: string;
  sourceLanguage: string;
  targetLanguage: string;
  difficulty: string;
  questionType: string;
  questionCount: string;
  timeLimit: string;
  
  // Difficulty levels
  easy: string;
  medium: string;
  hard: string;
  mixed: string;
  
  // Question types
  multipleChoice: string;
  fillBlank: string;
  listening: string;
  translation: string;
  
  // Quiz
  question: string;
  answer: string;
  correct: string;
  incorrect: string;
  nextQuestion: string;
  
  // Results
  score: string;
  percentage: string;
  correctAnswers: string;
  totalQuestions: string;
  timeSpent: string;
  
  // History
  quizHistory: string;
  wrongAnswers: string;
  totalQuizzes: string;
  averageScore: string;
  bestScore: string;
  clearHistory: string;
  
  // Speech
  autoPlay: string;
  speechSettings: string;
  
  // Time
  noLimit: string;
  seconds: string;
  minutes: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    // Common
    loading: 'Loading...',
    error: 'Error',
    cancel: 'Cancel',
    confirm: 'Confirm',
    close: 'Close',
    
    // Navigation
    home: 'Home',
    history: 'History',
    settings: 'Settings',
    
    // Quiz Setup
    startQuiz: 'Start Quiz',
    sourceLanguage: 'From (Source Language)',
    targetLanguage: 'To (Target Language)',
    difficulty: 'Difficulty',
    questionType: 'Question Type',
    questionCount: 'Question Count',
    timeLimit: 'Time Limit',
    
    // Difficulty levels
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    mixed: 'Mixed',
    
    // Question types
    multipleChoice: 'Multiple Choice',
    fillBlank: 'Fill Blank',
    listening: 'Listening',
    translation: 'Translation',
    
    // Quiz
    question: 'Question',
    answer: 'Answer',
    correct: 'Correct',
    incorrect: 'Incorrect',
    nextQuestion: 'Next Question',
    
    // Results
    score: 'Score',
    percentage: 'Percentage',
    correctAnswers: 'Correct Answers',
    totalQuestions: 'Total Questions',
    timeSpent: 'Time Spent',
    
    // History
    quizHistory: 'Quiz History',
    wrongAnswers: 'Wrong Answers',
    totalQuizzes: 'Total Quizzes',
    averageScore: 'Average Score',
    bestScore: 'Best Score',
    clearHistory: 'Clear History',
    
    // Speech
    autoPlay: 'Auto-play',
    speechSettings: 'Speech Settings',
    
    // Time
    noLimit: 'No Limit',
    seconds: 'seconds',
    minutes: 'minutes',
  },
  
  ko: {
    // Common
    loading: '로딩 중...',
    error: '오류',
    cancel: '취소',
    confirm: '확인',
    close: '닫기',
    
    // Navigation
    home: '홈',
    history: '기록',
    settings: '설정',
    
    // Quiz Setup
    startQuiz: '퀴즈 시작',
    sourceLanguage: '출발 언어',
    targetLanguage: '목표 언어',
    difficulty: '난이도',
    questionType: '문제 유형',
    questionCount: '문제 수',
    timeLimit: '시간 제한',
    
    // Difficulty levels
    easy: '쉬움',
    medium: '보통',
    hard: '어려움',
    mixed: '혼합',
    
    // Question types
    multipleChoice: '객관식',
    fillBlank: '빈칸 채우기',
    listening: '듣기',
    translation: '번역',
    
    // Quiz
    question: '문제',
    answer: '답',
    correct: '정답',
    incorrect: '오답',
    nextQuestion: '다음 문제',
    
    // Results
    score: '점수',
    percentage: '백분율',
    correctAnswers: '정답 수',
    totalQuestions: '총 문제 수',
    timeSpent: '소요 시간',
    
    // History
    quizHistory: '퀴즈 기록',
    wrongAnswers: '틀린 답변',
    totalQuizzes: '총 퀴즈 수',
    averageScore: '평균 점수',
    bestScore: '최고 점수',
    clearHistory: '기록 삭제',
    
    // Speech
    autoPlay: '자동 재생',
    speechSettings: '음성 설정',
    
    // Time
    noLimit: '제한 없음',
    seconds: '초',
    minutes: '분',
  },
  
  zh: {
    // Common
    loading: '加载中...',
    error: '错误',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    
    // Navigation
    home: '首页',
    history: '历史',
    settings: '设置',
    
    // Quiz Setup
    startQuiz: '开始测验',
    sourceLanguage: '源语言',
    targetLanguage: '目标语言',
    difficulty: '难度',
    questionType: '题型',
    questionCount: '题数',
    timeLimit: '时间限制',
    
    // Difficulty levels
    easy: '简单',
    medium: '中等',
    hard: '困难',
    mixed: '混合',
    
    // Question types
    multipleChoice: '选择题',
    fillBlank: '填空题',
    listening: '听力',
    translation: '翻译',
    
    // Quiz
    question: '问题',
    answer: '答案',
    correct: '正确',
    incorrect: '错误',
    nextQuestion: '下一题',
    
    // Results
    score: '得分',
    percentage: '百分比',
    correctAnswers: '正确答案',
    totalQuestions: '总题数',
    timeSpent: '用时',
    
    // History
    quizHistory: '测验历史',
    wrongAnswers: '错误答案',
    totalQuizzes: '总测验数',
    averageScore: '平均分',
    bestScore: '最高分',
    clearHistory: '清除历史',
    
    // Speech
    autoPlay: '自动播放',
    speechSettings: '语音设置',
    
    // Time
    noLimit: '无限制',
    seconds: '秒',
    minutes: '分钟',
  },
  
  ja: {
    // Common
    loading: '読み込み中...',
    error: 'エラー',
    cancel: 'キャンセル',
    confirm: '確認',
    close: '閉じる',
    
    // Navigation
    home: 'ホーム',
    history: '履歴',
    settings: '設定',
    
    // Quiz Setup
    startQuiz: 'クイズ開始',
    sourceLanguage: 'ソース言語',
    targetLanguage: 'ターゲット言語',
    difficulty: '難易度',
    questionType: '問題タイプ',
    questionCount: '問題数',
    timeLimit: '時間制限',
    
    // Difficulty levels
    easy: '簡単',
    medium: '普通',
    hard: '難しい',
    mixed: 'ミックス',
    
    // Question types
    multipleChoice: '選択問題',
    fillBlank: '空欄埋め',
    listening: 'リスニング',
    translation: '翻訳',
    
    // Quiz
    question: '問題',
    answer: '答え',
    correct: '正解',
    incorrect: '不正解',
    nextQuestion: '次の問題',
    
    // Results
    score: 'スコア',
    percentage: 'パーセンテージ',
    correctAnswers: '正解数',
    totalQuestions: '総問題数',
    timeSpent: '所要時間',
    
    // History
    quizHistory: 'クイズ履歴',
    wrongAnswers: '間違った答え',
    totalQuizzes: '総クイズ数',
    averageScore: '平均スコア',
    bestScore: '最高スコア',
    clearHistory: '履歴削除',
    
    // Speech
    autoPlay: '自動再生',
    speechSettings: '音声設定',
    
    // Time
    noLimit: '制限なし',
    seconds: '秒',
    minutes: '分',
  },
  
  es: {
    // Common
    loading: 'Cargando...',
    error: 'Error',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    close: 'Cerrar',
    
    // Navigation
    home: 'Inicio',
    history: 'Historial',
    settings: 'Configuración',
    
    // Quiz Setup
    startQuiz: 'Comenzar Quiz',
    sourceLanguage: 'Idioma de origen',
    targetLanguage: 'Idioma objetivo',
    difficulty: 'Dificultad',
    questionType: 'Tipo de pregunta',
    questionCount: 'Número de preguntas',
    timeLimit: 'Límite de tiempo',
    
    // Difficulty levels
    easy: 'Fácil',
    medium: 'Medio',
    hard: 'Difícil',
    mixed: 'Mixto',
    
    // Question types
    multipleChoice: 'Opción múltiple',
    fillBlank: 'Llenar espacio',
    listening: 'Escuchar',
    translation: 'Traducción',
    
    // Quiz
    question: 'Pregunta',
    answer: 'Respuesta',
    correct: 'Correcto',
    incorrect: 'Incorrecto',
    nextQuestion: 'Siguiente pregunta',
    
    // Results
    score: 'Puntuación',
    percentage: 'Porcentaje',
    correctAnswers: 'Respuestas correctas',
    totalQuestions: 'Total de preguntas',
    timeSpent: 'Tiempo empleado',
    
    // History
    quizHistory: 'Historial de Quiz',
    wrongAnswers: 'Respuestas incorrectas',
    totalQuizzes: 'Total de Quizzes',
    averageScore: 'Puntuación promedio',
    bestScore: 'Mejor puntuación',
    clearHistory: 'Borrar historial',
    
    // Speech
    autoPlay: 'Reproducción automática',
    speechSettings: 'Configuración de voz',
    
    // Time
    noLimit: 'Sin límite',
    seconds: 'segundos',
    minutes: 'minutos',
  },
  
  vi: {
    // Common
    loading: 'Đang tải...',
    error: 'Lỗi',
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    close: 'Đóng',
    
    // Navigation
    home: 'Trang chủ',
    history: 'Lịch sử',
    settings: 'Cài đặt',
    
    // Quiz Setup
    startQuiz: 'Bắt đầu Quiz',
    sourceLanguage: 'Ngôn ngữ nguồn',
    targetLanguage: 'Ngôn ngữ đích',
    difficulty: 'Độ khó',
    questionType: 'Loại câu hỏi',
    questionCount: 'Số câu hỏi',
    timeLimit: 'Giới hạn thời gian',
    
    // Difficulty levels
    easy: 'Dễ',
    medium: 'Trung bình',
    hard: 'Khó',
    mixed: 'Hỗn hợp',
    
    // Question types
    multipleChoice: 'Trắc nghiệm',
    fillBlank: 'Điền vào chỗ trống',
    listening: 'Nghe',
    translation: 'Dịch',
    
    // Quiz
    question: 'Câu hỏi',
    answer: 'Câu trả lời',
    correct: 'Đúng',
    incorrect: 'Sai',
    nextQuestion: 'Câu hỏi tiếp theo',
    
    // Results
    score: 'Điểm',
    percentage: 'Phần trăm',
    correctAnswers: 'Câu trả lời đúng',
    totalQuestions: 'Tổng số câu hỏi',
    timeSpent: 'Thời gian sử dụng',
    
    // History
    quizHistory: 'Lịch sử Quiz',
    wrongAnswers: 'Câu trả lời sai',
    totalQuizzes: 'Tổng số Quiz',
    averageScore: 'Điểm trung bình',
    bestScore: 'Điểm cao nhất',
    clearHistory: 'Xóa lịch sử',
    
    // Speech
    autoPlay: 'Tự động phát',
    speechSettings: 'Cài đặt giọng nói',
    
    // Time
    noLimit: 'Không giới hạn',
    seconds: 'giây',
    minutes: 'phút',
  },
  
  fr: {
    // Common
    loading: 'Chargement...',
    error: 'Erreur',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    close: 'Fermer',
    
    // Navigation
    home: 'Accueil',
    history: 'Historique',
    settings: 'Paramètres',
    
    // Quiz Setup
    startQuiz: 'Commencer le Quiz',
    sourceLanguage: 'Langue source',
    targetLanguage: 'Langue cible',
    difficulty: 'Difficulté',
    questionType: 'Type de question',
    questionCount: 'Nombre de questions',
    timeLimit: 'Limite de temps',
    
    // Difficulty levels
    easy: 'Facile',
    medium: 'Moyen',
    hard: 'Difficile',
    mixed: 'Mixte',
    
    // Question types
    multipleChoice: 'Choix multiple',
    fillBlank: 'Remplir le vide',
    listening: 'Écoute',
    translation: 'Traduction',
    
    // Quiz
    question: 'Question',
    answer: 'Réponse',
    correct: 'Correct',
    incorrect: 'Incorrect',
    nextQuestion: 'Question suivante',
    
    // Results
    score: 'Score',
    percentage: 'Pourcentage',
    correctAnswers: 'Réponses correctes',
    totalQuestions: 'Total des questions',
    timeSpent: 'Temps passé',
    
    // History
    quizHistory: 'Historique des Quiz',
    wrongAnswers: 'Mauvaises réponses',
    totalQuizzes: 'Total des Quiz',
    averageScore: 'Score moyen',
    bestScore: 'Meilleur score',
    clearHistory: 'Effacer l\'historique',
    
    // Speech
    autoPlay: 'Lecture automatique',
    speechSettings: 'Paramètres vocaux',
    
    // Time
    noLimit: 'Pas de limite',
    seconds: 'secondes',
    minutes: 'minutes',
  },
  
  de: {
    // Common
    loading: 'Laden...',
    error: 'Fehler',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    close: 'Schließen',
    
    // Navigation
    home: 'Startseite',
    history: 'Verlauf',
    settings: 'Einstellungen',
    
    // Quiz Setup
    startQuiz: 'Quiz starten',
    sourceLanguage: 'Quellsprache',
    targetLanguage: 'Zielsprache',
    difficulty: 'Schwierigkeit',
    questionType: 'Fragetyp',
    questionCount: 'Anzahl der Fragen',
    timeLimit: 'Zeitlimit',
    
    // Difficulty levels
    easy: 'Einfach',
    medium: 'Mittel',
    hard: 'Schwer',
    mixed: 'Gemischt',
    
    // Question types
    multipleChoice: 'Multiple Choice',
    fillBlank: 'Lücke füllen',
    listening: 'Hören',
    translation: 'Übersetzung',
    
    // Quiz
    question: 'Frage',
    answer: 'Antwort',
    correct: 'Richtig',
    incorrect: 'Falsch',
    nextQuestion: 'Nächste Frage',
    
    // Results
    score: 'Punktzahl',
    percentage: 'Prozentsatz',
    correctAnswers: 'Richtige Antworten',
    totalQuestions: 'Gesamtfragen',
    timeSpent: 'Verwendete Zeit',
    
    // History
    quizHistory: 'Quiz-Verlauf',
    wrongAnswers: 'Falsche Antworten',
    totalQuizzes: 'Gesamte Quizzes',
    averageScore: 'Durchschnittliche Punktzahl',
    bestScore: 'Beste Punktzahl',
    clearHistory: 'Verlauf löschen',
    
    // Speech
    autoPlay: 'Automatische Wiedergabe',
    speechSettings: 'Spracheinstellungen',
    
    // Time
    noLimit: 'Keine Begrenzung',
    seconds: 'Sekunden',
    minutes: 'Minuten',
  },
  
  tr: {
    // Common
    loading: 'Yükleniyor...',
    error: 'Hata',
    cancel: 'İptal',
    confirm: 'Onayla',
    close: 'Kapat',
    
    // Navigation
    home: 'Ana Sayfa',
    history: 'Geçmiş',
    settings: 'Ayarlar',
    
    // Quiz Setup
    startQuiz: 'Quiz Başlat',
    sourceLanguage: 'Kaynak Dil',
    targetLanguage: 'Hedef Dil',
    difficulty: 'Zorluk',
    questionType: 'Soru Türü',
    questionCount: 'Soru Sayısı',
    timeLimit: 'Zaman Sınırı',
    
    // Difficulty levels
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor',
    mixed: 'Karışık',
    
    // Question types
    multipleChoice: 'Çoktan Seçmeli',
    fillBlank: 'Boşluk Doldur',
    listening: 'Dinleme',
    translation: 'Çeviri',
    
    // Quiz
    question: 'Soru',
    answer: 'Cevap',
    correct: 'Doğru',
    incorrect: 'Yanlış',
    nextQuestion: 'Sonraki Soru',
    
    // Results
    score: 'Puan',
    percentage: 'Yüzde',
    correctAnswers: 'Doğru Cevaplar',
    totalQuestions: 'Toplam Soru',
    timeSpent: 'Harcanan Zaman',
    
    // History
    quizHistory: 'Quiz Geçmişi',
    wrongAnswers: 'Yanlış Cevaplar',
    totalQuizzes: 'Toplam Quiz',
    averageScore: 'Ortalama Puan',
    bestScore: 'En İyi Puan',
    clearHistory: 'Geçmişi Temizle',
    
    // Speech
    autoPlay: 'Otomatik Oynat',
    speechSettings: 'Ses Ayarları',
    
    // Time
    noLimit: 'Sınırsız',
    seconds: 'saniye',
    minutes: 'dakika',
  },
};

export function getTranslations(language: LanguageCode): Translations {
  return translations[language] || translations.en;
}

export function useTranslation(language: LanguageCode) {
  const t = getTranslations(language);
  return { t };
} 