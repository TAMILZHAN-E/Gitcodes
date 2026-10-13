import React from 'react'
import { useState } from 'react'
const Theme = () => {

const [darkMode, setDarkMode] = useState(false)
  return (
    
      <div style={{ background: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', height: '100vh' }}>
      <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>
      
    </div>
  )
}

export default Theme
