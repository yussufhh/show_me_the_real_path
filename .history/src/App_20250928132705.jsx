import React from 'react'
import SimpleNavbar from './components/SimpleNavbar'
import WorkingHero from './components/WorkingHero'
import WorkingAbout from './components/WorkingAbout'

const App = () => {
  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      <WorkingHero />
      <WorkingAbout />
    </div>
  )
}

export default App