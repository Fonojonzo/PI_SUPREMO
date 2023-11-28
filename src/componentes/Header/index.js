import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './img/scored_Delivery_1-removebg-preview 1.png';
import Jogo from './img/Group 1.png';
import Ranking from './img/Group 2.png';
import Conta from './img/Group 3.png';
import PegarUser from '../../context/PegarUser';

function Header() {

  const nomeUsuario = PegarUser(); //Pegando o usuário pra digiar olá
  window.nomeUsuario = nomeUsuario;

  console.log(nomeUsuario);

  return (  


    <header className="topo">
      <div>
        <p>Se divertir sem gastos é melhor ainda!</p>
      </div>

      <div className="menu">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt="Logo"></img>
          </Link>
        </div>
        <div className="cxjogos">
          {nomeUsuario && (<h1>Olá, {nomeUsuario} </h1> )}
            
          <Link className="linkscomps" to='/jogos'><img src={Jogo} alt="Jogo"></img></Link>
          <Link className="linkscomps" to='/ranking'><img src={Ranking} alt="Ranking"></img></Link>
          <Link className="linkscomps" to='/login'><img src={Conta} alt="Conta"></img></Link>
          
        </div>
      </div>

      <h1></h1>

      <div className="menu2">
        <Link className="linksjogos" to='/asteroid'>Asteroids</Link>
        <Link className="linksjogos" to='/snake'>Snake game</Link>
        <Link className="linksjogos" to='/pacman'>Pac-man</Link>
      </div>
    </header>
  );
}

export default Header;
