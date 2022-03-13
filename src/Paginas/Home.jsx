import React from 'react';
import { GridPeliculas } from '../Components/GridPeliculas';

// authContext
import { useAuth } from '../context/authContext';


export default function Home() {
  return (
    <div>
      <GridPeliculas />
    </div>
  )
}
