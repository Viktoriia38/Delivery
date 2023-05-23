// import { useState, useEffect } from 'react';
// import { Loader } from 'components/Loader/Loader';
import Burger from '../../images/burger.jpg';
import Pizza from '../../images/pizza.jpg';
import Nuggets from '../../images/nuggets.jpg';
import Cola from '../../images/coca.jpg';
import Coffee from '../../images/coffee.jpg';
import Tea from '../../images/tea.jpg';
import css from './Menu.module.css';

function Menu() {
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
    <div className={css.menuWrapp}>
      {/* {status === 'loading' && <Loader />} */}
      <h1 className={css.menuTitle}>Menu</h1>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <div className={css.menuItemImageWrapper}>
            <img className={css.menuItemImage} src={Burger} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>Big Big Burger</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
        <li className={css.menuItem}>
          {' '}
          <div className={css.menuItemImageWrapper}>
            {' '}
            <img className={css.menuItemImage} src={Nuggets} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>Nuggets</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
        <li className={css.menuItem}>
          {' '}
          <div className={css.menuItemImageWrapper}>
            {' '}
            <img className={css.menuItemImage} src={Pizza} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>Pizza</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
        <li className={css.menuItem}>
          {' '}
          <div className={css.menuItemImageWrapper}>
            {' '}
            <img className={css.menuItemImage} src={Cola} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>CocaCola</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
        <li className={css.menuItem}>
          {' '}
          <div className={css.menuItemImageWrapper}>
            <img className={css.menuItemImage} src={Tea} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>Tea</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
        <li className={css.menuItem}>
          {' '}
          <div className={css.menuItemImageWrapper}>
            {' '}
            <img className={css.menuItemImage} src={Coffee} alt="" />
            <p className={css.MenuItemText}>Calories</p>
          </div>
          <h3 className={css.menuItemTitle}>Coffee</h3>
          <button className={css.menuItemBtn}>add to Cart</button>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
