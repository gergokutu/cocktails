import React, { Component } from 'react';
import CocktailsList from './CocktailsList';

export default class CocktailsListContainer extends Component {
  render() {
    return (
      <CocktailsList cocktailCategories={[ "category 1", "category 2", "category 3" ]} />
    );
  }
}