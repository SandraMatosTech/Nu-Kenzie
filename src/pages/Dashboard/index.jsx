import React, { useState } from 'react'
import './style.css'
import { ListaCards } from '../../components/ListCards'
import { Register } from '../../components/Register'
import { ValorTotal } from '../../components/Total'
import NaoLancamento from '../../assets/NoCard.svg'
import NaoLancamentoMobile from '../../assets/NoCardMobile.svg'
import { Header } from '../../components/Header'



function Dashboard({ setPage }) {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <>

      <Header setPage={setPage} />
      <div className='divSections'>
        <aside >
          <Register setListTransactions={setListTransactions} listTransactions={listTransactions} />
          <section className='valorTotal'>
            <ValorTotal listTransactions={listTransactions} />
          </section>
        </aside>
        <main>
          <section >
            <ListaCards listTransactions={listTransactions} setListTransactions={setListTransactions} />
          </section>
        </main>
      </div>
    </>

  )
}

export default Dashboard
