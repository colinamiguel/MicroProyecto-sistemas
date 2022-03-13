
import { Link } from "react-router-dom";
import { GridPeliculas } from "./GridPeliculas";
import styles from "./MovieCard.module.css";

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
    <Link to={"/movies/" + movie.id}>
        <li className={styles.movieCard}>
            <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title}/>
            <p className={styles.movieTitle}>{movie.title}</p>
        </li>
    </Link>
)};