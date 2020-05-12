import React from 'react';

export default function Ingredient(props) {
  const { ingredient } = props;

  return (
    <li className="ingredient">
      <div className="ingredient-image">
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}-Small.png`}
          alt={ingredient}
        />
      </div>
      <p>{ingredient}</p>
    </li>
  );
}