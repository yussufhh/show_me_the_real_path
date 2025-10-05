import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Charity from './pages/Charity'
import Community from './pages/Community'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/dawah" element={<div className="pt-20 p-8 text-center">Da'wah Programs - Coming Soon</div>} />
        <Route path="/programs/education" element={<div className="pt-20 p-8 text-center">Education Programs - Coming Soon</div>} />
        <Route path="/programs/charity" element={<div className="pt-20 p-8 text-center">Charity Programs - Coming Soon</div>} />
        <Route path="/programs/assistance" element={<div className="pt-20 p-8 text-center">Assistance Programs - Coming Soon</div>} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App