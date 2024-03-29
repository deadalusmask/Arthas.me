import * as stylex from '@stylexjs/stylex'
import type { Metadata } from 'next'
import { lightColors } from '../theme'
import { colors } from '../tokens.stylex'
import './globals.css'
import { openGraph, twitter } from './shared-metadata'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthas.me',
  description: 'random thoughts and notes',
  metadataBase: new URL('https://arthas.me'),
  authors: [
    {
      name: 'Rubick',
      url: 'https://arthas.me'
    }
  ],
  openGraph: openGraph,
  twitter: twitter
}

const styles = stylex.create({
  base: {
    backgroundColor: colors.sage1,
    color: colors.sage12
  }
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let light = false
  return (
    <html lang="zh-CN" {...stylex.props(styles.base, light && lightColors)}>
      <body>{children}</body>
    </html>
  )
}
