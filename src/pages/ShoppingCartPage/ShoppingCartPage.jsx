// import { useState, useEffect } from 'react';
// import { Loader } from 'components/Loader/Loader';
import css from './ShoppingCartPage.module.css';

function ShoppingCartPage() {
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
    <div className={css.shopPage}>
      {/* {status === 'loading' && <Loader />} */}
      <h1 className={css.shopPageTitle}>Shopping cart page</h1>
    </div>
  );
}
export default ShoppingCartPage;
