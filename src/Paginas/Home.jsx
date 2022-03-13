import React from 'react';
import { GridPeliculas } from '../Components/GridPeliculas';
import Search from '../Components/Search';

// authContext
import { useAuth } from '../context/authContext';


export default function Home() {
  return (
    <div>
      <Search />
      <GridPeliculas />
    </div>
  )
}
