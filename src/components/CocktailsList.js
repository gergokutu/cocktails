import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CocktailsList extends Component {
  static propTypes = {
    cocktailCategories: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="cocktail-category-list">
        <h2>Cocktail Categories</h2>
        <ul>
          <li>{this.props.cocktailCategories[0]}</li>
          <li>{this.props.cocktailCategories[1]}</li>
          <li>{this.props.cocktailCategories[2]}</li>
        </ul>
      </div>
    );
  }
}

