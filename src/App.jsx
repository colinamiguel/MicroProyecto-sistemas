import { GridPeliculas } from "./Components/GridPeliculas";
import styles from './Components/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MovieDetails from "./Paginas/MovieDetails";
import Home from './Paginas/Home';

export function App(){
    return(    
    <Router>
        <header>
            <Link to='/'>
                <h1 className={styles.title}>Metro movies</h1>
            </Link>
        </header>

        <Link to="/">Home</Link>
        <Link to ="/movies">Peliculas</Link>
        <main>
            <Routes>
                <Route exact path="/movies/:movieId" element={<MovieDetails />}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </main>

    </Router>
)}