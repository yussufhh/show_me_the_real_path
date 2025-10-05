import React from 'react'

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #059669, #16a34a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          SHOW ME THE <span style={{color: '#ffd700'}}>REAL PATH</span>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Community Based Organization
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '1rem',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
            🕌 Islamic Community Website 🕌
          </p>
          <p>
            React is working! Website is live!
          </p>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#ffd700',
            color: '#1f2937',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            Learn More
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '2px solid rgba(255,255,255,0.3)',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Get Involved
          </button>
        </div>
      </div>
    </div>
  )
}

export default App