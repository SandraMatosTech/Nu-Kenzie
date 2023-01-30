import React, { useState } from 'react'
import './App.css'
import { Register } from '../src/components/Register/index.jsx'
import { ValorTotal } from '../src/components/Total/index.jsx'
import { ListaCards } from '../src/components/ListCards/index.jsx'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

function App() {
  const [page, setPage] = useState(true)
  
  
  
  return (
    <main>
      {
      page  ? <LandingPage setPage={setPage}/>
      :
      <Dashboard setPage={setPage}/>
      
      }
    </main>
  )
}

export default App
