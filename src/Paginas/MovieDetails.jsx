import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movie from '../Components/movie.json';
import styles from './MovieDetails.module.css';
import { request } from '../utils/httpClient';

export default function MovieDetails() {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        request("/movie/" + movieId).then(data => {
            setMovie(data)
        })
    }, [movieId])

    if(!movie){
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
        <img className= {styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title}></img>
        <div className={styles.col + " " + styles.MovieDetails}>
            <p className={styles.firstItem}> <strong>Title:</strong> {movie.title}</p>
            <p> <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(', ')}</p>
            <p> <strong>Description: </strong> {movie.overview}</p>
        </div>
    </div>
  )
}
