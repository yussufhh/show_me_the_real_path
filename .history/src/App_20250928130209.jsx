import React from 'react'

const TestComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-6xl font-bold mb-4">
          SHOW ME THE REAL PATH
        </h1>
        <p className="text-2xl mb-6 text-yellow-300">
          Community Based Organization
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <p className="text-lg">
            Website is working! TailwindCSS is properly configured.
          </p>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return <TestComponent />
}

export default App