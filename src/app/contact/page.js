import Header from "../components/Header"
import Contact from "../components/contactForm"
import Footer from "../components/Footer"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '500',
  display: 'swap'
})

export default function Home() {
  return (
    <main className={`min-h-screen justify-between ${poppins.className}`}>
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
