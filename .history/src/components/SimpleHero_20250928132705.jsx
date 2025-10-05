import React from 'react'

const SimpleHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SHOW ME THE <span className="text-yellow-300">REAL PATH</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Guiding Our Community Through Da'wah, Education, Charity, and Cooperation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
            Learn About Our Mission
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Support Our Cause
          </button>
        </div>
      </div>
    </section>
  )
}

export default SimpleHero