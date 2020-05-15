import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CocktailsList.css';

export default class CocktailsList extends Component {
  static propTypes = {
    cocktailCategories: PropTypes.array.isRequired
  };

  renderCategory = (category) => {
    const { strCategory } = category;
    
    return (
      <div key={strCategory}>
        <Link to={`/categories/${strCategory}`}>
          {strCategory}
        </Link>
      </div>
    );
  };

  render() {
    const { cocktailCategories } = this.props;

    return (
      <div className="container">
        <h2>Cocktail Categories</h2>
        <div className="category-list">
          { !cocktailCategories.length && "Loading..."}
          { cocktailCategories.length && 
            cocktailCategories.map(this.renderCategory)
          }
        </div>
        <footer>FOOTER</footer>
      </div>
    );
  }
}

