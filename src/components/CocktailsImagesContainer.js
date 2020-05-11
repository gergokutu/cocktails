import React, { Component } from 'react';
import CocktailsImages from './CocktailsImages';

export default class CocktailsImagesContainer extends Component {
  state = {
    cocktails: [] 
  };

  render() {
    return (
      <CocktailsImages cocktails={this.state.cocktails} />
    );
  }
}