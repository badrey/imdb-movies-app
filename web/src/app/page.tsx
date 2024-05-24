'use client';

// src/pages/index.tsx
import {useEffect, useState} from 'react';
import styles from './Home.module.css';
import {MovieData} from '../../../src/api/movies/types';
import {Api} from '../../../src/api';

const Home = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const results = await Api.movies.getRandomMovies();
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Random Movies</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.ul}>
            {movies.map(movie => (
              <li className={styles.li} key={movie.id}>
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
export default Home;
