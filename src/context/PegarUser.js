import { useUser } from 'context/UserContext';

function PegarUser() {
  const { username } = useUser();
  return username;
}

export default PegarUser;
