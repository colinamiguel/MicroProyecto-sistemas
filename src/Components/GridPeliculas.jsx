
import { useEffect, useState } from 'react';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";
import {useNavigate} from 'react-router-dom'
import { request } from '../utils/httpClient';
import Nav from './nav';

export function GridPeliculas(){


    const [movies, setMovies]= useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        request("/discover/movie")
        .then((data) => {
            setMovies(data.results);
        });
    },[]);

    const handleSeeMore = async () => {
        navigate('/all')
    }


    return (
        <><Nav />
        <ul className={styles.gridPeliculas}>
            {movies.slice(0, 8).map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </ul>
        <button onClick={handleSeeMore} className={styles.button}>See More</button>
        </>
        
    );
}