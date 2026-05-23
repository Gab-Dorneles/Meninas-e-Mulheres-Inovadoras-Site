import type { Metadata } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Meninas e Mulheres Inovadoras | Unitins',
  description: 'Projeto para incentivar a participação feminina nas áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM), promovendo igualdade de gênero e ampliando oportunidades.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
