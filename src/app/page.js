import Header from "./components/Header"
import Hero from "./components/textImage"
import Services from "./components/Services"
import Contact from "./components/Contact"
import { Poppins } from 'next/font/google'
import data from '../../public/data/data.json'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '500',
  display: 'swap'
})

export default function Home() {
  return (
    <main className={`min-h-screen justify-between ${poppins.className}`}>
      <Header />
      <Hero 
        title={data['home_hero']['title']}
        description={data['home_hero']['description']} 
        image={data['home_hero']['image']}
      />
      <Hero 
        title={data['about']['title']}
        description={data['about']['description']} 
        reverse
      />
      <Services />
      <Contact />
    </main>
  )
}
