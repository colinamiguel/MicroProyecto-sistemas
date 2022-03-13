import { GridPeliculas } from "./Components/GridPeliculas";
import styles from './Components/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MovieDetails from "./Paginas/MovieDetails";
import Home from './Paginas/Home';
import Login from './Components/login';
import Register from './Components/register';
// Providers
import {AuthProvider, useAuth} from './context/authContext'
import Nav from "./Components/nav";


export function App(){
    return(   
    <AuthProvider>

        <Router>
            <header>
                <Link to='/'>
                    <h1 className={styles.title}>Metro movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route exact path="/movies/:movieId" element={<MovieDetails />}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>

        </Router>
    </AuthProvider> 
)}