// import { useState, useEffect } from 'react';
// import { Loader } from 'components/Loader/Loader';

import Shops from 'components/Shops/Shops';
import css from './ShopPage.module.css';
import Menu from 'components/Menu/Menu';

function ShopPage() {
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
      <Shops className={css.shop} />
      <Menu className={css.menu} />
    </div>
  );
}
export default ShopPage;
