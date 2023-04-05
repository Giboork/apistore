import './globals.css'
import Footer from "./components/footer";
import Navbar from "./components/navbar";




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
