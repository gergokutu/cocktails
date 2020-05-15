import React from 'react';
import { Link } from 'react-router-dom';
import Ingredient from './Ingredient';
import '../styles/CocktailDetails.css';

export default function CocktailDetails(props) {
  const { 
    idDrink,
    strDrink,
    strDrinkThumb,
    strInstructions,
    strCategory } = props.cocktail !== null && props.cocktail[0];
  
  const { ingredients } = props;
  
  return (
    <div className="cocktail-details">
      <h2>{strDrink}</h2>
      
      <img src={strDrinkThumb} alt={strDrink}/>
      
      <p className="instructions">{strInstructions}</p>

      <div className="ingredients">
        <h3>Ingredients:</h3>

        <ul>
          { ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient} key={idDrink} />))
          }
        </ul>
      </div>

      <div className="category-link">
          <Link to={`/categories/${strCategory}`}>Go back to the category</Link>
      </div>

      <div className="back-link">
          <Link to="/#cat">Go back to the index</Link>
      </div>
    </div>
  );
}