import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucca Paradeda',
  description: 'Site pessoal de Lucca Paradeda',
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
