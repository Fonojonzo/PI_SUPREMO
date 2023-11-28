import { useEffect, useState } from 'react';
import axios from 'axios';
import './ranking.css';

function Ranking() {
  const [allRankings, setAllRankings] = useState({});
  const fetchRankings = async (idJogo) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/ranking/${idJogo}`);
      setAllRankings((prevRankings) => ({
        ...prevRankings,
        [idJogo]: response.data,
      }));
    } catch (error) {
      console.error('Erro ao conseguir ranks:', error);
    }
  };

  useEffect(() => {
    fetchRankings(1);
    fetchRankings(2);
    fetchRankings(3);
  }, []);

  const gameNames = {
    1: 'Asteroids',
    2: 'Cobrinha',
    3: 'Pacman',
  };

  return (
    <main className="rank">
      <h1 className="tit_pag">RANKING GLOBAL</h1>
      <div className="rankings">
        {[1, 2, 3].map((gameId) => (
          <div key={gameId}>
            <label htmlFor={`idJogo${gameId}`}>{`ID do Jogo ${gameId}:`}</label>
            <h1 className={`tit_jogo${gameId}`}>{gameNames[gameId]}</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Posição</th>
                    <th>Usuário</th>
                    <th>Pontuação</th>
                  </tr>
                </thead>
                <tbody>
                  {allRankings[gameId]?.map((ranking, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{ranking.username}</td>
                      <td>{ranking.pontuacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Ranking;
