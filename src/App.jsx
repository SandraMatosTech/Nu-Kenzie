import React, { useState } from 'react'
import "./App.css";
import "./styles/globalStyles.css";
import "./styles/reset.css";
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'


function App() {
  const [page, setPage] = useState(true)
  
  
  
  return (
    <>
      {
      page  ? <LandingPage setPage={setPage}/>
      :
      <Dashboard setPage={setPage}/>
      
      }
    </>
  )
}

export default App
