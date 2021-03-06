import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CocktailsImages.css';

export default class CocktailsImages extends Component {
  static propTypes = {
    cocktails: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
  };

  renderCocktail = (cocktail) => {
    const { idDrink, strDrink, strDrinkThumb } = cocktail;

    return (
      <Link key={idDrink} to={`/cocktails/${idDrink}`}>
        <img src={`${strDrinkThumb}/preview`} alt="Cocktail" />
        <p>{strDrink}</p>
      </Link>
    );
  };

  render() {
    const { cocktails, category } = this.props;

    return (
      <div className="category">
        <h2>'{category}s'</h2>

        <div className="category-images">
          { !cocktails.length && "Loading..." }
          { cocktails.length !== 0 && cocktails.map(this.renderCocktail)}
        </div>
      </div>
    );
  }
}