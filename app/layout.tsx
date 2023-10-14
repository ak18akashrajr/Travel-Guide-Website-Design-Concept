import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Travel Design Application',
  description: 'UI UX Application for Campaign',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
