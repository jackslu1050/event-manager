import type { Metadata } from 'next';
import Head from 'next/head';
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600','700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is aplatform for event management',
  icons:{icon: '/assets/images/logo.svg'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
