import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          SHOW ME THE REAL PATH
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Community Based Organization
        </p>
        <p className="text-gray-500 text-center max-w-2xl">
          Clean slate ready for you to build your Islamic community website from scratch!
          <br />
          Start adding your components and I'll help you improve them.
        </p>
      </div>
    </div>
  )
}

export default App