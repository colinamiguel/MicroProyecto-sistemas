
import { useEffect, useState } from 'react';
import styles from './GridPeliculas.module.css'
import { MovieCard } from "./MovieCard";
import {useNavigate, useLocation} from 'react-router-dom'
import { request } from '../utils/httpClient';
import Nav from './nav';
import Spinner from './Spinner';
import Search from '../Components/Search';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export function GridPeliculas(){


    const [movies, setMovies]= useState([]);
    const [loading, setLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const searchUrl = search ? '/search/movie?query=' + search : '/discover/movie';
        request(searchUrl)
        .then((data) => {
            setMovies(data.results);
            setLoading(false);
        });
    },[search]);

    if(loading){
        return(
            <Spinner />
        )
    }

    const handleSeeMore = async () => {
        navigate('/all')
    }


    return (
        <><Nav /><Search />
        <ul className={styles.gridPeliculas}>
            {movies.slice(0, 8).map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </ul>
        <button onClick={handleSeeMore} className={styles.button}>See More</button>
        </>
        
    );
}