import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CocktailsList extends Component {
  static propTypes = {
    cocktailCategories: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="cocktail-category-list">
        <h2>Cocktail Categories</h2>
        <ul>
          <li>Cocktail 1</li>
          <li>Cocktail 1</li>
          <li>Cocktail 1</li>
        </ul>
      </div>
    );
  }
}

