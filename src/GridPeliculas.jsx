
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";
import movies from "./movies.json"

export function GridPeliculas(){
    return (
        <ul className={styles.gridPeliculas}>
            {movies.map((movie) => 
            <MovieCard key={movie.id} movie={movie}/>)}
          
        </ul>
    );
}