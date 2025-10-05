import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
      <div className="text-center text-white p-8 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">
          SHOW ME THE <span className="text-yellow-300">REAL PATH</span>
        </h1>
        <p className="text-2xl mb-8 text-gray-200">
          Community Based Organization
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <p className="text-xl">
            🕌 Islamic Community Website 🕌
          </p>
          <p className="mt-4">
            React + TailwindCSS is working perfectly!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
            Learn More
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  )
}

export default App