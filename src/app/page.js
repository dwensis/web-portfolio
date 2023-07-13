import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
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
      <Hero />
      <About />
      <Services />
    </main>
  )
}
