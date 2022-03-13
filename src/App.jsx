import styles from './Components/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MovieDetails from "./Paginas/MovieDetails";
import Home from './Paginas/Home';
import Login from './Components/login';
import Register from './Components/register';
import {ProtectedRoute} from './Components/protectedRoute'

// Providers
import {AuthProvider} from './context/authContext'
import { AllMovies } from './Components/allMovies';


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
                    <Route path='/' element={
                        <ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/all' element={
                        <ProtectedRoute>
                            <AllMovies/>
                        </ProtectedRoute>
                    }/>
                    <Route exact path="/movies/:movieId" element={
                        <ProtectedRoute>
                            <MovieDetails />
                        </ProtectedRoute>
                    }/>
                    
                </Routes>
            </main>

        </Router>
    </AuthProvider> 
)}