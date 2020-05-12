import React from 'react';
import { Link } from 'react-router-dom';

export default function CocktailDetails(props) {
  const { 
    idDrink,
    strDrink,
    strDrinkThumb,
    strInstructions } = props.cocktail !== null && props.cocktail[0];
  
  const { ingredients } = props;
  
  return (
    <div className="cocktail-details">
      <h2>{strDrink}</h2>
      
      <div className="cocktail-image">
        <img src={strDrinkThumb} alt={strDrink}/>
      </div>

      <p className="instructions">{strInstructions}</p>

      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          { ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>))
          }
        </ul>
      </div>

      <div className="back-link">
          <Link to="/">Go back to the index.</Link>
      </div>
    </div>
  );
}