import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinQuiz - Multi-Language Quiz App',
  description: 'Test your knowledge across 9 different languages with customizable quiz settings',
  keywords: 'language learning, quiz, multilingual, vocabulary, education',
  authors: [{ name: 'LinQuiz Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[95vh] flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 