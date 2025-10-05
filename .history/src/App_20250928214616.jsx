import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<div className="pt-20 p-8 text-center">Programs Page - Coming Soon</div>} />
        <Route path="/programs/dawah" element={<div className="pt-20 p-8 text-center">Da'wah Programs - Coming Soon</div>} />
        <Route path="/programs/education" element={<div className="pt-20 p-8 text-center">Education Programs - Coming Soon</div>} />
        <Route path="/programs/charity" element={<div className="pt-20 p-8 text-center">Charity Programs - Coming Soon</div>} />
        <Route path="/programs/assistance" element={<div className="pt-20 p-8 text-center">Assistance Programs - Coming Soon</div>} />
        <Route path="/charity" element={<div className="pt-20 p-8 text-center">Charity Page - Coming Soon</div>} />
        <Route path="/community" element={<div className="pt-20 p-8 text-center">Community Page - Coming Soon</div>} />
        <Route path="/contact" element={<div className="pt-20 p-8 text-center">Contact Page - Coming Soon</div>} />
      </Routes>
    </div>
  )
}

export default App