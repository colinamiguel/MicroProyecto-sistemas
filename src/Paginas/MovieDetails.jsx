import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { request } from '../utils/httpClient';
import Nav from '../Components/nav';
import Spinner from '../Components/Spinner';

export default function MovieDetails() {

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        request("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data)
        })
    }, [movieId]);

    if(isLoading){
        return(
            <Spinner />
        )
    }

    if(!movie){
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <><Nav /><div className={styles.detailsContainer}>
          <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title}></img>
          <div className={styles.col + " " + styles.MovieDetails}>
              <p className={styles.firstItem}> <strong>Title:</strong> {movie.title}</p>
              <p> <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(', ')}</p>
              <p> <strong>Description: </strong> {movie.overview}</p>
              <p> <strong>Rating: </strong> {movie.vote_average} <span className={styles.imdb}>IMDb</span></p>
          </div>
      </div></>
  )
}
