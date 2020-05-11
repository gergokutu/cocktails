import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CocktailsImages extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="category">
        <h2>Cocktails of the chosen category:</h2>
        <div className="category-images">
          <img src="#" alt="Cocktail" />
          <img src="#" alt="Cocktail" />
          <img src="#" alt="Cocktail" />
        </div>
        <div className="back-link">
          <Link to="/">Go back to the index.</Link>
        </div>
      </div>
    );
  }
}