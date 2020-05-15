import React from 'react';
import '../styles/Ingredient.css';

export default function Ingredient(props) {
  const { ingredient } = props;

  return (
    <div className="ingredient">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}-Small.png`}
        alt={ingredient}
      />
      <p>{ingredient}</p>
    </div>
  );
}