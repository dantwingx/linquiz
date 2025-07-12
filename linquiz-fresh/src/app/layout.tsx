import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LinQuiz - Multi-Language Quiz App',
  description: 'Learn languages through interactive quizzes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.responsivevoice.org/responsivevoice.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
