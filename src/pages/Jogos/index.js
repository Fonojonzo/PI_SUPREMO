import { Link } from 'react-router-dom';
import Nave from './img/nav.png'
import Cobra from './img/cobra.png'
import Pac from './img/pac.png'
import './jogos.css'

function Jogos() {
    return (
      <main className="menujogos">
            <div>
                <Link to='/asteroid'><img src={Nave}></img></Link>
            </div>
            <div>
                <Link to='/snake'><img src={Cobra}></img></Link>
            </div>
            <div>
                <Link to='/pacman'><img className='pac' src={Pac}></img></Link>
            </div>
      </main>
    );
  }
  
  export default Jogos;