import React from 'react';

export default function Ingredient(props) {
  const { ingredient, index } = props;

  return (
    <li className="ingredient" key={index}>
      <div className="ingredient-image">
        <img src="#" alt={ingredient} />
      </div>
      <p>{ingredient}</p>
    </li>
  );
}