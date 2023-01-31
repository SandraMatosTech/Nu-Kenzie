import React, { useState } from 'react'
import './style.css'
import NuKenzie from '../../assets/NuKenzie.svg'
import imgCentro from '../../assets/principal.svg'




const LandingPage = ({ setPage }) => {
  const [users, setUsers] = useState([])
  // const [page, setPage] = useState('LadingPage')


  return (
    <main className='mainLandingPage'>
      <div className='divSections'>
        <section className='sectionTextos'>
        <img className="logoNuKenzie" src={NuKenzie} alt="" />
          <p className='pTitulo'>Centralize o controle de suas finanças</p>
          <p className='pSubtitulo'> de forma rápida e segura</p>
          <button className='btnIniciar' type='button' onClick={() => setPage(false)}>Iniciar</button>
        </section>


        <section className='sectionImagem'>
          <img className="imgCentral" src={imgCentro} alt="" />

        </section>      

      </div>

    </main>
  )
}

export default LandingPage