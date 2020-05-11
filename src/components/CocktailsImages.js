import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CocktailsImages extends Component {
  static propTypes = {
    cocktails: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
  };

  renderCocktail = (cocktail) => {
    const { idDrink, strDrink, strDrinkThumb } = cocktail;

    return (
      <div key={idDrink}>
        <img src={`${strDrinkThumb}/preview`} alt="Cocktail" />
        <p>{strDrink}</p>
      </div>
    );
  };

  render() {
    const { cocktails, category } = this.props;

    return (
      <div className="category">
        <h2>Cocktails of the {category} category:</h2>
        <div className="back-link">
          <Link to="/">Go back to the index.</Link>
        </div>
        <div className="category-images">
          { !cocktails.length && "Loading..." }
          { cocktails.length && cocktails.map(this.renderCocktail)}
        </div>
      </div>
    );
  }
}