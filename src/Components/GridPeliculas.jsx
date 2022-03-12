
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import { request } from '../utils/httpClient';

export function GridPeliculas(){


    const [movies, setMovies]= useState([]);


    useEffect(() => {
        request("/discover/movie")
        .then((data) => {
            setMovies(data.results);
        });
    },[]);


    return (
        <ul className={styles.gridPeliculas}>
            {movies.map((movie) => 
            <MovieCard key={movie.id} movie={movie}/>)}
          
        </ul>
    );
}