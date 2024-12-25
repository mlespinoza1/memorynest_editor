import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { EditorStoreProvider } from '../lib/store/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Memory Nest Editor',
  description: 'Transform your media with Memory Nest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <EditorStoreProvider>
            {children}
          </EditorStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
