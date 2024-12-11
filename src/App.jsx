import React from 'react'
import Logindiv from './component/Logindiv'
import LoginRight from './component/Loginright'

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Logindiv />
      <LoginRight />
    </div>
  )
}

export default App