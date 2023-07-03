import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import './global.css'

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main>
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </main>
      
    </html>
  )
}
