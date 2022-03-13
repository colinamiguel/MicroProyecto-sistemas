import { useEffect, useState } from 'react';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";

import { request } from '../utils/httpClient';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';
import Search from '../Components/Search';

export function AllMovies(){

    const [page, setPage] = useState(1)

    const [movies, setMovies]= useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        request("/discover/movie?page=" + String(page))
        .then((data) => {
            setMovies(data.results);
        });
    },[page]);

    

    const handlePreviusPage = () => {
        if (page > 1){
            setPage(page - 1)
        }
    }
    const handleNextPage = () => {
        setPage(page + 1)
        
    }

    return (
        <>
            <Nav /> <Search />
            <ul className={styles.gridPeliculas}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </ul>
            <div className={styles.pagination}>
                <button onClick={handlePreviusPage} className={styles.halfButton}>Prev</button>
                <button onClick={handleNextPage} className={styles.halfButton}>Next</button>
            </div>
        </>
    );
}