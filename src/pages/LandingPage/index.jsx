import React from 'react'
import './style.css'
import NuKenzie from '../../assets/NuKenzie.svg'
import imgCentro from '../../assets/imgCentral.png'
import { Link } from 'react-router-dom'




const LadingPage = () => {
  const [users,setUsers] = useState([])
  const [page, setPage] = useState('LadingPage')


  return (
    <main>

  
          {
            page === 'LandingPage' ? <LadingPage/>
            :
            page=== <Dashboard/>
          }

          <img className ="logoNuKenzie" src = {NuKenzie} alt="" />
          <p className='pTitulo'>Centralize o controle de suas finanças</p>
          <p className='pSubtitulo'> de forma rápida e segura</p>


          <button className='btnIniciar' type='button' onClick={() => setPage(Dashboard)}>Iniciar</button>
          <img className ="imgCentral" src = {imgCentro} alt="" />

    </main>
  )
}

export default  LadingPage