
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";

import { request } from '../utils/httpClient';
import Nav from './nav';

export function GridPeliculas(){


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
            {movies.slice(0, 8).map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </ul></>
    );
}