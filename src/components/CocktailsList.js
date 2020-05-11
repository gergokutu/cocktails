import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CocktailsList extends Component {
  static propTypes = {
    cocktailCategories: PropTypes.array.isRequired
  };

  renderCategory = (category) => {
    const { strCategory } = category;
    
    return (
      <li key={strCategory}>
        <Link to={`/categories/${strCategory}`}>{strCategory}</Link>
      </li>
    );
  };

  render() {
    const { cocktailCategories } = this.props;

    return (
      <div className="cocktail-categories">
        <h2>Cocktail Categories</h2>
        <ul className="category-list">
          { !cocktailCategories.length && "Loading..."}
          { cocktailCategories.length && 
            cocktailCategories.map(this.renderCategory)
          }
        </ul>
      </div>
    );
  }
}

