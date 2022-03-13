
// authContext
import { useAuth } from '../context/authContext';

// Router
import {Link} from 'react-router-dom';



export default function Nav() {

  const {logout} = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <><Link to="/">Home</Link><Link to="/movies">Peliculas</Link><button onClick={handleLogout}>Log out</button></>
  );
}
