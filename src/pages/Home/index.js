import React from 'react';
import { Link } from 'react-router-dom';
import PegarUser from 'context/PegarUser';
import './home.css';
import Logo from './img/logo.png'

function Home() {
  const usuarioLogado = PegarUser() !== null; // Supondo que PegarUser() retorne null se o usuário não estiver logado

  return (
    <main className='princi'>
      <img src={Logo}></img>
      <div>
        <p>
          Bem-vindo ao Scored games, o destino definitivo para os amantes de jogos que buscam uma experiência única e competitiva. Nossa plataforma foi cuidadosamente projetada para oferecer diversão e nostalgia, proporcionando aos jogadores de todos os níveis uma oportunidade de se destacar e competir em um ambiente amigável e emocionante.
          Explore jogos clássicos da indústria. No Scored games, a diversidade é a chave. Aqui você encontrará desafios cativantes que testarão suas habilidades e reflexos.
          O que torna o Scored games realmente especial é o nosso sistema de ranking abrangente. Aqui, você não apenas joga pelos pontos, mas compete para subir nas fileiras e alcançar o reconhecimento merecido. Seja desafiando seus amigos ou enfrentando jogadores de todo o mundo, cada vitória e desafio superado ou aproximando-se do topo do ranking. Mantenha-se atualizado com as classificações em tempo real e sinta a emoção de competir contra os melhores.
          Nosso compromisso com um ambiente de jogo justo e respeitoso cria uma atmosfera acolhedora para todos.
          Prepare-se para mergulhar em uma jornada de jogos emocionante no Scored games. Sua busca pela excelência começa aqui. Estamos ansiosos para vê-lo ascender nas fileiras e tornar-se parte da elite do mundo dos jogos. Boa sorte, e que começe a competição!
        </p>
      </div>
      <div>
        <div className='opcoes'>
          <p>Você pode começar a se divertir criando sua conta <Link to="/criar">clicando aqui.</Link></p>
        </div>
        <div className='opcoes'>
          <p> Caso ja tenha conta criado apenas<Link to="/login"> clique aqui para entrar.</Link></p>
        </div>
      </div>
    </main>
  );
}

export default Home;
