import './style.css'
import NuKenzie from '../../assets/NuKenzie.svg'
import Dashboard from '../../pages/Dashboard'
import LadingPage from '../../pages/LandingPage'


export function Header(){
    const [users,setUsers] = useState([])
    const [page, setPage] = useState('LadingPage')



    return(
        <div className="Header">
             {
            page === 'LandingPage' ? <Dashboard/>
            :
            page=== <LadingPage/>
          }


            <img className ="logoNuKenzie" src = {NuKenzie} alt="" />
            <button  type='button' onClick={() => setPage(Dashboard)}>Inicio</button>
        </div>
    )
}

export default Header