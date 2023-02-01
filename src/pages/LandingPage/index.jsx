import React, { useState } from 'react'
import './style.css'
import NuKenzie from '../../assets/logoNuKenzie.svg'
import imgCentro from '../../assets/principal.svg'




const LandingPage = ({ setPage }) => {
  const [users, setUsers] = useState([])
  // const [page, setPage] = useState('LadingPage')


  return (
    <div className='mainLandingPage'>
      <div className='divSectionsLadingPage'>
        <section className='sectionTextos'>
        <img className="logoNuKenzie" src={NuKenzie} alt="" />
          <h1 className='pTitulo'>Centralize o controle
           de suas finanças</h1>
          <p className='pSubtitulo'> de forma rápida e segura</p>
          <button className='btnIniciar' type='button' onClick={() => setPage(false)}>Iniciar</button>
        </section>


        <section className='sectionImagem'>
          <img className="imgCentralMobile" src={imgCentro} alt="" />
          <img className="imgCentralDesktop" src={imgCentro} alt="" />


        </section>      

      </div>

    </div>
  )
}

export default LandingPage