import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../styles/header.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  firstTwelveDrinks, allDrinkCategories, firstTwelveDrinkCategories,
} from '../services/Apis';

function Drinks() {
  const [twelveDrinks, setTwelveDrinks] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [lastCategory, setLastCategory] = useState('');
  const { setTitle } = useContext(RecipesContext);
  const TWELVE = 12;
  const FIVE = 5;
  const setDrinks = async () => {
    setTwelveDrinks(await firstTwelveDrinks());
    setCategoryName(await allDrinkCategories());
  };
  useEffect(() => {
    setTitle('Drinks');
  }, []);

  useEffect(() => {
    setDrinks();
  }, []);

  const drinkButton = async ({ target: { name } }) => {
    setLastCategory(name);
    if (name === 'all'
     || name === lastCategory) return setTwelveDrinks(await firstTwelveDrinks());
    setTwelveDrinks(await firstTwelveDrinkCategories(name));
  };

  return (
    <>
      <div className="container_drinks">
        <Header />
        <div>
          {categoryName.slice(0, FIVE).map(({ strCategory }) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              name={ strCategory }
              key={ strCategory }
              onClick={ drinkButton }
            >
              {strCategory}
            </button>
          ))}
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ drinkButton }
            name="all"
          >
            All
          </button>
        </div>
        {twelveDrinks.slice(0, TWELVE).map((
          { strDrink, strDrinkThumb, idMeal },
          index,
        ) => (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strDrink}</p>
          </div>
        ))}
      </div>

      {twelveDrinks.slice(0, TWELVE).map(({
        strDrink, strDrinkThumb, idDrink,
      }, index) => (
        <Link to={ `/drinks/${idDrink}` } key={ idDrink }>
          <div data-testid={ `${index}-recipe-card` }>
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strDrink}</p>
          </div>
        </Link>
      ))}
    </div>
      <Footer data-testid="footer" />
    </>

  );
}

export default Drinks;
