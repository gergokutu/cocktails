import React, { Component } from 'react';
import CocktailsImages from './CocktailsImages';

export default class CocktailsImagesContainer extends Component {
  state = {
    cocktails: [] 
  };

  componentDidMount() {
    const { categoryName } = this.props.match.params;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`)
      .then(response => response.json())
      .then(data => this.updateCocktails(data.drinks))
      .catch(console.error);
  };

  updateCocktails = cocktailsToUpdate => this.setState({ cocktails: cocktailsToUpdate });

  render() {
    return (
      <CocktailsImages cocktails={this.state.cocktails} />
    );
  }
}