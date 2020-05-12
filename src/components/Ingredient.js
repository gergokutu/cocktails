import React from 'react';
import '../styles/Ingredient.css';

export default function Ingredient(props) {
  const { ingredient } = props;

  return (
    <li className="ingredient">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}-Medium.png`}
        alt={ingredient}
      />
      <p>{ingredient}</p>
    </li>
  );
}