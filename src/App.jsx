import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import DawahPrograms from './pages/DawahPrograms'
import EducationPrograms from './pages/EducationPrograms'
import CharityPrograms from './pages/CharityPrograms'
import AssistancePrograms from './pages/AssistancePrograms'
import Charity from './pages/Charity'
import Community from './pages/Community'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar />                                                                
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/dawah" element={<DawahPrograms />} />
        <Route path="/programs/education" element={<EducationPrograms />} />
        <Route path="/programs/charity" element={<CharityPrograms />} />
        <Route path="/programs/assistance" element={<AssistancePrograms />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App