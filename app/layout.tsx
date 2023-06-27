'use client'
import './globals.css'
import dotenv from "dotenv";
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

dotenv.config();

const inter = Inter({ subsets: ['latin'] })
 
export const metadata = { 
  title: {
    default:'TechBlog',
    template:'%s',
  },
  description: 'this is blog website contains information about javascript, react , nodejs etc',
  keywords:['next','next js','react','blog','javascript','node js','node','react js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <head>
        <meta name='viewport' content='width=device-width , initial-scale=1.0' />
        <link rel="stylesheet" href="/t.css" />
      </head>
      <body className={inter.className}>
        <div className='container mx-auto font-sans px-5 lg:px-14'>
          <Navbar/>
          <main> 
              {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
    </>
  )
}
