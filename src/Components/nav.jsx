
// authContext
import { useAuth } from '../context/authContext';

// Router
import {Link} from 'react-router-dom';



export default function Nav() {
  return (
    <><Link to="/">Home</Link><Link to="/movies">Peliculas</Link><button>Log out</button></>
  );
}
