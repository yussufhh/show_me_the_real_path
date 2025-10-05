import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Counters from './components/Counters'
import Charity from './components/Charity'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Counters />
      <Charity />
      <Community />
      <Contact />
      <Footer />
    </div>
  )
}

export default App