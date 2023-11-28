import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './login.css';
import Logo from './scored_Delivery_1-removebg-preview 1.png';

function Login() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { setUser } = useUser(); 
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios/login', {
        username,
        senha,
      });

      if (response.status === 200) {
        setMensagem('Login bem-sucedido!');
        setUser(username);
        localStorage.setItem('username', username);
        navigate('/jogos');
      } else {
        setMensagem(response.data.error || 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMensagem('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <main>
      <div className="janela">
        <img src={Logo} alt="Logo"></img>
        <h2>FAÇA LOGIN</h2>
        <input
          id="username"
          placeholder="USERNAME"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          id="senha"
          placeholder="SENHA"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        ></input>
        <button className="botao_env" onClick={fazerLogin}>
          ENVIAR
        </button>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <Link className="linkconta" to="/criar">
          Ainda não tenho conta
        </Link>

        <br />
      </div>
    </main>
  );
}

export default Login;