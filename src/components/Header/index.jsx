import './style.css'
import NuKenzie from '../../assets/NuKenzie.svg'





export function Header( {setPage}) {

    return (

        <header className="Header">
            <img className ="logoNuKenzie" src = {NuKenzie} alt="" />
            <button type='button' onClick={ () => {setPage (true)}} >Inicio</button>
        </header>
    )
}

