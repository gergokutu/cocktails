import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CocktailsList extends Component {
  static propTypes = {
    cocktailCategories: PropTypes.array.isRequired
  };

  render() {
    const { cocktailCategories } = this.props;

    return (
      <div className="cocktail-categories">
        <h2>Cocktail Categories</h2>
        <ul className="category-list">
          { !cocktailCategories.length && "Loading..."}
          { cocktailCategories && 
            cocktailCategories.map(category => <li key={category.strCategory}>{category.strCategory}</li>)
          }
        </ul>
      </div>
    );
  }
}

