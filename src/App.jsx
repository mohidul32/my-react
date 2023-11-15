import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Card />
        <Contact 
          img="../images/cat.png"
          name="Mr. whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meaw"
        />
    </div>
  )
}

export default App
