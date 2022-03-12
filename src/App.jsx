import { GridPeliculas } from "./GridPeliculas"
import styles from './App.module.css'
export function App(){
    return <div>
        <header>
            <h1 className={styles.title}>Metro movies</h1>
        </header>
        <main>
           <GridPeliculas></GridPeliculas>
        </main>

    </div>
}