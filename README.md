# LinQuiz - Multi-Language Quiz App (Next.js)

A modern, responsive multi-language quiz application built with Next.js, TypeScript, and Tailwind CSS. Test your knowledge across 9 different languages with customizable quiz settings.

## 🌟 Features

### Multi-Language Support
- **9 Languages**: Chinese, Korean, English, Japanese, Spanish, Vietnamese, French, German, Turkish
- **Flexible Language Pairing**: Quiz language and answer language can be different
- **Real-time Language Switching**: Change languages mid-quiz

### Question Types
- **Multiple Choice**: Traditional 4-option questions
- **Fill-in-the-Blank**: Text input for answers
- **Audio-Only**: Listen to pronunciation and choose answer
- **Reverse Translation**: Translate from meaning to foreign word
- **Mixed Mode**: Random combination of all types

### Difficulty Levels
- **Beginner**: Basic greetings, family, colors, numbers, food, weather
- **Intermediate**: Travel, business, verbs, grammar
- **Advanced**: Complex words and expressions

### Quiz Customization
- **Question Count**: 5, 10, 15, or 20 questions
- **Time Limits**: 30s, 1min, 2min, or no limit
- **Auto-play**: Automatic pronunciation on question load
- **Progress Tracking**: Visual progress bar and question counter

### Additional Features
- **Responsive Design**: Works perfectly on all devices
- **Local Storage**: Saves quiz history and settings
- **Text-to-Speech**: Pronunciation support using Web Speech API
- **Quiz History**: Detailed tracking with filtering options
- **Modern UI**: Beautiful, intuitive interface with animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd linquiz-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
linquiz-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Main page component
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Header.tsx         # Header with navigation
│   │   ├── StartScreen.tsx    # Quiz configuration screen
│   │   ├── QuizScreen.tsx     # Active quiz interface
│   │   ├── ResultsScreen.tsx  # Quiz results display
│   │   └── HistoryScreen.tsx  # Quiz history interface
│   ├── data/                  # Static data
│   │   └── multilingualData.ts # Language vocabulary data
│   ├── types/                 # TypeScript type definitions
│   │   └── quiz.ts           # Quiz-related interfaces
│   └── utils/                 # Utility functions
│       ├── quizUtils.ts       # Quiz generation logic
│       └── storage.ts         # Local storage utilities
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🧩 Core Components

### Header Component
- Navigation buttons (Home, History, Auto-play toggle)
- Responsive design with mobile optimization
- Real-time auto-play status display

### StartScreen Component
- Quiz configuration interface
- Language selection dropdowns
- Difficulty and question type settings
- Time limit and question count options

### QuizScreen Component (Coming Soon)
- Active quiz interface
- Progress tracking
- Question display with audio support
- Answer selection and validation

### ResultsScreen Component (Coming Soon)
- Score display with visual feedback
- Performance statistics
- Restart and history navigation

### HistoryScreen Component (Coming Soon)
- Quiz history with filtering
- Detailed question-by-question results
- Statistics and performance tracking

## 📊 Data Structure

### Word Object
```typescript
interface Word {
  id: string;
  type: string;
  difficulty?: string;
  translations: {
    zh: { text: string; pronunciation: string };
    ko: { text: string; pronunciation: string };
    // ... other languages
  };
  meanings: {
    en: string;
    zh: string;
    // ... other languages
  };
}
```

### Quiz Question
```typescript
interface QuizQuestion {
  type: string;
  questionType: string;
  questionText: string;
  pronunciation: string;
  options?: string[];
  correctAnswer?: number;
  correctAnswerText: string;
  word: Word;
}
```

## 🎨 Styling

The application uses **Tailwind CSS** for styling with:
- Responsive design patterns
- Custom color schemes
- Smooth animations and transitions
- Mobile-first approach
- Accessibility considerations

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_APP_NAME=LinQuiz
NEXT_PUBLIC_VERSION=1.0.0
```

### Tailwind Configuration
Customize the design system in `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      },
    },
  },
  plugins: [],
}
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original LinQuiz concept and data
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Web Speech API for text-to-speech functionality

## 🔮 Roadmap

### Phase 1 (Current)
- [x] Basic Next.js setup with TypeScript
- [x] Header and StartScreen components
- [x] Quiz configuration interface
- [x] Local storage utilities
- [x] Quiz generation logic

### Phase 2 (Next)
- [ ] QuizScreen component with question display
- [ ] Audio playback functionality
- [ ] Answer validation and scoring
- [ ] Progress tracking

### Phase 3 (Future)
- [ ] ResultsScreen component
- [ ] HistoryScreen component
- [ ] Advanced statistics
- [ ] Social features
- [ ] Offline support

### Phase 4 (Advanced)
- [ ] Spaced repetition algorithm
- [ ] Cloud synchronization
- [ ] Multi-user support
- [ ] Advanced analytics
- [ ] API for external data

## 📞 Support

For support, email support@linquiz.com or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 