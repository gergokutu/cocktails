import React, { Component } from 'react';
import CocktailsList from './CocktailsList';

export default class CocktailsListContainer extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(response => response.json())
      .then(data => this.updateCategories(data.drinks))
      .catch(console.error); 
  };

  updateCategories = categoriesToUpdate => this.setState({ categories: categoriesToUpdate }); 

  render() {
    return (
      <CocktailsList cocktailCategories={this.state.categories} />
    );
  }
}