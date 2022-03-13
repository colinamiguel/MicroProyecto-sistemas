
// authContext
import { useAuth } from '../context/authContext';

// Router
import {Link, useNavigate} from 'react-router-dom';



export default function Nav() {

  const {logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <><Link to="/">Home</Link><Link to="/movies">Peliculas</Link><button onClick={handleLogout}>Log out</button></>
  );
}
