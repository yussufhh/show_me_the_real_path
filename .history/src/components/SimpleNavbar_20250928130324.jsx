import React from 'react'

const SimpleNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-lg text-green-700">SHOW ME THE REAL PATH</h1>
              <p className="text-xs text-gray-600">Community Based Organization</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
            <a href="#programs" className="text-gray-700 hover:text-green-600 font-medium">Programs</a>
            <a href="#charity" className="text-gray-700 hover:text-green-600 font-medium">Charity</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SimpleNavbar