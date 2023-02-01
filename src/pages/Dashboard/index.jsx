import React, { useState } from 'react'
import './style.css'
import { ListaCards } from '../../components/ListCards'
import { Register } from '../../components/Register'
import { ValorTotal } from '../../components/Total'
import NaoLancamento from '../../assets/NoCard.svg'
import NaoLancamentoMobile from '../../assets/NoCardMobile.svg'
import { Header } from '../../components/Header'




// import { ListaCards } from './components/ListCards'

function Dashboard({ setPage }) {
  const [listTransactions, setListTransactions] = useState([])


  return (

    <>
    <div>
        <Header setPage={setPage} />
      </div>

      
      <div className='divSections'>
        <section className='sectionA' >
          <Register setListTransactions={setListTransactions} listTransactions={listTransactions} />
          <ValorTotal listTransactions={listTransactions} />
        </section>

        <section className='sectionB'>
          <ListaCards listTransactions={listTransactions} setListTransactions={setListTransactions} />

        </section>
      </div>
    </>
   




  )
}

export default Dashboard
