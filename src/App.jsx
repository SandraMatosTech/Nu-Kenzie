import React, { useState } from 'react'
import {Header} from '../src/components/Header/index'
import './App.css'
import { Register } from '../src/components/Register/index.jsx'
import { ValorTotal } from '../src/components/Total/index.jsx'
import { ListaCards } from '../src/components/ListCards/index.jsx'
import LadingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

// import { ListaCards } from './components/ListCards'

 function App() {
 

  const [listTransactions, setListTransactions] = useState([])

  return (
    <main>

      <Header/>
        <Register setListTransactions={setListTransactions} listTransactions={listTransactions}/>
        {/* {listTransactions.map((user,index) => (
          <Register key={index} descricao ={user.description} valor ={user.value} tipoValor ={user.type}/>
        ))} */}
        <ValorTotal listTransactions={listTransactions}/>
        <ListaCards listTransactions={listTransactions} setListTransactions={setListTransactions}/> 
            
 
    </main>
  )
}

export default App
