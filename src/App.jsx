import React, { useState } from 'react'
import './App.css'
import { Register } from '../src/components/Register/index.jsx'
import { ValorTotal } from '../src/components/Total/index.jsx'
import { ListaCards } from '../src/components/ListCards/index.jsx'
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
