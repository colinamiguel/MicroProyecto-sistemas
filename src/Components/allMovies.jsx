import { useEffect, useState } from 'react';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";

import { request } from '../utils/httpClient';
import Nav from './nav';

export function AllMovies(){


    const [movies, setMovies]= useState([]);


    useEffect(() => {
        request("/discover/movie")
        .then((data) => {
            setMovies(data.results);
        });
    },[]);


    return (
        <><Nav />
        <ul className={styles.gridPeliculas}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </ul></>
    );
}