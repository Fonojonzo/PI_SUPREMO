import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Logo from './scored_Delivery_1-removebg-preview 1.png';

function Criar() {
  
  const [mensagem, setMensagem] = useState('');

  const enviarDados = async () => {
    try {
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const senha = document.getElementById('senha').value;

      const response = await axios.post('http://localhost:5000/api/usuarios', {
        nome,
        email,
        username,
        senha,
      });

      if (response.status === 201) {
        setMensagem('Usuário criado com sucesso!');
      } else {
        setMensagem(response.data.error || 'Erro ao criar usuário. Tente novamente.');
      }

    } catch (error) {
      console.error('Erro ao enviar dados', error);
      setMensagem('Este usuário já está registrado.');
    }
  };

  return (
    <main>
      <div className="janela">
        <img src={Logo} alt="Logo"></img>
        <h2>Crie sua conta</h2>
        <input id="nome" placeholder="NOME" type="text"></input>
        <input id="email" placeholder="E-MAIL" type="email"></input>
        <div className="formato_criar">
          <input id="username" placeholder="USERNAME" type="text"></input>
          <input id="senha" placeholder="SENHA" type="password"></input>
        </div>
        <button className="botao_env" onClick={enviarDados}>
          ENVIAR
        </button>

        {mensagem && <p className='Mensagem'>{mensagem}</p>}

        <Link className="linkconta" to="/login">
          Já tenho conta
        </Link>
      </div>
    </main>
  );
}

export default Criar;