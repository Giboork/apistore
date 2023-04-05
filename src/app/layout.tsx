import './globals.css'
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Head from 'next/head'


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
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
