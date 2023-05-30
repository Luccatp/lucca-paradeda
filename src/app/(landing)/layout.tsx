import './globals.css'
import { Sora } from 'next/font/google'
import { Metadata } from 'next'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucca Paradeda',
  description: 'Site pessoal de Lucca Paradeda',
  icons: [
    {
      href: '/lucca.jpg',
      url: '/lucca.jpg',
      sizes: '80x160',
      type: 'image/jpg',
      rel: 'icon',
    },
  ],
  creator: 'Lucca Paradeda',
  authors: [{ name: 'Lucca Paradeda' }],
  keywords: [
    'Lucca Paradeda',
    'Lucca',
    'Paradeda',
    'Programming',
    'Programação',
    'Desenvolvimento',
    'Development',
    'Web',
    'Web Development',
    'Desenvolvimento Web',
    'Frontend',
    'Frontend Development',
  ],


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className} min-h-screen antialiased grainy __variable_0ec1f4 __variable_deb966`}>{children}</body>
    </html>
  )
}
