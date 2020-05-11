import React, { Component } from 'react';
import CocktailsList from './CocktailsList';

export default class CocktailsListContainer extends Component {
  state = {
    categories: [ "category 1", "category 2", "category 3" ]
  };

  render() {
    return (
      <CocktailsList cocktailCategories={this.state.categories} />
    );
  }
}