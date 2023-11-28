import { useUser } from 'context/UserContext';

function PegarUser() {
  const { username } = useUser();

  return username; // Retorna apenas o nome de usuário
}


export default PegarUser;