// import { useState, useEffect } from 'react';
// import { Loader } from 'components/Loader/Loader';
import css from './Shops.module.css';

function Shops() {
  //   const [trendingMovies, setTrendingMovies] = useState([]);
  //   const [status, setStatus] = useState('idle');

  //   useEffect(() => {
  //     async function takeFilms() {
  //       setStatus('loading');

  //       try {
  //         const response = await trendingMovieFetch();
  //         setTrendingMovies([...response]);
  //         setStatus('fulfilled');
  //       } catch (error) {
  //         setStatus('rejected');
  //         throw new Error(error.message);
  //       }
  //     }
  //     takeFilms();
  //   }, []);

  return (
    <div className={css.shopsWrapp}>
      {/* {status === 'loading' && <Loader />} */}
      <h1 className={css.shopsTitle}>Shops:</h1>
      <ul className={css.shopsList}>
        <li className={css.shopsItem}>
          <button className={css.shopsItemBtn}> Mc Dony</button>
        </li>
        <li className={css.shopsItem}>
          <button className={css.shopsItemBtn}> CFK</button>
        </li>
        <li className={css.shopsItem}>
          <button className={css.shopsItemBtn}> etc...</button>
        </li>
        <li className={css.shopsItem}>
          <button className={css.shopsItemBtn}> etc...</button>
        </li>
        <li className={css.shopsItem}>
          <button className={css.shopsItemBtn}> etc...</button>
        </li>
      </ul>
    </div>
  );
}
export default Shops;
