import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import { ImSearch } from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';



export default function Search() {

    const query = useQuery();
    const search = query.get('search');

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setSearchText(search || '');
    }, [search]);

    useEffect(() => {
        setSearchText(search);
    }, [search]);

    const handleSubmit =(e) =>{
        e.preventDefault();
        navigate('/?search=' + searchText);
    }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input placeholder='Pelicula' className={styles.searchInput} type='text' 
                    value={searchText} onChange={(e) => setSearchText(e.target.value)}>
            </input>
            <button className={styles.searchButton} type='submit'>
                <ImSearch size={25}/>
            </button>
        </div>
    </form>
  )
}
