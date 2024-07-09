import './style.css'
import '../../styles/globalStyles.css'
import '../../styles/reset.css'
import NuKenzie from '../../assets/NuKenzie.svg'





export function Header( {setPage}) {

    return (

        <header >
            <div className='containerHeader'>
                <img className ="logoNuKenzie2" src = {NuKenzie} alt="" />
                <button type='button' className='btnHeaderIniciar' onClick={ () => {setPage (true)}} >Inicio</button>
            </div>
      
        </header>
    )
}

