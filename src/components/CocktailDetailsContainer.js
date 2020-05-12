import React, { Component } from 'react';
import CocktailDetails from './CocktailDetails';

export default class CocktailDetailsContainer extends Component {
  state = {
    cocktail: null
  };

  render() {
    return (
      <CocktailDetails />
    );
  }
}