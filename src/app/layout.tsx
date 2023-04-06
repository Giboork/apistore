import './globals.css'
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Head from 'next/head'
import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={inter.className}>
      <body>
      <div>
          <Navbar />
        {children}
        <Footer />
      </div>
      </body>
      </html>
  )
}
